"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ApplyShowcaseSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const photos = [
    {
      id: 1,
      src: "/images/2.webp",
      // fallback: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      alt: "Founder with robotics AI prototype",
    },
    {
      id: 2,
      src: "/images/3.webp",
      // fallback: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      alt: "Founder speaking at batch event",
    },
    {
      id: 3,
      src: "/images/code 2.webp",
      // fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      alt: "Founders coding together on laptop",
    },
    {
      id: 4,
      src: "/images/5.webp",
      // fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      alt: "Founder outdoors at YC campus",
    },
    {
      id: 5,
      src: "/images/6.webp",
      // fallback: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      alt: "Founders pitching live on Demo Day stage",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F2] pt-16 max-sm:py-4 pb-20 px-4 sm:px-4 lg:px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* UPPER CALL TO ACTION SECTION */}
        <div
          style={{
            willChange: "opacity, transform",
            transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0, 1.5rem, 0)",
          }}
          className={`text-center space-y-4 max-w-2xl mx-auto transition-all duration-1000  max-sm:mb-4 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 tracking-tight">
            It&apos;s never too early to apply.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 font-sans tracking-tight font-normal">
            We fund companies with no revenue, product, or fully baked idea.
          </p>

          <div className="pt-2">
            <a
              href="https://accelerator.bharat-ventures.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neutral-950 text-white font-serif italic text-sm sm:text-base px-8 py-2.5 rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              Apply
            </a>
          </div>
        </div>

        {/* LOWER 5-PHOTO HORIZONTAL SHOWCASE GRID */}
        <div className="grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              style={{
                transitionDelay: `${idx * 120 + 150}ms`,
                willChange: "opacity, transform",
                transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 2rem, 0) scale(0.95)",
              }}
              className={`group relative w-full aspect-[4/5] rounded-[14px] overflow-hidden bg-neutral-200 border border-neutral-300/60 shadow-sm transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
