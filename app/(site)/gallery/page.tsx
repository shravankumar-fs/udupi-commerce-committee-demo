import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { albums } from "@/lib/data";
import { L, T } from "@/components/lang";
import { PageHead } from "@/components/Cards";
import { Photo } from "@/components/Photo";
import { Carousel } from "@/components/Carousel";
import { photo } from "@/lib/photos";

const HIGHLIGHTS = ["stage-group", "agm-stage-group", "news-vijaya-karnataka", "ceremony-lamp-1", "agm-handshake", "hall-audience", "office"];

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHead
        photos={["office", "stage-group", "agm-stage-group"]}
        eyebrow={<T en="Gallery" kn="ಗ್ಯಾಲರಿ" />}
        title={<T en="Gallery" kn="ಗ್ಯಾಲರಿ" />}
        intro={<T en="Photos from the Chamber's meetings and events, and press reports on the new President." kn="ಚೇಂಬರ್‌ನ ಸಭೆ, ಕಾರ್ಯಕ್ರಮಗಳ ಫೋಟೋಗಳು ಮತ್ತು ನೂತನ ಅಧ್ಯಕ್ಷರ ಕುರಿತ ಪತ್ರಿಕಾ ವರದಿಗಳು." />}
      />
      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          <h2 style={{ fontSize: "1.4rem" }}><T en="Highlights" kn="ಮುಖ್ಯಾಂಶಗಳು" /></h2>
          <div className="wide-carousel">
            <Carousel label="Gallery highlights" autoplay={5000}>
              {HIGHLIGHTS.map((id) => <Photo key={id} id={id} ratio="16 / 9" label={photo(id).title} />)}
            </Carousel>
          </div>
          <h2 style={{ fontSize: "1.4rem", marginTop: "2.5rem" }}><T en="Albums" kn="ಆಲ್ಬಮ್‌ಗಳು" /></h2>
        </div>
      </section>
      <section style={{ paddingTop: 20 }}>
        <Stagger className="container gallery-grid" gap={0.07}>
          {albums.map((a) => (
            <StaggerItem key={a.slug}><Link href={`/gallery/${a.slug}/`} className="album-card">
              <Photo id={a.photos[0]} label={`${a.photos.length} photos`} />
              <h3><L v={a.title} /></h3>
            </Link></StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
