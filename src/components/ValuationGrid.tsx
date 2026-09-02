"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

export default function ValuationGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after single-fire activation to free resources
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

  // Left side startup logo rows (4 rows)
  const leftLogoRows = [
    // Row 1
    [
      { name: "airbnb", textStyle: "font-semibold tracking-tight text-red-500" },
      { name: "STOKE", textStyle: "font-black tracking-widest text-neutral-900" },
      { name: "flexport", textStyle: "font-bold tracking-tight text-blue-900" },
      { name: "Ironclad", textStyle: "font-medium text-neutral-600" },
    ],
    // Row 2
    [
      { name: "docker.", textStyle: "font-extrabold text-sky-600" },
      { name: "reddit", textStyle: "font-bold text-orange-600" },
      { name: "gusto", textStyle: "font-semibold text-rose-500" },
      { name: "zepto", textStyle: "font-bold text-purple-600" },
    ],
    // Row 3
    [
      { name: "stripe", textStyle: "font-extrabold text-indigo-600 text-lg" },
      { name: "instacart", textStyle: "font-bold text-emerald-600" },
      { name: "Rappi", textStyle: "font-black italic text-red-500" },
      { name: "PagerDuty", textStyle: "font-semibold text-green-600" },
    ],
    // Row 4
    [
      { name: "Benchling", textStyle: "font-bold text-blue-600" },
      { name: "Dropbox", textStyle: "font-extrabold text-blue-600" },
      { name: "scale", textStyle: "font-extrabold text-neutral-900" },
      { name: "coinbase", textStyle: "font-bold text-blue-600" },
    ],
  ];

  // Right side startup logo rows (4 rows)
  const rightLogoRows = [
    // Row 1
    [
      { name: "PostHog", textStyle: "font-bold text-orange-600" },
      { name: "substack", textStyle: "font-medium text-amber-700" },
      { name: "FAIRE", textStyle: "font-serif tracking-widest text-neutral-800" },
      { name: "Flock Safety", textStyle: "font-semibold text-neutral-900" },
    ],
    // Row 2
    [
      { name: "Brex", textStyle: "font-bold text-neutral-900" },
      { name: "Vanta", textStyle: "font-bold text-indigo-900" },
      { name: "OpenAI", textStyle: "font-bold text-neutral-900" },
      { name: "Front", textStyle: "font-bold text-purple-800" },
    ],
    // Row 3
    [
      { name: "Kalshi", textStyle: "font-bold text-emerald-500" },
      { name: "deel.", textStyle: "font-black text-blue-900 text-lg" },
      { name: "zapier", textStyle: "font-bold text-orange-600" },
      { name: "GitLab", textStyle: "font-bold text-orange-500" },
    ],
    // Row 4
    [
      { name: "twitch", textStyle: "font-black text-purple-600" },
      { name: "RIPPLING", textStyle: "font-extrabold tracking-wider text-neutral-800" },
      { name: "replit", textStyle: "font-bold text-orange-600" },
      { name: "DOORDASH", textStyle: "font-black text-red-600" },
    ],
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F2] pt-20 pb-10 sm:px-4 md:px-4 lg:px-4 font-sans overflow-hidden max-sm:py-4">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION: 3-PART VALUATION & LOGO CLOUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT 4x4 LOGO GRID (Row-by-Row Staggered Fade In) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {leftLogoRows.map((row, rowIndex) => {
              const delayMs = rowIndex * 320 + 150;
              return (
                <div
                  key={`left-row-${rowIndex}`}
                  style={{
                    transitionDelay: `${delayMs}ms`,
                    willChange: "opacity, transform",
                    transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 2rem, 0) scale(0.95)",
                  }}
                  className={`grid grid-cols-4 gap-x-4 items-center justify-items-center transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 filter-none" : "opacity-0"
                    }`}
                >
                  {row.map((logo, colIndex) => (
                    <div
                      key={`left-logo-${rowIndex}-${colIndex}`}
                      className="h-10 flex items-center justify-center text-center px-1 group cursor-pointer"
                    >
                      <span className={`text-xs sm:text-sm ${logo.textStyle} transition-transform duration-300 group-hover:scale-110`}>
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* CENTER VALUATION HERO CALLOUT */}
          <div
            style={{
              transitionDelay: "200ms",
              willChange: "opacity, transform",
              transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 1rem, 0) scale(0.9)",
            }}
            className={`lg:col-span-4 text-center space-y-3 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-tight leading-none">
              Adding Value
            </h2>
            <p className="font-serif italic text-neutral-700 text-lg sm:text-xl font-normal">
              building trust
            </p>
            <div className="pt-2">
              <a
                href="#all-companies"
                className="inline-flex items-center gap-1 font-serif text-sm text-neutral-800 hover:text-black transition-colors group border-b border-neutral-300 pb-0.5 hover:border-black"
              >
                <span>All companies</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT 4x4 LOGO GRID (Row-by-Row Staggered Fade In) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {rightLogoRows.map((row, rowIndex) => {
              const delayMs = rowIndex * 320 + 150;
              return (
                <div
                  key={`right-row-${rowIndex}`}
                  style={{
                    transitionDelay: `${delayMs}ms`,
                    willChange: "opacity, transform",
                    transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 2rem, 0) scale(0.95)",
                  }}
                  className={`grid grid-cols-4 gap-x-4 items-center justify-items-center transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 filter-none" : "opacity-0"
                    }`}
                >
                  {row.map((logo, colIndex) => (
                    <div
                      key={`right-row-logo-${rowIndex}-${colIndex}`}
                      className="h-10 flex items-center justify-center text-center px-1 group cursor-pointer"
                    >
                      <span className={`text-xs sm:text-sm ${logo.textStyle} transition-transform duration-300 group-hover:scale-110`}>
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
