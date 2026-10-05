"use client";
import { useEffect, useMemo, useState } from "react";
import { areas, categories, members } from "@/lib/data";
import { MemberCard } from "./Cards";
import { useLang, T } from "./lang";

export function Directory() {
  const { lang } = useLang();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [area, setArea] = useState("all");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("q")) setQ(p.get("q")!);
    if (p.get("cat")) setCat(p.get("cat")!);
  }, []);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return members.filter((m) => {
      if (cat !== "all" && m.category !== cat) return false;
      if (area !== "all" && m.area !== area) return false;
      if (!s) return true;
      const c = categories.find((x) => x.id === m.category)!;
      return [m.name, m.owner, m.area, c.name.en, c.name.kn, m.about.en, ...m.services].join(" ").toLowerCase().includes(s);
    });
  }, [q, cat, area]);

  return (
    <div className="dir-layout">
      <aside className="filters">
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={lang === "kn" ? "ಹೆಸರು ಅಥವಾ ಸೇವೆ ಹುಡುಕಿ…" : "Search name or service…"}
          aria-label="Search"
        />
        <div>
          <h4><T en="Sector" kn="ವಲಯ" /></h4>
          <div className="filter-list">
            <button className={cat === "all" ? "on" : ""} onClick={() => setCat("all")}>
              <T en="All sectors" kn="ಎಲ್ಲಾ ವಲಯಗಳು" /> <span>{members.length}</span>
            </button>
            {categories.map((c) => (
              <button key={c.id} className={cat === c.id ? "on" : ""} onClick={() => setCat(c.id)}>
                {c.name[lang]} <span>{members.filter((m) => m.category === c.id).length}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4><T en="Area" kn="ಪ್ರದೇಶ" /></h4>
          <select className="input" value={area} onChange={(e) => setArea(e.target.value)}>
            <option value="all">{lang === "kn" ? "ಎಲ್ಲಾ ಪ್ರದೇಶಗಳು" : "All areas"}</option>
            {areas.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
      </aside>
      <div>
        <p className="result-count">
          {lang === "kn" ? `${list.length} ಉದ್ಯಮಗಳು ಕಂಡುಬಂದಿವೆ` : `${list.length} businesses found`}
          {(q || cat !== "all" || area !== "all") && (
            <> · <button className="chip" onClick={() => { setQ(""); setCat("all"); setArea("all"); }}><T en="Clear filters" kn="ಫಿಲ್ಟರ್ ತೆಗೆಯಿರಿ" /></button></>
          )}
        </p>
        {list.length ? (
          <div className="member-grid">
            {list.map((m) => <MemberCard key={m.slug} m={m} />)}
          </div>
        ) : (
          <div className="empty"><T en="No businesses match. Try another word or sector." kn="ಯಾವುದೇ ಉದ್ಯಮ ಹೊಂದಿಕೆಯಾಗಿಲ್ಲ. ಬೇರೆ ಪದ ಅಥವಾ ವಲಯ ಪ್ರಯತ್ನಿಸಿ." /></div>
        )}
      </div>
    </div>
  );
}
