import type { ReactNode } from "react";
import { Jost, Inter } from "next/font/google";
import "@/styles/globals.css";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Admin · Stoffhaus FRU",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${jost.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-fru-white text-fru-dark font-body">
        {children}
      </body>
    </html>
  );
}
