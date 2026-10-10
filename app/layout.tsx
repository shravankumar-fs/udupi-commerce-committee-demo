import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LangProvider } from "@/components/lang";
import { MotionProvider } from "@/components/Motion";
import { RouteProgress, Splash } from "@/components/Loaders";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Udupi Chamber of Commerce and Industry", template: "%s · Udupi Chamber of Commerce and Industry" },
  description: "Udupi Chamber of Commerce and Industry. Events, news, committee and membership information for Udupi district businesses.",
  openGraph: { title: "Udupi Chamber of Commerce and Industry", description: "Events, news and committee of Udupi's business community.", type: "website" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');try{if(sessionStorage.getItem('ucci-splash')==='1')document.documentElement.classList.add('seen')}catch(e){}" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=Noto+Sans+Kannada:wght@400;500;600&family=Noto+Serif+Kannada:wght@500;600&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <Splash />
        <RouteProgress />
        <LangProvider><MotionProvider>{children}</MotionProvider></LangProvider>
      </body>
    </html>
  );
}
