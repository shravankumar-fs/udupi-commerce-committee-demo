import { events } from "@/lib/data";
import { T } from "@/components/lang";
import { EventCard, PageHead } from "@/components/Cards";
import { PhotoCarousel } from "@/components/IndustriesCarousel";

export const metadata = { title: "Events" };

export default function EventsPage() {
  const up = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);
  return (
    <>
      <PageHead
        photos={["carstreet", "chariots", "yakshagana"]}
        eyebrow={<T en="Events & meetings" kn="ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಭೆಗಳು" />}
        title={<T en="What's happening at the Chamber" kn="ಚೇಂಬರ್‌ನಲ್ಲಿ ಏನು ನಡೆಯುತ್ತಿದೆ" />}
        intro={<T en="Workshops, trade fairs, member meetings and community programmes across Udupi district." kn="ಉಡುಪಿ ಜಿಲ್ಲೆಯಾದ್ಯಂತ ಕಾರ್ಯಾಗಾರಗಳು, ವ್ಯಾಪಾರ ಮೇಳಗಳು, ಸದಸ್ಯರ ಸಭೆಗಳು ಮತ್ತು ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳು." />}
      />
      <section>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem" }}><T en="Upcoming" kn="ಮುಂಬರುವ" /></h2>
          <div className="event-list">{up.map((e) => <EventCard key={e.slug} e={e} />)}</div>
          <h2 style={{ fontSize: "1.5rem", marginTop: "3rem" }}><T en="Past events" kn="ಹಿಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು" /></h2>
          <div className="event-list">{past.map((e) => <EventCard key={e.slug} e={e} />)}</div>
          <h2 style={{ fontSize: "1.5rem", marginTop: "3rem" }}><T en="Around Udupi" kn="ಉಡುಪಿಯ ಸುತ್ತಮುತ್ತ" /></h2>
          <PhotoCarousel label="Photos of Udupi" ids={["chariots", "offload", "university", "yakshagana", "stmarys", "matha", "paddy", "kaup"]} />
        </div>
      </section>
    </>
  );
}
