"use client";
import { useState } from "react";
import { useLang, T } from "./lang";

export function RegisterBox() {
  const { lang } = useLang();
  const [done, setDone] = useState(false);
  if (done)
    return (
      <div className="success">
        <b><T en="You're registered!" kn="ನಿಮ್ಮ ನೋಂದಣಿ ಯಶಸ್ವಿ!" /></b>
        <p className="small" style={{ color: "inherit" }}><T en="A confirmation has been sent on WhatsApp. (demo)" kn="ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದೃಢೀಕರಣ ಕಳುಹಿಸಲಾಗಿದೆ. (ಡೆಮೊ)" /></p>
      </div>
    );
  return (
    <form className="panel" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <h3><T en="Register to attend" kn="ಭಾಗವಹಿಸಲು ನೋಂದಾಯಿಸಿ" /></h3>
      <div style={{ display: "grid", gap: ".6rem" }}>
        <input className="input" required placeholder={lang === "kn" ? "ನಿಮ್ಮ ಹೆಸರು" : "Your name"} />
        <input className="input" required placeholder={lang === "kn" ? "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ" : "Mobile number"} inputMode="tel" />
        <input className="input" placeholder={lang === "kn" ? "ಉದ್ಯಮದ ಹೆಸರು" : "Business name"} />
        <button className="btn btn-primary" type="submit"><T en="Register" kn="ನೋಂದಾಯಿಸಿ" /></button>
      </div>
    </form>
  );
}
