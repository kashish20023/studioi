"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, LayoutDashboard } from "lucide-react";

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [touchPos, setTouchPos] = useState({ x: 50, y: 35 });
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const maxScroll = 450;

    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const currentY = window.scrollY;
        if (currentY <= maxScroll + 100) {
          const progress = Math.min(1, Math.max(0, currentY / maxScroll));
          setScrollProgress(progress);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Handle Touch/Pointer interaction for interactive light aura
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTouchPos({ x, y });
    setIsInteracting(true);
  };

  const handlePointerLeave = () => {
    setIsInteracting(false);
  };

  // Compute smooth scroll-driven opacity, scale, and translateY
  const opacity = Math.max(0, 1 - scrollProgress * 1.2);
  const translateY = -scrollProgress * 70;
  const scale = 1 - scrollProgress * 0.04;

  // 12 symmetric step column heights for Desktop V-arena (6 left, 6 right)
  const desktopBarHeights = [88, 74, 60, 46, 32, 18, 18, 32, 46, 60, 74, 88];

  // 6 symmetric step column heights for Mobile V-arena (3 left, 3 right)
  const mobileBarHeights = [85, 62, 38, 38, 62, 85];

  return (
    <section
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="w-full bg-[#F6F6F2] min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh] px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 font-sans select-none flex flex-col items-center justify-center relative overflow-hidden py-8 sm:py-16 md:py-20 touch-pan-y"
    >

      {/* TOP AMBIENT RADIAL AURORA (Eliminates top white space on mobile) */}
      <div className="absolute inset-x-0 top-0 h-[45%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d42f92]/20 via-[#d42f92]/5 to-transparent pointer-events-none z-0" />

      {/* INTERACTIVE TOUCH / CURSOR LIGHT AURA */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-out"
        style={{
          background: `radial-gradient(500px circle at ${touchPos.x}% ${touchPos.y}%, rgba(212, 47, 146, 0.28), transparent 70%)`,
          opacity: isInteracting ? 1 : 0.45,
        }}
      />

      {/* VECTOR BRAND PINK (#d42f92) STEP-GRADIENT V-ARENA BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-end justify-center p-2 max-sm:p-0 sm:p-4 md:p-6">

        {/* DESKTOP V-ARENA (12 BARS) */}
        <div className="hidden sm:flex w-full h-full max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1700px] relative items-end justify-between gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-6 md:px-10 pb-0">
          {desktopBarHeights.map((heightPercent, index) => {
            const alpha = 0.35 + (heightPercent / 100) * 0.55;
            return (
              <div
                key={`desktop-bar-${index}`}
                style={{ height: `${heightPercent}%` }}
                className="flex-1 rounded-t-xl transition-all duration-500 relative overflow-hidden"
              >
                <div
                  className="w-full h-full rounded-t-xl"
                  style={{
                    background: `linear-gradient(to top, rgba(212, 47, 146, ${alpha}) 0%, rgba(212, 47, 146, ${alpha * 0.45}) 60%, rgba(255, 255, 255, 0) 100%)`,
                    boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.4)",
                  }}
                />
              </div>
            );
          })}
          <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-[#F6F6F2] via-[#F6F6F2]/40 to-transparent pointer-events-none" />
        </div>

        {/* MOBILE V-ARENA (6 FULL-HEIGHT BALANCED WIDE BARS) */}
        <div className="flex sm:hidden w-full h-[88%] relative items-end justify-between gap-1.5 px-1 pb-0">
          {mobileBarHeights.map((heightPercent, index) => {
            const alpha = 0.32 + (heightPercent / 100) * 0.48;
            return (
              <div
                key={`mobile-bar-${index}`}
                style={{ height: `${heightPercent}%` }}
                className="flex-1 rounded-t-xl transition-all duration-500 relative overflow-hidden"
              >
                <div
                  className="w-full h-full rounded-t-xl"
                  style={{
                    background: `linear-gradient(to top, rgba(212, 47, 146, ${alpha}) 0%, rgba(212, 47, 146, ${alpha * 0.35}) 65%, rgba(255, 255, 255, 0) 100%)`,
                    boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.3)",
                  }}
                />
              </div>
            );
          })}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F6F6F2] via-[#F6F6F2]/30 to-transparent pointer-events-none" />
        </div>

      </div>

      {/* HERO TEXT & CITATION CONTENT */}
      <div
        className="relative z-10 w-full max-w-[340px] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 transition-transform duration-75 ease-out px-2 sm:px-0 my-auto"
        style={{
          opacity: opacity,
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
          willChange: "opacity, transform",
        }}
      >

        {/* 1. MAIN EDITORIAL HEADLINE */}
        <h1 className="font-serif text-[26px] sm:text-2xl md:text-2xl text-center lg:text-5xl xl:text-[80px] 2xl:text-[90px] text-neutral-950 font-normal tracking-tight leading-[1.2] sm:leading-[1.14] md:leading-[1.12] xl:leading-[1.08] max-w-full mx-auto">
          Studio i turns ambition into ventures <br className="hidden sm:inline" />
          built to scale, <span className="italic font-serif">lead and venture beyond.</span>
        </h1>

        {/* 2. DASHBOARD ACTION BUTTON (Displayed after headline text and before quote citation) */}
        <div className="pt-1 pb-1">
          <a
            href="https://accelerator.bharat-ventures.com/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer border border-neutral-800"
          >
            <LayoutDashboard className="w-4 h-4 text-pink-500 animate-pulse" />
            <span>Dashboard</span>
          </a>
        </div>

        {/* 3. FOOTNOTE CITATION QUOTE */}
        {/* <div className="max-w-[300px] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-center space-y-1 sm:space-y-1.5 pt-1">
          <p className="font-serif italic text-[11px] sm:text-xs md:text-sm lg:text-base text-neutral-800 sm:text-neutral-600 leading-relaxed">
            [1] &quot;A formidable person is one who seems like they&apos;ll get what they want, regardless of whatever obstacles are in the way.&quot;
          </p>
          <p className="font-serif italic text-[10px] sm:text-xs md:text-sm text-neutral-500 tracking-wide">
            &mdash; Paul Graham
          </p>
        </div> */}

      </div>
    </section>
  );
}
