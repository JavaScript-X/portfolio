"use client";

import { useEffect, useState } from "react";
import { useSite } from "./site-provider";

const groups = [
  { logos: ["truenas"], tags: ["ZFS", "Snapshots", "ACL", "SMART", "Backups"] },
  { logos: ["docker", "portainer", "nginx-proxy-manager", "tailscale", "adguard-home", "immich", "stremio"], tags: ["Containers", "Reverse proxy", "DNS", "Media", "Remote access"] },
  { logos: ["tailscale", "adguard-home", "nginx-proxy-manager"], tags: ["DNS", "IPv4", "Wi-Fi", "VPN", "Monitoring"] },
  { logos: ["playstation"], tags: ["Repair", "Jailbreak", "Homebrew", "Firmware"] },
  { logos: [], tags: ["Diagnostics", "Components", "Microsoldering", "Restoration"] },
  { logos: ["docker", "truenas"], tags: ["Documentation", "Tests", "Automation", "Postmortems"] },
];

const ui = {
  fr: { open: "Ouvrir le dossier", close: "Fermer", practice: "Ce que je pratique", method: "Méthode", note: "Un environnement personnel réellement utilisé, documenté et amélioré après chaque incident. Les visuels restent publics afin de ne révéler aucune donnée privée.", photos: ["Interface de stockage ZimaOS, documentation officielle", "Applications auto-hébergées dans ZimaOS, documentation officielle", "Réseau et AdGuard Home dans ZimaOS, documentation officielle", "Atelier de diagnostic et de réparation de consoles", "Réparation et soudure en atelier, Blaz Erzetic sur Unsplash", "Documentation technique au travail, Surface sur Unsplash"] },
  en: { open: "Open details", close: "Close", practice: "What I practise", method: "Method", note: "A real personal environment that is used, documented and improved after every incident. Public visuals are used so no private data is exposed.", photos: ["ZimaOS storage interface, official documentation", "Self-hosted applications in ZimaOS, official documentation", "Network and AdGuard Home in ZimaOS, official documentation", "Console diagnostics and repair workshop", "Workshop repair and soldering, Blaz Erzetic on Unsplash", "Technical documentation at work, Surface on Unsplash"] },
  ar: { open: "فتح التفاصيل", close: "إغلاق", practice: "ما أطبقه", method: "المنهج", note: "بيئة شخصية حقيقية أستخدمها وأوثقها وأحسنها بعد كل مشكلة. أستخدم صورا عامة حتى لا تظهر أي بيانات خاصة.", photos: ["واجهة تخزين ZimaOS من الوثائق الرسمية", "تطبيقات مستضافة ذاتيا في ZimaOS من الوثائق الرسمية", "الشبكة وAdGuard Home في ZimaOS من الوثائق الرسمية", "ورشة تشخيص وإصلاح أجهزة الألعاب", "الإصلاح واللحام في الورشة، Blaz Erzetic على Unsplash", "التوثيق التقني أثناء العمل، Surface على Unsplash"] },
};

function LogoCluster({ logos }) {
  return <div className="service-logo-cluster">{logos.map(name => <span key={name}><img src={`/services/${name}.svg`} alt={name.replaceAll("-", " ")} /></span>)}</div>;
}

export default function HomelabGrid({ cards }) {
  const { locale } = useSite();
  const labels = ui[locale];
  const [selected, setSelected] = useState(null);
  const publicMedia = [
    { src: "/homelab/zimaos-storage.png", label: labels.photos[0], href: "https://github.com/IceWhaleTech/ZimaDocs" },
    { src: "/homelab/zimaos-services.png", label: labels.photos[1], href: "https://github.com/IceWhaleTech/ZimaDocs" },
    { src: "/homelab/network-security.webp", label: labels.photos[2], href: "https://github.com/IceWhaleTech/ZimaDocs" },
    { src: "/homelab/console-workshop.webp", label: labels.photos[3] },
    { src: "/homelab/electronics-repair.webp", label: labels.photos[4], href: "https://unsplash.com/photos/uM9Fz2eVhIM" },
    { src: "/homelab/learning-documentation.webp", label: labels.photos[5], href: "https://unsplash.com/photos/AdnD0rO1feg" },
  ];

  useEffect(() => {
    const close = event => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    document.body.classList.toggle("modal-open", Boolean(selected));
    return () => { window.removeEventListener("keydown", close); document.body.classList.remove("modal-open"); };
  }, [selected]);

  return <>
    <div className="homelab-page-grid">
      {cards.map((card, index) => <button type="button" className="homelab-card" key={card[0]} onClick={() => setSelected({ card, index })}>
        <div className="homelab-card-top"><span>{card[0]}</span><LogoCluster logos={groups[index].logos.slice(0, 3)} /></div>
        <span className="homelab-card-visual" aria-hidden="true"><img src={publicMedia[index].src} alt="" /></span>
        <h2>{card[1]}</h2><p>{card[2]}</p><small>{groups[index].tags.join(" · ")}</small><b>{labels.open} +</b>
      </button>)}
    </div>
    {selected && <div className="project-detail-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && setSelected(null)}>
      <article className="project-detail homelab-detail" role="dialog" aria-modal="true" aria-labelledby="homelab-detail-title">
        <button type="button" className="project-detail-close" onClick={() => setSelected(null)} aria-label={labels.close}>×</button>
        <div className="homelab-detail-layout">
          <div className="homelab-detail-copy"><p className="section-index">Homelab / {selected.card[0]}</p><h2 id="homelab-detail-title">{selected.card[1]}</h2><p>{selected.card[2]}</p><h3>{labels.practice}</h3><div className="homelab-detail-list">{groups[selected.index].tags.map(item => <span key={item}>{item}</span>)}</div><h3>{labels.method}</h3><p className="detail-note">{labels.note}</p><LogoCluster logos={groups[selected.index].logos} /></div>
          <figure className="homelab-detail-media">{publicMedia[selected.index] ? <><img src={publicMedia[selected.index].src} alt={publicMedia[selected.index].label} /><figcaption>{publicMedia[selected.index].href ? <a href={publicMedia[selected.index].href} target="_blank" rel="noreferrer">{publicMedia[selected.index].label} ↗</a> : publicMedia[selected.index].label}</figcaption></> : <div className="service-board"><LogoCluster logos={groups[selected.index].logos} /><span>{selected.card[1]}</span></div>}</figure>
        </div>
      </article>
    </div>}
  </>;
}
