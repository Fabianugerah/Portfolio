"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { href: "/", label: "Home", icon: "bi-house" },
  { href: "/project", label: "Project", icon: "bi-images" },
  { href: "/service", label: "Service", icon: "bi-briefcase" },
  { href: "/certifications", label: "Certifications", icon: "bi-award" },
  { href: "/contact", label: "Contact", icon: "bi-chat-dots" },
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });

  const cardRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateDateTime = () => {
      const sekarang = new Date();
      const wkt = sekarang.toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(`${wkt.replace(/\./g, ':')}`);


      const tgl = sekarang.toLocaleDateString("en-GB", {
        timeZone: "Asia/Jakarta",
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setDate(tgl);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);

    let animationFrameId: number;
    const animate = () => {
      const speedFactor = 0.05;

      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * speedFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * speedFactor;

      setDisplayPos({ x: currentPos.current.x, y: currentPos.current.y });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
          <span className="font-bold text-white text-md">
            Fabianugerah
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
        className={`fixed top-0 left-0 h-screen w-64 bg-black/95 md:bg-[#0a0a0a] backdrop-blur-md border-r border-white/10 z-50 flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
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
            <span className="font-bold text-white text-md">
              Fabianugerah
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
                    className={`group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 no-underline ${isActive
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

        {/* Widget Waktu Indonesia Interaktif (Always-On Proximity Glow) */}
        {time && date && (
          <div
            ref={cardRef}
            style={{
              background: `radial-gradient(circle 120px at ${displayPos.x}px ${displayPos.y}px, rgba(255, 255, 255, 0.12), transparent 80%), rgba(255, 255, 255, 0.03)`,
            }}
            className="mx-4 mb-4 p-4 border border-white/10 rounded-2xl flex flex-col gap-1 cursor-default overflow-hidden relative"
          >
            <span className="text-white font-semibold text-base tracking-wider font-mono z-10 relative">
              {time}
            </span>
            <span className="text-white/50 text-xs tracking-wide z-10 relative">
              {date}
            </span>
          </div>
        )}
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