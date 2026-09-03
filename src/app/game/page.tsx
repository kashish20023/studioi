"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Gamepad2, ArrowLeft, ExternalLink, Maximize2, Sparkles } from "lucide-react";

export default function GamePage() {
  return (
    <div className="min-h-screen bg-[#15120F] text-white flex flex-col font-sans select-none overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col justify-center">
        
        {/* BACK TO HOME LINK */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Studio i Home</span>
          </Link>
        </div>

        {/* GAME TITLE HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d42f92]/40 bg-[#d42f92]/15 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#d42f92] uppercase mb-2">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Official Arcade Game</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Studio i Arcade Game
            </h1>
          </div>

          <a
            href="https://game.studioi.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-[#d42f92] hover:bg-pink-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(212,47,146,0.5)] hover:scale-105"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* EMBEDDED IFRAME CONTAINER */}
        <div className="relative w-full h-[650px] sm:h-[750px] rounded-3xl bg-black border border-white/20 overflow-hidden shadow-[0_0_50px_rgba(212,47,146,0.25)]">
          <iframe
            src="https://game.studioi.in/"
            title="Studio i Arcade Game"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; accelerometer; gyroscope"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
