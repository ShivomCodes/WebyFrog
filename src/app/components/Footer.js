import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-on-background border-t-[8px] border-primary-container py-[64px] px-[20px] md:px-[64px] flex flex-col md:flex-row justify-between items-start gap-[32px]">
      <div className="max-w-md">
        <div
          className="text-[48px] font-extrabold text-surface tracking-tighter mb-8 uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          WEBYFROG
        </div>
        <p
          className="text-surface-variant text-[16px] uppercase mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          © 2024 WEBYFROG AGENCY. ALL RIGHTS RESERVED. ENGINEERED FOR
          PRECISION.
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Twitter", url: "https://twitter.com/webyfrog" },
            { name: "LinkedIn", url: "https://linkedin.com/company/webyfrog" },
            { name: "GitHub", url: "https://github.com/webyfrog" },
            { name: "Instagram", url: "https://instagram.com/webyfrog" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-bold text-surface-variant hover:text-primary-fixed transition-colors border-[2px] border-surface-variant px-4 py-2 uppercase"
              style={{ fontFamily: "var(--font-label)" }}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[32px]">
        <div className="flex flex-col gap-4">
          <span
            className="text-[14px] font-bold text-primary-fixed uppercase mb-4"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Navigation
          </span>
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/process", label: "Process" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] text-surface-dim hover:text-primary-fixed uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <span
            className="text-[14px] font-bold text-primary-fixed uppercase mb-4"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Legal
          </span>
          {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[16px] text-surface-dim hover:text-primary-fixed uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
