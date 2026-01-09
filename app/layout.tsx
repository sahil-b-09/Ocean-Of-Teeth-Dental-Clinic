import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig } from "@/lib/site-config";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.subtitle}`,
  description: siteConfig.hero.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
        style={
          {
            "--primary": siteConfig.theme.colors.primary,
            "--secondary": siteConfig.theme.colors.secondary,
            "--accent": siteConfig.theme.colors.accent,
          } as React.CSSProperties
        }
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
          <FloatingWhatsApp />
          <MobileStickyBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
