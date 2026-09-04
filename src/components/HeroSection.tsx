"use client";

import React, { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
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
      className="w-full bg-[#F6F6F2] min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh] px-2 sm:px-4 font-sans select-none flex flex-col items-center justify-center relative overflow-hidden py-8 sm:py-16 md:py-20 touch-pan-y"
    >
      {/* INJECTED ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes heroEqualizerWave {
          0%, 100% {
            transform: scaleY(0.92);
            filter: brightness(0.95);
            opacity: 0.85;
          }
          40% {
            transform: scaleY(1.18);
            filter: brightness(1.35) drop-shadow(0 0 16px rgba(212, 47, 146, 0.45));
            opacity: 1;
          }
          70% {
            transform: scaleY(0.97);
            filter: brightness(1.05);
            opacity: 0.9;
          }
        }
        @keyframes heroAuroraBreathe {
          0%, 100% {
            transform: translateY(-15px) scale(0.95);
            opacity: 0.65;
          }
          50% {
            transform: translateY(20px) scale(1.18);
            opacity: 1;
          }
        }
        @keyframes heroShimmerLight {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }
          100% {
            transform: translateX(200%) skewX(-20deg);
          }
        }
        .hero-bar-animate {
          transform-origin: bottom center;
          will-change: transform, filter, opacity;
        }
      `}</style>

      {/* TOP AMBIENT RADIAL AURORA (ANIMATED BREATHE) */}
      <div
        className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d42f92]/30 via-[#d42f92]/10 to-transparent pointer-events-none z-0"
        style={{
          animation: "heroAuroraBreathe 6s ease-in-out infinite",
        }}
      />

      {/* VECTOR BRAND PINK (#d42f92) STEP-GRADIENT V-ARENA BACKGROUND FITTED TO HERO SECTION */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-end justify-center p-0">

        {/* DESKTOP V-ARENA (12 BARS WITH RHYTHMIC EQUALIZER WAVE ANIMATION) */}
        <div className="hidden sm:flex w-full h-full relative items-end justify-between gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 pb-0">
          {desktopBarHeights.map((heightPercent, index) => {
            const alpha = 0.38 + (heightPercent / 100) * 0.58;
            // Fluid wave delay propagating across bars from outer edge to center and back
            const distanceFromCenter = Math.abs(5.5 - index);
            const animationDelay = `${index * 0.22}s`;
            const duration = `${3.2 + (distanceFromCenter * 0.2)}s`;

            return (
              <div
                key={`desktop-bar-${index}`}
                style={{
                  height: `${heightPercent}%`,
                  animation: `heroEqualizerWave ${duration} ease-in-out ${animationDelay} infinite`,
                }}
                className="flex-1 rounded-t-xl relative overflow-hidden hero-bar-animate"
              >
                <div
                  className="w-full h-full rounded-t-xl"
                  style={{
                    background: `linear-gradient(to top, rgba(212, 47, 146, ${alpha}) 0%, rgba(212, 47, 146, ${alpha * 0.5}) 60%, rgba(255, 255, 255, 0) 100%)`,
                    boxShadow: "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.45)",
                  }}
                />
              </div>
            );
          })}
          <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-[#F6F6F2] via-[#F6F6F2]/40 to-transparent pointer-events-none" />
        </div>

        {/* MOBILE V-ARENA (6 BARS WITH RHYTHMIC EQUALIZER WAVE ANIMATION) */}
        <div className="flex sm:hidden w-full h-[88%] relative items-end justify-between gap-1.5 px-1 pb-0">
          {mobileBarHeights.map((heightPercent, index) => {
            const alpha = 0.35 + (heightPercent / 100) * 0.52;
            const animationDelay = `${index * 0.3}s`;

            return (
              <div
                key={`mobile-bar-${index}`}
                style={{
                  height: `${heightPercent}%`,
                  animation: `heroEqualizerWave 3.5s ease-in-out ${animationDelay} infinite`,
                }}
                className="flex-1 rounded-t-xl relative overflow-hidden hero-bar-animate"
              >
                <div
                  className="w-full h-full rounded-t-xl"
                  style={{
                    background: `linear-gradient(to top, rgba(212, 47, 146, ${alpha}) 0%, rgba(212, 47, 146, ${alpha * 0.4}) 65%, rgba(255, 255, 255, 0) 100%)`,
                    boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.35)",
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



      </div>
    </section>
  );
}
