export function Logo({ size = 44 }: { size?: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.png" width={size} height={size} alt="Udupi Chamber of Commerce & Industry logo" className="logo" style={{ borderRadius: 8, background: "#fff", objectFit: "contain" }} />;
}
