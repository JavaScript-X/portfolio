"use client";

import { useState } from "react";
import PageHero from "../components/page-hero";
import { useSite } from "../components/site-provider";

const text = {
  fr: { eyebrow:"Contact", title:"À vous de jouer.", accent:"Échangeons.", intro:"Une opportunité, un problème d’ingénierie, une plateforme atypique ou une curiosité technique partagée. Écrivez-moi.", body:"Je suis basé en France et disponible pour échanger autour du développement full stack, du DevOps, de la cybersécurité, des systèmes natifs et de l’open source.", name:"Nom", email:"E-mail", message:"Votre message", send:"Envoyer le message", sending:"Envoi en cours", success:"Votre message a bien été envoyé.", error:"L’envoi n’a pas abouti. Vous pouvez aussi utiliser l’adresse e-mail ci-dessus." },
  en: { eyebrow:"Contact", title:"Your move.", accent:"Let us talk.", intro:"A role, an engineering problem, an unusual platform or a shared technical curiosity. Send me a note.", body:"I am based in France and available for conversations around full-stack development, DevOps, cybersecurity, native systems and open source.", name:"Name", email:"Email", message:"Your message", send:"Send message", sending:"Sending", success:"Your message has been sent.", error:"The message could not be sent. You can also use the email address above." },
  ar: { eyebrow:"التواصل", title:"الدور لك.", accent:"لنتحدث.", intro:"فرصة أو مشكلة هندسية أو منصة غير معتادة أو فضول تقني مشترك. أرسل لي رسالة.", body:"أقيم في فرنسا ومتاح للنقاش حول التطوير المتكامل وDevOps والأمن السيبراني والأنظمة الأصلية والمصدر المفتوح.", name:"الاسم", email:"البريد الإلكتروني", message:"رسالتك", send:"إرسال الرسالة", sending:"جار الإرسال", success:"تم إرسال رسالتك بنجاح.", error:"تعذر إرسال الرسالة. يمكنك أيضا استخدام البريد الإلكتروني أعلاه." }
};

export default function Contact() {
  const { locale } = useSite();
  const c = text[locale];
  const [status, setStatus] = useState("idle");

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(payload) });
      if (!response.ok) throw new Error("send failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <>
    <PageHero index="05" eyebrow={c.eyebrow} title={c.title} accent={c.accent} intro={c.intro}/>
    <section className="contact-page section">
      <a className="email-display" href="mailto:contact@taharchtioui.com">contact@<br/>taharchtioui.com <span>↗</span></a>
      <div className="contact-details"><p>{c.body}</p><div><a href="https://www.linkedin.com/in/tahar-chtioui/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/JavaScript-X" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://dev.to/javascriptx" target="_blank" rel="noreferrer">DEV Community ↗</a></div></div>
      <form className="contact-form" onSubmit={submit}>
        <label><span>{c.name}</span><input name="name" autoComplete="name" required minLength="2" maxLength="80"/></label>
        <label><span>{c.email}</span><input name="email" type="email" autoComplete="email" required maxLength="160"/></label>
        <label className="contact-form-message"><span>{c.message}</span><textarea name="message" required minLength="10" maxLength="3000" rows="7"/></label>
        <button className="button button-primary" disabled={status === "sending"}>{status === "sending" ? c.sending : c.send}<span>↗</span></button>
        <p className={`form-status ${status}`} role="status" aria-live="polite">{status === "success" ? c.success : status === "error" ? c.error : ""}</p>
      </form>
    </section>
  </>;
}
