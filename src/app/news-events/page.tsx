"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlayCircle } from "lucide-react";

const videos = [
  { id: "xCyZFhMTcq0", title: "News & Event Highlight 1" },
  { id: "5PM0e_qi72w", title: "News & Event Highlight 2" },
  { id: "2EbW6zpeCA0", title: "News & Event Highlight 3" },
  { id: "HBtkzRDfBxc", title: "News & Event Highlight 4" },
  { id: "tv6WiyU89VI", title: "News & Event Highlight 5" },
  { id: "EEfwS-GgJcs", title: "News & Event Highlight 6" },
];

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen bg-[#F6F6F2] flex flex-col font-sans select-none">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-tight leading-tight">
            News &amp; Events
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-neutral-600">
            Catch up on our latest highlights, interviews, and community events directly from the ecosystem.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 rounded-2xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* YouTube iFrame Wrapper to maintain 16:9 Aspect Ratio */}
              <div className="relative w-full aspect-video bg-neutral-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Optional Description / Title beneath the video */}
              <div className="p-4 flex items-center gap-3">
                <PlayCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <h3 className="font-serif font-bold text-neutral-900 text-sm md:text-base line-clamp-1">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
