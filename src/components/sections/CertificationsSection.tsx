import { certifications } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CertificationsSection() {
  return (
    <section className="bg-neutral-900/50 backdrop-blur-sm text-white py-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="CERTIFICATIONS" />

        <ul className="mt-8 flex flex-col divide-y divide-white/10 list-none p-0 m-0">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-4 py-5 px-2 hover:bg-white/3 rounded-xl transition-colors duration-200 no-underline"
            >
              {/* Left: Number + Info */}
              <div className="flex items-center gap-4 min-w-0">
                {/* Issuer logo placeholder / icon */}
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <i className="bi bi-patch-check text-white/40 text-lg" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight truncate">
                    {cert.title}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              {/* Right: Date + Arrow */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1.5 text-white/30 text-xs">
                  <i className="bi bi-calendar-check text-xs" />
                  <span>{cert.date}</span>
                </div>
                <i className="bi bi-arrow-up-right text-white/20 group-hover:text-white/60 transition-colors text-sm" />
              </div>

              {/* Hover Preview Image — muncul di atas item */}
              <div
                className="
                  pointer-events-none
                  absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                  w-64 rounded-xl overflow-hidden border border-white/15
                  shadow-2xl shadow-black/60
                  opacity-0 scale-95 -translate-y-1
                  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out
                  z-50
                "
              >
                {/* Image */}
                <div className="bg-neutral-900 p-2">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain max-h-40 rounded-lg"
                  />
                </div>
              </div>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}