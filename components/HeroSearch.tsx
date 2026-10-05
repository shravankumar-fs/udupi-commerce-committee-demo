"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { categories } from "@/lib/data";
import { useLang, T } from "./lang";

export function HeroSearch() {
  const router = useRouter();
  const { lang } = useLang();
  const [q, setQ] = useState("");
  return (
    <div className="search-card">
      <h2><T en="Find a member business" kn="ಸದಸ್ಯ ಉದ್ಯಮವನ್ನು ಹುಡುಕಿ" /></h2>
      <p className="small"><T en="Search member businesses across Udupi district." kn="ಉಡುಪಿ ಜಿಲ್ಲೆಯಾದ್ಯಂತ ಸದಸ್ಯ ಉದ್ಯಮಗಳನ್ನು ಹುಡುಕಿ." /></p>
      <form
        className="search-row"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/members/?q=${encodeURIComponent(q)}`);
        }}
      >
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={lang === "kn" ? "ಉದಾ: ಕೇಟರಿಂಗ್, ಸೀರೆ, ಸಮವಸ್ತ್ರ…" : "e.g. catering, sarees, uniforms…"}
          aria-label="Search members"
        />
        <button className="btn btn-primary" type="submit"><T en="Search" kn="ಹುಡುಕಿ" /></button>
      </form>
      <div className="chips">
        {categories.slice(0, 6).map((c) => (
          <Link key={c.id} href={`/members/?cat=${c.id}`} className="chip">
            <span aria-hidden="true">{c.icon}</span> {c.name[lang]}
          </Link>
        ))}
      </div>
    </div>
  );
}
