"use client";

import { useEffect, useState } from "react";
import { useSite } from "./site-provider";
import { copy } from "@/utils/data/site-copy";

const logoFiles = {
  JavaScript: "javascript.svg", React: "react.svg", "Next.js": "nextjs.svg", "Node.js": "nodejs.svg",
  "C++": "cplusplus.svg", Python: "python.svg", Linux: "linux.svg", Docker: "docker.svg",
  "C#": "csharp.svg", WPF: "dotnet.svg", ".NET": "dotnet.svg", PHP: "php.svg", MySQL: "mysql.svg",
  PostgreSQL: "postgresql.svg", MongoDB: "mongodb.svg", "HTML/CSS": "html5.svg",
};

const interfaceCopy = {
  fr: { details: "Voir l’étude de cas", close: "Fermer", challenge: "Le défi", solution: "La réponse", highlights: "Points clés", stack: "Technologies", source: "Voir le dépôt GitHub", visit: "Visiter le site", verified: "Données issues du dépôt public", private: "Projet privé présenté sans exposer le code", visual: "Source du visuel" },
  en: { details: "View case study", close: "Close", challenge: "The challenge", solution: "The response", highlights: "Key points", stack: "Technology", source: "View GitHub repository", visit: "Visit website", verified: "Information from the public repository", private: "Private project presented without exposing source code", visual: "Visual source" },
  ar: { details: "عرض دراسة المشروع", close: "إغلاق", challenge: "التحدي", solution: "الحل", highlights: "النقاط الرئيسية", stack: "التقنيات", source: "عرض مستودع GitHub", visit: "زيارة الموقع", verified: "معلومات من المستودع العام", private: "مشروع خاص مع عرض يحمي الشفرة المصدرية", visual: "مصدر الصورة" },
};

function ToolLogo({ tool }) {
  const file = logoFiles[tool];
  return <span className="tech-logo">{file ? <img src={`/tech/${file}`} alt="" /> : <span className="tech-monogram" aria-hidden="true">{tool.slice(0, 2).toUpperCase()}</span>}<b>{tool}</b></span>;
}

export default function ProjectGrid() {
  const { locale } = useSite();
  const projects = copy[locale].projects;
  const ui = interfaceCopy[locale];
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const close = event => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    document.body.classList.toggle("modal-open", Boolean(selected));
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [selected]);

  return <>
    <div className="archive-grid">
      {projects.map((project, index) => <button type="button" className={`archive-card project-click ${project.accent}`} key={project.slug} onClick={() => setSelected(project)}>
        <div className="archive-top"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.year}</span></div>
        {project.cover && <span className={`archive-visual ${project.coverFit === "contain" ? "is-contain" : ""}`} aria-hidden="true"><img src={project.cover} alt="" /></span>}
        <p>{project.category}</p><h2>{project.name}</h2><p className="archive-description">{project.description}</p>
        <div className="tag-row">{project.tools.slice(0, 4).map(tool => <span key={tool}>{tool}</span>)}</div>
        <div className="archive-footer"><b>{project.status}</b><span>{ui.details} +</span></div>
      </button>)}
    </div>
    {selected && <div className="project-detail-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && setSelected(null)}>
      <article className="project-detail project-case-study" role="dialog" aria-modal="true" aria-labelledby="project-detail-title">
        <button type="button" className="project-detail-close" onClick={() => setSelected(null)} aria-label={ui.close}><span aria-hidden="true">×</span></button>
        <header className={`case-study-hero ${selected.accent}`}>
          <div className="case-study-copy"><p className="section-index">{selected.category} · {selected.year}</p><h2 id="project-detail-title">{selected.name}</h2><p>{selected.description}</p><span className="repository-proof">● {selected.private ? ui.private : ui.verified}</span></div>
          <figure className={`case-study-media ${selected.coverFit === "contain" ? "is-contain" : ""}`}>{selected.cover ? <img src={selected.cover} alt={`Visuel pour ${selected.name}`} /> : <div className="project-symbol">{selected.name.slice(0, 2)}</div>}{selected.visualCredit && <figcaption>{ui.visual}: {selected.visualCreditUrl ? <a href={selected.visualCreditUrl} target="_blank" rel="noreferrer">{selected.visualCredit}</a> : selected.visualCredit}</figcaption>}</figure>
        </header>
        <div className="case-study-body">
          <section><span>01</span><h3>{ui.challenge}</h3><p>{selected.challenge}</p></section>
          <section><span>02</span><h3>{ui.solution}</h3><p>{selected.solution}</p></section>
          <section className="case-highlights"><span>03</span><h3>{ui.highlights}</h3><ul>{selected.highlights?.map(item => <li key={item}>{item}</li>)}</ul></section>
          <section className="case-stack"><span>04</span><h3>{ui.stack}</h3><div className="logo-row">{selected.tools.map(tool => <ToolLogo tool={tool} key={tool} />)}</div></section>
        </div>
        {(selected.href || selected.siteHref) && <footer className="case-study-footer"><div className="case-study-actions">{selected.siteHref && <a className="button button-primary" href={selected.siteHref} target="_blank" rel="noreferrer">{ui.visit} ↗</a>}{selected.href && <a className="button button-primary" href={selected.href} target="_blank" rel="noreferrer">{ui.source} ↗</a>}</div><span>{selected.status}</span></footer>}
      </article>
    </div>}
  </>;
}
