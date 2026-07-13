"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[4px] border-on-background w-full px-[20px] md:px-[64px] py-[24px] md:py-[32px]">
      <div className="flex justify-between items-center max-w-full mx-auto">
        <Link
          href="/"
          className="font-[var(--font-display)] text-[24px] md:text-[32px] font-black text-on-background tracking-tighter uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          WEBYFROG
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-[32px] items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-bold uppercase tracking-wide transition-all ${
                pathname === link.href
                  ? "text-primary underline decoration-4 underline-offset-8"
                  : "text-on-background hover:text-primary"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary-container px-6 py-3 border-[4px] border-on-background neo-shadow-sm btn-neo transition-all text-[14px] font-bold uppercase"
            style={{ fontFamily: "var(--font-label)" }}
          >
            START A PROJECT
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-on-background p-2 border-[3px] border-on-background active:bg-surface-container"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b-[4px] border-on-background p-[20px] flex flex-col gap-6 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[18px] font-bold uppercase ${
                pathname === link.href ? "text-primary" : "text-on-background"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary-container text-on-primary-container px-6 py-4 border-[4px] border-on-background neo-shadow-sm text-center font-bold uppercase"
            style={{ fontFamily: "var(--font-label)" }}
          >
            START A PROJECT
          </Link>
        </div>
      )}
    </nav>
  );
}
