"use client";

import { personalInfo, education, techLogos } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  return (
    <section className="bg-neutral-900/50 backdrop-blur-sm text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="ABOUT" />

        {/* Bio Row */}
        <div className="flex flex-col md:flex-row gap-10 mt-12 items-start">
          <div className="flex-shrink-0">
            <img
              src="/assets/img/my photo/foto_2.jpg"
              alt="Foto Fabian"
              className="w-52 rounded-xl shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3">
              Web <span className="text-[#0cc0df]">Developer</span>.
            </h2>
            <p className="text-white/70 italic mb-6">{personalInfo.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {[
                { label: "Nama", value: personalInfo.name },
                { label: "Lahir", value: personalInfo.birthdate },
                { label: "Web Portfolio", value: personalInfo.website },
                { label: "Umur", value: personalInfo.age },
                { label: "Telepon", value: personalInfo.phone },
                { label: "Status", value: personalInfo.status },
                { label: "Kota", value: personalInfo.location },
                { label: "Email", value: personalInfo.email },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-2">
                  <i className="bi bi-chevron-right text-[#0cc0df] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{label}:</strong>{" "}
                    <span className="text-white/70">{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20 my-14" />

        {/* Tech Logo Marquee */}
        <div className="overflow-hidden relative py-4">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...techLogos, ...techLogos].map((logo, idx) => (
              <img
                key={`${logo.name}-${idx}`}
                src={logo.icon}
                alt={logo.name}
                className="h-10 w-auto grayscale brightness-150 opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20 my-14" />

        {/* Education */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-1">Riwayat Pendidikan</h3>
            <hr className="border-white/50 border-2 w-16 rounded mb-1" />
            <hr className="border-white/50 border-2 w-28 rounded mb-8" />

            <div className="relative pl-2">
              {/* Vertical line */}
              <div className="absolute left-2.5 top-2 h-[calc(100%-24px)] w-0.5 bg-white/30" />

              {education.map((edu, i) => (
                <div key={i} className="relative mb-8 pl-8">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#0cc0df] z-10" />
                  <p className="text-white/50 text-sm">{edu.period}</p>
                  <h5 className="text-white font-bold">{edu.school}</h5>
                  {edu.competency && (
                    <p className="text-white/50 text-sm">
                      Kompetensi Keahlian: {edu.competency}
                    </p>
                  )}
                  <p className="text-white/50 text-sm">
                    <i className="bi bi-geo-alt mr-1" />
                    {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Photos */}
          <div className="flex-1 relative min-h-80 hidden md:block">
            <img
              src="/assets/img/my photo/foto_5.jpg"
              alt="foto1"
              className="absolute w-[55%] h-48 object-cover rounded-lg shadow-xl top-0 left-0 z-10"
            />
            <img
              src="/assets/img/my photo/foto_3.jpg"
              alt="foto2"
              className="absolute w-[60%] h-52 object-cover rounded-lg shadow-xl top-20 right-0 z-20"
            />
            <img
              src="/assets/img/my photo/foto_6.png"
              alt="foto3"
              className="absolute w-[45%] h-72 object-cover rounded-lg shadow-xl bottom-0 left-[25%] z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
