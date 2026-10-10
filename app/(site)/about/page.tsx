import { bearers, org, presidentMessage as pm, presidents, stateCommittee } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { DateText, L, T } from "@/components/lang";
import { PageHead } from "@/components/Cards";
import { Avatar, Photo } from "@/components/Photo";
import { Carousel } from "@/components/Carousel";
import { photo } from "@/lib/photos";

export const metadata = { title: "About" };

const objectives = [
  { t: { en: "Represent members", kn: "ಸದಸ್ಯರ ಪ್ರತಿನಿಧಿತ್ವ" }, d: { en: "Take the concerns of traders and industries — tariffs, taxes, infrastructure — to the district administration and the state government.", kn: "ತೆರಿಗೆ, ವಿದ್ಯುತ್ ದರ, ಮೂಲಸೌಕರ್ಯ ಕುರಿತ ವ್ಯಾಪಾರಿಗಳ ಸಮಸ್ಯೆಗಳನ್ನು ಜಿಲ್ಲಾಡಳಿತ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರದ ಮುಂದೆ ಇಡುವುದು." } },
  { t: { en: "Grow local trade & tourism", kn: "ಸ್ಥಳೀಯ ವ್ಯಾಪಾರ ಮತ್ತು ಪ್ರವಾಸೋದ್ಯಮ" }, d: { en: "Seminars and partnerships with hotel, homestay and trade associations to grow Udupi's economy.", kn: "ಹೋಟೆಲ್, ಹೋಮ್‌ಸ್ಟೇ ಮತ್ತು ವ್ಯಾಪಾರಿ ಸಂಘಗಳೊಂದಿಗೆ ಸೇರಿ ಉಡುಪಿಯ ಆರ್ಥಿಕತೆಯ ಬೆಳವಣಿಗೆ." } },
  { t: { en: "Keep members informed", kn: "ಸದಸ್ಯರಿಗೆ ಮಾಹಿತಿ" }, d: { en: "Share circulars, tax changes and government schemes quickly and clearly.", kn: "ಸುತ್ತೋಲೆಗಳು, ತೆರಿಗೆ ಬದಲಾವಣೆಗಳು ಮತ್ತು ಯೋಜನೆಗಳನ್ನು ಶೀಘ್ರವಾಗಿ ಹಂಚಿಕೊಳ್ಳುವುದು." } },
  { t: { en: "Connect businesses", kn: "ಉದ್ಯಮಗಳ ಸಂಪರ್ಕ" }, d: { en: "Bring together businesses across sectors — from Malpe's fisheries to Manipal's services.", kn: "ಮಲ್ಪೆಯ ಮೀನುಗಾರಿಕೆಯಿಂದ ಮಣಿಪಾಲದ ಸೇವೆಗಳವರೆಗೆ ಎಲ್ಲ ವಲಯಗಳ ಉದ್ಯಮಗಳನ್ನು ಒಗ್ಗೂಡಿಸುವುದು." } },
];

const HUES = [20, 340, 210, 140, 35, 260, 195, 0, 90, 230, 160, 50, 320, 15, 185, 120];

export default function AboutPage() {
  const officers = bearers.filter((b) => b.group === "officer");
  const directors = bearers.filter((b) => b.group === "director");
  return (
    <>
      <PageHead
        photos={["office", "stage-group", "agm-stage-group"]}
        eyebrow={<T en="About the Chamber" kn="ಚೇಂಬರ್ ಬಗ್ಗೆ" />}
        title={<T en="Udupi's chamber of commerce, since 1964" kn="1964ರಿಂದ ಉಡುಪಿಯ ವಾಣಿಜ್ಯ ಮಂಡಳಿ" />}
        intro={<T en="The Udupi Chamber of Commerce and Industry (UCCI) brings together traders, manufacturers and service businesses of Udupi district — like the chambers of commerce in Mumbai or Bengaluru, rooted in our coastal town." kn="ಉಡುಪಿ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿ (UCCI) ಉಡುಪಿ ಜಿಲ್ಲೆಯ ವ್ಯಾಪಾರಿಗಳು, ತಯಾರಕರು ಮತ್ತು ಸೇವಾ ಉದ್ಯಮಗಳನ್ನು ಒಗ್ಗೂಡಿಸುತ್ತದೆ." />}
      />
      <section>
        <div className="container about-grid">
          <div>
            <h2><T en="Who we are" kn="ನಾವು ಯಾರು" /></h2>
            <p className="lead">
              <T
                en="UCCI was established in 1964 and is registered (5 February 2003) as a not-for-profit company limited by guarantee. It works from Chamber Tower on Railway Godown Road, Indrali, and is led by an elected President, office bearers and a board of directors who serve one-year terms."
                kn="UCCI 1964ರಲ್ಲಿ ಸ್ಥಾಪನೆಯಾಗಿದ್ದು, 2003ರ ಫೆಬ್ರವರಿ 5ರಂದು ಲಾಭರಹಿತ ಕಂಪನಿಯಾಗಿ ನೋಂದಣಿಯಾಗಿದೆ. ಇಂದ್ರಾಳಿಯ ರೈಲ್ವೇ ಗೋಡೌನ್ ರಸ್ತೆಯ ಚೇಂಬರ್ ಟವರ್‌ನಿಂದ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಚುನಾಯಿತ ಅಧ್ಯಕ್ಷರು, ಪದಾಧಿಕಾರಿಗಳು ಮತ್ತು ನಿರ್ದೇಶಕರ ಮಂಡಳಿ ಇದನ್ನು ಮುನ್ನಡೆಸುತ್ತದೆ."
              />
            </p>
            <dl className="facts">
              <div><dt><T en="Established" kn="ಸ್ಥಾಪನೆ" /></dt><dd>1964</dd></div>
              <div><dt><T en="Registered as a company" kn="ಕಂಪನಿಯಾಗಿ ನೋಂದಣಿ" /></dt><dd><DateText iso={org.incorporated} /></dd></div>
              <div><dt><T en="Type" kn="ಪ್ರಕಾರ" /></dt><dd><T en="Not-for-profit (company limited by guarantee)" kn="ಲಾಭರಹಿತ ಸಂಸ್ಥೆ" /></dd></div>
              <div><dt><T en="Office" kn="ಕಚೇರಿ" /></dt><dd><L v={org.address} /></dd></div>
            </dl>
          </div>
          <div className="about-carousel">
            <Carousel label="The Chamber at a glance" autoplay={4500}>
              {["office", "agm-dais-1", "hall-audience", "committee-group", "ceremony-lamp-1"].map((id) => (
                <Photo key={id} id={id} ratio="4 / 3" label={photo(id).title} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="container">
          <h2><T en="What we do" kn="ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ" /></h2>
          <Stagger className="objectives" gap={0.08}>
            {objectives.map((o) => (
              <StaggerItem className="objective" key={o.t.en}>
                <h3><L v={o.t} /></h3>
                <p className="small" style={{ fontSize: ".95rem" }}><L v={o.d} /></p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="message" className="section-paper">
        <div className="container message-grid">
          <Reveal className="message-side">
            <div className="message-portrait" data-parallax="0.04">
              <img src="/Comittee_Board_members/Nataraj_Prabhu.jpeg" alt="Nataraj Prabhu, President" />
            </div>
            <b>{pm.signoff.name}</b>
            <span className="meta"><T en="President, 2026–27" kn="ಅಧ್ಯಕ್ಷರು, 2026–27" /></span>
          </Reveal>
          <div className="message-body" lang="en">
            <p className="eyebrow"><T en="President's message" kn="ಅಧ್ಯಕ್ಷರ ಸಂದೇಶ" /><span className="meta" style={{ textTransform: "none", letterSpacing: 0 }}> <T en="" kn="· ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ" /></span></p>
            <h2>{pm.title}</h2>
            {pm.intro.map((t) => <p key={t}>{t}</p>)}
            <blockquote className="vision">“{pm.visionQuote}”</blockquote>
            <p>{pm.vision}</p>
            <h3>Our Priorities</h3>
            <ul className="priorities">{pm.priorities.map((t) => <li key={t}>{t}</li>)}</ul>
            {pm.sections.map((sec) => (
              <div key={sec.h}><h3>{sec.h}</h3>{sec.p.map((t) => <p key={t}>{t}</p>)}</div>
            ))}
            <p className="message-closing">{pm.closing}</p>
            <p>{pm.thanks}</p>
            <p className="signoff">With warm regards,<br /><b>{pm.signoff.name}</b><br />{pm.signoff.role}<br /><em>“{pm.motto}”</em></p>
          </div>
        </div>
      </section>

      <section id="bearers">
        <div className="container">
          <p className="eyebrow"><T en="2026 – 27" kn="2026 – 27" /></p>
          <h2><T en="Office bearers" kn="ಪದಾಧಿಕಾರಿಗಳು" /></h2>
          <Stagger className="bearers" gap={0.07}>
            {officers.map((b, i) => (
              <StaggerItem className={`bearer ${i === 0 ? "bearer-lead" : ""}`} key={b.name}>
                <Avatar name={b.name} hue={HUES[i]} src={b.photo} />
                <div>
                  <b>{b.name}</b>
                  <span className="meta"><L v={b.role} /></span>
                  {b.company && <span className="meta company">{b.company}</span>}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <h3 style={{ marginTop: "2.5rem" }}><T en="Board of directors" kn="ನಿರ್ದೇಶಕರ ಮಂಡಳಿ" /></h3>
          <Reveal className="directors">
            {directors.map((d, i) => (
              <div className="director" key={d.name}>
                <Avatar name={d.name} hue={HUES[(i + 6) % HUES.length]} src={d.photo} />
                <span>{d.name}{d.company && <em className="meta company">{d.company}</em>}</span>
              </div>
            ))}
            <div className="director">
              <Avatar name={stateCommittee.name} hue={30} src={stateCommittee.photo} />
              <span>{stateCommittee.name} <em className="meta">· <L v={stateCommittee.role} /></em></span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-paper">
        <div className="container">
          <h2><T en="Past presidents" kn="ಹಿಂದಿನ ಅಧ್ಯಕ್ಷರು" /></h2>
          <Reveal><ol className="presidents">
            {[...presidents].reverse().map((p) => (
              <li key={p.name}>
                <img src={p.photo} alt={p.name} loading="lazy" />
                <b>{p.name}</b>
                <span className="meta">{p.term}</span>
              </li>
            ))}
          </ol></Reveal>
          <p className="small" style={{ marginTop: "1.25rem" }}>
            <T en="Current President: Nataraj Prabhu, 2026–27." kn="ಹಾಲಿ ಅಧ್ಯಕ್ಷರು: ನಟರಾಜ ಪ್ರಭು, 2026–27." />
          </p>
        </div>
      </section>
    </>
  );
}
