"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { href: "/", label: "Home", icon: "bi-house" },
  { href: "/project", label: "Project", icon: "bi-images" },
  { href: "/service", label: "Service", icon: "bi-briefcase" },
  { href: "/certifications", label: "Certifications", icon: "bi-award" },
  
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-40 bg-neutral-900/50 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <Link href="/" onClick={handleNavClick} className="flex items-center gap-2 no-underline">
          <Image
            src="/assets/img/logo/logo_white.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded"
          />
          <span className="font-bold text-white text-lg">
            {personalInfo.brandName?.slice(0, -3) || "GreXX"}
            <span className="text-neutral-300">Dev</span>.
          </span>
        </Link>
        <button
          className="text-white p-2 bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-2xl`} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-black/95 md:bg-[#0a0a0a] backdrop-blur-md border-r border-white/10 z-50 flex flex-col transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 flex items-center justify-between md:justify-center mt-2">
          <Link href="/" onClick={handleNavClick} className="flex items-center gap-2 no-underline">
            <Image
              src="/assets/img/logo/logo_white.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-bold text-white text-xl">
              {personalInfo.brandName?.slice(0, -3) || "GreXX"}
              <span className="text-neutral-300">Dev</span>.
            </span>
          </Link>
          <button
            className="md:hidden text-white bg-transparent border-none"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-x-lg text-xl" />
          </button>
        </div>

        <nav className="flex-1 mt-10 px-4">
          <ul className="flex flex-col gap-2 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className={`group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 no-underline ${
                      isActive
                        ? "bg-[#1a1a1a] border border-white/10 text-white"
                        : "text-white/60 hover:text-white border border-transparent hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <i className={`bi ${link.icon} text-lg ${isActive ? "text-white" : "group-hover:text-white"} transition-colors`} />
                      <span className="font-medium text-base">{link.label}</span>
                    </div>
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 text-center text-white/40 text-xs">
          &copy; {new Date().getFullYear()} {personalInfo.name}.
        </div>
      </aside>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
