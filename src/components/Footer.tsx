"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white font-sans select-none relative z-20">
      {/* MAIN FOOTER CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* COLUMN 1: BRAND LOGO & STATEMENT (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            {/* EXACT HEADER LOGO DISPLAY */}
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center bg-white/95 px-3 py-1.5 rounded-xl transition-transform hover:scale-105 shadow-xs">
                <img
                  src="/innovherlogo.png"
                  alt="InnovHer Logo"
                  className="h-7 w-auto object-contain"
                />
              </Link>
              <span className="text-neutral-500 text-lg font-light">|</span>
              <Link href="/" className="inline-flex items-center bg-white/95 px-2.5 py-1 rounded-xl transition-transform hover:scale-105 shadow-xs">
                <img
                  src="/studioi.png"
                  alt="Studio i Logo"
                  className="h-7 w-auto object-contain"
                />
              </Link>
            </div>

            {/* UPDATED BRAND DESCRIPTION */}
            <p className="text-sm text-neutral-300 leading-relaxed font-sans max-w-md">
              InnovHer &amp; Studio i empower ambitious founders and visionary builders with venture capital, hands-on growth design, strategic mentorship, and global ecosystem access to turn bold ideas into category-defining companies.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS (4 Cols) */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              QUICK LINKS
            </h4>

            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-150">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/companies" className="hover:text-white transition-colors duration-150">
                  Companies Directory
                </Link>
              </li>
              <li>
                <a href="#offering" className="hover:text-white transition-colors duration-150">
                  Services &amp; Offering
                </a>
              </li>
              <li>
                <a href="#library" className="hover:text-white transition-colors duration-150">
                  Resource Library
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors duration-150">
                  Our Team
                </a>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-white transition-colors duration-150">
                  News &amp; Events
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-150">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: LOCATION & AVAILABILITY (3 Cols) */}
          <div className="md:col-span-3 space-y-6">
            {/* LOCATION BLOCK */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                LOCATION
              </h4>
              <address className="not-italic text-sm text-neutral-300 leading-relaxed space-y-1">
                <p className="font-semibold text-white">InnovHer Innovation Hub</p>
                <p>A-103, KGK Lehariya Tower A, Airport Road, Near Jawhar Circle, Jaipur-302017</p>
                <p>India</p>
              </address>
            </div>

            {/* HORIZONTAL DIVIDER */}
            <div className="border-t border-neutral-800/90 pt-4">
              {/* AVAILABILITY BLOCK */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  AVAILABILITY
                </h4>
                <p className="text-sm font-medium text-white">
                  Available Daily: 7am &ndash; 11pm
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="border-t border-neutral-900 bg-[#030303] py-6 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>&copy; 2026 InnovHer &amp; Studio i. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>&middot;</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
