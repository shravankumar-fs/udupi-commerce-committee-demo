import type { ReactNode } from "react";
import Link from "next/link";
import { kinds, type Event, type Post } from "@/lib/data";
import { DateText, L, T } from "./lang";
import { photo } from "@/lib/photos";
import { HeroSlides } from "./Carousel";
import { Stagger, StaggerItem } from "./Motion";

export function EventCard({ e }: { e: Event }) {
  return (
    <Link href={`/events/${e.slug}/`} className="event-card">
      <div className="date-block">
        <span className="d"><DateText iso={e.date} part="day" /></span>
        <span className="m"><DateText iso={e.date} part="month" /></span>
      </div>
      <div className="event-body">
        <span className="tag"><L v={e.type} /></span>
        <h3><L v={e.title} /></h3>
        <p className="meta">{e.time} · <L v={e.venue} /></p>
      </div>
      <span className="arrow" aria-hidden="true">→</span>
    </Link>
  );
}

export function PostRow({ p }: { p: Post }) {
  return (
    <Link href={`/news/${p.slug}/`} className="post-row">
      <div className="post-meta">
        <span className={`kind kind-${p.kind}`}><L v={kinds[p.kind]} /></span>
        <span className="meta"><DateText iso={p.date} /></span>
      </div>
      <h3><L v={p.title} /></h3>
      <p className="small"><L v={p.excerpt} /></p>
    </Link>
  );
}

export function PageHead({ eyebrow, title, intro, photos }: { eyebrow?: ReactNode; title: ReactNode; intro?: ReactNode; photos?: string[] }) {
  if (photos?.length) {
    const slides = photos.map((id) => {
      const p = photo(id);
      return { src: p.src, alt: p.title, caption: { en: p.title, kn: p.kn }, credit: "" };
    });
    return (
      <section className="page-hero">
        <HeroSlides slides={slides} />
        <Stagger className="container" onLoad gap={0.12}>
          {eyebrow && <StaggerItem><p className="eyebrow">{eyebrow}</p></StaggerItem>}
          <StaggerItem><h1>{title}</h1></StaggerItem>
          {intro && <StaggerItem><p className="lead">{intro}</p></StaggerItem>}
        </Stagger>
      </section>
    );
  }
  return (
    <section className="page-head">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}
