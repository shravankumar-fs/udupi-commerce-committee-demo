import Link from "next/link";
import { org } from "@/lib/data";
import { L, T } from "./lang";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <Logo size={40} />
            <strong><L v={org.name} /></strong>
          </div>
          <p className="muted-on-dark">
            <T en="Representing traders, manufacturers and service businesses of Udupi district." kn="ಉಡುಪಿ ಜಿಲ್ಲೆಯ ವ್ಯಾಪಾರಿಗಳು, ತಯಾರಕರು ಮತ್ತು ಸೇವಾ ಉದ್ಯಮಗಳ ಪ್ರತಿನಿಧಿ ಸಂಸ್ಥೆ." />
          </p>
        </div>
        <div>
          <h4><T en="Explore" kn="ಅನ್ವೇಷಿಸಿ" /></h4>
          <Link href="/members/"><T en="Member Directory" kn="ಸದಸ್ಯರ ಡೈರೆಕ್ಟರಿ" /></Link>
          <Link href="/events/"><T en="Events" kn="ಕಾರ್ಯಕ್ರಮಗಳು" /></Link>
          <Link href="/news/"><T en="News & Circulars" kn="ಸುದ್ದಿ ಮತ್ತು ಸುತ್ತೋಲೆ" /></Link>
          <Link href="/gallery/"><T en="Gallery" kn="ಗ್ಯಾಲರಿ" /></Link>
        </div>
        <div>
          <h4><T en="The Chamber" kn="ಚೇಂಬರ್" /></h4>
          <Link href="/about/"><T en="About us" kn="ನಮ್ಮ ಬಗ್ಗೆ" /></Link>
          <Link href="/about/#bearers"><T en="Office bearers" kn="ಪದಾಧಿಕಾರಿಗಳು" /></Link>
          <Link href="/join/"><T en="Membership" kn="ಸದಸ್ಯತ್ವ" /></Link>
          <Link href="/admin/"><T en="Admin login" kn="ನಿರ್ವಾಹಕ ಲಾಗಿನ್" /></Link>
        </div>
        <div>
          <h4><T en="Contact" kn="ಸಂಪರ್ಕ" /></h4>
          <p className="muted-on-dark"><L v={org.address} /></p>
          <a href={`tel:${org.phone.replace(/\s/g, "")}`}>{org.phone}</a>
          <a href={`mailto:${org.email}`}>{org.email}</a>
          <a href={`https://wa.me/${org.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 <L v={org.name} /></span>
        <span><a href="/credits/"><T en="Photo credits & sources" kn="ಫೋಟೋ ಕೃಪೆ ಮತ್ತು ಮೂಲಗಳು" /></a> · <T en="Demo website by" kn="ಡೆಮೊ ವೆಬ್‌ಸೈಟ್:" /> <a href="https://aghoralabs.com" target="_blank" rel="noreferrer">Aghora Labs</a></span>
      </div>
    </footer>
  );
}
