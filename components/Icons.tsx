"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Line icons for Udupi's coast and commerce: 24px grid, 1.6 stroke, drawn on scroll.
const circle = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const PATHS = {
  wave: ["M2 14c2.5-3 5-3 7.5 0s5 3 7.5 0 3-2 5-2", "M2 19c2.5-3 5-3 7.5 0s5 3 7.5 0 3-2 5-2"],
  beach: [circle(17.5, 5.5, 2.4), "M7.5 19c0-5 .8-9 2.6-12", "M10 7C8.6 4.9 6.4 4.4 4 5.4", "M10 7c2-1.8 4.3-1.6 5.8.2", "M10 7c-.2-2-1.3-3.5-3.2-4.3", "M10 7c1.3-1.6 3.2-2.2 5-1.4", "M2 21c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 8 0"],
  fish: ["M3 12c2.8-4.6 8.6-5.8 12.6-2.2L21 7v10l-5.4-2.8C11.6 17.8 5.8 16.6 3 12z", circle(7.8, 11.4, 0.6)],
  net: ["M3 3h18v18H3z", "M3 3l18 18", "M3 9l12 12", "M9 3l12 12", "M21 3L3 21", "M21 9L9 21", "M15 3L3 15"],
  tech: ["M3 5h18v11H3z", "M8 20h8", "M12 16v4", "M9.5 8.5l-2 2 2 2", "M14.5 8.5l2 2-2 2"],
  education: ["M2 9l10-5 10 5-10 5z", "M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5", "M22 9v6"],
  industry: ["M3 21V11l6 3.5V11l6 3.5V4h5v17z", "M3 21h18", "M17.5 8h.5", "M17.5 12h.5", "M17.5 16h.5"],
  agri: ["M12 22V8", "M12 8c-1.4-1.6-1.6-3.8 0-6 1.6 2.2 1.4 4.4 0 6z", "M12 13c-3 .2-4.6-1.6-4.6-4.4 3 0 4.6 1.6 4.6 4.4z", "M12 13c3 .2 4.6-1.6 4.6-4.4-3 0-4.6 1.6-4.6 4.4z", "M12 18c-3 .2-4.6-1.6-4.6-4.4 3 0 4.6 1.6 4.6 4.4z", "M12 18c3 .2 4.6-1.6 4.6-4.4-3 0-4.6 1.6-4.6 4.4z"],
  food: ["M5 10h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z", "M16 11h1.5a2.2 2.2 0 0 1 0 4.4H16", "M8 3c-1 1.2 1 2 0 3.2", "M12 3c-1 1.2 1 2 0 3.2", "M3 21.5h15"],
  trade: ["M4 20V11", "M10 20V4", "M16 20v-7", "M2 21.5h20"],
  temple: ["M12 3v3", "M9 21V12l3-3 3 3v9", "M5 21v-6l2-1.5", "M19 21v-6l-2-1.5", "M3 21.5h18", "M10.5 15h3v6h-3z"],
  boat: ["M3 15h18l-2.6 4.5H5.6z", "M12 15V3", "M12 4.5l6 8.5h-6"],
  pin: ["M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21z", circle(12, 9.8, 2.4)],
  phone: ["M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  mail: ["M3 6h18v12H3z", "M3 7l9 6.5L21 7"],
  calendar: ["M4 6h16v14H4z", "M4 10h16", "M8 3v4", "M16 3v4"],
  users: [circle(9, 8.5, 3.2), "M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5", "M16 6.2a3 3 0 0 1 0 5.6", "M17.5 14.7c2.2.6 3.5 2.4 3.5 5.3"],
  building: ["M5 21V4h9v17", "M14 9h5v12", "M3 21.5h18", "M8 8h3", "M8 12h3", "M8 16h3"],
  award: [circle(12, 8.5, 5), "M8.5 13.5L7 21l5-3 5 3-1.5-7.5"],
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 24, draw = false, className = "" }: { name: IconName; size?: number; draw?: boolean; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!draw) return;
    const svg = ref.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const shapes = Array.from(svg.querySelectorAll<SVGPathElement>("path"));
    shapes.forEach((p) => { const l = p.getTotalLength(); p.style.strokeDasharray = `${l}`; p.style.strokeDashoffset = `${l}`; });
    const play = () => gsap.to(shapes, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut", stagger: 0.08, overwrite: "auto" });
    const st = ScrollTrigger.create({ trigger: svg, start: "top 92%", once: true, onEnter: play });
    const card = svg.closest(".sector-card, .stat, .contact-row");
    const replay = () => { shapes.forEach((p) => { p.style.strokeDashoffset = p.style.strokeDasharray; }); play(); };
    card?.addEventListener("mouseenter", replay);
    return () => { st.kill(); card?.removeEventListener("mouseenter", replay); };
  }, [draw]);
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`icon ${className}`}>
      {PATHS[name].map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
