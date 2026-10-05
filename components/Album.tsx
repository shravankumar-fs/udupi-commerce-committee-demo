"use client";
import { useState } from "react";
import { photo } from "@/lib/photos";
import { Photo } from "./Photo";

export function Album({ ids }: { ids: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="photo-grid">
        {ids.map((id, i) => (
          <button key={id} onClick={() => setOpen(i)} aria-label={`Open ${photo(id).title}`}>
            <Photo id={id} ratio="1 / 1" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <figure style={{ margin: 0, width: "100%", maxWidth: 1000 }}>
            <Photo id={ids[open]} ratio="3 / 2" eager />
            <figcaption className="lightbox-cap">
              {photo(ids[open]).title} — {photo(ids[open]).author}, {photo(ids[open]).license}
            </figcaption>
          </figure>
          <button className="btn btn-light btn-sm" onClick={() => setOpen(null)}>✕</button>
        </div>
      )}
    </>
  );
}
