import Link from "next/link";
import { notFound } from "next/navigation";
import { kinds, posts } from "@/lib/data";
import { DateText, L, T } from "@/components/lang";
import { PostRow } from "@/components/Cards";
import { Album } from "@/components/Album";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: posts.find((p) => p.slug === slug)?.title.en ?? "News" };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  return (
    <>
      <section className="page-head">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="crumbs"><Link href="/news/"><T en="News & Circulars" kn="ಸುದ್ದಿ ಮತ್ತು ಸುತ್ತೋಲೆ" /></Link></p>
          <div className="post-meta">
            <span className={`kind kind-${p.kind}`}><L v={kinds[p.kind]} /></span>
            <span className="meta"><DateText iso={p.date} /></span>
          </div>
          <h1 style={{ marginTop: ".75rem", fontSize: "clamp(1.8rem,3.6vw,2.6rem)" }}><L v={p.title} /></h1>
        </div>
      </section>
      <section>
        <div className="container prose" style={{ maxWidth: 860 }}>
          {p.body.map((b, i) => <p key={i}><L v={b} /></p>)}
          {p.source && <p className="small">📰 <T en="Source:" kn="ಮೂಲ:" /> <a className="link-more" href={p.source.url} target="_blank" rel="noreferrer">{p.source.name}</a></p>}
          {p.cutouts && (
            <>
              <h3 style={{ marginTop: "1.5rem" }}><T en="Press cuttings" kn="ಪತ್ರಿಕಾ ವರದಿಗಳು" /></h3>
              <Album ids={p.cutouts} />
            </>
          )}
          <div style={{ display: "flex", gap: ".5rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <a className="btn btn-wa btn-sm" href={`https://wa.me/?text=${encodeURIComponent(p.title.en)}`} target="_blank" rel="noreferrer"><T en="Share on WhatsApp" kn="ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿ" /></a>
          </div>
          <h3 style={{ marginTop: "3rem" }}><T en="More updates" kn="ಇನ್ನಷ್ಟು ಮಾಹಿತಿ" /></h3>
          <div className="post-list">{more.map((m) => <PostRow key={m.slug} p={m} />)}</div>
        </div>
      </section>
    </>
  );
}
