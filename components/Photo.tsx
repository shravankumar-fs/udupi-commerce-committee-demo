"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./lang";
import { photo as getPhoto } from "@/lib/photos";

// Shows one of the Chamber's own photos (lib/photos.ts) when `id` is given,
// otherwise a warm placeholder.
export function Photo({ id, hue = 20, label, ratio = "4 / 3", seed = 0, eager, parallax }: { id?: string; hue?: number; label?: string; ratio?: string; seed?: number; eager?: boolean; parallax?: boolean }) {
  const { lang } = useLang();
  const p = id ? getPhoto(id) : undefined;
  const title = p ? (lang === "kn" ? p.kn : p.title) : "";
  const shown = p && label === p.title ? title : label;
  if (p)
    return (
      <div className="photo" style={{ aspectRatio: ratio }}>
        <PhotoImg src={p.src} alt={title} eager={eager} parallax={parallax} />
        {shown && <span className="photo-label">{shown}</span>}
      </div>
    );
  const a = `hsl(${hue} 30% ${64 - (seed % 3) * 6}%)`;
  const b = `hsl(${(hue + 25) % 360} 26% ${40 + (seed % 4) * 4}%)`;
  const x = 20 + ((seed * 37) % 60);
  return (
    <div className="photo" style={{ aspectRatio: ratio, background: `radial-gradient(circle at ${x}% 30%, ${a}, ${b})` }}>
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M0 60 L0 ${42 + (seed % 5)} Q 25 ${30 + (seed % 7)} 50 ${40} T 100 ${36 + (seed % 6)} L100 60 Z`} fill="rgba(0,0,0,.18)" />
        <path d={`M0 60 L0 50 Q 30 ${44 + (seed % 4)} 60 50 T 100 48 L100 60 Z`} fill="rgba(0,0,0,.22)" />
      </svg>
      {label && <span className="photo-label">{label}</span>}
    </div>
  );
}

export function Avatar({ name, hue, src }: { name: string; hue: number; src?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  if (src) return <img className="avatar" src={src} alt={name} loading="lazy" />;
  return <Initials name={name} hue={hue} />;
}

export function Initials({ name, hue }: { name: string; hue: number }) {
  const init = name.replace(/^(Dr\.|Prof\.|Shri|Smt\.)\s*/, "").split(/\s+/).slice(0, 2).map((w) => w[0]).join("");
  return (
    <div className="initials" style={{ background: `hsl(${hue} 50% 94%)`, color: `hsl(${hue} 55% 32%)` }}>
      {init}
    </div>
  );
}

/** Image with a soft shimmer until it has loaded, then a quiet fade-in. */
function PhotoImg({ src, alt, eager, parallax }: { src: string; alt: string; eager?: boolean; parallax?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const [ok, setOk] = useState(false);
  useEffect(() => { if (ref.current?.complete && ref.current.naturalWidth) setOk(true); }, []);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={ok ? "loaded" : "loading"} onLoad={() => setOk(true)} {...(parallax ? { "data-pimg": "" } : {})} />
  );
}
