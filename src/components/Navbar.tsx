"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F6F6F2]/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs select-none transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-18">

          {/* LEFT: InnovHer Logo */}
          <div className="flex-shrink-0 flex items-center relative z-10">
            <Link href="https://innovher.com/" target="_blank" className="flex items-center group transition-transform duration-200 hover:scale-[1.02]">
              <img
                src="/innovherlogo.png"
                alt="InnovHer Logo"
                className="h-6 sm:h-8 max-h-9 w-auto object-contain transition-all"
              />
            </Link>
          </div>

          {/* CENTER (MOBILE): Studio i Logo */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
            <Link href="/" className="flex items-center group transition-transform duration-200 hover:scale-[1.02]">
              <img
                src="/studio.png"
                alt="Studio i Logo"
                className="h-6 sm:h-8 max-h-9 w-auto object-contain transition-all"
              />
            </Link>
          </div>

          {/* CENTER: Menu Items (Desktop Layout) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-[15px] text-neutral-800">
            {/* Direct About Link */}
            <Link
              href="/about"
              className="py-2 text-neutral-800 hover:text-black transition-colors"
            >
              About
            </Link>

            {/* Direct Companies Link */}
            <Link
              href="/companies"
              className="py-2 text-neutral-800 hover:text-black transition-colors"
            >
              Companies
            </Link>

            {/* Direct Stories Link */}
            <Link
              href="/library"
              className="py-2 text-neutral-800 hover:text-black transition-colors"
            >
              Stories
            </Link>

            {/* Studio i CENTER HIGHLIGHT BADGE */}
            <div className="px-1 flex items-center justify-center">
              <Link
                href="/"
                className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
                title="Studio i"
              >
                <img
                  src="/studio.png"
                  alt="Studio i Logo"
                  className="h-6 sm:h-7.5 w-auto object-contain transition-all"
                />
              </Link>
            </div>

            {/* Team */}
            <Link
              href="/team"
              className="py-2 text-neutral-800 hover:text-black transition-colors"
            >
              Team
            </Link>

            {/* Offering */}
            {/* <a
              href="#offering"
              className="py-2 text-neutral-800 hover:text-black transition-colors"
            >
              Offering
            </a> */}

            {/* News & Events */}
            <Link
              href="/news-events"
              className="py-2 text-neutral-800 hover:text-black transition-colors whitespace-nowrap"
            >
              News &amp; Events
            </Link>
          </nav>

          {/* RIGHT: Action Buttons (Log in & Dashboard) */}
          <div className="hidden lg:flex items-center gap-4 pl-4">
            {/* Dashboard Pill Button */}
            <a
              href="https://accelerator.bharat-ventures.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d42f92] hover:bg-[#b8247d] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(212,47,146,0.35)] hover:shadow-[0_0_22px_rgba(212,47,146,0.6)] active:scale-95 cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4 text-white" />
              <span>Apply</span>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-neutral-700 hover:bg-neutral-200/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-[#F6F6F2] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 font-medium text-neutral-800">
            <Link
              href="/about"
              className="px-3 py-2 rounded-md hover:bg-neutral-200/60 font-semibold text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/companies"
              className="px-3 py-2 rounded-md hover:bg-neutral-200/60 text-neutral-900 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Companies
            </Link>
            <Link
              href="/library"
              className="px-3 py-2 rounded-md hover:bg-neutral-200/60 font-semibold text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              href="/team"
              className="px-3 py-2 rounded-md hover:bg-neutral-200/60 font-semibold text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <a
              href="#offering"
              className="px-3 py-2 rounded-md hover:bg-neutral-200/60"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offering
            </a>
            <Link
              href="/news-events"
              className="px-3 py-2 rounded-md hover:bg-neutral-200/60 font-semibold text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              News &amp; Events
            </Link>
          </nav>

          <div className="pt-4 border-t border-neutral-300/70 flex flex-col gap-2">
            <a
              href="https://accelerator.bharat-ventures.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#d42f92] hover:bg-[#b8247d] text-white py-2.5 rounded-full font-semibold shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LayoutDashboard className="w-4 h-4 text-white" />
              <span>Apply</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
