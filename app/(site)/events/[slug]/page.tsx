import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/data";
import { DateText, L, T } from "@/components/lang";
import { Photo } from "@/components/Photo";
import { Album } from "@/components/Album";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: events.find((e) => e.slug === slug)?.title.en ?? "Event" };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = events.find((x) => x.slug === slug);
  if (!e) notFound();
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="crumbs"><Link href="/events/"><T en="Events" kn="ಕಾರ್ಯಕ್ರಮಗಳು" /></Link> / <L v={e.type} /></p>
          <span className="tag"><L v={e.type} /></span>
          <h1 style={{ marginTop: ".75rem", fontSize: "clamp(1.8rem,3.6vw,2.8rem)" }}><L v={e.title} /></h1>
          <p className="meta" style={{ fontSize: "1rem" }}>
            <DateText iso={e.date} /> · {e.time} · <L v={e.venue} />
          </p>
        </div>
      </section>
      <section>
        <div className="container detail-grid">
          <div className="prose">
            <Photo id={e.photo} ratio="16 / 7" eager />
            <h2 style={{ fontSize: "1.4rem", marginTop: "2rem" }}><T en="About this event" kn="ಕಾರ್ಯಕ್ರಮದ ಬಗ್ಗೆ" /></h2>
            <p><L v={e.summary} /></p>
            {e.source && <p className="small">📰 <T en="Source:" kn="ಮೂಲ:" /> <a className="link-more" href={e.source.url} target="_blank" rel="noreferrer">{e.source.name}</a></p>}
            {e.gallery && (
              <>
                <h3 style={{ marginTop: "1.5rem" }}><T en="Photos" kn="ಫೋಟೋಗಳು" /></h3>
                <Album ids={e.gallery} />
              </>
            )}
          </div>
          <aside>
<div className="panel">
            <h3><T en="This event has ended" kn="ಈ ಕಾರ್ಯಕ್ರಮ ಮುಗಿದಿದೆ" /></h3>
            <Link className="btn btn-ghost" href="/gallery/"><T en="See photos" kn="ಫೋಟೋಗಳನ್ನು ನೋಡಿ" /></Link>
              </div>
            <div className="panel">
              <dl className="info-list">
                <div><dt><T en="Date" kn="ದಿನಾಂಕ" /></dt><dd><DateText iso={e.date} /></dd></div>
                <div><dt><T en="Time" kn="ಸಮಯ" /></dt><dd>{e.time}</dd></div>
                <div><dt><T en="Venue" kn="ಸ್ಥಳ" /></dt><dd><L v={e.venue} /></dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
