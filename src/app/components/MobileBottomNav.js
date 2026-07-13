"use client";

import Link from "./TransitionLink";
import { usePathname } from "next/navigation";

const bottomLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "terminal" },
  { href: "/portfolio", label: "Work", icon: "work" },
  { href: "/process", label: "Process", icon: "route" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-on-background border-t-[4px] border-primary-container safe-area-inset"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Mobile navigation"
    >
      <div className="flex justify-around items-center px-2 py-2">
        {bottomLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 min-w-[56px] transition-all duration-150 no-select ${
                isActive
                  ? "text-primary-container"
                  : "text-surface-dim active:scale-90"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="material-symbols-outlined text-[24px]">
                {link.icon}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-wider leading-none"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {link.label}
              </span>
              {isActive && (
                <span className="w-5 h-[3px] bg-primary-container rounded-full -mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
