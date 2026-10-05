import Link from "next/link";
import { notFound } from "next/navigation";
import { albums } from "@/lib/data";
import { L, T } from "@/components/lang";
import { Album } from "@/components/Album";

export function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = albums.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="crumbs"><Link href="/gallery/"><T en="Gallery" kn="ಗ್ಯಾಲರಿ" /></Link></p>
          <h1 style={{ fontSize: "clamp(1.8rem,3.6vw,2.6rem)" }}><L v={a.title} /></h1>
          <p className="meta">{a.photos.length} <T en="photos · tap a photo to enlarge" kn="ಫೋಟೋಗಳು · ದೊಡ್ಡದಾಗಿ ನೋಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ" /></p>
        </div>
      </section>
      <section>
        <div className="container"><Album ids={a.photos} /></div>
      </section>
    </>
  );
}
