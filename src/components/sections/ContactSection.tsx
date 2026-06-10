"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";

type CopiedKey = string | null;

const contactItems = [
  {
    key: "email",
    label: "Email",
    value: personalInfo.email,
    icon: "bi-envelope",
    type: "copy",
    href: `mailto:${personalInfo.email}`,
  },
  {
    key: "phone",
    label: "Phone",
    value: `+62${personalInfo.phone.replace(/^0/, "")}`,
    icon: "bi-telephone",
    type: "copy",
    href: `tel:+62${personalInfo.phone.replace(/^0/, "")}`,
  },
  {
    key: "github",
    label: "GitHub",
    value: "@fabianugerah",
    icon: "bi-github",
    type: "link",
    href: "https://github.com/Fabianugerah",
  },
  {
    key: "instagram",
    label: "Instagram",
    value: "@fbian_nugrhx",
    icon: "bi-instagram",
    type: "link",
    href: "https://www.instagram.com/fbian_nugrhx/",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "@fabianugerah-bainasshiddiq",
    icon: "bi-linkedin",
    type: "link",
    href: "https://www.linkedin.com/in/fabianugerah-bainasshiddiq-3a7645309",
  },
  {
    key: "dribbble",
    label: "Dribbble",
    value: "@Fabianugerah",
    icon: "bi-dribbble",
    type: "link",
    href: "https://dribbble.com/Fabianugerah",
  },
];

const additionalInfo = [
  {
    key: "location",
    label: "Location",
    value: "Pandaan, Pasuruan - Jawa Timur",
    icon: "bi-geo-alt",
  },
  {
    key: "hours",
    label: "Working Hours",
    value: "Sen - Sab, 08.00 - 18.00 WIB",
    icon: "bi-clock",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState<CopiedKey>(null);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // silent fail
    }
  };

  return (
    <section className="bg-neutral-900/50 backdrop-blur-sm text-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Let&apos;s Connect
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Feel free to reach out through any of these channels. I&apos;m
            always open to discussing new projects.
          </p>
        </div>

        <hr className="border-white/10 mb-8" />

        {/* Contact Information */}
        <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
          Contact Information
        </p>

        <div className="flex flex-col gap-2 mb-10">
          {contactItems.map((item) => (
            <div
              key={item.key}
              className="group flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <i className={`bi ${item.icon} text-white/60 text-lg w-5 text-center`} />
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white font-medium text-sm">{item.label}</span>
                  <span className="text-white/40 text-sm">{item.value}</span>
                </div>
              </div>

              {/* Right action */}
              {item.type === "copy" ? (
                <button
                  onClick={() => handleCopy(item.value, item.key)}
                  aria-label={`Copy ${item.label}`}
                  className="text-white/30 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer ml-4 flex-shrink-0"
                >
                  {copied === item.key ? (
                    <i className="bi bi-check2 text-[#0cc0df] text-lg" />
                  ) : (
                    <i className="bi bi-copy text-base" />
                  )}
                </button>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.label}`}
                  className="text-white/30 hover:text-white transition-colors no-underline ml-4 flex-shrink-0"
                >
                  <i className="bi bi-box-arrow-up-right text-base" />
                </a>
              )}
            </div>
          ))}
        </div>

        <hr className="border-white/10 mb-8" />

        {/* Additional Information */}
        <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
          Additional Information
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {additionalInfo.map((info) => (
            <div
              key={info.key}
              className="px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <div className="flex items-center gap-2 mb-1">
                <i className={`bi ${info.icon} text-white/40 text-sm`} />
                <p className="text-white font-semibold text-sm m-0">{info.label}</p>
              </div>
              <p className="text-white/50 text-sm m-0">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Response */}
        <div className="px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2 mb-1">
            <i className="bi bi-lightning-charge text-white/40 text-sm" />
            <p className="text-white font-semibold text-sm m-0">Quick Response</p>
          </div>
          <p className="text-white/50 text-sm m-0">
            Saya biasanya merespons dalam 24 jam pada hari kerja. Untuk urusan mendesak,
            silakan hubungi melalui WhatsApp atau Instagram.
          </p>
        </div>

      </div>
    </section>
  );
}