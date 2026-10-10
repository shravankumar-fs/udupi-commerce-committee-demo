import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothWrapper } from "@/components/Motion";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <SmoothWrapper>
        <main>{children}</main>
        <Footer />
      </SmoothWrapper>
    </>
  );
}
