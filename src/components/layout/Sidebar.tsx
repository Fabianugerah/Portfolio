"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
      setTime(`${wkt.replace(/\./g, ":")}`);

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
      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * speedFactor;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * speedFactor;
      setDisplayPos({ x: currentPos.current.x, y: currentPos.current.y });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      {/* ── MOBILE Top Bar + Dropdown ── */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50">

        {/* Top Bar */}
        <div className="bg-neutral-900 border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 no-underline"
          >
            <Image
              src="/assets/svg/logo_black.svg"
              alt="logo"
              width={35}
              height={35}
            />
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm leading-tight">
                Fabianugerah
              </span>
              <span className="text-white/50 text-xs">Fullstack Developer</span>
            </div>
          </Link>

          {/* Animated Hamburger Button */}
          <button
            className="relative w-9 h-9 flex items-center justify-center bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* Bar 1 */}
            <span
              className="absolute block h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: "22px",
                top: menuOpen ? "50%" : "calc(50% - 6px)",
                transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "translateY(0) rotate(0deg)",
              }}
            />
            {/* Bar 2 (middle — fades out) */}
            <span
              className="absolute block h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: "22px",
                top: "50%",
                transform: "translateY(-50%)",
                opacity: menuOpen ? 0 : 1,
                scaleX: menuOpen ? 0 : 1,
              }}
            />
            {/* Bar 3 */}
            <span
              className="absolute block h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: "22px",
                top: menuOpen ? "50%" : "calc(50% + 6px)",
                transform: menuOpen ? "translateY(-50%) rotate(-45deg)" : "translateY(0) rotate(0deg)",
              }}
            />
          </button>
        </div>

        {/* Dropdown Panel */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: menuOpen ? "500px" : "0px",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div className="bg-neutral-900 border-b border-white/10">
            {/* Nav Links — staggered fade-in per item */}
            <nav className="px-4 pb-4">
              <ul className="list-none m-0 p-0 flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <li
                      key={link.href}
                      className="transition-all duration-300 ease-in-out"
                      style={{
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                        transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleNavClick}
                        className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 no-underline ${isActive
                            ? "bg-white/8 text-white"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <i
                            className={`bi ${link.icon} text-lg ${isActive
                                ? "text-white"
                                : "text-white/50 group-hover:text-white"
                              } transition-colors`}
                          />
                          <span className="font-medium text-base">{link.label}</span>
                        </div>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        )}
                      </Link>
                      {index < navLinks.length - 1 && (
                        <div className="h-px bg-white/5 mx-2" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Backdrop blur overlay — animates in/out smoothly */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out"
        style={{
          backdropFilter: menuOpen ? "blur(6px)" : "blur(0px)",
          backgroundColor: menuOpen ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── DESKTOP Sidebar ── */}
      <aside className="bg-neutral-900/50 hidden md:flex fixed top-0 left-0 h-screen w-64 border-r border-neutral-800 z-50 flex-col">
        <div className="p-4 flex mt-2">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/assets/svg/logo_black.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm leading-tight">
                Fabianugerah
              </span>
              <span className="text-white/50 text-xs">Fullstack Developer</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 mt-3 px-4">
          <ul className="flex flex-col gap-2 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-300 no-underline ${isActive
                        ? "bg-neutral-900 border border-neutral-800 text-white"
                        : "text-white/60 hover:text-white border border-transparent hover:bg-white/5"
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <i
                        className={`bi ${link.icon} text-md ${isActive ? "text-white" : "group-hover:text-white"
                          } transition-colors`}
                      />
                      <span className="font-medium text-sm">{link.label}</span>
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

        {/* Widget Waktu Indonesia */}
        {time && date && (
          <div
            ref={cardRef}
            style={{
              background: `radial-gradient(circle 120px at ${displayPos.x}px ${displayPos.y}px, rgba(255, 255, 255, 0.12), transparent 80%), rgba(255, 255, 255, 0.03)`,
            }}
            className="mx-4 mb-4 p-4 border border-white/10 rounded-xl flex flex-col gap-1 cursor-default overflow-hidden relative"
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
    </>
  );
}