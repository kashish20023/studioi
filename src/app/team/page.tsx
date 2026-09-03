import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Sparkles, Building2 } from "lucide-react";

export const metadata = {
  title: "Our Team | InnovHer & Studio i",
  description:
    "Meet the visionary leaders, directors, and strategic partners driving InnovHer, Encode, CTPL.IO, and Studio i forward.",
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  imagePosition?: string;
  tags: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: "shweta-chaudhary",
    name: "Shweta Chaudhary",
    role: "Founder & Director",
    company: "InnovHer & Encode",
    image: "/images/shweta22.webp",
    imagePosition: "object-top",
    tags: ["InnovHer", "Encode", "Leadership"],
  },
  {
    id: "jeet-vijay",
    name: "Jeet Vijay",
    role: "Co-Founder",
    company: "InnovHer",
    image: "/images/jeet.webp",
    imagePosition: "object-top",
    tags: ["InnovHer", "Venture Building"],
  },
  {
    id: "digvijay-singh",
    name: "Digvijay Singh",
    role: "Director",
    company: "Encode",
    image: "/images/digvijay.webp",
    imagePosition: "object-top",
    tags: ["Encode", "Operations"],
  },
  {
    id: "shivam-sharma",
    name: "Shivam Sharma",
    role: "Strategic Partner",
    company: "InnovHer",
    image: "/images/shivam.webp",
    imagePosition: "object-top",
    tags: ["InnovHer", "Strategic Alliances"],
  },
  {
    id: "bikash-sahoo",
    name: "Bikash Sahoo",
    role: "CEO",
    company: "CTPL.IO",
    image: "/images/Ctpl.io.webp",
    imagePosition: "object-[45%_center]",
    tags: ["CTPL.IO", "Executive"],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#F6F6F2] text-neutral-900 font-sans selection:bg-pink-500 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-black/10 overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="pointer-events-none absolute top-[-100px] left-1/2 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-[#d42f92]/10 blur-[130px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d42f92]/30 bg-[#d42f92]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#d42f92] mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Leadership &amp; Visionaries</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-950 leading-[1.05] mb-6">
              The People Behind <br />
              <span className="italic font-normal text-neutral-800">Studio i &amp; InnovHer.</span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-700 font-normal leading-relaxed">
              Meet our founder directors, venture partners, and strategic executives dedicated to guiding founders from bold initial ideas to global market dominance.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM GRID SECTION */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white/70 backdrop-blur-xs rounded-3xl border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Safe Ratio */}
                <div className="relative w-full aspect-[4/4.2] rounded-2xl overflow-hidden bg-neutral-100 mb-4 shadow-inner">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover ${member.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Company Tag Badges */}
                <div className="py-2 px-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        <Building2 className="w-3 h-3 text-[#d42f92]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Member Info */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mb-1 group-hover:text-[#d42f92] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-neutral-600 mb-2">
                    {member.role} &middot; <span className="text-neutral-900 font-semibold">{member.company}</span>
                  </p>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-500 tracking-wide uppercase">
                      Executive Team
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#d42f92] group-hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-300 shadow-xs">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#EAE8E1] border-t border-black/10 py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 mb-6">
              Build &amp; Scale With Our Team.
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 mb-8 leading-relaxed">
              Whether you are an ambitious founder seeking venture backing or a strategic ecosystem partner, we invite you to connect with Studio i &amp; InnovHer leadership.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://accelerator.bharat-ventures.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Apply to Studio i Accelerator</span>
                <ArrowUpRight className="w-4 h-4 text-pink-400" />
              </a>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-neutral-900 border border-neutral-300 font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-xs hover:shadow active:scale-95"
              >
                <span>Learn About Studio i</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
