"use client";
import Link from "next/link";
import { useState } from "react";
import { events, members, posts } from "@/lib/data";
import { Logo } from "@/components/Logo";

// Pitch prop: shows the committee how simple the CMS (Payload) admin will be for their office staff.
type View = "dashboard" | "event" | "requests" | "circular";

const requests = [
  { name: "Sea Breeze Bakery", owner: "Latha D'Souza", sector: "Hotels & Restaurants", area: "Kaup", date: "4 Oct" },
  { name: "Udupi Solar Solutions", owner: "Arun Hegde", sector: "Retail & Trading", area: "Udupi", date: "3 Oct" },
  { name: "Manipal Dental Studio", owner: "Dr. Neha Pai", sector: "Healthcare", area: "Manipal", date: "2 Oct" },
  { name: "Karkala Agro Foods", owner: "Santosh Shetty", sector: "Agri & Food Processing", area: "Karkala", date: "30 Sep" },
];

export default function AdminPreview() {
  const [view, setView] = useState<View>("dashboard");
  const [tab, setTab] = useState<"en" | "kn">("en");
  const [saved, setSaved] = useState(false);
  const [approved, setApproved] = useState<string[]>([]);

  const nav: [View, string][] = [
    ["dashboard", "Dashboard"],
    ["event", "Events"],
    ["circular", "News & Circulars"],
    ["requests", "Membership requests"],
  ];

  return (
    <div className="admin">
      <aside className="admin-side">
        <div className="admin-brand"><Logo size={32} /> <b>UCCI Admin</b></div>
        {nav.map(([v, label]) => (
          <button key={v} className={view === v ? "on" : ""} onClick={() => { setView(v); setSaved(false); }}>
            {label}
            {v === "requests" && <span className="count">{requests.length - approved.length}</span>}
          </button>
        ))}
        <button disabled>Members ({members.length})</button>
        <button disabled>Gallery</button>
        <button disabled>Site settings</button>
        <Link href="/" className="admin-back">← View website</Link>
      </aside>

      <div className="admin-main">
        <div className="admin-top">
          <span className="demo-pill">Demo preview of the admin panel</span>
          <span className="who">Signed in as <b>Office Secretary</b></span>
        </div>

        {view === "dashboard" && (
          <>
            <h1>Good morning 👋</h1>
            <p className="muted">Here's what's happening on the website this week.</p>
            <div className="admin-cards">
              <div className="acard"><span>Website visitors (7 days)</span><b>2,846</b><em>+18%</em></div>
              <div className="acard"><span>Directory searches</span><b>1,120</b><em>+9%</em></div>
              <div className="acard"><span>Event registrations</span><b>164</b><em>GST workshop</em></div>
              <div className="acard"><span>New applications</span><b>{requests.length - approved.length}</b><em>pending review</em></div>
            </div>
            <div className="admin-row">
              <div className="apanel">
                <div className="apanel-head"><h3>Quick actions</h3></div>
                <div className="quick">
                  <button className="btn btn-primary" onClick={() => setView("event")}>+ Add event</button>
                  <button className="btn btn-ghost" onClick={() => setView("circular")}>+ Post circular</button>
                  <button className="btn btn-ghost" onClick={() => setView("requests")}>Review applications</button>
                </div>
              </div>
              <div className="apanel">
                <div className="apanel-head"><h3>Recently published</h3></div>
                <table className="atable"><tbody>
                  {posts.slice(0, 3).map((p) => <tr key={p.slug}><td>{p.title.en}</td><td className="muted">{p.date}</td></tr>)}
                  {events.slice(0, 2).map((e) => <tr key={e.slug}><td>{e.title.en}</td><td className="muted">{e.date}</td></tr>)}
                </tbody></table>
              </div>
            </div>
          </>
        )}

        {(view === "event" || view === "circular") && (
          <>
            <h1>{view === "event" ? "Add event" : "Post a circular"}</h1>
            <p className="muted">Fill in English and Kannada. Click publish — it's live on the website and shared to WhatsApp.</p>
            {saved ? (
              <div className="success" style={{ maxWidth: 760 }}>
                <b>Published ✓</b> It's now on the website. (Demo — nothing was saved.)
              </div>
            ) : (
              <form className="apanel" style={{ maxWidth: 760 }} onSubmit={(e) => { e.preventDefault(); setSaved(true); }}>
                <div className="lang-tabs">
                  <button type="button" className={tab === "en" ? "on" : ""} onClick={() => setTab("en")}>English</button>
                  <button type="button" className={tab === "kn" ? "on" : ""} onClick={() => setTab("kn")}>ಕನ್ನಡ</button>
                </div>
                <div className="form-grid">
                  <label className="field full">{tab === "en" ? "Title" : "ಶೀರ್ಷಿಕೆ"}
                    <input className="input" key={`t-${tab}`} defaultValue={tab === "en" ? (view === "event" ? "MSME Loan Mela" : "Property tax payment extended") : (view === "event" ? "ಎಂಎಸ್‌ಎಂಇ ಸಾಲ ಮೇಳ" : "ಆಸ್ತಿ ತೆರಿಗೆ ಪಾವತಿ ಗಡುವು ವಿಸ್ತರಣೆ")} />
                  </label>
                  {view === "event" ? (
                    <>
                      <label className="field">Date<input className="input" type="date" defaultValue="2026-12-12" /></label>
                      <label className="field">Time<input className="input" defaultValue="10:00 am – 1:00 pm" /></label>
                      <label className="field">Venue<input className="input" defaultValue="Vanijya Bhavan Hall" /></label>
                      <label className="field">Type
                        <select className="input"><option>Workshop</option><option>Members only</option><option>Public exhibition</option></select>
                      </label>
                    </>
                  ) : (
                    <>
                      <label className="field">Category<select className="input"><option>Circular</option><option>News</option><option>Press release</option></select></label>
                      <label className="field">Attach PDF<input className="input" type="file" accept="application/pdf" /></label>
                    </>
                  )}
                  <label className="field full">{tab === "en" ? "Description" : "ವಿವರಣೆ"}
                    <textarea className="input" rows={4} key={`d-${tab}`} defaultValue={tab === "en" ? "Details for members…" : "ಸದಸ್ಯರಿಗೆ ವಿವರ…"} />
                  </label>
                  <label className="field full">Cover photo<input className="input" type="file" accept="image/*" /></label>
                  <label className="check full"><input type="checkbox" defaultChecked /> Also send to members' WhatsApp group</label>
                  <div className="full" style={{ display: "flex", gap: ".5rem" }}>
                    <button className="btn btn-primary">Publish</button>
                    <button type="button" className="btn btn-ghost">Save draft</button>
                  </div>
                </div>
              </form>
            )}
          </>
        )}

        {view === "requests" && (
          <>
            <h1>Membership requests</h1>
            <p className="muted">Approve an application and the business page goes live in the directory automatically.</p>
            <div className="apanel" style={{ overflowX: "auto" }}>
              <table className="atable">
                <thead><tr><th>Business</th><th>Owner</th><th>Sector</th><th>Area</th><th>Received</th><th></th></tr></thead>
                <tbody>
                  {requests.map((r) => (
                    <tr key={r.name}>
                      <td><b>{r.name}</b></td><td>{r.owner}</td><td>{r.sector}</td><td>{r.area}</td><td className="muted">{r.date}</td>
                      <td>{approved.includes(r.name)
                        ? <span className="ok">Approved ✓</span>
                        : <button className="btn btn-primary btn-sm" onClick={() => setApproved([...approved, r.name])}>Approve</button>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
