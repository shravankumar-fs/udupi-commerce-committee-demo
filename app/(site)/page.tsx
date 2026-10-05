import Link from "next/link";
import { bearers, categories, events, heroSlides, posts, stats } from "@/lib/data";
import { photo } from "@/lib/photos";
import { L, T } from "@/components/lang";
import { EventCard, PostRow } from "@/components/Cards";
import { HeroSearch } from "@/components/HeroSearch";
import { HeroSlides } from "@/components/Carousel";
import { Carousel } from "@/components/Carousel";
import { IndustriesCarousel } from "@/components/IndustriesCarousel";
import { Initials, Photo } from "@/components/Photo";

const STRIP = ["offload", "matha", "university", "carstreet", "paddy", "kaup", "yakshagana", "trawlers", "karkala", "kodi", "pond", "coconut"];

export default function Home() {
  const upcoming = events.filter((e) => e.upcoming).slice(0, 4);
  const leaders = bearers.filter((b) => b.group === "officer").filter((b, i) => i < 3 || b.role.en === "Treasurer");
  return (
    <>
      <section className="hero hero-photo">
        <HeroSlides slides={heroSlides.map((h) => ({ src: photo(h.photo).src, alt: photo(h.photo).title, caption: h.caption, credit: `${photo(h.photo).author}, ${photo(h.photo).license}` }))} />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow"><T en="Since 2003 · Udupi district" kn="2003ರಿಂದ · ಉಡುಪಿ ಜಿಲ್ಲೆ" /></p>
            <h1>
              <T en="The voice of " kn="ಉಡುಪಿಯ " />
              <em><T en="Udupi's" kn="ವ್ಯಾಪಾರ ಸಮುದಾಯದ" /></em>
              <T en=" business community" kn=" ಧ್ವನಿ" />
            </h1>
            <p className="lead">
              <T
                en="The Udupi Chamber of Commerce and Industry brings together traders, manufacturers and service businesses to grow trade, represent members to government, and build a stronger local economy."
                kn="ಉಡುಪಿ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿ ವ್ಯಾಪಾರ ವೃದ್ಧಿ, ಸರ್ಕಾರದ ಮುಂದೆ ಸದಸ್ಯರ ಪ್ರತಿನಿಧಿತ್ವ ಮತ್ತು ಬಲಿಷ್ಠ ಸ್ಥಳೀಯ ಆರ್ಥಿಕತೆಗಾಗಿ ವ್ಯಾಪಾರಿಗಳು, ತಯಾರಕರು ಮತ್ತು ಸೇವಾ ಉದ್ಯಮಗಳನ್ನು ಒಗ್ಗೂಡಿಸುತ್ತದೆ."
              />
            </p>
            <div className="hero-actions">
              <Link href="/join/" className="btn btn-green"><T en="Become a member" kn="ಸದಸ್ಯರಾಗಿ" /></Link>
              <Link href="/events/" className="btn btn-ghost"><T en="Upcoming events" kn="ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು" /></Link>
            </div>
          </div>
          <HeroSearch />
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.value + s.label.en}>
                <b>{s.value}</b>
                <span><L v={s.label} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow"><T en="Udupi means business" kn="ಉಡುಪಿ ಎಂದರೆ ಉದ್ಯಮ" /></p>
              <h2><T en="The industries that built Udupi" kn="ಉಡುಪಿಯನ್ನು ಕಟ್ಟಿದ ಉದ್ಯಮಗಳು" /></h2>
            </div>
            <Link href="/members/" className="link-more"><T en="Find member businesses →" kn="ಸದಸ್ಯ ಉದ್ಯಮಗಳನ್ನು ಹುಡುಕಿ →" /></Link>
          </div>
          <IndustriesCarousel />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow"><T en="What's on" kn="ಕಾರ್ಯಕ್ರಮ ಪಟ್ಟಿ" /></p>
              <h2><T en="Upcoming events" kn="ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು" /></h2>
            </div>
            <Link href="/events/" className="link-more"><T en="All events →" kn="ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು →" /></Link>
          </div>
          <div className="event-list">
            {upcoming.map((e) => <EventCard key={e.slug} e={e} />)}
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow"><T en="Member directory" kn="ಸದಸ್ಯರ ಡೈರೆಕ್ಟರಿ" /></p>
              <h2><T en="Browse businesses by sector" kn="ವಲಯವಾರು ಉದ್ಯಮಗಳನ್ನು ನೋಡಿ" /></h2>
            </div>
            <Link href="/members/" className="link-more"><T en="Full directory →" kn="ಪೂರ್ಣ ಡೈರೆಕ್ಟರಿ →" /></Link>
          </div>
          <div className="cat-grid">
            {categories.map((c) => (
              <Link key={c.id} href={`/members/?cat=${c.id}`} className="cat-tile">
                <span className="cat-icon" aria-hidden="true">{c.icon}</span>
                <span>
                  <strong><L v={c.name} /></strong>
                  <span><T en="View businesses →" kn="ಉದ್ಯಮಗಳನ್ನು ನೋಡಿ →" /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <div className="section-head">
              <div>
                <p className="eyebrow"><T en="Updates" kn="ಮಾಹಿತಿ" /></p>
                <h2><T en="News & circulars" kn="ಸುದ್ದಿ ಮತ್ತು ಸುತ್ತೋಲೆಗಳು" /></h2>
              </div>
              <Link href="/news/" className="link-more"><T en="View all →" kn="ಎಲ್ಲಾ ನೋಡಿ →" /></Link>
            </div>
            <div className="post-list">
              {posts.slice(0, 4).map((p) => <PostRow key={p.slug} p={p} />)}
            </div>
          </div>
          <aside className="quote-card">
            <p className="eyebrow"><T en="Leadership 2026–27" kn="ನಾಯಕತ್ವ 2026–27" /></p>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", lineHeight: 1.45 }}>
              <T
                en="Nataraj Prabhu took charge as President on 30 September 2026, succeeding Ammunje Prabhakar Nayak."
                kn="ನಟರಾಜ ಪ್ರಭು ಅವರು 2026ರ ಸೆಪ್ಟೆಂಬರ್ 30ರಂದು ಅಮ್ಮುಂಜೆ ಪ್ರಭಾಕರ ನಾಯಕ್ ಅವರಿಂದ ಅಧ್ಯಕ್ಷರಾಗಿ ಅಧಿಕಾರ ಸ್ವೀಕರಿಸಿದರು."
              />
            </p>
            <div className="leader-list">
              {leaders.map((b, i) => (
                <div className="who" key={b.name}>
                  <Initials name={b.name} hue={[20, 340, 210, 140][i]} />
                  <div>
                    <b>{b.name}</b>
                    <span className="meta"><L v={b.role} /></span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about/#bearers" className="link-more"><T en="Full team & directors →" kn="ಪೂರ್ಣ ತಂಡ ಮತ್ತು ನಿರ್ದೇಶಕರು →" /></Link>
          </aside>
        </div>
      </section>

      <section className="section-paper">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow"><T en="Gallery" kn="ಗ್ಯಾಲರಿ" /></p>
              <h2><T en="Our Udupi" kn="ನಮ್ಮ ಉಡುಪಿ" /></h2>
            </div>
            <Link href="/gallery/" className="link-more"><T en="Open gallery →" kn="ಗ್ಯಾಲರಿ ತೆರೆಯಿರಿ →" /></Link>
          </div>
          <Carousel label="Photos of Udupi">
            {STRIP.map((id) => (
              <Link key={id} href="/gallery/" className="strip-card">
                <Photo id={id} ratio="1 / 1" label={photo(id).title} />
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="join-band">
            <div>
              <p className="eyebrow" style={{ color: "var(--green-light)" }}><T en="Membership" kn="ಸದಸ್ಯತ್ವ" /></p>
              <h2><T en="Join the businesses shaping Udupi's economy" kn="ಉಡುಪಿಯ ಆರ್ಥಿಕತೆಯನ್ನು ರೂಪಿಸುತ್ತಿರುವ ಉದ್ಯಮಗಳೊಂದಿಗೆ ಸೇರಿ" /></h2>
              <p className="muted-on-dark"><T en="Apply online in 3 minutes. The office will verify and confirm within 3 working days." kn="3 ನಿಮಿಷದಲ್ಲಿ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ. 3 ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಕಚೇರಿ ದೃಢೀಕರಿಸುತ್ತದೆ." /></p>
              <Link href="/join/" className="btn btn-light"><T en="Apply for membership" kn="ಸದಸ್ಯತ್ವಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" /></Link>
            </div>
            <ul>
              <li><T en="Your own business page in the member directory" kn="ಸದಸ್ಯರ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ನಿಮ್ಮದೇ ಉದ್ಯಮ ಪುಟ" /></li>
              <li><T en="Government circulars on WhatsApp, the day they're issued" kn="ಸರ್ಕಾರಿ ಸುತ್ತೋಲೆಗಳು ಅದೇ ದಿನ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ" /></li>
              <li><T en="Seminars on GST, tourism and finance" kn="ಜಿಎಸ್‌ಟಿ, ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ಹಣಕಾಸು ವಿಚಾರಸಂಕಿರಣಗಳು" /></li>
              <li><T en="Priority stalls at trade fairs" kn="ವ್ಯಾಪಾರ ಮೇಳಗಳಲ್ಲಿ ಮಳಿಗೆ ಆದ್ಯತೆ" /></li>
              <li><T en="A collective voice with the district administration" kn="ಜಿಲ್ಲಾಡಳಿತದ ಮುಂದೆ ಸಾಮೂಹಿಕ ಧ್ವನಿ" /></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
