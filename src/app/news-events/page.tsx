"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, X, ExternalLink, Clock } from "lucide-react";

interface NewsItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  thumbnailUrl: string;
}

const newsArticles: NewsItem[] = [
  {
    id: "ep-2-code-capital",
    youtubeId: "xCyZFhMTcq0",
    youtubeUrl: "https://youtu.be/xCyZFhMTcq0?si=PPon751QZlVEh9Tg",
    badge: "VENTURE CAPITAL",
    category: "VENTURE CAPITAL",
    title: "Ep. 2 | Code, Capital & Customer: The New Tech Triangle",
    description:
      "Join top venture builders and tech founders as they reveal early-stage roadmap secrets, capital raising tactics, and customer acquisition strategies.",
    date: "Aug 2026",
    duration: "35 mins",
    thumbnailUrl: "https://img.youtube.com/vi/xCyZFhMTcq0/hqdefault.jpg",
  },
  {
    id: "design-school-nid",
    youtubeId: "5PM0e_qi72w",
    youtubeUrl: "https://youtu.be/5PM0e_qi72w?si=WtCy7Z2yR9M67TkQ",
    badge: "CODE TALKS",
    category: "DESIGN & ENTREPRENEURSHIP",
    title: "What Design School Doesn't Teach You From NID to Shark Tank India",
    description:
      "In this insightful podcast episode, design leaders and founders share practical takeaways from building products, scaling post-Shark Tank, and crafting category-defining UX.",
    date: "Jul 2026",
    duration: "24 mins",
    thumbnailUrl: "https://img.youtube.com/vi/5PM0e_qi72w/hqdefault.jpg",
  },
  {
    id: "building-100m-arr",
    youtubeId: "2EbW6zpeCA0",
    youtubeUrl: "https://youtu.be/2EbW6zpeCA0?si=UFvzDTPzoLbVYYF2",
    badge: "FOUNDER HIGHLIGHT",
    category: "DEEP TECH & AI",
    title: "Building $100M+ ARR AI Infrastructure From India to Silicon Valley",
    description:
      "An inside look into scaling enterprise software, securing global conviction, and leading high-velocity engineering teams in the era of generative AI.",
    date: "Jun 2026",
    duration: "42 mins",
    thumbnailUrl: "https://img.youtube.com/vi/2EbW6zpeCA0/hqdefault.jpg",
  },
  {
    id: "zero-to-1m-users",
    youtubeId: "HBtkzRDfBxc",
    youtubeUrl: "https://youtu.be/HBtkzRDfBxc?si=JYh2XZDhg0gSF6Gy",
    badge: "STUDIO TALKS",
    category: "BOOTSTRAPPING & GROWTH",
    title: "Zero to 1M Users: Unconventional Growth Hacks for Early-Stage Startups",
    description:
      "Discover growth frameworks, viral distribution mechanics, and organic user acquisition strategies that drove early momentum for top portfolio companies.",
    date: "May 2026",
    duration: "28 mins",
    thumbnailUrl: "https://img.youtube.com/vi/HBtkzRDfBxc/hqdefault.jpg",
  },
  {
    id: "demo-day-2026",
    youtubeId: "tv6WiyU89VI",
    youtubeUrl: "https://youtu.be/tv6WiyU89VI?si=ns3CTUwx2wPIUueA",
    badge: "COMMUNITY EVENT",
    category: "ECOSYSTEM KEYNOTE",
    title: "InnovHer & Studio i Demo Day 2026: Pitching to Global Tier-1 Investors",
    description:
      "Highlights from our flagship annual demo day featuring 20+ category-defining startups presenting live to leading global VCs and angel networks.",
    date: "Apr 2026",
    duration: "50 mins",
    thumbnailUrl: "https://img.youtube.com/vi/tv6WiyU89VI/hqdefault.jpg",
  },
  {
    id: "navigating-fintech",
    youtubeId: "EEfwS-GgJcs",
    youtubeUrl: "https://youtu.be/EEfwS-GgJcs?si=q7PIKb2EwaDq9L1N",
    badge: "PRODUCT INSIGHTS",
    category: "FINTECH & REGULATION",
    title: "Navigating Regulatory Frameworks & Building Compliant Fintech Platforms",
    description:
      "Fintech pioneers discuss regulatory navigation, cross-border payment rails, and security architectures for modern digital financial services.",
    date: "Mar 2026",
    duration: "31 mins",
    thumbnailUrl: "https://img.youtube.com/vi/EEfwS-GgJcs/hqdefault.jpg",
  },
];

export default function NewsEventsPage() {
  const [activeVideo, setActiveVideo] = useState<NewsItem | null>(null);

  return (
    <div className="min-h-screen bg-[#F6F6F2] flex flex-col font-sans select-none">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* HERO HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-tight leading-tight">
            News &amp; Events
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-neutral-600">
            Catch up on our latest highlights, interviews, podcasts, and community events directly from the ecosystem.
          </p>
        </div>

        {/* ARTICLE / VIDEO CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveVideo(article)}
              className="group relative bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              {/* TOP THUMBNAIL CONTAINER */}
              <div className="relative w-full aspect-[16/9] bg-neutral-900 overflow-hidden">
                <img
                  src={article.thumbnailUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://img.youtube.com/vi/${article.youtubeId}/hqdefault.jpg`;
                  }}
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:from-black/50 transition-colors" />

                {/* TOP LEFT BADGE PILL */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md border border-neutral-200/60 shadow-xs">
                  <span className="text-[10px] font-extrabold tracking-wider text-neutral-900 uppercase">
                    {article.badge}
                  </span>
                </div>

                {/* CENTER pink PLAY BUTTON */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* BOTTOM RIGHT DURATION BADGE */}
                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[11px] font-medium text-white flex items-center gap-1 shadow-xs">
                  <Clock className="w-3 h-3 text-neutral-300" />
                  <span>{article.duration}</span>
                </div>
              </div>

              {/* CARD BODY CONTENT */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* CATEGORY SUBTITLE */}
                  <span className="text-[11px] font-bold tracking-wider text-pink-600 uppercase font-sans block">
                    {article.category}
                  </span>

                  {/* TITLE */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-950 leading-snug line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2 font-sans pt-1">
                    {article.description}
                  </p>
                </div>

                {/* CARD FOOTER */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-sans">
                  <span className="text-neutral-400 font-medium">
                    {article.date}
                  </span>

                  <a
                    href={article.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="inline-flex items-center gap-1 font-semibold text-neutral-900 group-hover:text-pink-600 transition-colors hover:underline cursor-pointer"
                  >
                    <span>Play Video</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* VIDEO POPUP MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-900/90 text-white">
              <div className="flex items-center gap-2 truncate pr-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-pink-500 text-white">
                  {activeVideo.badge}
                </span>
                <span className="text-sm font-semibold truncate font-serif text-neutral-200">
                  {activeVideo.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Open in YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Responsive Video Frame */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Description Footer */}
            <div className="p-5 bg-neutral-900 text-neutral-300 space-y-1.5 border-t border-neutral-800">
              <h4 className="font-serif font-bold text-white text-base">
                {activeVideo.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Reusable Black Footer Component */}
      <Footer />
    </div>
  );
}


