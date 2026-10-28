"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSite } from "./site-provider";

const routes = ["/", "/about", "/projects", "/homelab", "/journey", "/community", "/blog", "/contact"];
const labels = {
  fr: ["Accueil", "À propos", "Projets", "Homelab", "Parcours", "Communauté", "Notes", "Contact"],
  en: ["Home", "About", "Projects", "Homelab", "Journey", "Community", "Notes", "Contact"],
  ar: ["الرئيسية", "نبذة عني", "المشاريع", "المختبر المنزلي", "المسيرة", "المجتمع", "ملاحظات", "التواصل"],
};

const ui = {
  fr: { menu: "Menu", close: "Fermer", theme: "Changer de thème", languages: "Langues" },
  en: { menu: "Menu", close: "Close", theme: "Change theme", languages: "Languages" },
  ar: { menu: "القائمة", close: "إغلاق", theme: "تغيير المظهر", languages: "اللغات" },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, theme, toggleTheme } = useSite();
  const triggerRef = useRef(null);
  const nav = labels[locale];

  const closeMenu = () => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 40);
  };

  const handleThemeToggle = event => {
    const rect = event.currentTarget.getBoundingClientRect();
    document.documentElement.style.setProperty("--theme-x", `${rect.left + rect.width / 2}px`);
    document.documentElement.style.setProperty("--theme-y", `${rect.top + rect.height / 2}px`);
    document.documentElement.classList.remove("theme-wipe");
    void document.documentElement.offsetWidth;
    toggleTheme();
    document.documentElement.classList.add("theme-wipe");
    window.setTimeout(() => document.documentElement.classList.remove("theme-wipe"), 1250);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = event => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return <>
    <header className="nav-shell">
      <Link className="brand" href="/" aria-label="Tahar Chtioui, accueil">
        <span className="brand-image"><Image src="/brand-logo.png" alt="" fill sizes="52px" priority /></span>
        <small>Tahar Chtioui<br />Portfolio · 2026</small>
      </Link>
      <div className="site-controls">
        <div className="locale-switch" aria-label={ui[locale].languages}>
          {["fr", "en", "ar"].map(item => <button type="button" className={locale === item ? "active" : ""} onClick={() => setLocale(item)} aria-pressed={locale === item} key={item}>{item.toUpperCase()}</button>)}
        </div>
        <button type="button" className="theme-toggle" onClick={handleThemeToggle} aria-label={ui[locale].theme}><span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span></button>
        <button ref={triggerRef} type="button" className={`menu-trigger ${open ? "is-open" : ""}`} onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="site-menu"><span>{open ? ui[locale].close : ui[locale].menu}</span><i /><i /></button>
      </div>
    </header>
    <div id="site-menu" className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <button type="button" className="menu-close" onClick={closeMenu} aria-label={ui[locale].close}><span aria-hidden="true">×</span>{ui[locale].close}</button>
      <nav aria-label={ui[locale].menu}>
        {routes.map((href, index) => <Link className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} onClick={closeMenu} href={href} key={href} style={{ "--delay": `${index * 45}ms` }}><span>0{index + 1}</span>{nav[index]}<b aria-hidden="true">+</b></Link>)}
      </nav>
      <div className="menu-meta"><span>Engineering · Full stack · Security · Homelab</span><div><a href="https://github.com/JavaScript-X" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/tahar-chtioui/" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
    </div>
  </>;
}
