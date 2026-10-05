"use client";
import { useState } from "react";
import { areas, categories, plans } from "@/lib/data";
import { useLang, T } from "./lang";

export function JoinForm() {
  const { lang } = useLang();
  const [done, setDone] = useState(false);
  const kn = lang === "kn";
  if (done)
    return (
      <div className="success">
        <h3 style={{ color: "inherit" }}><T en="Application received ✓" kn="ಅರ್ಜಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ ✓" /></h3>
        <p style={{ margin: 0 }}><T en="Reference no. UCCI-2026-0417. The office will call you within 3 working days to verify your details. (This is a demo — nothing was submitted.)" kn="ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ UCCI-2026-0417. ನಿಮ್ಮ ವಿವರ ಪರಿಶೀಲಿಸಲು 3 ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಕಚೇರಿ ಕರೆ ಮಾಡುತ್ತದೆ. (ಇದು ಡೆಮೊ.)" /></p>
      </div>
    );
  return (
    <form className="panel" onSubmit={(e) => { e.preventDefault(); setDone(true); window.scrollTo({ top: (e.target as HTMLElement).offsetTop - 140 }); }}>
      <div className="form-grid">
        <label className="field">{kn ? "ಉದ್ಯಮದ ಹೆಸರು *" : "Business name *"}<input className="input" required /></label>
        <label className="field">{kn ? "ಮಾಲೀಕರ ಹೆಸರು *" : "Owner / proprietor *"}<input className="input" required /></label>
        <label className="field">{kn ? "ವಲಯ *" : "Sector *"}
          <select className="input" required defaultValue="">
            <option value="" disabled>{kn ? "ಆಯ್ಕೆಮಾಡಿ" : "Select"}</option>
            {categories.map((c) => <option key={c.id}>{c.name[lang]}</option>)}
          </select>
        </label>
        <label className="field">{kn ? "ಪ್ರದೇಶ *" : "Area *"}
          <select className="input" required defaultValue="">
            <option value="" disabled>{kn ? "ಆಯ್ಕೆಮಾಡಿ" : "Select"}</option>
            {areas.map((a) => <option key={a}>{a}</option>)}
          </select>
        </label>
        <label className="field">{kn ? "ಮೊಬೈಲ್ (ವಾಟ್ಸಾಪ್) *" : "Mobile (WhatsApp) *"}<input className="input" required inputMode="tel" /></label>
        <label className="field">{kn ? "ಇಮೇಲ್" : "Email"}<input className="input" type="email" /></label>
        <label className="field">{kn ? "ಜಿಎಸ್‌ಟಿ ಸಂಖ್ಯೆ (ಐಚ್ಛಿಕ)" : "GSTIN (optional)"}<input className="input" /></label>
        <label className="field">{kn ? "ಸದಸ್ಯತ್ವ ಪ್ರಕಾರ *" : "Membership type *"}
          <select className="input" required defaultValue="ordinary">
            {plans.map((p) => <option key={p.id} value={p.id}>{p.name[lang]} — {p.price}</option>)}
          </select>
        </label>
        <label className="field full">{kn ? "ವ್ಯವಹಾರ ವಿಳಾಸ *" : "Business address *"}<textarea className="input" rows={3} required /></label>
        <div className="full">
          <button className="btn btn-green" type="submit"><T en="Submit application" kn="ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" /></button>
        </div>
      </div>
    </form>
  );
}
