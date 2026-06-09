"use client";

import { useEffect, useState } from "react";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center bg-neutral-900/50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Text Content */}
          <div
            className={`flex-1 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              <span className="text-neutral-200 font-medium text-3xl block mb-1">
                Hii, I&apos;am
              </span>
              {personalInfo.name}
            </h1>

            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2 mb-6">
              <p className="text-white/80 font-medium text-lg m-0">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-white hover:text-neutral-200 transition-colors duration-300 text-xl no-underline"
                >
                  <i className={`bi ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div
            className={`flex-shrink-0 flex justify-center transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
          </div>
        </div>
      </div>
    </section>
  );
}
