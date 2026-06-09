"use client";

import { useState } from "react";
import Link from "next/link";
import { projectItems, filterCategories, ProjectCategory } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filtered = projectItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section className="bg-black text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="PROJECT" />

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mt-10 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value as ProjectCategory)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat.value
                  ? "bg-black/40 backdrop-blur-md border-white/20 text-white"
                  : "border-transparent text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/project/${item.id}`}
              className="group border border-white/20 rounded-xl overflow-hidden bg-black/80 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 no-underline block"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h5 className="text-white font-semibold mb-1">{item.title}</h5>
                <p className="text-white/40 text-sm mb-3">{item.description}</p>
                <div className="float-right text-white hover:text-[#0cc0df] transition-colors">
                  <i className="bi bi-arrow-up-right-circle text-xl" />
                </div>
                {/* Category badge */}
                <span className="inline-block bg-white/10 text-white/60 text-xs px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
