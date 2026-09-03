"use client";

import React from "react";
import Image from "next/image";
import { Gamepad2, Sparkles, ExternalLink, Maximize2, Play, UserCheck, ShieldCheck } from "lucide-react";

export default function GameShowcaseSection() {
  return (
    <section className="w-full bg-[#15120F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      {/* Animation Keyframes for Character Float & Glow */}
      <style>{`
        @keyframes characterFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(2deg);
          }
        }
        @keyframes characterGlowPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.08);
          }
        }
        .animate-character-float {
          animation: characterFloat 4s ease-in-out infinite;
        }
        .animate-character-glow {
          animation: characterGlowPulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Neon Glowing Orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[450px] w-[450px] rounded-full bg-[#d42f92]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[450px] w-[450px] rounded-full bg-[#d42f92]/15 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER WITH FEATURED GAME CHARACTER AVATAR SPOTLIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 mb-10 sm:mb-14 border-b border-white/10 pb-10">

          {/* LEFT: TEXT & ATTRACTIVE LINK BUTTON */}
          <div className="lg:col-span-8 space-y-5">
            {/* EYEBROW BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d42f92]/40 bg-[#d42f92]/15 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#d42f92] uppercase shadow-[0_0_15px_rgba(212,47,146,0.3)]">
              <Gamepad2 className="w-4 h-4 animate-bounce" />
              <span>Studio i Arcade Game</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08]">
              Experience Venture Building <br />
              <span className="italic font-light text-neutral-300">with our Official Game Character.</span>
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Step into the shoes of the Studio i hero, dodge market risks, collect seed funding, and scale your venture to institution.
            </p>

            {/* ATTRACTIVE GAME LINK BUTTON */}
            <div className="pt-2 flex flex-wrap cursor-pointer items-center gap-4">
              <a
                href="https://game.studioi.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative cursor-pointer inline-flex items-center gap-3.5 bg-gradient-to-r from-[#d42f92] via-pink-600 to-purple-600 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(212,47,146,0.6)] hover:shadow-[0_0_45px_rgba(212,47,146,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden border border-white/30 cursor-pointer"
              >
                {/* Shimmer Light Beam Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#d42f92] transition-colors duration-300">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>

                <span className="relative z-10 tracking-wide">PLAY GAME AT GAME.STUDIOI.IN</span>

                <ExternalLink className="relative z-10 w-5 h-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT: FEATURED 3D GAME CHARACTER CARD DISPLAY (INCREASED SIZE) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] min-h-[460px] sm:min-h-[500px] rounded-3xl bg-gradient-to-b from-neutral-800/95 via-neutral-900/95 to-black border border-white/20 p-6 sm:p-7 flex flex-col items-center justify-between shadow-2xl backdrop-blur-xl hover:border-[#d42f92]/70 transition-all duration-500 hover:scale-[1.02]">

              {/* Pink Glowing Background Aura */}
              <div className="absolute inset-0 rounded-3xl bg-[#d42f92]/25 blur-2xl animate-character-glow pointer-events-none" />

              {/* TOP CHARACTER BADGE */}
              <div className="relative z-10 w-full flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-pink-400 uppercase bg-[#d42f92]/20 border border-[#d42f92]/50 px-3.5 py-1 rounded-full">
                  <ShieldCheck className="w-4 h-4" />
                  <span>HERO AVATAR</span>
                </span>
                <span className="font-mono text-xs text-neutral-300 font-bold bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                  LVL 99
                </span>
              </div>

              {/* FLOATING 3D CHARACTER SPRITE (PROMINENT LARGE SIZE) */}
              <div className="relative z-10 w-60 h-72 sm:w-72 sm:h-80 my-1 animate-character-float flex items-center justify-center">
                <Image
                  src="/images/game_character_3d_hd.png"
                  alt="Studio i Official 3D Running Game Character"
                  fill
                  sizes="420px"
                  className="object-contain drop-shadow-[0_15px_35px_rgba(212,47,146,0.8)] group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>

              {/* BOTTOM CHARACTER NAME TAG */}
              <div className="relative z-10 w-full text-center bg-black/75 backdrop-blur-md rounded-2xl py-3 px-4 border border-white/15 shadow-lg">
                <p className="font-mono text-[11px] text-pink-400 uppercase tracking-widest font-semibold">
                  OFFICIAL CHARACTER
                </p>
                <p className="font-serif text-xl font-medium text-white tracking-tight mt-0.5">
                  Studio i Builder
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* LIVE GAME EMBEDDED DISPLAY SECTION */}
        <div className="relative w-full rounded-3xl sm:rounded-[36px] bg-neutral-900/90 border border-white/15 overflow-hidden shadow-2xl backdrop-blur-xl">

          {/* TOP GAME BAR */}
          <div className="bg-black/80 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />

              {/* CHARACTER MINI ICON IN BAR */}
              <div className="ml-2 flex items-center gap-2 bg-neutral-800/80 border border-white/10 px-3 py-1 rounded-full">
                <div className="relative w-4 h-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/game_character.png"
                    alt="Character Mini Icon"
                    fill
                    sizes="16px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="font-mono text-xs text-neutral-300 uppercase tracking-wider">
                  PLAYING AS STUDIO i HERO
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <a
                href="https://game.studioi.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#d42f92] hover:text-pink-300 font-bold transition-colors"
              >
                <span>OPEN FULLSCREEN</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* EMBEDDED IFRAME DISPLAYING THE GAME */}
          <div className="relative w-full h-[500px] sm:h-[620px] lg:h-[700px] bg-black">
            <iframe
              src="https://game.studioi.in/"
              title="Studio i Arcade Game"
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; accelerometer; gyroscope"
            />
          </div>

          {/* BOTTOM BAR WITH LINK */}
          <div className="bg-black/90 px-6 py-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d42f92]" />
              <span>POWERED BY STUDIO i ARCADE ENGINE</span>
            </div>

            <a
              href="https://game.studioi.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#d42f92] transition-colors underline underline-offset-4 flex items-center gap-1.5"
            >
              <span>game.studioi.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
