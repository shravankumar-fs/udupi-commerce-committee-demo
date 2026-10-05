export function Logo({ size = 44 }: { size?: number }) {
  // Placeholder emblem — swap for the committee's real logo.
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="logo">
      <circle cx="24" cy="24" r="23" fill="var(--primary)" />
      <path d="M24 9 L31 17 H17 Z" fill="#fff" />
      <rect x="15" y="18" width="18" height="3" fill="#fff" />
      <rect x="17" y="22" width="3" height="11" fill="#fff" />
      <rect x="22.5" y="22" width="3" height="11" fill="#fff" />
      <rect x="28" y="22" width="3" height="11" fill="#fff" />
      <rect x="13" y="34" width="22" height="3" fill="#6fd49b" />
    </svg>
  );
}
