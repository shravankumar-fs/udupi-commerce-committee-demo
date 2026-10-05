"use client";
import { useState } from "react";
import { useLang, T } from "./lang";

export function ContactForm() {
  const { lang } = useLang();
  const kn = lang === "kn";
  const [done, setDone] = useState(false);
  if (done) return <div className="success"><T en="Thank you — the office will get back to you shortly. (demo)" kn="ಧನ್ಯವಾದಗಳು — ಕಚೇರಿ ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತದೆ. (ಡೆಮೊ)" /></div>;
  return (
    <form className="panel" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <h3><T en="Send us a message" kn="ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ" /></h3>
      <div className="form-grid">
        <label className="field">{kn ? "ಹೆಸರು" : "Name"}<input className="input" required /></label>
        <label className="field">{kn ? "ಮೊಬೈಲ್" : "Mobile"}<input className="input" required inputMode="tel" /></label>
        <label className="field full">{kn ? "ವಿಷಯ" : "Subject"}
          <select className="input">
            <option>{kn ? "ಸದಸ್ಯತ್ವ" : "Membership"}</option>
            <option>{kn ? "ಕಾರ್ಯಕ್ರಮ / ಮಳಿಗೆ" : "Events / stall booking"}</option>
            <option>{kn ? "ದೂರು / ಸಮಸ್ಯೆ" : "Raise an issue"}</option>
            <option>{kn ? "ಇತರೆ" : "Other"}</option>
          </select>
        </label>
        <label className="field full">{kn ? "ಸಂದೇಶ" : "Message"}<textarea className="input" rows={4} required /></label>
        <div className="full"><button className="btn btn-primary"><T en="Send message" kn="ಕಳುಹಿಸಿ" /></button></div>
      </div>
    </form>
  );
}
