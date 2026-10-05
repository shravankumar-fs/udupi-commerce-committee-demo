import { plans } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { L, T } from "@/components/lang";
import { PageHead } from "@/components/Cards";
import { JoinForm } from "@/components/JoinForm";
import { Carousel } from "@/components/Carousel";
import { Photo } from "@/components/Photo";

const WHY = [
  { photo: "carstreet", t: { en: "Be found", kn: "ಗ್ರಾಹಕರಿಗೆ ಕಾಣಿಸಿಕೊಳ್ಳಿ" }, d: { en: "Your own page in the member directory, with call, WhatsApp and directions.", kn: "ಕರೆ, ವಾಟ್ಸಾಪ್ ಮತ್ತು ದಾರಿಯೊಂದಿಗೆ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ನಿಮ್ಮದೇ ಪುಟ." } },
  { photo: "bank", t: { en: "Stay informed", kn: "ಮಾಹಿತಿ ಪಡೆಯಿರಿ" }, d: { en: "Tax changes, schemes and circulars on WhatsApp the day they are issued.", kn: "ತೆರಿಗೆ ಬದಲಾವಣೆ, ಯೋಜನೆಗಳು ಮತ್ತು ಸುತ್ತೋಲೆಗಳು ಅದೇ ದಿನ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ." } },
  { photo: "university", t: { en: "Learn & grow", kn: "ಕಲಿಯಿರಿ, ಬೆಳೆಯಿರಿ" }, d: { en: "Seminars on GST, tourism, exports and finance.", kn: "ಜಿಎಸ್‌ಟಿ, ಪ್ರವಾಸೋದ್ಯಮ, ರಫ್ತು ಮತ್ತು ಹಣಕಾಸು ವಿಚಾರಸಂಕಿರಣಗಳು." } },
  { photo: "offload", t: { en: "Trade more", kn: "ಹೆಚ್ಚು ವ್ಯಾಪಾರ" }, d: { en: "Priority stalls at trade fairs and introductions to other members.", kn: "ವ್ಯಾಪಾರ ಮೇಳಗಳಲ್ಲಿ ಆದ್ಯತೆ ಮತ್ತು ಇತರ ಸದಸ್ಯರ ಪರಿಚಯ." } },
  { photo: "citycentre", t: { en: "Be heard", kn: "ನಿಮ್ಮ ಧ್ವನಿ" }, d: { en: "A collective voice with the district administration and government.", kn: "ಜಿಲ್ಲಾಡಳಿತ ಮತ್ತು ಸರ್ಕಾರದ ಮುಂದೆ ಸಾಮೂಹಿಕ ಧ್ವನಿ." } },
];

export const metadata = { title: "Membership" };

export default function JoinPage() {
  return (
    <>
      <PageHead
        photos={["university", "trawlers", "paddy"]}
        eyebrow={<T en="Membership" kn="ಸದಸ್ಯತ್ವ" />}
        title={<T en="Become a member" kn="ಸದಸ್ಯರಾಗಿ" />}
        intro={<T en="Join Udupi's largest network of businesses. Apply online — no forms to collect from the office." kn="ಉಡುಪಿಯ ಅತಿದೊಡ್ಡ ಉದ್ಯಮ ಜಾಲಕ್ಕೆ ಸೇರಿ. ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ — ಕಚೇರಿಗೆ ಹೋಗುವ ಅಗತ್ಯವಿಲ್ಲ." />}
      />
      <section className="industries-section">
        <div className="container">
          <h2><T en="Why join the Chamber" kn="ಚೇಂಬರ್‌ಗೆ ಏಕೆ ಸೇರಬೇಕು" /></h2>
          <Carousel label="Benefits of membership" autoplay={5000}>
            {WHY.map((w) => (
              <div key={w.t.en} className="industry-card">
                <Photo id={w.photo} ratio="4 / 3" />
                <div className="industry-body">
                  <h3><L v={w.t} /></h3>
                  <p className="small"><L v={w.d} /></p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section>
        <div className="container">
          <Stagger className="plans" gap={0.1}>
            {plans.map((p) => (
              <StaggerItem key={p.id} className={`plan ${p.featured ? "featured" : ""}`}>
                {p.featured && <span className="badge"><T en="Most popular" kn="ಹೆಚ್ಚು ಜನಪ್ರಿಯ" /></span>}
                <h3><L v={p.name} /></h3>
                <p className="price">{p.price}</p>
                <span className="per"><L v={p.per} /></span>
                <ul>{p.points.map((pt) => <li key={pt.en}><L v={pt} /></li>)}</ul>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="small" style={{ marginTop: "1rem" }}><T en="Fees shown are placeholders for the demo." kn="ತೋರಿಸಿರುವ ಶುಲ್ಕಗಳು ಡೆಮೊಗಾಗಿ ಮಾತ್ರ." /></p>
        </div>
      </section>
      <section className="section-paper">
        <div className="container">
          <h2><T en="How it works" kn="ಪ್ರಕ್ರಿಯೆ" /></h2>
          <Stagger className="steps" gap={0.1}>
            <StaggerItem className="step"><h3><T en="Apply online" kn="ಆನ್‌ಲೈನ್ ಅರ್ಜಿ" /></h3><p className="small"><T en="Fill the form below in 3 minutes." kn="ಕೆಳಗಿನ ಫಾರ್ಮ್ ಅನ್ನು 3 ನಿಮಿಷದಲ್ಲಿ ಭರ್ತಿ ಮಾಡಿ." /></p></StaggerItem>
            <StaggerItem className="step"><h3><T en="Verification" kn="ಪರಿಶೀಲನೆ" /></h3><p className="small"><T en="Office calls to confirm your details." kn="ವಿವರ ದೃಢೀಕರಿಸಲು ಕಚೇರಿ ಕರೆ ಮಾಡುತ್ತದೆ." /></p></StaggerItem>
            <StaggerItem className="step"><h3><T en="Pay the fee" kn="ಶುಲ್ಕ ಪಾವತಿ" /></h3><p className="small"><T en="UPI, cheque or cash at the office." kn="ಯುಪಿಐ, ಚೆಕ್ ಅಥವಾ ಕಚೇರಿಯಲ್ಲಿ ನಗದು." /></p></StaggerItem>
            <StaggerItem className="step"><h3><T en="Go live" kn="ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಪ್ರಕಟ" /></h3><p className="small"><T en="Your business page appears in the directory." kn="ನಿಮ್ಮ ಉದ್ಯಮ ಪುಟ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ." /></p></StaggerItem>
          </Stagger>
        </div>
      </section>
      <section id="apply">
        <div className="container" style={{ maxWidth: 860 }}>
          <h2><T en="Membership application" kn="ಸದಸ್ಯತ್ವ ಅರ್ಜಿ" /></h2>
          <JoinForm />
        </div>
      </section>
    </>
  );
}
