"use client";

import Link from "next/link";
import PageHero from "../components/page-hero";
import ProjectGrid from "../components/project-grid";
import { useSite } from "../components/site-provider";
const text={fr:["Projets","Des expériences devenues","réelles.","Open source, réalisations professionnelles et projets universitaires dans les systèmes natifs, le web, la sécurité et l’automatisation.","10 projets sélectionnés","Ouvrez chaque projet pour découvrir le défi, l’architecture, les choix techniques et les résultats."],en:["Projects","Experiments that became","real.","Open source work, professional delivery and university projects across native systems, web, security and automation.","10 selected projects","Open each project to explore its challenge, architecture, technical decisions and outcomes."],ar:["المشاريع","تجارب أصبحت","حقيقة.","أعمال مفتوحة المصدر ومشاريع احترافية وجامعية في الأنظمة الأصلية والويب والأمن والأتمتة.","10 مشاريع مختارة","افتح كل مشروع لاكتشاف التحدي والبنية والخيارات التقنية والنتائج."]};
export default function Projects() {
  const { locale } = useSite();
  const c = text[locale];
  const process = locale === "fr"
    ? ["Ma façon de construire", "Observer, prototyper, tester sur le terrain, documenter puis améliorer."]
    : locale === "en"
      ? ["How I build", "Observe, prototype, test in the real world, document and improve."]
      : ["طريقتي في البناء", "ألاحظ وأصمم نموذجا وأختبر في الواقع وأوثق ثم أحسن."];
  const homelabLink = locale === "fr"
    ? ["Voir mon infrastructure personnelle", "ZimaOS, TrueNAS, services auto-hébergés, réseau, consoles et réparation électronique ont maintenant leur propre page."]
    : locale === "en"
      ? ["Explore my personal infrastructure", "ZimaOS, TrueNAS, self-hosted services, networking, consoles and electronics repair now have a dedicated page."]
      : ["استكشف بنيتي التحتية الشخصية", "أصبح لدى ZimaOS وTrueNAS والخدمات المستضافة والشبكات وأجهزة الألعاب والإصلاح الإلكتروني صفحة كاملة."];

  return <>
    <PageHero index="02" eyebrow={c[0]} title={c[1]} accent={c[2]} intro={c[3]} />
    <section className="project-archive section"><div className="archive-intro"><p>{c[4]}</p><p>{c[5]}</p></div><ProjectGrid /></section>
    <section className="project-process section">
      <p className="section-index">04 / Process</p><div className="process-heading"><h2>{process[0]}</h2><p>{process[1]}</p></div>
      <div className="process-grid">
        <article><span>01</span><h3>{locale === "fr" ? "Cadrer" : locale === "en" ? "Frame" : "التحديد"}</h3><p>{locale === "fr" ? "Transformer une idée en problème clair et mesurable." : locale === "en" ? "Turn an idea into a clear, measurable problem." : "تحويل الفكرة إلى مشكلة واضحة قابلة للقياس."}</p></article>
        <article><span>02</span><h3>{locale === "fr" ? "Construire" : locale === "en" ? "Build" : "البناء"}</h3><p>{locale === "fr" ? "Choisir une architecture simple, lisible et évolutive." : locale === "en" ? "Choose an architecture that stays simple and evolvable." : "اختيار بنية بسيطة وواضحة وقابلة للتطور."}</p></article>
        <article><span>03</span><h3>{locale === "fr" ? "Vérifier" : locale === "en" ? "Verify" : "التحقق"}</h3><p>{locale === "fr" ? "Tester l’expérience, les performances et la sécurité." : locale === "en" ? "Test experience, performance and security boundaries." : "اختبار التجربة والأداء وحدود الأمن."}</p></article>
      </div>
    </section>
    <section className="homelab-bridge section"><div><p className="section-index">05 / Homelab</p><h2>{homelabLink[0]}</h2><p>{homelabLink[1]}</p></div><Link className="button button-primary" href="/homelab">Homelab ↗</Link></section>
  </>;
}
