import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import ScrollProgress from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import CookieBanner from "@/components/cookie-banner";
import BackToTop from "@/components/back-to-top";
import SiteSearch from "@/components/site-search";
import FloatingContact from "@/components/floating-contact";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Face of Innovator | Built for Students.",
  description:
    "India's emerging student innovation movement. We build, break, and rebuild the future - community by community.",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foi-yellow selection:text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foi-red focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <div className="noise" aria-hidden="true" />
        <ThemeProvider>
          {children}
          <CookieBanner />
          <BackToTop />
          <SiteSearch />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}