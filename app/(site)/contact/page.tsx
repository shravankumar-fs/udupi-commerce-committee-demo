import { org } from "@/lib/data";
import { L, T } from "@/components/lang";
import { PageHead } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHead
        photos={["station", "nh66", "citycentre"]}
        eyebrow={<T en="Contact" kn="ಸಂಪರ್ಕ" />}
        title={<T en="Visit or reach the Chamber office" kn="ಚೇಂಬರ್ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ" />}
      />
      <section>
        <div className="container detail-grid">
          <div>
            <ContactForm />
            <iframe className="map" style={{ marginTop: 16 }} title="Map" loading="lazy" src="https://www.google.com/maps?q=Udupi+Chamber+of+Commerce+and+Industry,+Indrali,+Udupi&output=embed" />
          </div>
          <aside>
            <div className="panel">
              <h3><T en="Chamber office" kn="ಚೇಂಬರ್ ಕಚೇರಿ" /></h3>
              <dl className="info-list">
                <div><dt><T en="Address" kn="ವಿಳಾಸ" /></dt><dd><L v={org.address} /></dd></div>
                <div><dt><T en="Hours" kn="ಸಮಯ" /></dt><dd><L v={org.hours} /></dd></div>
                <div><dt><T en="Phone" kn="ದೂರವಾಣಿ" /></dt><dd>{org.phone}</dd></div>
                <div><dt><T en="Email" kn="ಇಮೇಲ್" /></dt><dd>{org.email}</dd></div>
              </dl>
            </div>
            <div className="panel">
              <div className="action-stack">
                <a className="btn btn-primary" href={`tel:${org.phone.replace(/\s/g, "")}`}>📞 <T en="Call the office" kn="ಕಚೇರಿಗೆ ಕರೆ" /></a>
                <a className="btn btn-wa" href={`https://wa.me/${org.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
