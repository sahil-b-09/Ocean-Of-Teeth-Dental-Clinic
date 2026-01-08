import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ocean Of Teeth - Cosmetic and Implant Dental Clinic",
  description: "Premium Dental Care in Pune. Implants, Cosmetics, and more.",
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
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          {children}
          <FloatingWhatsApp />
          <MobileStickyBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
