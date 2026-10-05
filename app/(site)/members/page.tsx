import { T } from "@/components/lang";
import { PageHead } from "@/components/Cards";
import { Directory } from "@/components/Directory";
import { IndustriesCarousel } from "@/components/IndustriesCarousel";

export const metadata = { title: "Member Directory" };

export default function MembersPage() {
  return (
    <>
      <PageHead
        photos={["offload", "dosa", "tiles", "hospital"]}
        eyebrow={<T en="Member directory" kn="ಸದಸ್ಯರ ಡೈರೆಕ್ಟರಿ" />}
        title={<T en="Find a trusted local business" kn="ನಂಬಿಕಸ್ಥ ಸ್ಥಳೀಯ ಉದ್ಯಮವನ್ನು ಹುಡುಕಿ" />}
        intro={<T en="Find member businesses of the Udupi Chamber of Commerce and Industry. Call, WhatsApp or get directions in one tap. (Listings shown are samples for this demo.)" kn="ಪ್ರತಿಯೊಂದು ಪಟ್ಟಿಯೂ ಉಡುಪಿ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿಯ ಪರಿಶೀಲಿತ ಸದಸ್ಯ. ಒಂದೇ ಟ್ಯಾಪ್‌ನಲ್ಲಿ ಕರೆ, ವಾಟ್ಸಾಪ್ ಅಥವಾ ದಾರಿ. (ಡೆಮೊಗಾಗಿ ಮಾದರಿ ಪಟ್ಟಿಗಳು.)" />}
      />
      <section className="industries-section" style={{ paddingBottom: 48 }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem" }}><T en="Browse by industry" kn="ಉದ್ಯಮವಾರು ನೋಡಿ" /></h2>
          <IndustriesCarousel />
        </div>
      </section>
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem" }}><T en="All member businesses" kn="ಎಲ್ಲಾ ಸದಸ್ಯ ಉದ್ಯಮಗಳು" /></h2>
          <Directory />
        </div>
      </section>
    </>
  );
}
