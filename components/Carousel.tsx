"use client";
import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useLang } from "./lang";
import { WaveDivider } from "./Decor";

/** Horizontal scroll-snap carousel with arrows, dots and optional autoplay. Swipe works natively on phones. */
export function Carousel({ children, autoplay = 0, label }: { children: ReactNode; autoplay?: number; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = Children.count(children);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const n = Math.max(1, Math.ceil((el.scrollWidth - 4) / el.clientWidth));
    setPages(n);
    setPage(Math.min(n - 1, Math.round(el.scrollLeft / el.clientWidth)));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, count]);

  const go = useCallback((dir: number) => {
    const el = track.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir > 0 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!autoplay || paused) return;
    const t = setInterval(() => go(1), autoplay);
    return () => clearInterval(t);
  }, [autoplay, paused, go]);

  return (
    <div className="carousel" aria-roledescription="carousel" aria-label={label}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)}>
      <div className="carousel-track" ref={track} onScroll={measure}>
        {Children.map(children, (c, i) => <div className="carousel-item" key={i}>{c}</div>)}
      </div>
      <button className="carousel-btn prev" onClick={() => go(-1)} aria-label="Previous">‹</button>
      <button className="carousel-btn next" onClick={() => go(1)} aria-label="Next">›</button>
      {pages > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: pages }, (_, i) => (
            <button key={i} className={i === page ? "on" : ""} aria-label={`Go to slide ${i + 1}`}
              onClick={() => track.current?.scrollTo({ left: i * track.current.clientWidth, behavior: "smooth" })} />
          ))}
        </div>
      )}
    </div>
  );
}

/** Full-bleed crossfading background slideshow for the hero. */
export function HeroSlides({ slides }: { slides: { src: string; alt: string; caption: { en: string; kn: string }; credit: string }[] }) {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);
  return (
    <>
      <div className="hero-slides" data-parallax="0.08" aria-hidden="true">
        {slides.map((s, k) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={s.src} src={s.src} alt="" className={k === i ? "on" : ""} loading={k === 0 ? "eager" : "lazy"} />
        ))}
      </div>
      <WaveDivider />
      <div className="hero-caption">
        <span>📍 {slides[i].caption[lang]}</span>
        <span className="dots">
          {slides.map((s, k) => (
            <button key={s.src} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Show ${s.alt}`} />
          ))}
        </span>
        <small>{slides[i].credit}</small>
      </div>
    </>
  );
}
