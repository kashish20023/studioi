"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Every unique image from /public/images — no duplicates, hero-bg excluded (it's a background asset)
const libraryImages = [
  { src: "/images/0I0A6619.webp", alt: "Studio i Event" },
  // { src: "/images/2.webp", alt: "Studio i Moment" },
  { src: "/images/3.webp", alt: "Studio i Gathering" },
  { src: "/images/5.webp", alt: "Studio i Workshop" },
  { src: "/images/code 2.webp", alt: "Studio i Community" },
  { src: "/images/Bharat venture.webp", alt: "Bharat Ventures" },
  { src: "/images/DSC06312.webp", alt: "Studio i Photography" },
  // { src: "/images/DSC_0214.JPG.webp", alt: "Studio i Photography" },
  { src: "/images/DSC_1056.JPG.webp", alt: "Studio i Photography" },
  { src: "/images/DSC_1083.JPG.webp", alt: "Studio i Photography" },
  { src: "/images/DSC_1168.JPG.webp", alt: "Studio i Photography" },
  { src: "/images/IMG_3487.webp", alt: "Studio i Photo" },
  { src: "/images/IMG_3488.webp", alt: "Studio i Photo" },
  { src: "/images/IMG_3498.webp", alt: "Studio i Photo" },
  { src: "/images/IMG_7924.webp", alt: "Studio i Photo" },
  { src: "/images/WhatsApp Image 2025-10-14 at 11.03.19 (2).webp", alt: "Studio i Event" },
  { src: "/images/code 1.webp", alt: "Code Company" },
  // { src: "/images/code 2.webp", alt: "Code Company" },
  // { src: "/images/code.webp", alt: "Code Company" },
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#F6F6F2] flex flex-col font-sans select-none">
      {/* HEADER NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT AREA - IMAGE GRID ONLY */}
      <main className="flex-1 w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5">
          {libraryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative break-inside-avoid mb-4 sm:mb-5 rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-2xl"
                priority={idx < 4}
              />
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
