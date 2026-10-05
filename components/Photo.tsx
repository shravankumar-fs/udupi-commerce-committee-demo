import { photo as getPhoto } from "@/lib/photos";

// Shows a real photo when `id` is given (Wikimedia Commons, credited on /credits),
// otherwise a warm placeholder.
export function Photo({ id, hue = 20, label, ratio = "4 / 3", seed = 0, eager }: { id?: string; hue?: number; label?: string; ratio?: string; seed?: number; eager?: boolean }) {
  const p = id ? getPhoto(id) : undefined;
  if (p)
    return (
      <div className="photo" style={{ aspectRatio: ratio }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.src} alt={p.title} loading={eager ? "eager" : "lazy"} />
        {label && <span className="photo-label">{label}</span>}
      </div>
    );
  const a = `hsl(${hue} 30% ${64 - (seed % 3) * 6}%)`;
  const b = `hsl(${(hue + 25) % 360} 26% ${40 + (seed % 4) * 4}%)`;
  const x = 20 + ((seed * 37) % 60);
  return (
    <div className="photo" style={{ aspectRatio: ratio, background: `radial-gradient(circle at ${x}% 30%, ${a}, ${b})` }}>
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M0 60 L0 ${42 + (seed % 5)} Q 25 ${30 + (seed % 7)} 50 ${40} T 100 ${36 + (seed % 6)} L100 60 Z`} fill="rgba(0,0,0,.18)" />
        <path d={`M0 60 L0 50 Q 30 ${44 + (seed % 4)} 60 50 T 100 48 L100 60 Z`} fill="rgba(0,0,0,.22)" />
      </svg>
      {label && <span className="photo-label">{label}</span>}
    </div>
  );
}

export function Initials({ name, hue }: { name: string; hue: number }) {
  const init = name.replace(/^(Dr\.|Prof\.|Shri|Smt\.)\s*/, "").split(/\s+/).slice(0, 2).map((w) => w[0]).join("");
  return (
    <div className="initials" style={{ background: `hsl(${hue} 50% 94%)`, color: `hsl(${hue} 55% 32%)` }}>
      {init}
    </div>
  );
}
