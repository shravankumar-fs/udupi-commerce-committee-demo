"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

/** Branded first-visit loader: the emblem inside a turning ring, over a moving sea line. Shown once per session. */
export function Splash() {
  const ref = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let seen = false;
    try { seen = sessionStorage.getItem("ucci-splash") === "1"; sessionStorage.setItem("ucci-splash", "1"); } catch {}
    const start = performance.now();
    const hide = () => {
      const wait = seen ? 0 : Math.max(0, 1100 - (performance.now() - start));
      gsap.to(el, { opacity: 0, duration: 0.6, delay: wait / 1000, ease: "power2.inOut", onComplete: () => setGone(true) });
    };
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    const failsafe = setTimeout(hide, 4000);
    return () => clearTimeout(failsafe);
  }, []);
  if (gone) return null;
  return (
    <div ref={ref} className="splash" aria-hidden="true">
      <div className="splash-inner">
        <div className="splash-ring">
          <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="54" /></svg>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" width={72} height={72} />
        </div>
        <div className="splash-sea"><i /><i /><i /></div>
        <span>Udupi Chamber of Commerce &amp; Industry</span>
      </div>
    </div>
  );
}

/** Thin progress line across the top on page changes. */
export function RouteProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const path = usePathname();
  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    const click = (e: MouseEvent) => {
      const a = (e.target as Element).closest("a");
      if (!a || a.target === "_blank" || !a.href.startsWith(location.origin) || a.pathname === location.pathname) return;
      gsap.killTweensOf(el);
      gsap.set(el, { scaleX: 0, opacity: 1 });
      gsap.to(el, { scaleX: 0.75, duration: 1.2, ease: "power2.out" });
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    gsap.to(el, { scaleX: 1, duration: 0.25, ease: "power1.out", onComplete: () => { gsap.to(el, { opacity: 0, duration: 0.3, onComplete: () => { gsap.set(el, { scaleX: 0 }); } }); } });
  }, [path]);
  return <div ref={bar} className="route-progress" aria-hidden="true" />;
}
