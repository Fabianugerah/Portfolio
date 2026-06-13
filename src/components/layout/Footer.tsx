import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-neutral-900/50 backdrop-blur-sm border-t border-white/10 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-mono">{personalInfo.name}</span>. All
          rights reserved.
        </div>

        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group relative flex items-center justify-center text-white/50 hover:text-white transition-colors duration-300 text-lg no-underline"
            >
              {/* Tooltip label */}
              <span
                className="
                  pointer-events-none
                  absolute -top-9 left-1/2 -translate-x-1/2
                  bg-white text-black text-xs font-semibold
                  px-2.5 py-1 rounded-md whitespace-nowrap
                  opacity-0 -translate-y-1
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out
                "
              >
                {social.name}
                {/* Arrow */}
                <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white" />
              </span>

              <i className={`bi ${social.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}