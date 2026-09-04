"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function CommunityGridSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const photos = [
    {
      id: 1,
      src: "/images/5.webp",
      // fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      alt: "Fireside discussion with batch mentors",
      caption: "Fireside discussions with seasoned batch mentors",
    },
    {
      id: 2,
      src: "/images/code 2.webp",
      // fallback: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      alt: "1-on-1 Office Hours with YC Partners",
      caption: "Direct 1-on-1 office hours & strategy review",
    },
    {
      id: 3,
      src: "/images/DSC06312.webp",
      // fallback: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      alt: "Batch peer review & networking session",
      caption: "Collaborative peer feedback & product reviews",
    },
    {
      id: 4,
      src: "/images/6.webp",
      // fallback: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      alt: "Founder technical deep dive",
      caption: "Technical deep dives & architecture teardowns",
    },
    {
      id: 5,
      src: "/images/3.webp",
      // fallback: "https://images.unsplash.com/photo-1542744094-3a3172720177?auto=format&fit=crop&w=800&q=80",
      alt: "Group office hours & fundraising prep",
      caption: "Group fundraising strategy & pitch refining",
    },
    {
      id: 6,
      src: "/images/2.webp",
      // fallback: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      alt: "Founder community meetup",
      caption: "Lifelong connections with fellow batch founders",
    },
    {
      id: 7,
      src: "/images/IMG_3498.webp",
      // fallback: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      alt: "Casual lounge brainstorming session",
      caption: "Late-night brainstorming & problem solving",
    },
    {
      id: 8,
      src: "/images/DSC_1083.JPG.webp",
      // fallback: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      alt: "Demo Day rehearsals & pitch coaching",
      caption: "Demo Day pitch coaching with industry leaders",
    },
    {
      id: 9,
      src: "/images/IMG_7924.webp",
      // fallback: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      alt: "Alumni networking reception",
      caption: "Global alumni network support & partnership",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F2] py-20 px-4 max-sm:py-4 sm:px-4 lg:px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* REPHRASED EDITORIAL HEADING */}
        <div
          style={{
            willChange: "opacity, transform",
            transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0, 1.5rem, 0)",
          }}
          className={`text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight">
            Be in the room with visionary founders &amp; builders...
          </h2>
        </div>

        {/* 3x3 PHOTO GRID WITH STAGGERED FADE-IN */}
        <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, idx) => {
            const rowIndex = Math.floor(idx / 3);
            const colIndex = idx % 3;
            const delayMs = (rowIndex + colIndex) * 110 + 120;

            return (
              <div
                key={photo.id}
                style={{
                  transitionDelay: `${delayMs}ms`,
                  willChange: "opacity, transform",
                  transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 2rem, 0) scale(0.95)",
                }}
                className={`group relative aspect-[4/3] rounded-[16px] overflow-hidden bg-neutral-200 shadow-md border border-neutral-300/60 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "opacity-100" : "opacity-0"
                } ${idx >= 8 ? "hidden sm:block" : ""}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-[16px] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Overlay Caption on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs sm:text-sm font-medium tracking-tight">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
