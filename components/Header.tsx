"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLang, T } from "./lang";
import { Logo } from "./Logo";

const NAV = [
  { href: "/about/", en: "About", kn: "ನಮ್ಮ ಬಗ್ಗೆ" },
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
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = () => document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header className="site-header" ref={ref}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><><span className="hide-sm"><T en="Chamber Tower, Indrali, Udupi · " kn="ಚೇಂಬರ್ ಟವರ್, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ · " /></span><a href="tel:8217800763" style={{ color: "inherit" }}>82178 00763</a></></span>
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
            <small><T en="of Commerce &amp; Industry · Since 1964" kn="ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿ · 1964ರಿಂದ" /></small>
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
