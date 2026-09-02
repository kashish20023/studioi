"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

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
        <section className="relative border-b border-black/10">
          <div className="pointer-events-none absolute right-[-160px] top-[-120px] h-[480px] w-[480px] rounded-full bg-[#d42f92]/10 blur-[120px]" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid min-h-[82vh] grid-cols-1 items-end gap-14 pb-12 pt-28 lg:grid-cols-12 lg:pb-16 lg:pt-36">
              {/* LEFT */}
              <div className="lg:col-span-3 lg:self-start lg:pt-7">
                <Eyebrow>About Studio I</Eyebrow>

                <p className="mt-7 max-w-[220px] text-sm leading-6 text-neutral-500">
                  A space built for people who want to move from ambition to
                  action.
                </p>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-9">
                <h1 className="max-w-6xl font-serif text-[clamp(3rem,6.5vw,7.5rem)] leading-[0.92] tracking-[-0.045em] text-neutral-950">
                  <span className="font-medium">We bring ambition,</span>
                  <br />
                  <span className="font-medium">people and possibility</span>
                  <br />
                  <span className="font-light text-neutral-800">
                    into the same room.
                  </span>
                </h1>

                <div className="mt-10 grid gap-7 border-t border-black/10 pt-7 md:grid-cols-2">
                  <p className="max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                    Studio I is a venture-building space where companies,
                    founders, creators and investors come together to turn
                    ambition into action.
                  </p>

                  <p className="max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                    We bring ideas, expertise and opportunity closer, creating
                    room for ventures to begin, businesses to grow and
                    collaborations to take shape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ECOSYSTEM ================= */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Eyebrow>The ecosystem</Eyebrow>

                <h2 className="mt-6 max-w-sm font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                  Two years of building alongside ambition.
                </h2>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-3xl font-serif text-2xl leading-[1.45] text-neutral-800 sm:text-3xl lg:text-[2.4rem]">
                For over two years, we have been building and working with
                companies, navigating the decisions, challenges and
                breakthroughs that come with creating something of your own.
              </p>

              <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-600">
                Along the way, we have seen how much can change when the right
                people enter the conversation.
              </p>

              {/* Conversation list */}
              <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
                {conversations.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-baseline gap-6 py-7"
                  >
                    <span className="w-8 shrink-0 font-serif text-sm text-neutral-400 transition-colors duration-300 group-hover:text-[#d42f92]">
                      {`0${index + 1}`}
                    </span>
                    <p className="font-serif text-xl italic leading-snug text-neutral-600 transition-all duration-300 group-hover:translate-x-2 group-hover:text-neutral-950 sm:text-2xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 font-serif text-2xl italic text-neutral-950 sm:text-3xl">
                Studio I brings that ecosystem together.
              </p>
            </div>
          </div>
        </section>

        {/* ================= LEARNING ================= */}
        <section className="border-y border-black/10 bg-white/40">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Eyebrow>Shared growth</Eyebrow>

                <h2 className="mt-6 max-w-sm font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                  Learn beside people who are building too.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-10 md:grid-cols-2">
                  <p className="text-lg leading-8 text-neutral-600">
                    At Studio I, founders work on their own ventures while
                    learning from the expertise, perspectives and experiences
                    of others building alongside them.
                  </p>

                  <p className="text-lg leading-8 text-neutral-600">
                    Conversations move beyond introductions into shared
                    projects, practical answers and new opportunities. Each
                    company keeps its own direction, with more people to learn
                    from along the way.
                  </p>
                </div>

                <div className="mt-16 flex items-center gap-5 border-t border-black/10 pt-10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d42f92]/20 bg-[#d42f92]/10">
                    <Sparkles className="h-5 w-5 text-[#d42f92]" />
                  </div>

                  <div>
                    <p className="text-sm text-neutral-400">The idea</p>
                    <p className="mt-1 font-serif text-xl">
                      Independent ventures. Shared momentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RUNWAY ================= */}
        <section className="px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-[#15120F] text-white sm:rounded-[48px]">
            <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#d42f92]/30 blur-[110px]" />
            <div className="absolute -bottom-40 left-[15%] h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px]" />

            <div className="relative z-10 grid min-h-[620px] grid-cols-1 gap-14 p-8 sm:p-12 lg:grid-cols-12 lg:p-20">
              <div className="lg:col-span-4">
                <Eyebrow light>Our philosophy</Eyebrow>
              </div>

              <div className="flex flex-col justify-between lg:col-span-8">
                <div>
                  <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                    Studio I is a runway.
                  </h2>

                  {/* runway strip motif — the one deliberate motion moment */}
                  <div className="relative mt-10 h-[3px] w-full max-w-md overflow-hidden rounded-full">
                    <div
                      className="runway-strip absolute inset-y-0 left-0 w-[200%]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, #d42f92 0px, #d42f92 24px, transparent 24px, transparent 52px)",
                      }}
                    />
                  </div>
                </div>

                <div className="mt-16 grid gap-10 border-t border-white/15 pt-8 md:grid-cols-2">
                  <p className="text-lg leading-8 text-neutral-300">
                    A place where ideas gather momentum, people find
                    possibility and beginnings find direction.
                  </p>

                  <p className="text-lg leading-8 text-neutral-300">
                    Where the distance between thinking about something and
                    taking the first step becomes a little smaller.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FIVE Is ================= */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>The five I&apos;s</Eyebrow>
            </div>

            <div className="lg:col-span-8">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
                The “I” carries the ambition behind it all.
              </h2>
            </div>
          </div>

          <div className="border-t border-black/15">
            {fiveIs.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative grid cursor-default grid-cols-1 items-center gap-5 border-b border-black/15 py-8 transition-all duration-300 sm:grid-cols-12 sm:py-10"
              >
                <div className="sm:col-span-2">
                  <span className="font-mono text-sm text-[#d42f92]">
                    {pillar.number}
                  </span>
                </div>

                <div className="sm:col-span-5">
                  <h3 className="font-serif text-4xl tracking-tight transition-transform duration-300 group-hover:translate-x-3 sm:text-5xl">
                    {pillar.title}
                    <span className="text-[#d42f92]">.</span>
                  </h3>
                </div>

                <div className="flex items-center justify-between gap-5 sm:col-span-5">
                  <p className="max-w-sm text-base text-neutral-500 sm:text-lg">
                    {pillar.tagline}
                  </p>

                  <ArrowUpRight className="h-6 w-6 -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>

                <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#d42f92] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </section>

        {/* ================= CLOSING ================= */}
        <section className="relative overflow-hidden bg-[#EAE8E1]">
          <div className="pointer-events-none absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#d42f92]/10 blur-[100px]" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <Eyebrow>Our direction</Eyebrow>
              </div>

              <div className="lg:col-span-9">
                <p className="max-w-5xl font-serif text-3xl leading-[1.25] tracking-tight text-neutral-800 sm:text-5xl lg:text-6xl">
                  A space that grows with the people and ventures within it,
                  opening doors to what they can become.
                </p>

                <div className="mt-24 border-t border-black/15 pt-10">
                  <h2 className="max-w-5xl font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.95] tracking-[-0.04em]">
                    <span className="font-medium">A place to begin.</span>
                    <br />
                    <span className="italic font-light text-neutral-700">
                      A runway to become.
                    </span>
                  </h2>

                  <div className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-black/10 pt-8 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-sm text-neutral-400">Studio I</p>
                      <p className="mt-2 font-serif text-2xl">
                        Let&apos;s Venture Beyond.
                      </p>
                    </div>

                    <Link
                      href="/companies"
                      className="group inline-flex items-center gap-5 rounded-full bg-[#15120F] py-2 pl-7 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#d42f92]"
                    >
                      <span>Explore Companies</span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-[-45deg]">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}