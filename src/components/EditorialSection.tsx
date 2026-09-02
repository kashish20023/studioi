"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function EditorialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leftImages = [
    {
      src: "/images/WhatsApp Image 2025-10-14 at 11.03.19 (2).webp",
      // fallback: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
      alt: "Early Batch Founders Workshop",
      caption: "Intensive 3-month cohort office hours",
    },
    {
      src: "/images/code 2.webp",
      // fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      alt: "Weekly Batch Dinners",
      caption: "Weekly guest speaker dinners & peer review",
    },
  ];

  const rightImages = [
    {
      src: "/images/DSC06312.webp",
      // fallback: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
      alt: "Demo Day Presentation",
      caption: "Demo Day pitch to top global investors",
    },
    {
      src: "/images/DSC_1168.JPG.webp",
      // fallback: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      alt: "Lifelong Alumni Support",
      caption: "Lifelong founder network & advisory",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F2] py-16 sm:py-20 max-sm:py-4 px-4 sm:px-4 lg:px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-6 lg:gap-12 items-center">

          {/* LEFT COLUMN: 2 Vertically Stacked Images (Order 1 on mobile, md:col-span-3 on tablet/desktop) */}
          <div className="order-1 md:order-none md:col-span-3 flex flex-col gap-6 w-full">
            {leftImages.map((img, idx) => (
              <div
                key={`left-img-${idx}`}
                style={{
                  transitionDelay: `${idx * 200 + 100}ms`,
                  willChange: "opacity, transform",
                  transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(-2rem,0,0) scale(0.95)",
                }}
                className={`space-y-2 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden bg-neutral-200 shadow-md border border-neutral-300/50 group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CENTER COLUMN: Editorial Narrative Text with Drop-Cap (Order 2 on mobile, md:col-span-6 on tablet/desktop) */}
          <div
            style={{
              transitionDelay: "300ms",
              willChange: "opacity, transform",
              transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 1.5rem, 0) scale(0.95)",
            }}
            className={`order-2 md:order-none md:col-span-6 max-w-xl mx-auto w-full transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="text-neutral-800 font-serif text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed space-y-6 text-justify sm:text-left">
              <p className="first-letter:float-left first-letter:text-6xl sm:first-letter:text-7xl first-letter:font-serif first-letter:font-extrabold first-letter:mr-3.5 first-letter:mt-1 first-letter:text-neutral-950 first-letter:leading-none">
                Studio i is a venture-building space created to bring ambitious people, promising ideas, growing businesses, capital and opportunities together under one roof. Born from over two years of working closely with businesses across Jaipur, Studio i responds to a clear need: the city does not lack ambition - it needs a stronger bridge between its emerging potential and larger opportunities. Founders are building. Businesses are scaling. Investors are searching. Ideas are ready for a bigger stage.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 2 Vertically Stacked Images (Order 3 on mobile, md:col-span-3 on tablet/desktop) */}
          <div className="order-3 md:order-none md:col-span-3 flex flex-col gap-6 w-full">
            {rightImages.map((img, idx) => (
              <div
                key={`right-img-${idx}`}
                style={{
                  transitionDelay: `${idx * 200 + 200}ms`,
                  willChange: "opacity, transform",
                  transform: isVisible ? "translate3d(0,0,0) scale(1)" : "translate3d(2rem,0,0) scale(0.95)",
                }}
                className={`space-y-2 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden bg-neutral-200 shadow-md border border-neutral-300/50 group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
