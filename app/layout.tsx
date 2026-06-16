import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
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
        <Script id="tawk-to" strategy="afterInteractive">
          {`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/69fd7e65427c251c368c1e92/1jo33bfff';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })(); 
    `}
        </Script>
      </body>
    </html>
  );
}
