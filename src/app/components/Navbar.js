"use client";

import Link from "./TransitionLink";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "/services", label: "Services", icon: "terminal" },
  { href: "/portfolio", label: "Portfolio", icon: "work" },
  { href: "/process", label: "Process", icon: "route" },
  { href: "/about", label: "About", icon: "info" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, [pathname]);

  // Detect scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250);
  }, []);

  const handleToggle = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  }, [isOpen, closeMenu]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-brutal shadow-[0_4px_0_0_var(--color-on-background)]"
            : "bg-background"
        } border-b-[4px] border-on-background px-[16px] md:px-[64px] py-[16px] md:py-[24px]`}
        style={{ paddingTop: "calc(16px + env(safe-area-inset-top, 0px))" }}
      >
        <div className="flex justify-between items-center max-w-full mx-auto">
          <Link
            href="/"
            className="flex items-center no-select"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="WEBYFROG Logo"
              className="h-[72px] md:h-[96px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-[32px] items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-bold uppercase tracking-wide transition-colors duration-150 ease-[var(--ease-out)] active:scale-95 inline-block touch-target ${
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
              className="bg-primary-container text-on-primary-container px-6 py-3 border-[4px] border-on-background neo-shadow-sm btn-neo text-[14px] font-bold uppercase touch-target"
              style={{ fontFamily: "var(--font-label)" }}
            >
              START A PROJECT
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-on-background p-3 border-[3px] border-on-background active:scale-95 transition-transform duration-100 ease-[var(--ease-out)] touch-target no-select"
            onClick={handleToggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className={`md:hidden fixed inset-0 z-[49] bg-on-background/60 backdrop-blur-brutal ${
            isClosing ? "fade-out" : "fade-in"
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-in Drawer */}
      {isOpen && (
        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 z-[51] w-[min(85vw,360px)] bg-background border-l-[4px] border-on-background flex flex-col ${
            isClosing ? "slide-out-right" : "slide-in-right"
          }`}
          style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center px-5 py-5 border-b-[4px] border-on-background">
            <span
              className="text-[18px] font-black text-on-background uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="p-3 border-[3px] border-on-background active:scale-95 transition-transform touch-target"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 flex flex-col px-5 py-6 gap-2 overflow-y-auto">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center gap-4 px-4 py-4 border-[3px] transition-all duration-150 ease-[var(--ease-out)] active:scale-[0.97] touch-target no-select ${
                  pathname === link.href
                    ? "border-primary-container bg-primary-container/10 text-primary"
                    : "border-transparent text-on-background hover:bg-surface-container"
                }`}
                style={{
                  fontFamily: "var(--font-display)",
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <span className="material-symbols-outlined text-2xl">
                  {link.icon}
                </span>
                <span className="text-[18px] font-bold uppercase tracking-wide">
                  {link.label}
                </span>
                {pathname === link.href && (
                  <span className="ml-auto w-2 h-2 bg-primary-container rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="px-5 py-5 border-t-[4px] border-on-background">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-primary-container text-on-primary-container px-6 py-4 border-[4px] border-on-background neo-shadow-sm text-center font-bold uppercase text-[16px] active:scale-[0.97] transition-transform duration-100 ease-[var(--ease-out)] block touch-target no-select"
              style={{ fontFamily: "var(--font-label)" }}
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
