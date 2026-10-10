import { events } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/Motion";
import { T } from "@/components/lang";
import { EventCard, PageHead } from "@/components/Cards";

export const metadata = { title: "Events" };

export default function EventsPage() {
  const up = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);
  return (
    <>
      <PageHead
        photos={["agm-stage-group", "stage-group", "hall-audience"]}
        eyebrow={<T en="Events & meetings" kn="ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಭೆಗಳು" />}
        title={<T en="What's happening at the Chamber" kn="ಚೇಂಬರ್‌ನಲ್ಲಿ ಏನು ನಡೆಯುತ್ತಿದೆ" />}
      />
      <section>
        <div className="container">
          {up.length > 0 && (
            <>
              <h2 style={{ fontSize: "1.5rem" }}><T en="Upcoming" kn="ಮುಂಬರುವ" /></h2>
              <Stagger className="event-list" gap={0.08}>{up.map((e) => <StaggerItem key={e.slug}><EventCard e={e} /></StaggerItem>)}</Stagger>
            </>
          )}
          <h2 style={{ fontSize: "1.5rem", marginTop: up.length ? "3rem" : 0 }}><T en="Past events" kn="ಹಿಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು" /></h2>
          <Stagger className="event-list" gap={0.08}>{past.map((e) => <StaggerItem key={e.slug}><EventCard e={e} /></StaggerItem>)}</Stagger>
        </div>
      </section>
    </>
  );
}
