import Link from "next/link";
import { bearers, events, presidentMessage as pm, heroSlides, posts, stats } from "@/lib/data";
import { photo } from "@/lib/photos";
import { L, T } from "@/components/lang";
import { EventCard, PostRow } from "@/components/Cards";
import { HeroSlides } from "@/components/Carousel";
import { Lift, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { Carousel } from "@/components/Carousel";
import { Avatar, Photo } from "@/components/Photo";

const STRIP = ["agm-stage-group", "stage-group", "ceremony-lamp-1", "agm-handshake", "hall-audience", "flag-hoisting-1", "agm-dais-1", "office"];

export default function Home() {
  const upcoming = events.filter((e) => e.upcoming).slice(0, 4);
  const leaders = bearers.filter((b) => b.group === "officer").filter((b, i) => i < 3 || b.role.en === "Treasurer");
  return (
    <>
      <section className="hero hero-photo">
        <HeroSlides slides={heroSlides.map((h) => ({ src: photo(h.photo).src, alt: photo(h.photo).title, caption: h.caption, credit: "" }))} />
        <div className="container hero-grid">
          <Stagger onLoad gap={0.12}>
            <StaggerItem>
            <p className="eyebrow"><T en="Since 1964 · Udupi district" kn="1964ರಿಂದ · ಉಡುಪಿ ಜಿಲ್ಲೆ" /></p>
            </StaggerItem>
            <StaggerItem>
            <h1>
              <T en="The voice of " kn="ಉಡುಪಿಯ " />
              <em><T en="Udupi's" kn="ವ್ಯಾಪಾರ ಸಮುದಾಯದ" /></em>
              <T en=" business community" kn=" ಧ್ವನಿ" />
            </h1>
            </StaggerItem>
            <StaggerItem>
            <p className="lead">
              <T
                en="The Udupi Chamber of Commerce and Industry brings together traders, manufacturers and service businesses to grow trade, represent members to government, and build a stronger local economy."
                kn="ಉಡುಪಿ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿ ವ್ಯಾಪಾರ ವೃದ್ಧಿ, ಸರ್ಕಾರದ ಮುಂದೆ ಸದಸ್ಯರ ಪ್ರತಿನಿಧಿತ್ವ ಮತ್ತು ಬಲಿಷ್ಠ ಸ್ಥಳೀಯ ಆರ್ಥಿಕತೆಗಾಗಿ ವ್ಯಾಪಾರಿಗಳು, ತಯಾರಕರು ಮತ್ತು ಸೇವಾ ಉದ್ಯಮಗಳನ್ನು ಒಗ್ಗೂಡಿಸುತ್ತದೆ."
              />
            </p>
            </StaggerItem>
            <StaggerItem>
            <div className="hero-actions">
              <Link href="/join/" className="btn btn-green"><T en="Become a member" kn="ಸದಸ್ಯರಾಗಿ" /></Link>
              <Link href="/events/" className="btn btn-ghost"><T en="Upcoming events" kn="ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು" /></Link>
            </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <Stagger className="stats" gap={0.1}>
            {stats.map((s) => (
              <StaggerItem className="stat" key={s.value + s.label.en}>
                <b>{s.value}</b>
                <span><L v={s.label} /></span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {upcoming.length > 0 && (
      <section>
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow"><T en="What's on" kn="ಕಾರ್ಯಕ್ರಮ ಪಟ್ಟಿ" /></p>
              <h2><T en="Upcoming events" kn="ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು" /></h2>
            </div>
            <Link href="/events/" className="link-more"><T en="All events →" kn="ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು →" /></Link>
          </Reveal>
          <Stagger className="event-list" gap={0.08}>
            {upcoming.map((e) => <StaggerItem key={e.slug}><EventCard e={e} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
      )}

      <section>
        <div className="container two-col">
          <div>
            <Reveal className="section-head">
              <div>
                <p className="eyebrow"><T en="Updates" kn="ಮಾಹಿತಿ" /></p>
                <h2><T en="News & circulars" kn="ಸುದ್ದಿ ಮತ್ತು ಸುತ್ತೋಲೆಗಳು" /></h2>
              </div>
              <Link href="/news/" className="link-more"><T en="View all →" kn="ಎಲ್ಲಾ ನೋಡಿ →" /></Link>
            </Reveal>
            <Stagger className="post-list" gap={0.08}>
              {posts.slice(0, 4).map((p) => <StaggerItem key={p.slug}><PostRow p={p} /></StaggerItem>)}
            </Stagger>
          </div>
          <Reveal as="aside" className="quote-card" delay={0.15}>
            <p className="eyebrow"><T en="Leadership 2026–27" kn="ನಾಯಕತ್ವ 2026–27" /></p>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", lineHeight: 1.45 }}>
              <T
                en="Nataraj Prabhu took charge as President on 29 September 2026, succeeding Ammunje Prabhakar Nayak."
                kn="ನಟರಾಜ ಪ್ರಭು ಅವರು 2026ರ ಸೆಪ್ಟೆಂಬರ್ 29ರಂದು ಅಮ್ಮುಂಜೆ ಪ್ರಭಾಕರ ನಾಯಕ್ ಅವರಿಂದ ಅಧ್ಯಕ್ಷರಾಗಿ ಅಧಿಕಾರ ಸ್ವೀಕರಿಸಿದರು."
              />
            </p>
            <div className="leader-list">
              {leaders.map((b, i) => (
                <div className="who" key={b.name}>
                  <Avatar name={b.name} hue={[20, 340, 210, 140][i]} src={b.photo} />
                  <div>
                    <b>{b.name}</b>
                    <span className="meta"><L v={b.role} /></span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about/#bearers" className="link-more"><T en="Full team & directors →" kn="ಪೂರ್ಣ ತಂಡ ಮತ್ತು ನಿರ್ದೇಶಕರು →" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="parallax-band message-band">
        <div className="band-bg" data-parallax="0.12" style={{ backgroundImage: "url(/office.jpeg)" }} />
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-light)" }}><T en="President's message" kn="ಅಧ್ಯಕ್ಷರ ಸಂದೇಶ" /></p>
            <blockquote lang="en">“{pm.visionQuote}”</blockquote>
            <p className="band-by">— {pm.signoff.name}, President 2026–27</p>
            <Link href="/about/#message" className="btn btn-light"><T en="Read the full message" kn="ಪೂರ್ಣ ಸಂದೇಶ ಓದಿ" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section-paper">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow"><T en="Gallery" kn="ಗ್ಯಾಲರಿ" /></p>
              <h2><T en="From the Chamber" kn="ಚೇಂಬರ್‌ನಿಂದ" /></h2>
            </div>
            <Link href="/gallery/" className="link-more"><T en="Open gallery →" kn="ಗ್ಯಾಲರಿ ತೆರೆಯಿರಿ →" /></Link>
          </Reveal>
          <Reveal><Carousel label="Chamber photos">
            {STRIP.map((id) => (
              <Link key={id} href="/gallery/" className="strip-card">
                <Photo id={id} ratio="1 / 1" label={photo(id).title} />
              </Link>
            ))}
          </Carousel></Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="join-band">
            <div>
              <p className="eyebrow" style={{ color: "var(--green-light)" }}><T en="Membership" kn="ಸದಸ್ಯತ್ವ" /></p>
              <h2><T en="Join the businesses shaping Udupi's economy" kn="ಉಡುಪಿಯ ಆರ್ಥಿಕತೆಯನ್ನು ರೂಪಿಸುತ್ತಿರುವ ಉದ್ಯಮಗಳೊಂದಿಗೆ ಸೇರಿ" /></h2>
              <p className="muted-on-dark"><T en="Reach the Chamber office to know about membership." kn="ಸದಸ್ಯತ್ವದ ಬಗ್ಗೆ ತಿಳಿಯಲು ಚೇಂಬರ್ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ." /></p>
              <Link href="/join/" className="btn btn-light"><T en="Membership enquiry" kn="ಸದಸ್ಯತ್ವ ವಿಚಾರಣೆ" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
