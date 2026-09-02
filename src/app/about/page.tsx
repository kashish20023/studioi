"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, ArrowRight, Compass, Rocket, TrendingUp, Building2, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const forces = [
    {
      title: "Founders are building.",
      icon: Rocket,
      desc: "Architecting the next generation of category-defining companies.",
    },
    {
      title: "Businesses are scaling.",
      icon: TrendingUp,
      desc: "Expanding operations, accelerating growth, and conquering markets.",
    },
    {
      title: "Investors are searching.",
      icon: Building2,
      desc: "Seeking high-conviction founders and transformative venture ideas.",
    },
    {
      title: "Ideas are ready for a bigger stage.",
      icon: Lightbulb,
      desc: "Translating ground-level innovation into global scale.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F2] font-sans text-neutral-900 select-none flex flex-col justify-between">
      {/* HEADER NAVBAR */}
      <Navbar />

      <main
        onPointerMove={handlePointerMove}
        className="relative flex-grow w-full overflow-hidden"
      >
        {/* INTERACTIVE AMBIENT CURSOR LIGHT GLOW */}
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-out"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(212, 47, 146, 0.18), transparent 70%)`,
          }}
        />

        {/* TOP HERO SECTION */}
        <section className="relative z-10 pt-6 pb-6 sm:pt-24 sm:py-6 px-4 md:px-4 max-w-7xl mx-auto text-center max-sm:py-4">

          {/* BADGE */}
          <div className="inline-block mb-6 animate-in fade-in duration-500">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-200/80 shadow-sm text-xs font-semibold text-neutral-900">
              <span className="w-2 h-2 rounded-full bg-[#d42f92] animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-[#d42f92] relative" />
              <span className="tracking-wide">ABOUT STUDIO I</span>
              <Sparkles className="w-3.5 h-3.5 text-[#d42f92]" />
            </span>
          </div>

          {/* MAIN EDITORIAL HEADLINE */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-950 font-normal tracking-tight leading-[1.1] max-w-5xl mx-auto mb-8">
            Where ambition finds its runway
          </h1>

          {/* OVERARCHING MISSION STATEMENT CARD */}
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md border border-neutral-200/90 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-pink-300/60 max-sm:p-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#d42f92] via-pink-400 to-transparent" />
            <p className="font-serif italic text-lg sm:text-2xl text-neutral-800 leading-relaxed font-normal">
              &quot;Studio i is a venture-building space created to bring ambitious people, promising ideas, growing businesses, capital and opportunities together under one roof.&quot;
            </p>
          </div>
        </section>

        {/* SECTION 2: JAIPUR BRIDGE ORIGIN STORY */}
        <section className="relative z-10 py-6 sm:py-6 px-4 md:px-4 max-w-6xl mx-auto max-sm:py-4">
          <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl p-8 sm:p-12 max-sm:p-6 lg:p-16 shadow-2xl relative overflow-hidden">

            {/* Subtle Pink Glowing Orb Background */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#d42f92]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#d42f92]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              <div className="lg:col-span-4 space-y-3">
                <span className="text-[#d42f92] font-semibold text-xs sm:text-sm tracking-widest uppercase block">
                  JAIPUR TO GLOBAL STAGE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                  Over Two Years of Ecosystem Impact
                </h2>
                <div className="w-12 h-0.5 bg-[#d42f92]" />
              </div>

              <div className="lg:col-span-8">
                <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-light font-sans">
                  Born from over two years of working closely with businesses across Jaipur, Studio i responds to a clear need: the city does not lack ambition - it needs a stronger bridge between its emerging potential and larger opportunities.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: THE 4 CONNECTED FORCES */}
        <section className="relative z-10 py-12 sm:py-6 px-4 md:px-4 max-w-7xl mx-auto space-y-10 max-sm:py-2">

          <div className="text-center space-y-2">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#d42f92] uppercase block">
              FOUR CONNECTED FORCES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-neutral-950 font-normal tracking-tight">
              Connecting Potential with Opportunity
            </h2>
          </div>

          {/* 4 CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {forces.map((force, idx) => {
              const IconComp = force.icon;
              return (
                <div
                  key={`force-${idx}`}
                  className="group relative bg-white/90 backdrop-blur-sm border border-neutral-200/90 rounded-2xl p-6 max-sm:p-4 sm:p-8 md:p-4 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between "
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#d42f92] group-hover:bg-[#d42f92] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-neutral-950 font-medium leading-snug">
                      {force.title}
                    </h3>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-100 max-sm:mt-0">
                    <span className="text-xs font-semibold text-neutral-400 group-hover:text-[#d42f92] transition-colors">
                      0{idx + 1} &bull; CORE PILLAR
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SYNTHESIS CALLOUT BOX */}
          <div className="bg-white/90 backdrop-blur-md border border-neutral-300/80 rounded-2xl p-8 sm:p-10 text-center shadow-md max-w-4xl mx-auto max-sm:p-4">
            <p className="font-serif text-lg sm:text-2xl text-neutral-800 leading-relaxed font-normal">
              Studio i connects these forces, creating an environment where meaningful collaborations begin and ventures gain the support they need to move forward.
            </p>
          </div>
        </section>

        {/* SECTION 4: THE RUNWAY VISION */}
        <section className="relative z-10 py-12 sm:py-6 px-4 md:px-4 max-w-6xl mx-auto max-sm:py-4">
          <div className="relative rounded-3xl bg-neutral-900 text-white p-8 sm:p-14 overflow-hidden shadow-xl border border-neutral-800">

            {/* Runway lines graphic effect */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-col justify-between py-6 px-12">
              <div className="border-t-2 border-dashed border-white w-full" />
              <div className="border-t-2 border-dashed border-white w-full" />
              <div className="border-t-2 border-dashed border-white w-full" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-pink-400 font-semibold">
                <Compass className="w-4 h-4" />
                <span>THE RUNWAY VISION</span>
              </div>

              <p className="font-serif text-xl sm:text-3xl lg:text-4xl text-white leading-snug font-normal">
                Studio i is envisioned as a runway where businesses gather momentum, unlock new possibilities and prepare for what comes next.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: CLOSING ECOSYSTEM SIGN-OFF */}
        <section className="relative z-10 py-16 sm:py-6 px-4 md:px-4 max-w-5xl mx-auto text-center max-sm:py-4">
          <div className="relative bg-gradient-to-b from-white to-pink-50/40 border border-pink-200/80 rounded-3xl p-8 sm:p-8 shadow-xl space-y-8 max-sm:p-4">
            <h2 className="font-serif italic text-lg max-sm:mb-2 sm:text-4xl lg:text-5xl text-neutral-950 font-normal leading-tight max-w-4xl mx-auto">
              More than a workspace, Studio i is a place to begin, a platform to grow and an ecosystem built to help ventures scale, lead and venture beyond.
            </h2>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Explore Companies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
