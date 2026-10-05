import { photos, commonsPage } from "@/lib/photos";
import { T } from "@/components/lang";
import { PageHead } from "@/components/Cards";
import { Photo } from "@/components/Photo";

export const metadata = { title: "Photo credits" };

const SOURCES = [
  { name: "Company record (MCA), via Tofler", url: "https://www.tofler.in/udupi-chamber-of-commerce-and-industry/company/U91110KA2003GAP031546" },
  { name: "Varthabharati — office bearers 2026–27", url: "https://www.varthabharati.in/udupi/--2279217" },
  { name: "Daijiworld — tourism seminar, 2024", url: "https://daijiworld.com/news/newsDisplay?newsID=1208462" },
  { name: "Daijiworld — electricity tariff statement, 2023", url: "https://daijiworld.com/news/newsDisplay?newsID=1091044" },
  { name: "Bellevision — 2012 election", url: "https://www.bellevision.com/?action=topnews&type=4629" },
];

export default function CreditsPage() {
  return (
    <>
      <PageHead
        photos={["kodi", "malpe", "karkala"]}
        eyebrow={<T en="Credits" kn="ಕೃತಜ್ಞತೆ" />}
        title={<T en="Photo credits & sources" kn="ಫೋಟೋ ಕೃಪೆ ಮತ್ತು ಮೂಲಗಳು" />}
        intro={<T en="Photos on this demo are from Wikimedia Commons under free licences. Chamber details are from the public sources below." kn="ಈ ಡೆಮೊದ ಫೋಟೋಗಳು ವಿಕಿಮೀಡಿಯಾ ಕಾಮನ್ಸ್‌ನಿಂದ ಉಚಿತ ಪರವಾನಗಿಯಡಿ. ಚೇಂಬರ್ ವಿವರಗಳು ಕೆಳಗಿನ ಸಾರ್ವಜನಿಕ ಮೂಲಗಳಿಂದ." />}
      />
      <section>
        <div className="container credits-grid">
          {photos.map((p) => (
            <a key={p.id} href={commonsPage(p.file)} target="_blank" rel="noreferrer" className="credit">
              <Photo id={p.id} ratio="16 / 10" />
              <b>{p.title}</b>
              <span className="meta">{p.author} · {p.license}</span>
            </a>
          ))}
        </div>
      </section>
      <section className="section-paper">
        <div className="container">
          <h2 style={{ fontSize: "1.4rem" }}><T en="Sources for Chamber details" kn="ಚೇಂಬರ್ ವಿವರಗಳ ಮೂಲಗಳು" /></h2>
          <ul className="source-list">
            {SOURCES.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
