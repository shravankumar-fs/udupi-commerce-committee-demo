"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Bi } from "@/lib/data";

type Lang = "en" | "kn";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ucc-lang");
      if (saved === "kn" || saved === "en") setLangState(saved);
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("ucc-lang", l); } catch {}
  };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** Render a bilingual value object. */
export function L({ v }: { v: Bi }) {
  const { lang } = useLang();
  return <>{v[lang]}</>;
}

/** Inline bilingual string. */
export function T({ en, kn }: Bi) {
  const { lang } = useLang();
  return <>{lang === "kn" ? kn : en}</>;
}

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  kn: ["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"],
};

export function DateText({ iso, part }: { iso: string; part?: "day" | "month" }) {
  const { lang } = useLang();
  const [y, m, d] = iso.split("-").map(Number);
  const mon = MONTHS[lang][m - 1];
  if (part === "day") return <>{d}</>;
  if (part === "month") return <>{lang === "en" ? mon.toUpperCase() : mon}</>;
  return <>{`${d} ${mon} ${y}`}</>;
}
