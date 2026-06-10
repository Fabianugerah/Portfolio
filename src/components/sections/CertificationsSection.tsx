import { certifications } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CertificationsSection() {
  return (
    <section className="bg-neutral-900/50 backdrop-blur-sm text-white py-20 min-h-screen">
      <div className="max-w-3xl mx-auto">

        <SectionHeader title="CERTIFICATIONS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group border border-white/20 rounded-xl overflow-hidden bg-black/80 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0cc0df]/50 transition-all duration-300"
            >
              <div className="overflow-hidden bg-white/5 flex items-center justify-center p-4 h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 border-t border-white/10">
                <h5 className="text-white font-bold text-lg mb-1">{cert.title}</h5>
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
    </section>
  );
}
