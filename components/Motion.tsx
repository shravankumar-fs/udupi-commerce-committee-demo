"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { createElement, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

// GSAP motion for the whole site: short fade-up reveals, staggered lists, hover lift and scroll parallax.
// Elements start hidden via `.js .gsap-hide` (class added by an inline script in the root layout) so there is no flash.
const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;
let registered = false;
const register = () => {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
};
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const SHOW = { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" };

/** Registers GSAP and adds scroll parallax to every `[data-parallax]` element (value = strength, e.g. 0.15). */
export function MotionProvider({ children }: { children: ReactNode }) {
  const path = usePathname();
  useEffect(() => {
    register();
    if (reduced()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1px)", () => {
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const k = parseFloat(el.dataset.parallax || "0.15");
        const host = el.parentElement || el;
        gsap.fromTo(el, { yPercent: -k * 100 }, {
          yPercent: k * 100, ease: "none",
          scrollTrigger: { trigger: host, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 400);
    return () => { window.removeEventListener("load", refresh); clearTimeout(t); mm.revert(); };
  }, [path]);
  return <>{children}</>;
}

/** Fades content up when it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "aside" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  useIso(() => {
    register();
    const el = ref.current;
    if (!el) return;
    if (reduced()) { gsap.set(el, { opacity: 1, y: 0 }); return; }
    const st = ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => { gsap.to(el, { ...SHOW, delay }); } });
    return () => st.kill();
  }, [delay]);
  return createElement(as, { ref, className: `gsap-hide ${className ?? ""}` }, children);
}

/** Container whose StaggerItem children appear one after another. */
export function Stagger({ children, className, gap = 0.07, onLoad = false }: { children: ReactNode; className?: string; gap?: number; onLoad?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useIso(() => {
    register();
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(":scope [data-stagger-item]"));
    if (reduced()) { gsap.set(items, { opacity: 1, y: 0 }); return; }
    const play = () => gsap.to(items, { ...SHOW, stagger: gap });
    if (onLoad) { play(); return; }
    const st = ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: play });
    return () => st.kill();
  }, [gap, onLoad]);
  return <div ref={ref} className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div data-stagger-item className={`gsap-hide ${className ?? ""}`}>{children}</div>;
}

/** Subtle lift on hover for cards. */
export function Lift({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const up = () => gsap.to(el, { y: -4, duration: 0.25, ease: "power2.out" });
    const down = () => gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" });
    el.addEventListener("mouseenter", up);
    el.addEventListener("mouseleave", down);
    return () => { el.removeEventListener("mouseenter", up); el.removeEventListener("mouseleave", down); gsap.killTweensOf(el); };
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
