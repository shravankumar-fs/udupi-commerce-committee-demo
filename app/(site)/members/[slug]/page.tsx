import Link from "next/link";
import { notFound } from "next/navigation";
import { catName, members } from "@/lib/data";
import { L, T } from "@/components/lang";
import { MemberCard } from "@/components/Cards";
import { Initials } from "@/components/Photo";

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = members.find((x) => x.slug === slug);
  return { title: m?.name ?? "Member" };
}

export default async function MemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = members.find((x) => x.slug === slug);
  if (!m) notFound();
  const related = members.filter((x) => x.category === m.category && x.slug !== m.slug).slice(0, 2);
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.name + ", " + m.address)}`;
  const wa = `https://wa.me/${m.whatsapp}?text=${encodeURIComponent("Hi, I found you on the Udupi Chamber of Commerce and Industry website.")}`;

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="crumbs">
            <Link href="/members/"><T en="Member Directory" kn="ಸದಸ್ಯರ ಡೈರೆಕ್ಟರಿ" /></Link> / <L v={catName(m.category)} />
          </p>
          <div className="member-hero">
            <Initials name={m.name} hue={m.hue} />
            <div>
              <h1 style={{ fontSize: "clamp(1.7rem,3.4vw,2.5rem)" }}>{m.name}</h1>
              <p className="meta">
                <L v={catName(m.category)} /> · {m.area} · <T en="Member since" kn="ಸದಸ್ಯರಾದ ವರ್ಷ" /> {m.since}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container detail-grid">
          <div>
            <div className="prose">
              <h2 style={{ fontSize: "1.4rem" }}><T en="About the business" kn="ಉದ್ಯಮದ ಬಗ್ಗೆ" /></h2>
              <p><L v={m.about} /></p>
            </div>
            <h3 style={{ marginTop: "1.5rem" }}><T en="Products & services" kn="ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸೇವೆಗಳು" /></h3>
            <div className="pill-row">
              {m.services.map((s) => <span key={s} className="pill">{s}</span>)}
            </div>
            <h3 style={{ marginTop: "2rem" }}><T en="Location" kn="ಸ್ಥಳ" /></h3>
            <iframe
              className="map"
              title="Map"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(m.address)}&output=embed`}
            />
            {related.length > 0 && (
              <>
                <h3 style={{ marginTop: "2rem" }}><T en="More in this sector" kn="ಈ ವಲಯದ ಇನ್ನಷ್ಟು" /></h3>
                <div className="member-grid">
                  {related.map((r) => <MemberCard key={r.slug} m={r} />)}
                </div>
              </>
            )}
          </div>
          <aside>
            <div className="panel">
              <div className="action-stack">
                <a className="btn btn-primary" href={`tel:${m.phone.replace(/\s/g, "")}`}>📞 <T en="Call now" kn="ಕರೆ ಮಾಡಿ" /></a>
                <a className="btn btn-wa" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
                <a className="btn btn-ghost" href={maps} target="_blank" rel="noreferrer">📍 <T en="Get directions" kn="ದಾರಿ ತೋರಿಸಿ" /></a>
              </div>
            </div>
            <div className="panel">
              <h3><T en="Contact details" kn="ಸಂಪರ್ಕ ವಿವರ" /></h3>
              <dl className="info-list">
                <div><dt><T en="Owner" kn="ಮಾಲೀಕರು" /></dt><dd>{m.owner}</dd></div>
                <div><dt><T en="Phone" kn="ದೂರವಾಣಿ" /></dt><dd>{m.phone}</dd></div>
                <div><dt><T en="Email" kn="ಇಮೇಲ್" /></dt><dd><a href={`mailto:${m.email}`}>{m.email}</a></dd></div>
                {m.website && <div><dt><T en="Website" kn="ವೆಬ್‌ಸೈಟ್" /></dt><dd><a href={m.website} target="_blank" rel="noreferrer">{m.website.replace("https://", "")}</a></dd></div>}
                <div><dt><T en="Address" kn="ವಿಳಾಸ" /></dt><dd>{m.address}</dd></div>
              </dl>
            </div>
            <p className="small" style={{ marginTop: "1rem" }}>
              <T en="Sample listing for this demo." kn="ಡೆಮೊಗಾಗಿ ಮಾದರಿ ಪಟ್ಟಿ." />
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
