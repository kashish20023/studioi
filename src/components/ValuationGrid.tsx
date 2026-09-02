"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { portfolioCompanies } from "@/data/companiesData";

// Curated distinct text styles for company names in the logo cloud
const companyTextStyles = [
  "font-bold tracking-tight text-rose-600",
  "font-black tracking-wider text-neutral-900 uppercase",
  "font-bold tracking-tight text-blue-900",
  "font-medium text-neutral-700",
  "font-extrabold text-sky-600",
  "font-bold text-pink-600",
  "font-semibold text-rose-500",
  "font-bold text-purple-600",
  "font-extrabold text-indigo-600",
  "font-bold text-emerald-600",
  "font-black italic text-red-500",
  "font-semibold text-emerald-700",
  "font-bold text-blue-600",
  "font-extrabold text-neutral-900",
  "font-serif font-semibold tracking-wide text-amber-800",
  "font-extrabold tracking-widest text-neutral-800 uppercase",
];

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

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

  // Split portfolio companies into left and right sides for desktop (16 & 16)
  const halfIndex = Math.ceil(portfolioCompanies.length / 2);
  const leftCompanies = portfolioCompanies.slice(0, halfIndex);
  const rightCompanies = portfolioCompanies.slice(halfIndex);

  // Desktop rows (4 per row)
  const leftRows = chunkArray(leftCompanies, 4);
  const rightRows = chunkArray(rightCompanies, 4);

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F2] py-12 sm:py-16 lg:pt-20 lg:pb-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">

        {/* MOBILE & TABLET VIEW: FLEX PILL BADGES CLOUD (< lg) */}
        <div className="lg:hidden flex flex-col items-center space-y-6">
          {/* CENTER HERO CALLOUT */}
          <div
            style={{
              transitionDelay: "150ms",
              willChange: "opacity, transform",
              transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 1rem, 0) scale(0.9)",
            }}
            className={`text-center space-y-2.5 transition-all duration-[1000ms] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight leading-none">
              Adding Value
            </h2>
            <p className="font-serif italic text-neutral-700 text-base sm:text-lg font-normal">
              building trust
            </p>
          </div>

          {/* FLEX WRAP PILL BADGES CLOUD */}
          <div
            style={{
              transitionDelay: "250ms",
              willChange: "opacity, transform",
              transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 1.5rem, 0) scale(0.95)",
            }}
            className={`flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 px-2 max-w-2xl mx-auto transition-all duration-[1100ms] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {portfolioCompanies.map((company, index) => {
              const style = companyTextStyles[index % companyTextStyles.length];
              return (
                <div
                  key={`mobile-pill-${company.id}`}
                  className="bg-white/90 border border-neutral-200/90 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-2xs flex items-center justify-center"
                >
                  <span className={`text-xs sm:text-sm ${style}`}>
                    {company.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ALL COMPANIES DIRECT LINK */}
          <div className="pt-2">
            <Link
              href="/companies"
              className="inline-flex items-center gap-1 font-serif text-xs sm:text-sm text-neutral-800 hover:text-black transition-colors group border-b border-neutral-300 pb-0.5 hover:border-black"
            >
              <span>All companies</span>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-600 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* DESKTOP VIEW: 3-PART VALUATION & LOGO CLOUD (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">

          {/* LEFT 4x4 LOGO GRID */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {leftRows.map((row, rowIndex) => {
              const delayMs = rowIndex * 320 + 150;
              return (
                <div
                  key={`left-row-${rowIndex}`}
                  style={{
                    transitionDelay: `${delayMs}ms`,
                    willChange: "opacity, transform",
                    transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 2rem, 0) scale(0.95)",
                  }}
                  className={`grid grid-cols-4 gap-x-4 items-center justify-items-center transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "opacity-100 filter-none" : "opacity-0"
                  }`}
                >
                  {row.map((company, colIndex) => {
                    const globalIndex = rowIndex * 4 + colIndex;
                    const style = companyTextStyles[globalIndex % companyTextStyles.length];
                    return (
                      <div
                        key={company.id}
                        className="h-10 flex items-center justify-center text-center px-1"
                      >
                        <span className={`text-xs sm:text-sm ${style}`}>
                          {company.name}
                        </span>
                      </div>
                    );
                  })}
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
            className={`lg:col-span-4 text-center space-y-3 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-tight leading-none">
              Adding Value
            </h2>
            <p className="font-serif italic text-neutral-700 text-lg sm:text-xl font-normal">
              building trust
            </p>
            <div className="pt-2">
              <Link
                href="/companies"
                className="inline-flex items-center gap-1 font-serif text-sm text-neutral-800 hover:text-black transition-colors group border-b border-neutral-300 pb-0.5 hover:border-black"
              >
                <span>All companies</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT 4x4 LOGO GRID */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {rightRows.map((row, rowIndex) => {
              const delayMs = rowIndex * 320 + 150;
              return (
                <div
                  key={`right-row-${rowIndex}`}
                  style={{
                    transitionDelay: `${delayMs}ms`,
                    willChange: "opacity, transform",
                    transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 2rem, 0) scale(0.95)",
                  }}
                  className={`grid grid-cols-4 gap-x-4 items-center justify-items-center transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "opacity-100 filter-none" : "opacity-0"
                  }`}
                >
                  {row.map((company, colIndex) => {
                    const globalIndex = halfIndex + rowIndex * 4 + colIndex;
                    const style = companyTextStyles[globalIndex % companyTextStyles.length];
                    return (
                      <div
                        key={company.id}
                        className="h-10 flex items-center justify-center text-center px-1"
                      >
                        <span className={`text-xs sm:text-sm ${style}`}>
                          {company.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}


