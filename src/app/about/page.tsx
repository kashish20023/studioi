"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles, Users, Compass, Share2 } from "lucide-react";

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-serif text-[15px] italic ${light ? "text-white/70" : "text-neutral-500"
        }`}
    >
      <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#d42f92]" />
      {children}
    </span>
  );
}

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState(0);

  const fiveIs = [
    { title: "Identity", tagline: "Finding what you stand for.", number: "01" },
    { title: "Innovation", tagline: "Exploring what could be better.", number: "02" },
    { title: "Initiative", tagline: "Making the first move.", number: "03" },
    { title: "Incorporation", tagline: "Giving ambition a formal foundation.", number: "04" },
    { title: "Institution", tagline: "Building something that lasts beyond its beginnings.", number: "05" },
  ];

  const conversations = [
    "A founder finds a collaborator.",
    "A business discovers a new direction.",
    "An idea meets someone who can take it further.",
  ];

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#15120F]">
      <style>{`
        @keyframes runwayMove {
          from { transform: translateX(0); }
          to { transform: translateX(-56px); }
        }
        .runway-strip { animation: runwayMove 3.2s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .runway-strip { animation: none; }
        }
      `}</style>

      <Navbar />

      <main className="overflow-hidden">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-black/10 py-16 sm:py-20 lg:py-24">
          {/* Ambient Top Right Glow */}
          <div className="pointer-events-none absolute right-[-160px] top-[-120px] h-[500px] w-[500px] rounded-full bg-[#d42f92]/10 blur-[130px]" />

          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

              {/* LEFT COLUMN: DISPLAY HEADLINE */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-3">
                  <Eyebrow>About Studio I</Eyebrow>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d42f92]/30 bg-[#d42f92]/5 px-3 py-1 text-xs font-medium text-[#d42f92]">
                    <Sparkles className="h-3 w-3" />
                    <span>Venture Building Space</span>
                  </span>
                </div>

                <h1 className="font-serif text-[clamp(2.6rem,5.5vw,6.4rem)] leading-[0.98] tracking-[-0.04em] text-neutral-950">
                  <span className="font-semibold block">We bring ambition,</span>
                  <span className="font-medium block text-neutral-900">people &amp; possibility</span>
                  <span className="italic font-light text-neutral-700 block mt-1">
                    into the same room<span className="text-[#d42f92] not-italic">.</span>
                  </span>
                </h1>
              </div>

              {/* RIGHT COLUMN: GLASS NARRATIVE CARD */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-7 sm:p-9 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-[#d42f92]/5 pointer-events-none" />

                  {/* SUBTITLE */}
                  <div className="border-l-2 border-[#d42f92] pl-4 py-1">
                    <p className="font-serif text-lg italic text-neutral-900 sm:text-xl leading-snug">
                      A space built for people who want to move from ambition to action.
                    </p>
                  </div>

                  {/* MAIN PARAGRAPH */}
                  <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                    Studio I is a venture-building space where companies,
                    founders, creators and investors come together to turn
                    ambition into action. We bring ideas, expertise and
                    opportunity closer, creating room for ventures to begin,
                    businesses to grow and collaborations to take shape.
                  </p>

                  {/* FOOTNOTE TAG */}
                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                    <span className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-400">
                      Studio I &bull; Jaipur, India
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d42f92]/10 text-[#d42f92]">
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FEATURED SHOWCASE IMAGE ================= */}
        <section className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/8.5] min-h-[360px] sm:min-h-[460px] lg:min-h-[540px] rounded-2xl sm:rounded-[32px] overflow-hidden bg-neutral-900 shadow-lg border border-black/10 group">
            <Image
              src="/images/code 2.webp"
              alt="InnovHer & Google for Startups - AI Day for Startups"
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
                <Sparkles className="h-3.5 w-3.5 text-[#d42f92]" />
                <span>InnovHer &amp; Google for Startups &middot; AI Day for Startups</span>
              </span>
            </div>
          </div>
        </section>

        {/* ================= ECOSYSTEM ================= */}
        <section className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Narrative & Eyebrow */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <Eyebrow>The Ecosystem</Eyebrow>

                <h2 className="mt-6 font-serif text-3xl leading-[1.35] tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.5rem]">
                  For over two years, we have been building and working with
                  companies, navigating the decisions, challenges and
                  breakthroughs that come with creating something of your own.
                </h2>
              </div>

              <div className="mt-8 border-l-2 border-[#d42f92] pl-6 py-1">
                <p className="text-base sm:text-lg leading-7 text-neutral-600">
                  Along the way, we have seen how much can change when the right
                  people enter the conversation.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Cards & Callout */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="space-y-4">
                {conversations.map((item, index) => (
                  <div
                    key={item}
                    className="group relative flex items-center gap-5 rounded-2xl border border-black/10 bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#d42f92]/40 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[#F7F6F2] font-mono text-sm font-bold text-[#d42f92] transition-colors duration-300 group-hover:border-[#d42f92]/30 group-hover:bg-[#d42f92] group-hover:text-white">
                      0{index + 1}
                    </div>

                    <p className="font-serif text-lg italic leading-snug text-neutral-800 transition-colors duration-300 group-hover:text-neutral-950 sm:text-xl">
                      &ldquo;{item}&rdquo;
                    </p>

                    <div className="ml-auto opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <Sparkles className="h-5 w-5 text-[#d42f92]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* CLOSING CALLOUT CARD */}
              <div className="mt-2 relative overflow-hidden rounded-2xl bg-[#15120F] p-6 sm:p-8 text-white shadow-md">
                <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#d42f92]/30 blur-2xl pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <p className="font-serif text-xl italic sm:text-2xl text-white/95">
                    Studio I brings that ecosystem together.
                  </p>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d42f92] border border-white/15">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SHARED GROWTH ================= */}
        <section className="relative border-y border-black/10 bg-gradient-to-b from-[#F7F6F2] via-white/50 to-[#F7F6F2] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

              {/* LEFT COLUMN: Heading & Core Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <Eyebrow>Shared growth</Eyebrow>

                  <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
                    Learn beside people who are building too.
                  </h2>

                  <p className="mt-8 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-8">
                    At Studio I, founders work on their own ventures while
                    learning from the expertise, perspectives and experiences
                    of others building alongside them.
                  </p>
                </div>

                {/* BOTTOM KEY HIGHLIGHT BADGE */}
                <div className="mt-10 flex items-center gap-4 rounded-2xl border border-[#d42f92]/20 bg-[#d42f92]/5 p-5 backdrop-blur-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d42f92] text-white shadow-md">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">The Principle</p>
                    <p className="font-serif text-lg font-medium text-neutral-900 sm:text-xl">
                      Independent ventures. Shared momentum.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: 3 Interactive Feature Cards */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="group relative rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#d42f92]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F6F2] border border-black/10 text-[#d42f92] transition-colors duration-300 group-hover:bg-[#d42f92] group-hover:text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-neutral-950 sm:text-2xl">
                        Beyond Introductions
                      </h3>
                      <p className="mt-2 text-base leading-7 text-neutral-600">
                        Conversations move beyond superficial networking into shared projects, practical answers, and meaningful collaboration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#d42f92]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F6F2] border border-black/10 text-[#d42f92] transition-colors duration-300 group-hover:bg-[#d42f92] group-hover:text-white">
                      <Compass className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-neutral-950 sm:text-2xl">
                        Autonomous Direction
                      </h3>
                      <p className="mt-2 text-base leading-7 text-neutral-600">
                        Each company keeps its own distinct vision and direction, supported by more people to learn from along the way.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#d42f92]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F6F2] border border-black/10 text-[#d42f92] transition-colors duration-300 group-hover:bg-[#d42f92] group-hover:text-white">
                      <Share2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-neutral-950 sm:text-2xl">
                        Collective Experience
                      </h3>
                      <p className="mt-2 text-base leading-7 text-neutral-600">
                        Leverage real-time insights and hard-won lessons from fellow founders facing similar scaling challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= RUNWAY ================= */}
        <section className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#15120F] text-white sm:rounded-[36px] shadow-2xl">
            {/* Background Ambient Glows */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full bg-[#d42f92]/25 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 left-[10%] h-[320px] w-[320px] rounded-full bg-white/5 blur-[90px]" />

            <div className="relative z-10 grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12 items-start">
              {/* LEFT: Eyebrow */}
              <div className="lg:col-span-4">
                <Eyebrow light>Our philosophy</Eyebrow>
              </div>

              {/* RIGHT: Headline, Motif & Compact Paragraph */}
              <div className="flex flex-col lg:col-span-8 gap-6">
                <div>
                  <h2 className="max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    Studio I is a runway.
                  </h2>

                  {/* Animated runway strip motif */}
                  <div className="relative mt-6 h-[3px] w-full max-w-xs overflow-hidden rounded-full">
                    <div
                      className="runway-strip absolute inset-y-0 left-0 w-[200%]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, #d42f92 0px, #d42f92 20px, transparent 20px, transparent 44px)",
                      }}
                    />
                  </div>
                </div>

                {/* TEXT PARAGRAPH RIGHT BELOW MOTIF */}
                <div className="border-t border-white/15 pt-5">
                  <p className="max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
                    A place where ideas gather momentum, people find possibility
                    and beginnings find direction — where the distance between
                    thinking about something and taking the first step becomes a
                    little smaller.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FIVE Is ================= */}
        <section className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          {/* HEADING WITH INTEGRATED LINE */}
          <div className="mb-10 flex items-center gap-6">
            <h2 className="shrink-0 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 font-medium">
              The Five I&apos;s
            </h2>
            <div className="h-[1px] w-full bg-black/15" />
          </div>

          {/* INTERACTIVE PILLARS LIST */}
          <div className="border-t border-black/15">
            {fiveIs.map((pillar, index) => {
              const isActive = activePillar === index;
              return (
                <div
                  key={pillar.title}
                  onMouseEnter={() => setActivePillar(index)}
                  onClick={() => setActivePillar(index)}
                  className={`group relative grid cursor-pointer grid-cols-1 items-center gap-4 border-b border-black/15 py-5 sm:py-6 lg:py-7 transition-all duration-300 sm:grid-cols-12 sm:gap-6 ${isActive ? "bg-black/[0.015] px-4 -mx-4 rounded-xl sm:px-6 sm:-mx-6" : "hover:bg-black/[0.008]"
                    }`}
                >
                  {/* NUMBER */}
                  <div className="flex items-center gap-2.5 sm:col-span-2">
                    <span className={`font-mono text-sm font-semibold tracking-wider transition-colors duration-300 ${isActive ? "text-[#d42f92]" : "text-neutral-400 group-hover:text-[#d42f92]"
                      }`}>
                      {pillar.number}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d42f92] animate-pulse" />
                    )}
                  </div>

                  {/* TITLE */}
                  <div className="sm:col-span-5">
                    <h3 className={`font-serif text-2xl tracking-tight transition-all duration-300 sm:text-3xl lg:text-3xl ${isActive ? "translate-x-2 text-neutral-950 font-medium" : "text-neutral-800 group-hover:translate-x-2 group-hover:text-neutral-950"
                      }`}>
                      {pillar.title}
                      <span className="text-[#d42f92]"></span>
                    </h3>
                  </div>

                  {/* TAGLINE & INTERACTIVE ICON */}
                  <div className="flex items-center justify-between gap-5 sm:col-span-5">
                    <p className={`text-base sm:text-lg transition-colors duration-300 ${isActive ? "text-neutral-900 font-medium" : "text-neutral-500 group-hover:text-neutral-800"
                      }`}>
                      {pillar.tagline}
                    </p>

                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isActive
                      ? "border-[#d42f92] bg-[#d42f92] text-white rotate-45 scale-105 shadow-sm"
                      : "border-black/15 text-neutral-400 group-hover:border-black/30 group-hover:text-neutral-900 group-hover:rotate-45"
                      }`}>
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  {/* ACTIVE PINK ACCENT LINE */}
                  <span className={`absolute bottom-[-1px] left-0 h-[2px] bg-[#d42f92] transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= CLOSING CTA SECTION ================= */}
        <section className="relative overflow-hidden border-t border-black/10 bg-gradient-to-b from-[#F7F6F2] via-[#EAE8E1] to-[#F7F6F2] py-16 sm:py-24 lg:py-28">
          {/* Ambient Background Glows */}
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-[#d42f92]/10 blur-[130px]" />
          <div className="pointer-events-none absolute -top-24 right-10 h-[350px] w-[350px] rounded-full bg-black/5 blur-[100px]" />

          <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

              {/* EYEBROW & BADGE */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Eyebrow>Our direction</Eyebrow>
                <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-black/20" />
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-[#d42f92]" />
                  <span>Let&apos;s Venture Beyond</span>
                </span>
              </div>

              {/* MAIN HEADLINE */}
              <h2 className="mt-8 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-7xl lg:text-8xl">
                <span className="font-medium block">A place to begin.</span>
                <span className="italic font-light text-neutral-600 block mt-2 sm:mt-3">
                  A runway to become.
                </span>
              </h2>

              {/* SUPPORTING TEXT */}
              <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-neutral-700 sm:text-2xl lg:text-2xl">
                A space that grows with the people and ventures within it,
                opening doors to what they can become.
              </p>

              {/* ACTION BUTTON */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/companies"
                  className="group relative inline-flex items-center gap-6 rounded-full bg-[#15120F] py-3.5 pl-8 pr-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#d42f92] hover:shadow-2xl hover:shadow-[#d42f92]/25 hover:scale-105 active:scale-95"
                >
                  <span>Explore Companies</span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-[-45deg]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              {/* BRAND FOOTNOTE */}
              <p className="mt-10 font-mono text-xs font-medium uppercase tracking-widest text-neutral-400">
                Studio I &bull; Jaipur, India
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
