"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { stories, Story } from "@/data/storiesData";
import { X, Sparkles, ArrowUpRight, Award, Calendar, Users, Building } from "lucide-react";

export default function CompanyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedModalStory, setSelectedModalStory] = useState<Story | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Active story reference
  const currentStory = stories[activeIndex] || stories[0];

  const isProgrammaticScroll = useRef(false);

  // Setup IntersectionObserver for smooth scroll activation matching YC's section 2
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-35% 0px -35% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isProgrammaticScroll.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexAttr = entry.target.getAttribute("data-index");
          if (indexAttr !== null) {
            const index = parseInt(indexAttr, 10);
            setActiveIndex((prev) => (prev !== index ? index : prev));
          }
        }
      });
    }, options);

    stepRefs.current.forEach((stepEl) => {
      if (stepEl) observer.observe(stepEl);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Keyboard Escape listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedModalStory(null);
      }
    };
    if (selectedModalStory) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedModalStory]);

  // Programmatic scroll when clicking a company name directly
  const scrollToCompany = useCallback((index: number) => {
    setActiveIndex(index);
    isProgrammaticScroll.current = true;
    const targetStep = stepRefs.current[index];
    if (targetStep) {
      targetStep.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
  }, []);

  return (
    <section id="company-showcase" ref={containerRef} className="relative w-full bg-[#F6F6F2] font-sans select-none max-sm:py-4">

      {/* STICKY VIEWPORT CONTAINER (Pins in viewport during scroll through companies) */}
      <div className="sticky top-16 h-[calc(100vh-64px)] w-full flex flex-col justify-between items-center overflow-hidden py-3 sm:py-5 px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* MOBILE / TABLET TOP SELECTOR NAVIGATION (Visible ONLY on screens less than tablet view < lg) */}
        <div className="lg:hidden flex flex-col items-center w-full flex-shrink-0">
          {/* FLOATING INTERACTIVE ELLIPSE BADGE (Clickable to view detailed modal) */}
          <div className="mb-2 z-20 flex-shrink-0">
            <button
              onClick={() => setSelectedModalStory(currentStory)}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-300/80 shadow-md hover:shadow-lg hover:border-neutral-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-xs sm:text-sm font-serif italic text-neutral-900"
              title="Click to view detailed company story & metrics"
            >
              <span className="w-2 h-2 rounded-full bg-pink-600 animate-ping absolute left-3" />
              <span className="w-2 h-2 rounded-full bg-pink-600 relative ml-0.5" />
              <span className="font-semibold tracking-tight">Explore {currentStory.name} Details</span>
              <Sparkles className="w-3.5 h-3.5 text-pink-600 group-hover:rotate-12 transition-transform duration-300 ml-0.5" />
            </button>
          </div>

          {/* COMPANY SELECTOR NAVIGATION BUTTONS (Positioned ABOVE the cards) */}
          <div className="mb-2 sm:mb-3 flex-shrink-0 flex items-center gap-2 overflow-x-auto max-w-full px-4 py-1 z-20 scrollbar-none flex-nowrap w-full justify-start sm:justify-center">
            {stories.map((s, idx) => (
              <button
                key={`tab-${s.id}`}
                onClick={() => {
                  scrollToCompany(idx);
                }}
                className={`px-4 py-2 text-xs sm:text-sm rounded-full transition-all duration-200 font-medium cursor-pointer whitespace-nowrap flex-shrink-0 inline-flex items-center justify-center leading-none ${idx === activeIndex
                  ? "bg-neutral-950 text-white shadow-md font-semibold scale-105"
                  : "bg-white/95 text-neutral-700 hover:bg-neutral-200 border border-neutral-300/80 shadow-xs hover:border-neutral-400"
                  }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* DESKTOP LAYOUT (12 Columns: 5 Left Image - 2 Center Text - 5 Right Image) */}
        <div className="max-w-[1850px] w-full mx-auto hidden lg:grid grid-cols-12 gap-4 xl:gap-6 items-center flex-1 my-auto">

          {/* 1. LEFT COLUMN: "During Studio I" (5 Cols - Larger Image) */}
          <div className="col-span-5 flex flex-col items-center text-center space-y-3">
            <h3 className="font-serif italic text-base sm:text-lg lg:text-xl text-neutral-800 font-medium">
              During Studio I
            </h3>

            {/* Direct Edge-to-Edge Image Container (Massive Height & Aspect Ratio) */}
            <div className="relative w-full aspect-[4/3.8] lg:aspect-[1/1] xl:aspect-[1/1.05] 2xl:aspect-[1/1.1] min-h-[380px] lg:min-h-[440px] xl:min-h-[500px] 2xl:min-h-[560px] rounded-2xl overflow-hidden bg-neutral-200 shadow-xl transition-all duration-500">
              {stories.map((story, idx) => {
                const isActive = idx === activeIndex;
                const imgSrc: string = story.duringImage || story.duringFallback || "";
                return (
                  <div
                    key={`during-${story.id}`}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isActive
                      ? "opacity-100 scale-100 rotate-0 z-10"
                      : "opacity-0 scale-95 z-0 pointer-events-none blur-[1px]"
                      }`}
                    style={{
                      willChange: "opacity, transform",
                      transform: isActive ? "translate3d(0,0,0) scale(1)" : "translate3d(0,0,0) scale(0.95)",
                    }}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${story.name} During Studio I`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className={`object-cover ${story.duringObjectPosition || "object-center"} rounded-2xl`}
                      priority={idx === 0}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (story.duringFallback && target.src !== story.duringFallback) {
                          target.src = story.duringFallback;
                        }
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Caption Text with Smooth Cross-fade */}
            <div className="relative min-h-[54px] w-full max-w-[480px] flex items-center justify-center pt-1">
              {stories.map((story, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <p
                    key={`during-cap-${story.id}`}
                    className={`text-xs sm:text-sm text-neutral-700 leading-snug tracking-tight font-normal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 absolute pointer-events-none"
                      }`}
                  >
                    {story.duringCaption}
                  </p>
                );
              })}
            </div>
          </div>

          {/* 2. CENTER COLUMN: Vertical Drum Wheel List (2 Cols - Compact Text Grid) */}
          <div className="col-span-2 flex flex-col items-center justify-center select-none relative h-[440px] lg:h-[520px] xl:h-[580px] overflow-hidden px-1">

            {/* Focal Highlight Box Background */}
            <div className="absolute inset-x-0 h-16 top-1/2 -translate-y-1/2 rounded-xl pointer-events-none transition-all duration-300 drop-shadow-lg" />

            {/* Vertically Sliding Drum Stack */}
            <div
              className="flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full py-4 space-y-6"
              style={{
                transform: `translate3d(0, ${(2 - activeIndex) * 68}px, 0)`,
                willChange: "transform",
              }}
            >
              {stories.map((story, idx) => {
                const isActive = idx === activeIndex;
                const distance = Math.abs(idx - activeIndex);

                return (
                  <button
                    key={`name-${story.id}`}
                    onClick={() => {
                      scrollToCompany(idx);
                      setSelectedModalStory(story);
                    }}
                    className={`group relative text-center focus:outline-none transition-all duration-500 cursor-pointer h-12 flex items-center justify-center px-1 w-full ${isActive ? "scale-105" : "hover:scale-105"
                      }`}
                    title={`Click to view full details for ${story.name}`}
                  >
                    <span
                      className={`font-serif tracking-tight transition-all duration-500 block text-center whitespace-nowrap ${isActive
                        ? "text-lg lg:text-xl xl:text-2xl font-bold text-neutral-950 opacity-100"
                        : distance === 1
                          ? "text-sm xl:text-base font-normal text-neutral-400 opacity-40 hover:opacity-75"
                          : "text-xs xl:text-sm font-normal text-neutral-300 opacity-20 hover:opacity-50"
                        }`}
                    >
                      {story.name}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* 3. RIGHT COLUMN: "Now" (5 Cols - Larger Image) */}
          <div className="col-span-5 flex flex-col items-center text-center space-y-3">
            <h3 className="font-serif italic text-base sm:text-lg lg:text-xl text-neutral-800 font-medium">
              Now
            </h3>

            {/* Direct Edge-to-Edge Image Container (Massive Height & Aspect Ratio) */}
            <div className="relative w-full aspect-[4/3.8] lg:aspect-[1/1] xl:aspect-[1/1.05] 2xl:aspect-[1/1.1] min-h-[380px] lg:min-h-[440px] xl:min-h-[500px] 2xl:min-h-[560px] rounded-2xl overflow-hidden bg-neutral-200 shadow-xl transition-all duration-500">
              {stories.map((story, idx) => {
                const isActive = idx === activeIndex;
                const imgSrc: string = story.nowImage || story.nowFallback || "";
                return (
                  <div
                    key={`now-${story.id}`}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isActive
                      ? "opacity-100 scale-100 rotate-0 z-10"
                      : "opacity-0 scale-95 z-0 pointer-events-none blur-[1px]"
                      }`}
                    style={{
                      willChange: "opacity, transform",
                      transform: isActive ? "translate3d(0,0,0) scale(1)" : "translate3d(0,0,0) scale(0.95)",
                    }}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${story.name} Now`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className={`object-cover ${story.nowObjectPosition || "object-center"} rounded-2xl`}
                      priority={idx === 0}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (story.nowFallback && target.src !== story.nowFallback) {
                          target.src = story.nowFallback;
                        }
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Caption Text with Smooth Cross-fade */}
            <div className="relative min-h-[54px] w-full max-w-[480px] flex items-center justify-center pt-1">
              {stories.map((story, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <p
                    key={`now-cap-${story.id}`}
                    className={`text-xs sm:text-sm text-neutral-700 leading-snug tracking-tight font-normal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 absolute pointer-events-none"
                      }`}
                  >
                    {story.nowCaption}
                  </p>
                );
              })}
            </div>
          </div>

        </div>

        {/* MOBILE RESPONSIVE LAYOUT (< lg screens) */}
        <div className="lg:hidden w-full max-w-2xl mx-auto flex flex-col justify-center h-full py-2 px-3 max-sm:p-0">

          {/* Mobile Side-by-Side Comparison View */}
          {/* <div className="grid grid-cols-2 gap-3 sm:gap-6 items-start my-auto w-full"> */}
          <div className="grid max-sm:grid-rows-2 md:grid-cols-2 gap-3 sm:gap-6 items-start my-auto w-full max-sm:my-4">
            {/* Mobile During Studio I */}
            <div className="flex flex-col space-y-2 text-center w-full">
              <span className="font-serif italic text-xs sm:text-sm md:text-base font-medium text-neutral-800">
                During Studio I
              </span>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-200 shadow-md">
                {stories.map((s, idx) => (
                  <div
                    key={`mob-during-${s.id}`}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${idx === activeIndex
                      ? "opacity-100 scale-100 rotate-0 z-10"
                      : "opacity-0 scale-95 z-0 pointer-events-none blur-[1px]"
                      }`}
                    style={{
                      willChange: "opacity, transform",
                    }}
                  >
                    <Image
                      src={s.duringImage || s.duringFallback || ""}
                      alt={`${s.name} During Studio I`}
                      fill
                      sizes="50vw"
                      className={`object-cover ${s.duringObjectPosition || "object-center"} rounded-xl sm:rounded-2xl`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (s.duringFallback) target.src = s.duringFallback;
                      }}
                    />
                  </div>
                ))}
              </div>
              {/* <div className="relative min-h-[48px] w-full flex items-center justify-center pt-1 px-1">
                {stories.map((s, idx) => (
                  <p
                    key={`mob-during-cap-${s.id}`}
                    className={`text-[10px] sm:text-xs text-neutral-700 leading-snug tracking-tight text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${idx === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 absolute pointer-events-none"
                      }`}
                  >
                    {s.duringCaption}
                  </p>
                ))}
              </div> */}
            </div>

            {/* Mobile Now */}
            <div className="flex flex-col space-y-2 text-center w-full">
              <span className="font-serif italic text-xs sm:text-sm md:text-base font-medium text-neutral-800">
                Now
              </span>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-200 shadow-md">
                {stories.map((s, idx) => (
                  <div
                    key={`mob-now-${s.id}`}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${idx === activeIndex
                      ? "opacity-100 scale-100 rotate-0 z-10"
                      : "opacity-0 scale-95 z-0 pointer-events-none blur-[1px]"
                      }`}
                    style={{
                      willChange: "opacity, transform",
                    }}
                  >
                    <Image
                      src={s.nowImage || s.nowFallback || ""}
                      alt={`${s.name} Now`}
                      fill
                      sizes="50vw"
                      className={`object-cover ${s.nowObjectPosition || "object-center"} rounded-xl sm:rounded-2xl`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (s.nowFallback) target.src = s.nowFallback;
                      }}
                    />
                  </div>
                ))}
              </div>
              {/* <div className="relative min-h-[48px] w-full flex items-center justify-center pt-1 px-1">
                {stories.map((s, idx) => (
                  <p
                    key={`mob-now-cap-${s.id}`}
                    className={`text-[10px] sm:text-xs text-neutral-700 leading-snug tracking-tight text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${idx === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 absolute pointer-events-none"
                      }`}
                  >
                    {s.nowCaption}
                  </p>
                ))}
              </div>  */}
            </div>
          </div>

        </div>
      </div>

      {/* INVISIBLE SCROLL STEP TRACK (Provides height to trigger step transitions on scroll) */}
      <div className="relative w-full">
        {stories.map((story, index) => (
          <div
            key={`step-${story.id}`}
            data-index={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className="h-[80vh] w-full pointer-events-none"
          />
        ))}
      </div>

      {/* DETAILED STORY MODAL / DRAWER */}
      {selectedModalStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedModalStory(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#F6F6F2] rounded-3xl border border-neutral-200/90 shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedModalStory(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-200/70 hover:bg-neutral-300 text-neutral-700 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* MODAL HEADER */}
            <div className="space-y-3 pb-4 border-b border-neutral-300/70">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-pink-100 text-pink-800 px-2.5 py-1 rounded-full border border-pink-200">
                  <Calendar className="w-3 h-3" />
                  {selectedModalStory.batch}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                  <Award className="w-3 h-3" />
                  {selectedModalStory.valuation}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950">
                {selectedModalStory.name}
              </h3>

              <div className="flex items-center gap-4 text-xs text-neutral-600 font-sans pt-0.5">
                <span className="inline-flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-neutral-500" />
                  {selectedModalStory.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-neutral-500" />
                  {selectedModalStory.founders}
                </span>
              </div>
            </div>

            {/* STORY BODY */}
            <div className="py-5 space-y-4">
              <h4 className="font-serif italic text-lg text-neutral-900 font-medium">
                Origin &amp; Growth Narrative
              </h4>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans font-normal">
                {selectedModalStory.detailedStory}
              </p>

              {/* SIDE-BY-SIDE MINI COMPARISON */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white/80 rounded-xl border border-neutral-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                    During Studio I
                  </span>
                  <p className="text-xs text-neutral-800 leading-tight">
                    {selectedModalStory.duringCaption}
                  </p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-neutral-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Now
                  </span>
                  <p className="text-xs text-neutral-800 leading-tight">
                    {selectedModalStory.nowCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="pt-4 border-t border-neutral-300/70 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-serif italic">
                InnovHer Studio i Portfolio Showcase
              </span>
              <a
                href="#all-companies"
                onClick={() => setSelectedModalStory(null)}
                className="inline-flex items-center gap-1.5 bg-black text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-neutral-800 transition-all cursor-pointer"
              >
                <span>View Portfolio Directory</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
