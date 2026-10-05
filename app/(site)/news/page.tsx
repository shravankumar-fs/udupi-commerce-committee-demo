import { T } from "@/components/lang";
import { PageHead } from "@/components/Cards";
import { NewsList } from "@/components/NewsList";

export const metadata = { title: "News & Circulars" };

export default function NewsPage() {
  return (
    <>
      <PageHead
        photos={["bank", "citycentre", "station"]}
        eyebrow={<T en="News & circulars" kn="ಸುದ್ದಿ ಮತ್ತು ಸುತ್ತೋಲೆಗಳು" />}
        title={<T en="Updates for Udupi's business community" kn="ಉಡುಪಿ ವ್ಯಾಪಾರ ಸಮುದಾಯಕ್ಕೆ ಮಾಹಿತಿ" />}
        intro={<T en="Government notices, Chamber news and press releases — posted by the office, in English and Kannada." kn="ಸರ್ಕಾರಿ ಪ್ರಕಟಣೆಗಳು, ಚೇಂಬರ್ ಸುದ್ದಿ ಮತ್ತು ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆಗಳು — ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ." />}
      />
      <section>
        <div className="container"><NewsList /></div>
      </section>
    </>
  );
}
