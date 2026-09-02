"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Building2, Search, Award, Users, ArrowUpRight } from "lucide-react";

export default function CompaniesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      title: "Company Directory",
      description: "Search all portfolio companies & startup alumni",
      icon: Search,
      href: "/companies",
    },
    {
      title: "Top Funded Startups",
      description: "Explore market leaders and top valuation companies",
      icon: Award,
      href: "/companies",
    },
    {
      title: "Batches & Cohorts",
      description: "Browse companies by incubation batch & year",
      icon: Building2,
      href: "/companies",
    },
    {
      title: "Portfolio Jobs",
      description: "Discover open career opportunities across companies",
      icon: Users,
      href: "/companies",
    },
  ];

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/companies"
        className="inline-flex items-center gap-1.5 py-2 text-[15px] font-medium text-neutral-800 hover:text-black transition-colors focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span>Companies</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-neutral-500 transition-transform duration-200 group-hover:text-black ${
            isOpen ? "rotate-180 text-black" : ""
          }`}
        />
      </Link>

      {/* Dropdown Menu Box */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-80 rounded-xl bg-white border border-neutral-200/80 shadow-xl shadow-black/5 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-2 border-b border-neutral-100 mb-1">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              InnovHer Ecosystem
            </p>
          </div>
          <div className="space-y-0.5">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-2 rounded-md bg-neutral-100 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors mt-0.5">
                    <Icon className="w-4 h-4 text-neutral-600 group-hover:text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-neutral-900 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </p>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity" />
                    </div>
                    <p className="text-xs text-neutral-500 truncate mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
