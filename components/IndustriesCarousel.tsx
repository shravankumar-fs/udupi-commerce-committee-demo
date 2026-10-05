import Link from "next/link";
import { industries } from "@/lib/data";
import { Carousel } from "./Carousel";
import { L, T } from "./lang";
import { Photo } from "./Photo";

export function IndustriesCarousel() {
  return (
    <Carousel label="Industries of Udupi" autoplay={5000}>
      {industries.map((ind) => (
        <Link key={ind.id} href={`/members/?cat=${ind.cat}`} className="industry-card">
          <Photo id={ind.photo} ratio="4 / 3" />
          <div className="industry-body">
            <h3><L v={ind.title} /></h3>
            <p className="small"><L v={ind.text} /></p>
            <span className="industry-link"><T en="View businesses →" kn="ಉದ್ಯಮಗಳನ್ನು ನೋಡಿ →" /></span>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}

export function PhotoCarousel({ ids, label, wide }: { ids: string[]; label: string; wide?: boolean }) {
  return (
    <div className={wide ? "wide-carousel" : ""}>
      <Carousel label={label} autoplay={wide ? 5000 : 0}>
        {ids.map((id) => <Photo key={id} id={id} ratio={wide ? "16 / 9" : "1 / 1"} label={undefined} />)}
      </Carousel>
    </div>
  );
}
