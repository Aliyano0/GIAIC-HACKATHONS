import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Timeless Timber.",
  description: "Website created for GIAIC UI UX Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
