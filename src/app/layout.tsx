import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "InnovHer | Studio i",
  description: "Studio i is a venture-building space where companies, founders, creators and investors come together to turn ambition into action.",
  icons: {
    icon: [
      { url: "/studio-favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/studio-favicon.png",
    apple: "/studio-favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F6F6F2] text-neutral-900 font-sans">{children}</body>
    </html>
  );
}
