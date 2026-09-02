"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

interface ScrollFadeTextProps {
  children: ReactNode;
  className?: string;
  fadeDirection?: "up" | "down" | "none";
  thresholdRatio?: number;
}

export default function ScrollFadeText({
  children,
  className = "",
  fadeDirection = "up",
  thresholdRatio = 0.5,
}: ScrollFadeTextProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isInViewportRef = useRef(false);

  useEffect(() => {
    // Only calculate position when element is actually near/inside viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewportRef.current = entry.isIntersecting;
      },
      { rootMargin: "100px 0px 100px 0px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    const handleScroll = () => {
      if (!isInViewportRef.current || rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!elementRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight;
        const end = windowHeight * (1 - thresholdRatio);
        const current = rect.top;

        let progress = (start - current) / (start - end);
        progress = Math.min(1, Math.max(0, progress));

        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [thresholdRatio]);

  const opacity = scrollProgress;
  const translateY =
    fadeDirection === "up"
      ? (1 - scrollProgress) * 30
      : fadeDirection === "down"
      ? (1 - scrollProgress) * -30
      : 0;
  const blur = (1 - scrollProgress) * 6;

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-75 ease-out ${className}`}
      style={{
        opacity: opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        filter: `blur(${blur}px)`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
