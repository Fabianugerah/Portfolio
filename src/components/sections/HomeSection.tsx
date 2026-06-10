"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  personalInfo,
  socialLinks,
  projectItems,
  certifications,
  workExperience,
  studies
} from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

// Tech stack for the marquee
const techStackItems = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
];

export default function HomeSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const previewProjects = projectItems.slice(0, 4);
  const previewCerts = certifications.slice(0, 3);

  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="min-h-screen flex items-center bg-neutral-900/50 backdrop-blur-sm px-4 pt-20 md:pt-0">
        <div className="max-w-3xl mx-auto w-full py-20">

          {/* Name + Title */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h1 className="text-5xl md:text-5xl font-black text-white tracking-tight leading-none mb-2">
              {personalInfo.name.split(" ")[0]}
              <br />
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </h1>
            <p className="text-white/50 text-xl font-light mb-8">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Social Media Pills */}
          <div
            className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-white/70 hover:text-white hover:border-white/50 transition-all duration-200 text-sm no-underline backdrop-blur-sm hover:bg-white/5"
              >
                <i className={`bi ${social.icon} text-sm`} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          {/* Bio */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-white/60 text-base leading-relaxed max-w-xl mb-12">
              {personalInfo.description}
            </p>
          </div>

          {/* ─── Tech Stack Marquee ─── */}
          <div
            className={`mb-20 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">
              Technologies
            </p>
            {/* Row 1 - Menggunakan Marquee Tanpa Jeda */}
            <div className="overflow-hidden mb-3 w-full relative">
              <div className="flex w-max animate-marquee">
                <div className="flex gap-2 px-1">
                  {techStackItems.slice(0, 8).map((tech, idx) => (
                    <span key={`r1-m-${idx}`} className="flex-shrink-0 flex items-center gap-2 border border-white/15 rounded-full px-3 py-1.5 bg-white/[0.04] text-white/60 text-xs font-medium">
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain brightness-[2] opacity-70" />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 px-1" aria-hidden="true">
                  {techStackItems.slice(0, 8).map((tech, idx) => (
                    <span key={`r1-d-${idx}`} className="flex-shrink-0 flex items-center gap-2 border border-white/15 rounded-full px-3 py-1.5 bg-white/[0.04] text-white/60 text-xs font-medium">
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain brightness-[2] opacity-70" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 - Reverse */}
            <div className="overflow-hidden w-full relative">
              <div className="flex w-max animate-marquee-reverse">
                <div className="flex gap-2 px-1">
                  {techStackItems.slice(8).map((tech, idx) => (
                    <span key={`r2-m-${idx}`} className="flex-shrink-0 flex items-center gap-2 border border-white/15 rounded-full px-3 py-1.5 bg-white/[0.04] text-white/60 text-xs font-medium">
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain brightness-[2] opacity-70" />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 px-1" aria-hidden="true">
                  {techStackItems.slice(8).map((tech, idx) => (
                    <span key={`r2-d-${idx}`} className="flex-shrink-0 flex items-center gap-2 border border-white/15 rounded-full px-3 py-1.5 bg-white/[0.04] text-white/60 text-xs font-medium">
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain brightness-[2] opacity-70" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────── WORK EXPERIENCE ─────────────────────────── */}
          <div
            className={`mb-20 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl font-bold text-white mb-10">Work Experience</h2>

            {workExperience.map((work, idx) => (
              <div key={idx} className="mb-16">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase">{work.company}</h3>
                  <span className="text-white/40 text-base font-medium">{work.period}</span>
                </div>
                <p className="text-[#0cc0df] text-lg font-medium mb-6">{work.role}</p>

                <ul className="list-disc list-outside ml-5 space-y-3 text-white/70 text-base mb-8 max-w-2xl">
                  {work.bullets.map((bullet, i) => (
                    <li key={i} className="pl-2 leading-relaxed">{bullet}</li>
                  ))}
                </ul>

                {work.image && (
                  <div className="relative group max-w-sm">
                    <div className="absolute -inset-1 bg-linear-to-r from-[#0cc0df]/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img
                      src={work.image}
                      alt={work.company}
                      className="relative rounded-xl border border-white/10 w-full shadow-2xl"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ─────────────────────────── STUDIES ─────────────────────────── */}
          <div
            className={`mb-20 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl font-bold text-white mb-10">Studies</h2>

            {studies.map((study, idx) => (
              <div key={idx} className="mb-10 border-l-2 border-white/10 pl-6 hover:border-[#0cc0df]/50 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-1">
                  <h3 className="text-xl font-bold text-white">{study.institution}</h3>
                  <span className="text-white/40 text-sm">{study.period}</span>
                </div>
                <p className="text-[#0cc0df] font-medium mb-3">{study.major}</p>
                <p className="text-white/50 text-sm leading-relaxed max-w-xl">
                  {study.description}
                </p>
              </div>
            ))}
          </div>

          {/* ─────────────────────────── PROJECTS PREVIEW ─────────────────────────── */}
          <div
            className={`mb-20 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl font-bold text-white mb-10">Project</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {previewProjects.map((item) => (
                <Link key={item.id} href={`/project/${item.id}`} className="group border border-white/20 rounded-xl overflow-hidden bg-black/80 hover:-translate-y-1.5 hover:shadow-xl hover:border-white/30 transition-all duration-300 no-underline block">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h5 className="text-white font-semibold text-sm mb-1 line-clamp-1">{item.title}</h5>
                    <p className="text-white/40 text-xs mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-white/10 text-white/60 text-xs px-2 py-0.5 rounded-full">{item.category}</span>
                      <i className="bi bi-arrow-up-right text-white/40 group-hover:text-[#0cc0df] transition-colors text-sm" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ─────────────────────────── CERTIFICATIONS PREVIEW ─────────────────────────── */}
          <div
            className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl font-bold text-white mb-10">Certifications</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {previewCerts.map((cert) => (
                <div key={cert.id} className="group border border-white/20 rounded-xl overflow-hidden bg-black/80 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0cc0df]/50 transition-all duration-300">
                  <div className="overflow-hidden bg-white/5 flex items-center justify-center p-4 h-44">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 border-t border-white/10">
                    <h5 className="text-white font-bold text-base mb-1">{cert.title}</h5>
                    <p className="text-[#0cc0df] font-medium text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-white/40 text-xs">
                      <i className="bi bi-calendar-check mr-2" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}