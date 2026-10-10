/** Animated wave that sits on the bottom edge of a hero, blending it into the page. */
export function WaveDivider({ fill = "#fff" }: { fill?: string }) {
  const sine = (a: number) => `M0 46Q180 ${46 - a} 360 46T720 46T1080 46T1440 46T1800 46T2160 46T2520 46T2880 46V80H0Z`;
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="w1"><path d={sine(30)} fill={fill} opacity=".45" /></svg>
      <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="w2"><path d={sine(20)} fill={fill} /></svg>
    </div>
  );
}

/** Line illustration of the coast: sun, palms, a fishing boat and sea. Used as quiet decoration on dark panels. */
export function Coast({ className = "" }: { className?: string }) {
  return (
    <svg className={`coast ${className}`} viewBox="0 0 480 220" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="380" cy="60" r="26" />
      <path d="M340 60h-30M420 60h30M380 20v-14M380 100v14" opacity=".6" />
      <path d="M70 200c0-50 6-92 22-130" />
      <path d="M92 70C76 48 52 42 28 52M92 70c20-18 44-16 62 4M92 70c-3-22-14-38-34-46M92 70c13-17 32-23 52-16M92 70c4-20 18-32 36-36" />
      <path d="M150 200c0-30 4-56 14-76" />
      <path d="M164 124c-10-14-26-17-42-9M164 124c14-11 30-9 40 3M164 124c-1-15-9-25-22-30" />
      <path d="M210 150h140l-20 30H230z" />
      <path d="M280 150V92M280 98l40 52h-40" />
      <path d="M10 196c24-12 48-12 72 0s48 12 72 0 48-12 72 0 48 12 72 0 48-12 72 0 48 12 72 0" />
      <path d="M10 212c24-12 48-12 72 0s48 12 72 0 48-12 72 0 48 12 72 0 48-12 72 0 48 12 72 0" opacity=".6" />
    </svg>
  );
}
