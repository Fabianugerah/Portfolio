import { services, skills } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const iconColorMap: Record<string, string> = {
  "icon-uiux": "bg-[#6a44bf]",
  "icon-frontend": "bg-[#00bcd4]",
  "icon-backend": "bg-[#ffb100]",
  "icon-web-design": "bg-[#fd5c63]",
  "icon-mobile": "bg-[#02e260]",
};

export default function ServiceSection() {
  return (
    <section className="bg-black text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="SERVICE" />

        <div className="mt-10 mb-4">
          <p className="text-[#0cc0df] font-medium text-lg">Services</p>
          <h3 className="text-3xl font-bold text-white/80 leading-snug">
            Saya Menyediakan<br />Berbagai Layanan Digital
          </h3>
        </div>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:max-w-2xl mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-3">
            My Tech <span className="text-[#0cc0df]">Stack</span>
          </h2>
          <p className="text-center text-white/50 max-w-xl mx-auto text-base mb-10">
            Skill yang saya kuasai dan sering saya gunakan dalam proyek pengembangan website dan pembuatan desain.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="border border-white/20 rounded-xl p-4 text-center hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center gap-2"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
                <h5 className="text-white text-sm font-semibold">{skill.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const colorClass = iconColorMap[service.colorClass] ?? "bg-gray-500";
  return (
    <div className="border border-white/20 rounded-xl p-7 flex flex-col hover:-translate-y-2 transition-transform duration-300 h-full">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl ${colorClass}`}
      >
        <i className={`bi ${service.icon} text-white`} />
      </div>
      <h5 className="text-white font-semibold text-center mb-3">{service.title}</h5>
      <p className="text-white/50 text-sm leading-relaxed text-center flex-1">
        {service.description}
      </p>
    </div>
  );
}
