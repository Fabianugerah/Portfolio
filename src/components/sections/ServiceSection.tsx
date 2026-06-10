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
    <section className="bg-neutral-900/50 backdrop-blur-sm text-white py-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="SERVICE" />
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
