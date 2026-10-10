import { org } from "@/lib/data";
import { L, T } from "@/components/lang";
import { PageHead } from "@/components/Cards";

export const metadata = { title: "Membership" };

export default function JoinPage() {
  return (
    <>
      <PageHead
        photos={["hall-audience", "agm-audience-1", "office"]}
        eyebrow={<T en="Membership" kn="ಸದಸ್ಯತ್ವ" />}
        title={<T en="Become a member" kn="ಸದಸ್ಯರಾಗಿ" />}
        intro={<T en="Entrepreneurs, associations and professionals are invited to join hands with the Udupi Chamber of Commerce & Industry." kn="ಉದ್ಯಮಿಗಳು, ಸಂಘಸಂಸ್ಥೆಗಳು ಮತ್ತು ವೃತ್ತಿಪರರು ಉಡುಪಿ ವಾಣಿಜ್ಯ ಮತ್ತು ಕೈಗಾರಿಕಾ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಕೈಜೋಡಿಸಲು ಆಹ್ವಾನ." />}
      />
      <section>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2><T en="Enrol through the Chamber office" kn="ಚೇಂಬರ್ ಕಚೇರಿಯ ಮೂಲಕ ಸೇರಿ" /></h2>
          <p className="lead"><T en="To enrol or to know about membership, please contact the office." kn="ಸದಸ್ಯತ್ವ ಪಡೆಯಲು ಅಥವಾ ಮಾಹಿತಿಗಾಗಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ." /></p>
          <div className="panel">
            <dl className="info-list">
              <div><dt><T en="Address" kn="ವಿಳಾಸ" /></dt><dd><L v={org.address} /></dd></div>
              <div><dt><T en="Phone" kn="ದೂರವಾಣಿ" /></dt><dd>{org.phone}</dd></div>
              <div><dt><T en="Email" kn="ಇಮೇಲ್" /></dt><dd>{org.email}</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
