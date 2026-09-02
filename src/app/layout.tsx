import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "InnovHer | Studio i - YC Style Navbar",
  description: "Next.js & Tailwind CSS navbar with InnovHer logo, Companies dropdown, Studio i center highlight badge, and Dashboard actions using Outfit typography.",
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
