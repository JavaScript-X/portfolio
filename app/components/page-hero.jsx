"use client";
import {useSite} from "./site-provider";
export default function PageHero({ index, eyebrow, title, accent, intro }) {
  const {locale}=useSite();const scroll={fr:"Défiler pour explorer",en:"Scroll to explore",ar:"مرر للاستكشاف"}[locale];
  return <section className="page-hero"><p className="section-index">{index} / {eyebrow}</p><div className="page-hero-grid"><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p></div><span className="scroll-cue">{scroll} ↓</span></section>;
}
