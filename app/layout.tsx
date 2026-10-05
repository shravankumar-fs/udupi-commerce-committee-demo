import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LangProvider } from "@/components/lang";
import { MotionProvider } from "@/components/Motion";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Udupi Chamber of Commerce and Industry", template: "%s · Udupi Chamber of Commerce and Industry" },
  description: "Udupi Chamber of Commerce and Industry — member directory, events, circulars and membership for Udupi district businesses.",
  openGraph: { title: "Udupi Chamber of Commerce and Industry", description: "Member directory, events, news and circulars for Udupi's business community.", type: "website" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=Noto+Sans+Kannada:wght@400;500;600&family=Noto+Serif+Kannada:wght@500;600&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <LangProvider><MotionProvider>{children}</MotionProvider></LangProvider>
      </body>
    </html>
  );
}
