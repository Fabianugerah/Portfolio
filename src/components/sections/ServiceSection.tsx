"use client";

import { useState } from "react";
import { services } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServiceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-neutral-900/50 backdrop-blur-sm text-white py-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="SERVICE" />

        <div className="mt-10 flex flex-col">
          {services.map((service, idx) => {
            const isOpen = openIndex === idx;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <div key={idx} className="border-t border-white/10 last:border-b">
                {/* Row Header — clickable */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center gap-6 py-6 text-left bg-transparent border-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span className="text-white/30 text-sm font-mono w-6 shrink-0 select-none">
                    {num}.
                  </span>

                  {/* Title */}
                  <span
                    className={`flex-1 text-xl font-semibold transition-colors duration-200 ${
                      isOpen ? "text-white" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </span>

                  {/* Chevron */}
                  <i
                    className={`bi bi-chevron-down text-white/40 text-base shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white/70" : ""
                    }`}
                  />
                </button>

                {/* Description — accordion body */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/50 text-sm leading-relaxed pb-6 pl-12 pr-16 max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}