"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioCompanies, Company } from "@/data/companiesData";
import { Search, ExternalLink, Building2, Sparkles, Filter } from "lucide-react";

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("All");

  // Extract unique sectors for filter pills
  const sectors = useMemo(() => {
    const set = new Set<string>();
    portfolioCompanies.forEach((c) => {
      if (c.sector) set.add(c.sector.split("/")[0].trim());
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Filtered companies based on search term & selected sector
  const filteredCompanies = useMemo(() => {
    return portfolioCompanies.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.oneLiner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.sector.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSector =
        selectedSector === "All" ||
        company.sector.toLowerCase().includes(selectedSector.toLowerCase());

      return matchesSearch && matchesSector;
    });
  }, [searchTerm, selectedSector]);

  return (
    <div className="min-h-screen bg-[#F6F6F2] flex flex-col font-sans select-none">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 py-12 space-y-10">

        {/* HERO HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-tight leading-tight">
            Portfolio Companies Directory
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-neutral-600">
            Discover the visionary startups building the future of technology, AI, fintech, edtech, and sustainability.
          </p>
        </div>

        {/* SEARCH & SECTOR FILTER BAR */}
        <div className="space-y-4 bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-neutral-200/90 shadow-sm">
          {/* Search Input Box */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search companies by name, description, or sector..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-neutral-100/80 border border-neutral-200/90 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Sector Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium pr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Sectors:</span>
            </div>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${selectedSector === sec
                  ? "bg-neutral-950 text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200/70"
                  }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS METRIC HEADER */}
        <div className="flex items-center justify-between px-1 text-xs text-neutral-500 font-medium">
          <span>Showing {filteredCompanies.length} Companies</span>
          {selectedSector !== "All" && (
            <button
              onClick={() => setSelectedSector("All")}
              className="text-orange-600 hover:underline cursor-pointer"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* 3-COLUMN COMPANY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="group relative bg-white/90 rounded-2xl border border-neutral-200/90 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* LOGO & SECTOR HEADER */}
                <div className="flex items-start justify-between gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80 p-1 flex items-center justify-center flex-shrink-0">
                    {company.logoUrl ? (
                      <img
                        src={company.logoUrl}
                        alt={`${company.name} logo`}
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    ) : (
                      <Building2 className="w-6 h-6 text-neutral-400" />
                    )}
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                    {company.sector}
                  </span>
                </div>

                {/* COMPANY NAME */}
                <h3 className="font-serif text-xl font-bold text-neutral-950 group-hover:text-orange-600 transition-colors">
                  {company.name}
                </h3>

                {/* ONE LINER DESCRIPTION */}
                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 font-sans">
                  {company.oneLiner}
                </p>
              </div>

              {/* WEBSITE DIRECT LINK FOOTER */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400 truncate max-w-[180px] font-mono">
                  {company.website !== "N/A" ? company.website.replace(/^https?:\/\//, "") : "Direct Contact"}
                </span>

                {company.website !== "N/A" ? (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-orange-600 transition-colors group/link cursor-pointer"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="text-xs text-neutral-400 italic">Portfolio Alumni</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* NO RESULTS FALLBACK */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-2xl border border-neutral-200 space-y-3">
            <p className="font-serif text-lg text-neutral-700">No companies found matching your query.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedSector("All");
              }}
              className="text-xs font-semibold text-orange-600 hover:underline cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

      </main>

      {/* REUSABLE BLACK FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}
