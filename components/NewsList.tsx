"use client";
import { useState } from "react";
import { kinds, posts, type Post } from "@/lib/data";
import { PostRow } from "./Cards";
import { useLang, T } from "./lang";

export function NewsList() {
  const { lang } = useLang();
  const [k, setK] = useState<"all" | Post["kind"]>("all");
  const list = posts.filter((p) => k === "all" || p.kind === k);
  return (
    <>
      <div className="tabs">
        <button className={`chip ${k === "all" ? "on" : ""}`} onClick={() => setK("all")}><T en="All" kn="ಎಲ್ಲಾ" /></button>
        {(Object.keys(kinds) as Post["kind"][]).map((x) => (
          <button key={x} className={`chip ${k === x ? "on" : ""}`} onClick={() => setK(x)}>{kinds[x][lang]}</button>
        ))}
      </div>
      <div className="post-list" style={{ maxWidth: 780 }}>
        {list.map((p) => <PostRow key={p.slug} p={p} />)}
      </div>
    </>
  );
}
