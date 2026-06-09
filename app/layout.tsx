import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cold Storage - Secure, Scalable | Mekark",
  description:
    "Secure, scalable cold storage solutions engineered by Mekark for high-performance cold chain infrastructure.",
  icons: {
    icon: "/Images/LogoMekark.png",
    shortcut: "/Images/LogoMekark.png",
    apple: "/Images/LogoMekark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.className}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
