"use client";
import { createContext, useContext, useEffect, useState } from "react";

const SiteContext=createContext(null);
export function SiteProvider({children}){
  const [locale,setLocaleState]=useState("fr"); const [theme,setThemeState]=useState("dark");
  useEffect(()=>{const savedLocale=localStorage.getItem("locale");const savedTheme=localStorage.getItem("theme");if(["fr","en","ar"].includes(savedLocale))setLocaleState(savedLocale);if(["light","dark"].includes(savedTheme))setThemeState(savedTheme)},[]);
  useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=locale==="ar"?"rtl":"ltr";document.documentElement.dataset.theme=theme},[locale,theme]);
  const setLocale=value=>{setLocaleState(value);localStorage.setItem("locale",value)};
  const toggleTheme=()=>setThemeState(current=>{const next=current==="dark"?"light":"dark";localStorage.setItem("theme",next);return next});
  return <SiteContext.Provider value={{locale,setLocale,theme,toggleTheme}}>{children}</SiteContext.Provider>;
}
export const useSite=()=>useContext(SiteContext);
