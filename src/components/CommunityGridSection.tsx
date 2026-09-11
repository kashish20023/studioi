"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function CommunityGridSection() {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const photos = [
    {
      id: 1,
      src: "/images/5.webp",
      alt: "Fireside discussion with batch mentors",
      caption: "Fireside discussions with seasoned batch mentors",
    },
    {
      id: 2,
      src: "/images/code 2.webp",
      alt: "1-on-1 Office Hours with YC Partners",
      caption: "Direct 1-on-1 office hours & strategy review",
    },
    {
      id: 3,
      src: "/images/DSC06312.webp",
      alt: "Batch peer review & networking session",
      caption: "Collaborative peer feedback & product reviews",
    },
    {
      id: 4,
      src: "/images/6.webp",
      alt: "Founder technical deep dive",
      caption: "Technical deep dives & architecture teardowns",
    },
    {
      id: 5,
      src: "/images/3.webp",
      alt: "Group office hours & fundraising prep",
      caption: "Group fundraising strategy & pitch refining",
    },
    {
      id: 6,
      src: "/images/2.webp",
      alt: "Founder community meetup",
      caption: "Lifelong connections with fellow batch founders",
    },
    {
      id: 7,
      src: "/images/IMG_3498.webp",
      alt: "Casual lounge brainstorming session",
      caption: "Late-night brainstorming & problem solving",
    },
    {
      id: 8,
      src: "/images/DSC_1083.JPG.webp",
      alt: "Demo Day rehearsals & pitch coaching",
      caption: "Demo Day pitch coaching with industry leaders",
    },
    {
      id: 9,
      src: "/images/IMG_7924.webp",
      alt: "Alumni networking reception",
      caption: "Global alumni network support & partnership",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F2] py-20 px-4 max-sm:py-8 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* REPHRASED EDITORIAL HEADING */}
        <div
          style={{
            willChange: "opacity, transform",
            transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0, 1.5rem, 0)",
          }}
          className={`text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight">
            Be in the room with visionary founders &amp; builders...
          </h2>
        </div>

        {/* 3x3 PHOTO GRID WITH STAGGERED FADE-IN AND SPOTLIGHT HOVER HIGHLIGHT */}
        <div 
          className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          onMouseLeave={() => setHoveredId(null)}
        >
          {photos.map((photo, idx) => {
            const rowIndex = Math.floor(idx / 3);
            const colIndex = idx % 3;
            const delayMs = (rowIndex + colIndex) * 110 + 120;
            const isHovered = hoveredId === photo.id;
            const isAnyHovered = hoveredId !== null;

            // Dynamic scale & transform calculation so inline transform updates seamlessly on hover
            let dynamicTransform = isVisible ? "translate3d(0,0,0)" : "translate3d(0, 2rem, 0)";
            if (isVisible) {
              if (isHovered) {
                dynamicTransform += " scale(1.05)";
              } else if (isAnyHovered) {
                dynamicTransform += " scale(0.97)";
              } else {
                dynamicTransform += " scale(1)";
              }
            } else {
              dynamicTransform += " scale(0.95)";
            }

            return (
              <div
                key={photo.id}
                onMouseEnter={() => setHoveredId(photo.id)}
                style={{
                  transitionDelay: isAnyHovered ? "0ms" : `${delayMs}ms`,
                  willChange: "opacity, transform",
                  transform: dynamicTransform,
                }}
                className={`group relative aspect-[4/3] rounded-[16px] overflow-hidden bg-neutral-200 border transition-all duration-500 ease-out cursor-pointer ${
                  isVisible
                    ? isAnyHovered && !isHovered
                      ? "opacity-65 scale-[0.97]"
                      : "opacity-100"
                    : "opacity-0"
                } ${
                  isHovered
                    ? "z-20 shadow-2xl shadow-black/40 border-neutral-900/40 ring-4 ring-neutral-900/15"
                    : "z-0 shadow-md border-neutral-300/60"
                } ${idx >= 8 ? "hidden sm:block" : ""}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover rounded-[16px] transition-all duration-500 ease-out ${
                    isHovered
                      ? "scale-110 grayscale-0 brightness-105 contrast-[1.02]"
                      : isAnyHovered
                      ? "scale-100 grayscale brightness-90 contrast-90"
                      : "scale-100 grayscale-0"
                  }`}
                />

                {/* Subtle Overlay Caption on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 flex items-end p-5 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-white text-xs sm:text-sm font-medium tracking-tight transform transition-transform duration-300 ease-out translate-y-0">
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

