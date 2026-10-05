import Link from "next/link";
export default function NotFound() {
  return (
    <section style={{ textAlign: "center", padding: "120px 20px" }}>
      <h1>Page not found</h1>
      <Link href="/" className="btn btn-primary">Back to home</Link>
    </section>
  );
}
