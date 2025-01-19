import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FooterWrapper from "./components/Footer/FooterWrapper";
import NavbarWrapper from "./components/NavbarWrapper";

// LOCAL FONTS //
const Satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "100 700 900",
});
const integralCF = localFont({
  src: "./fonts/integralcf-bold.otf",
  variable: "--font-integralCF",
  weight: "100 400 500 700 900",
});

export const metadata: Metadata = {
  title: "Shop.co GIAIC UI-UX Design",
  description: "Website created for GIAIC UI UX Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Satoshi.variable} ${integralCF.variable} antialiased`}
      >
        <NavbarWrapper />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
