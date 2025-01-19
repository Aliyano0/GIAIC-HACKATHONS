"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function NavbarWrapper() {
  const path = usePathname();

  if (path.startsWith("/api") || path.startsWith("/studio")) {
    return null;
  }

  return <Footer />;
}
