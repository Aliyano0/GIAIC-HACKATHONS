import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

// LOCAL FONTS //
const Satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});
const integralCF = localFont({
  src: "./fonts/integralcf-bold.otf",
  variable: "--font-integralCF",
  weight: "400 500 700 900",
});

export const metadata: Metadata = {
  title: "Timeless Timber.",
  description: "Website created for GIAIC Marketplace Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${Satoshi.variable} ${integralCF.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
