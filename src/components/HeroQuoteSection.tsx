"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export default function HeroQuoteSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] bg-[#F6F6F2] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 text-center select-none font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 my-auto">
        {/* Main Hero Statement */}
        <h1 className="font-serif mb-4 text-2xl sm:text-3xl md:text-5xl font-normal text-neutral-950 tracking-tight leading-[1.15] max-w-3xl">
          Studio i turns ambition into ventures <br className="hidden sm:inline" />
          built to scale, <span className="italic font-serif font-normal">lead and venture beyond</span>
        </h1>

        {/* Footnote Quote */}
        {/* <div className="max-w-lg mx-auto space-y-1.5 pt-2">
          <p className="font-serif italic text-xs sm:text-sm text-neutral-700 leading-relaxed">
            [1] &quot;A formidable person is one who seems like they&apos;ll get what they want, regardless of whatever obstacles are in the way.&quot;
          </p>
          <p className="font-serif text-xs text-neutral-500 tracking-wide">
            &mdash; Paul Graham
          </p>
        </div> */}
      </div>

    </section>
  );
}
