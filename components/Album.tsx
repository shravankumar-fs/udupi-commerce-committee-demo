"use client";
import { useCallback, useEffect, useState } from "react";
import { photo } from "@/lib/photos";
import { Photo } from "./Photo";
import { useLang } from "./lang";

export function Album({ ids }: { ids: string[] }) {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const title = (id: string) => (lang === "kn" ? photo(id).kn : photo(id).title);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + ids.length) % ids.length)), [ids.length]);

  useEffect(() => {
    if (open === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", key);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = prev; };
  }, [open, step]);

  return (
    <>
      <div className="photo-grid">
        {ids.map((id, i) => (
          <button key={id} onClick={() => setOpen(i)} aria-label={`Open ${title(id)}`}>
            <Photo id={id} ratio="1 / 1" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <figure className="lightbox-fig" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo(ids[open]).src} alt={title(ids[open])} />
            <figcaption className="lightbox-cap">{title(ids[open])} · {open + 1}/{ids.length}</figcaption>
          </figure>
          {ids.length > 1 && (
            <>
              <button className="lb-nav lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
              <button className="lb-nav lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
            </>
          )}
          <button className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>✕</button>
        </div>
      )}
    </>
  );
}
