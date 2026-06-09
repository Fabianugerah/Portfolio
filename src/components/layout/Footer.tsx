import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-neutral-900/50 backdrop-blur-sm border-t border-white/10 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white font-mono">{personalInfo.name}</span>. All rights reserved.
        </div>
        
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-white/50 hover:text-neutral-200 transition-colors duration-300 text-lg no-underline"
            >
              <i className={`bi ${social.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
