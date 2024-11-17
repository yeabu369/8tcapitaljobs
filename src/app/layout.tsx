import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "8T Jobs",
    template: "%s | 8T Jobs",
  },
  description: "Find your dream developer job.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
