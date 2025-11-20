import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import React from "react";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "della PENNA - European Coaches",
  description: "Your destination is our passion, since 1946",
  openGraph: {
    title: "della PENNA - European Coaches",
    description: "Your destination is our passion, since 1946",
    images: [
      {
        url: "http://www.dellapenna.it/it/sites/all/themes/wunderkind/img/cover.jpg",
        type: "image/jpeg",
      },
    ],
    url: "https://dellapenna.it",
    type: "website",
    siteName: "della PENNA",
  },
  twitter: {
    card: "summary_large_image",
    title: "della PENNA - European Coaches",
    description: "Your destination is our passion, since 1946",
    images: ["http://www.dellapenna.it/it/sites/all/themes/wunderkind/img/cover.jpg"],
  },
  icons: {
    icon: "http://www.dellapenna.it/it/sites/default/files/favicon_0.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

