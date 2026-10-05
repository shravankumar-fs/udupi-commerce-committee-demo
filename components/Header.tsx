"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLang, T } from "./lang";
import { Logo } from "./Logo";

const NAV = [
  { href: "/about/", en: "About", kn: "ನಮ್ಮ ಬಗ್ಗೆ" },
  { href: "/members/", en: "Member Directory", kn: "ಸದಸ್ಯರ ಡೈರೆಕ್ಟರಿ" },
  { href: "/events/", en: "Events", kn: "ಕಾರ್ಯಕ್ರಮಗಳು" },
  { href: "/news/", en: "News & Circulars", kn: "ಸುದ್ದಿ ಮತ್ತು ಸುತ್ತೋಲೆ" },
  { href: "/gallery/", en: "Gallery", kn: "ಗ್ಯಾಲರಿ" },
  { href: "/contact/", en: "Contact", kn: "ಸಂಪರ್ಕ" },
];

export function Header() {
  const path = usePathname();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><T en="Chamber Tower, Indrali, Udupi · Mon–Sat 10am–5:30pm" kn="ಚೇಂಬರ್ ಟವರ್, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ · ಸೋಮ–ಶನಿ 10–5:30" /></span>
          <div className="lang-switch" role="group" aria-label="Language">
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>English</button>
            <button className={lang === "kn" ? "on" : ""} onClick={() => setLang("kn")}>ಕನ್ನಡ</button>
          </div>
        </div>
      </div>
      <div className="container nav-row">
        <Link href="/" className="brand" aria-label="Home">
          <Logo />
          <span className="brand-text">
            <strong><T en="Udupi Chamber" kn="ಉಡುಪಿ ಚೇಂಬರ್" /></strong>
            <small><T en="of Commerce &amp; Industry · Since 2003" kn="ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿ · 2003ರಿಂದ" /></small>
          </span>
        </Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={path?.startsWith(n.href) ? "active" : ""}>
              {lang === "kn" ? n.kn : n.en}
            </Link>
          ))}
          <Link href="/join/" className="btn btn-green nav-cta"><T en="Become a Member" kn="ಸದಸ್ಯರಾಗಿ" /></Link>
        </nav>
        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
