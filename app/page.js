"use client";
import Image from "next/image";
import Link from "next/link";
import { useSite } from "./components/site-provider";
import { copy } from "@/utils/data/site-copy";

export default function Home() {
  const {locale}=useSite();const c=copy[locale];const projects=c.projects;
  return <>
    <section className="hero" id="top"><div className="hero-orbit" aria-hidden="true" /><div className="eyebrow"><span /> {c.home.eyebrow}</div><div className="hero-grid"><div><p className="hero-kicker">{c.home.kicker}<br />{c.home.school}</p><h1>{c.home.title}<br /><em>{c.home.accent}</em></h1><p className="hero-summary">{c.home.summary}</p><div className="hero-actions"><Link className="button button-primary" href="/projects">{c.home.cta} <span>↘</span></Link><Link className="text-link" href="/about">{c.home.about} →</Link></div></div><div className="portrait-wrap"><div className="portrait-frame"><Image src="/profile.png" alt="Tahar Chtioui" fill priority sizes="(max-width:900px) 72vw,34vw" /></div><div className="status-card"><span className="status-dot" /><div><small>CESI Nancy</small><strong>CESATEC<br/>JavaScript-X</strong></div></div></div></div></section>

    <section className="home-statement section"><p className="section-index">01 / 360°</p><h2>{c.home.statement}<br /><em>{c.home.statementAccent}</em></h2><div className="statement-links"><Link href="/journey">{c.nav[3]} ↗</Link><Link href="/community">{c.nav[4]} ↗</Link></div></section>

    <section className="work section"><div className="section-heading"><div><p className="section-index">02 / {c.home.featured}</p><h2>{c.home.made}<br /><em>{c.home.real}</em></h2></div></div><div className="project-list">{projects.slice(0,3).map((project,index)=><a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.slug}><span className="project-number">0{index+1}</span><div className="project-main"><p>{project.category} · {project.year}</p><h3>{project.name}</h3><span>{project.description}</span></div><div className="project-meta"><span>{project.tools.join(" · ")}</span><b>GitHub ↗</b></div></a>)}</div><Link className="all-work" href="/projects">{c.home.all} <span>→</span></Link></section>

    <section className="club-callout section"><div><p className="section-index">03 / {c.nav[4]}</p><span className="chess-mark">♞</span></div><div><h2>{c.home.club}<br /><em>{c.home.clubAccent}</em></h2><p>{c.home.clubText}</p><Link className="button button-primary" href="/community">{c.home.clubCta} <span>↗</span></Link></div></section>

    <section className="contact section"><p className="section-index">04 / {c.nav[5]}</p><div className="contact-grid"><div><h2>{c.home.contact}</h2></div><div className="contact-side"><p>{c.home.contactText}</p><Link className="button button-primary" href="/contact">{c.nav[5]} <span>↗</span></Link></div></div></section>
  </>;
}
