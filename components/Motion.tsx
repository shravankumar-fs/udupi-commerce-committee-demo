"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";
import { createElement, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

// GSAP motion for the whole site, kept restrained: smooth scrolling, short fade-up reveals,
// scroll parallax on hero imagery, and quiet hover effects on cards, buttons and photos.
// Elements start hidden via `.js .gsap-hide` (class added by an inline script in the root layout) so there is no flash.
const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;
let registered = false;
const register = () => {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  registered = true;
};
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const reveal = (el: gsap.TweenTarget, vars: gsap.TweenVars = {}) =>
  gsap.to(el, {
    opacity: 1, y: 0, duration: 0.8, ease: "power3.out", ...vars,
    onComplete: () => {
      // hand control back to CSS so hover effects and layout are unaffected
      (Array.isArray(el) ? el : [el]).forEach((t) => { if (t instanceof HTMLElement) { t.classList.remove("gsap-hide"); gsap.set(t, { clearProps: "opacity,transform" }); } });
    },
  });

/** Card-like elements lift gently with a soft shadow; `.btn` moves less. */
const LIFT = ".event-card, .bearer, .director, .album-card, .strip-card, .presidents li, .sector-card";
const BTN = ".btn";
const ZOOM = ".album-card, .strip-card, .photo-grid button, .event-card, .prose .photo";

function setupHover() {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (!fine.matches || reduced()) return () => {};
  const over = (e: MouseEvent) => {
    const t = e.target as Element;
    const rel = e.relatedTarget as Node | null;
    const el = (t.closest(LIFT) || t.closest(BTN)) as HTMLElement | null;
    if (el && !(rel && el.contains(rel))) {
      const btn = el.matches(BTN);
      gsap.to(el, { y: btn ? -2 : -4, boxShadow: btn ? "0 8px 18px rgba(12,29,54,.20)" : "0 16px 32px rgba(12,29,54,.12)", duration: 0.35, ease: "power2.out", overwrite: "auto" });
    }
    const z = t.closest(ZOOM) as HTMLElement | null;
    if (z && !(rel && z.contains(rel))) {
      const img = z.querySelector(".photo img");
      if (img) gsap.to(img, { scale: 1.06, duration: 0.8, ease: "power2.out", overwrite: "auto" });
    }
  };
  const out = (e: MouseEvent) => {
    const t = e.target as Element;
    const rel = e.relatedTarget as Node | null;
    const el = (t.closest(LIFT) || t.closest(BTN)) as HTMLElement | null;
    if (el && !(rel && el.contains(rel))) gsap.to(el, { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.45, ease: "power2.out", overwrite: "auto", onComplete: () => { gsap.set(el, { clearProps: "boxShadow,transform" }); } });
    const z = t.closest(ZOOM) as HTMLElement | null;
    if (z && !(rel && z.contains(rel))) {
      const img = z.querySelector(".photo img");
      if (img) gsap.to(img, { scale: 1, duration: 0.7, ease: "power2.out", overwrite: "auto" });
    }
  };
  document.addEventListener("mouseover", over);
  document.addEventListener("mouseout", out);
  return () => { document.removeEventListener("mouseover", over); document.removeEventListener("mouseout", out); };
}

/** Smooth scrolling, scroll parallax and global hover effects. */
export function MotionProvider({ children }: { children: ReactNode }) {
  const path = usePathname();

  // global, once
  useEffect(() => {
    register();
    const off = setupHover();
    const onScroll = () => document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { off(); window.removeEventListener("scroll", onScroll); };
  }, []);

  // per page
  useEffect(() => {
    register();
    if (reduced()) return;
    const wrapper = document.querySelector("#smooth-wrapper");
    let smoother = ScrollSmoother.get();
    if (wrapper && !smoother) smoother = ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1.1, smoothTouch: false, effects: false });
    else if (!wrapper && smoother) { smoother.kill(); smoother = undefined; }
    smoother?.scrollTop(0);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1px)", () => {
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const k = parseFloat(el.dataset.parallax || "0.15");
        gsap.fromTo(el, { yPercent: -k * 100 }, { yPercent: k * 100, ease: "none", scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: 0.6 } });
      });
      document.querySelectorAll<HTMLElement>("[data-pimg]").forEach((img) => {
        gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: "none", scrollTrigger: { trigger: img.parentElement || img, start: "top bottom", end: "bottom top", scrub: 0.6 } });
      });
    });
    mm.add("(min-width: 901px)", () => {
      document.querySelectorAll<HTMLElement>("[data-pin]").forEach((el) => {
        ScrollTrigger.create({ trigger: el, endTrigger: el.parentElement as HTMLElement, start: "top 130px", end: "bottom bottom", pin: true, pinSpacing: false });
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 500);
    const t2 = setTimeout(refresh, 1500);
    return () => { window.removeEventListener("load", refresh); clearTimeout(t); clearTimeout(t2); mm.revert(); };
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
    if (reduced()) { el.classList.remove("gsap-hide"); return; }
    const st = ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: () => { reveal(el, { delay }); } });
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
    if (reduced()) { items.forEach((i) => i.classList.remove("gsap-hide")); return; }
    const play = () => reveal(items, { stagger: gap });
    if (onLoad) { play(); return; }
    const st = ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: play });
    return () => st.kill();
  }, [gap, onLoad]);
  return <div ref={ref} className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div data-stagger-item className={`gsap-hide ${className ?? ""}`}>{children}</div>;
}

/** Wraps the page body for ScrollSmoother. The header stays outside so it can stay fixed. */
export function SmoothWrapper({ children }: { children: ReactNode }) {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
