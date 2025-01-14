import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../Footer";
import "../globals.css";
import Navbar from "../Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
// import Providers from "../providers";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <GoogleAnalytics />
    </main>
  );
}
