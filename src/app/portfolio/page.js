"use client";

import { useState, useEffect } from "react";
import Link from "../components/TransitionLink";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";

const projects = [
  {
    title: "Vortex Fintech",
    tag: "WEB DESIGN",
    categories: ["Web", "Design"],
    subtitle: "ENGINEERING A NEW FINANCIAL ECOSYSTEM",
    desc: "Full-scale digital transformation including core banking dashboard and mobile app design systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBygqnQpYBE6S921nEG55JZxWRsiU0sx1yV20cpbPbVUxCx_aMeX50zsIUvR-crjEq_6ZzuVrJTY1swLJKB86hj0u4nozwYGjt0M1qpWs0-C2i2IQeRAyfg2Y2H0-pWQc8io0b8aZrhUaqfah9kZwxi6ayYWHqWaT1otjQ2HUr6Ny6j9L1V8k4RJdcb3rdvBbAe3afUKzHyhkwduerk-hootU67j8xnOoDfwxUloN09Tcf3cjaZuUbVavreyO90mCz7Gn35BRc5u_np",
  },
  {
    title: "Pulse Health",
    tag: "PRODUCT DESIGN",
    categories: ["App", "Design"],
    subtitle: "REAL-TIME BIOMETRIC TRACKING",
    desc: "Designed for high-pressure medical environments with maximum legibility and zero-latency visual feedback.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrKTeZjVE6iYxnfodeRFaxHFN8vB1GrzhaGuN7xQrsKhqNMzs6gtnyvpK6i4PC5_EMy9zv6QcDYrCl5oRlSCk1-LjnCifhwwrPkPHrAPkulQv4NZikWQTuKGqthZ48MDdw_lpKrJgm-FD-9u5wAvqv19ukoVy_WxxV-bcPs5uXTCMX2gXr5kydSIVTrlBgH7gsQz_-6iNFt_XKSH-5c6v8Pf05pEJPhjycPnsGeNWEymfv0cT-CDR4vmL5fqMvvj7NsSAQM7TipGZ1",
  },
  {
    title: "LogiFlow AI",
    tag: "AI / DASHBOARD",
    categories: ["AI", "Web"],
    subtitle: "PREDICTIVE LOGISTICS ARCHITECTURE",
    desc: "Optimizing global supply chains using raw data visualization and aggressive functionalism.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtJ2sWo5lK8dS5V-OpPmJrXtiniDg94lZPwDTiLotZouIFsH4ieKP8fQpYLdEPXjiUTGOWUGXMc50MJu_6Jj0k8i9Tc9PUarddppMGgdhuerOaXRebl9QY3wVkxq0vtLfL1yV4B-xHR68iylF5jwckGP8pb8Tpsjj8fYWcixDj6U8UShddsffuNOV-CTSd54VrtwpagDRXjHusTKluOUXKYyW3VqKHWu5atHKbgmb2ZurfS8oLAuVYZPn1CXDFfKMupOStGlULMTGY",
  },
  {
    title: "Atelier Noir",
    tag: "E-COMMERCE",
    categories: ["Web", "Design"],
    subtitle: "DISRUPTIVE DIGITAL RETAIL",
    desc: "Breaking traditional e-commerce patterns with a raw, high-fashion structural identity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8OW_cpCdxIJ-MPlcb9E_KspxSwzSPuPSt5aYkBvpfsPS82DlFeRFsaMuMZm7cYkssULK7INu2AhmM40TN8CIW-_qimfQDRQq5uDpteHcEUXWdA-Wzqt7OgriiPJK_FvRfQr-6NAp0swkbhUkl8vD1QgzMbQBIMth4RMCMjIh42bXnfMU0E1MQiviljWg8Z_XAsattJmdpea6stABnzDvYmQQ4ypYc15esD0lKrc5VX0cNDvuEScQg8r0-MqH2IWRy2E7WEB7U4y1H",
  },
];

const filterOptions = ["All", "Web", "App", "AI", "Design"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-text").forEach((el) => {
      el.classList.remove("visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <>
      <Navbar />

      <main className="px-[16px] md:px-[64px] py-12 md:py-[64px] pt-40 md:pt-48 bg-background min-h-dvh">
        {/* Hero Section */}
        <header className="mb-12 md:mb-16">
          <h1
            className="text-fluid-h1 font-black uppercase mb-6 md:mb-8 reveal-text"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
          >
            Selected Works
          </h1>
          <div className="max-w-2xl bg-surface-container p-6 md:p-8 border-[3px] md:border-[4px] border-on-background neo-shadow-sm reveal-text" style={{ transitionDelay: "100ms" }}>
            <p
              className="text-[16px] md:text-[20px] font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Engineering precision meets raw creative disruption. Explore our latest product design and web engineering projects.
            </p>
          </div>
        </header>

        {/* Filter Bar - Horizontal Scroll on Mobile */}
        <div className="mb-12 md:mb-16 reveal-text overflow-x-auto no-scrollbar -mx-[16px] px-[16px] md:mx-0 md:px-0" style={{ transitionDelay: "150ms" }}>
          <div className="flex gap-3 md:gap-4 items-center min-w-max md:min-w-0 pb-2">
            <span
              className="text-[12px] md:text-[14px] font-bold uppercase text-on-surface-variant shrink-0"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Filter by:
            </span>
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={`border-[3px] md:border-[4px] border-on-background px-5 md:px-6 py-2.5 md:py-2 text-[12px] md:text-[14px] font-bold uppercase transition-[background-color,color,transform,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-95 touch-target shrink-0 ${
                  activeFilter === option
                    ? "bg-primary-container text-on-primary-container neo-shadow-sm translate-x-1 translate-y-1"
                    : "bg-background text-on-background hover:bg-surface-container"
                }`}
                style={{ fontFamily: "var(--font-label)" }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="masonry-grid">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className="masonry-item group relative bg-background border-[3px] md:border-[4px] border-on-background neo-shadow hover:translate-x-1 hover:translate-y-1 transition-[transform,box-shadow,opacity] duration-200 ease-[var(--ease-out)] cursor-pointer overflow-hidden active-project-card reveal-text press-effect"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-auto overflow-hidden bg-on-background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full grayscale group-hover:grayscale-0 transition-[transform,filter] duration-350 ease-[var(--ease-out)] scale-105 group-hover:scale-100"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-8 border-t-[3px] md:border-t-[4px] border-on-background bg-background">
                <div className="flex justify-between items-start mb-4 md:mb-6 gap-3">
                  <h3
                    className="text-[24px] md:text-[40px] font-black uppercase leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-[10px] md:text-[12px] font-bold border-[2px] border-on-background px-2 md:px-3 py-1 bg-primary-container text-on-primary-container shrink-0"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {project.tag}
                  </span>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <p
                    className="text-primary font-black text-[12px] md:text-[14px] uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {project.subtitle}
                  </p>
                  <p
                    className="text-[14px] md:text-[16px] text-on-surface-variant leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-primary-container px-[16px] md:px-[64px] py-20 md:py-32 border-t-[4px] md:border-t-[8px] border-on-background text-on-primary-container text-center pb-bottom-nav md:pb-0">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-fluid-h1 font-black uppercase mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
          >
            Ready to disrupt?
          </h2>
          <p className="text-fluid-body mb-12 md:mb-16 font-medium max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            We don&apos;t do subtle. We do precision. Let&apos;s build something that demands attention.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            <Link
              href="/contact"
              className="bg-on-background text-background px-8 md:px-12 py-5 md:py-6 text-[20px] md:text-[32px] font-black uppercase neo-shadow hover:translate-x-2 hover:translate-y-2 active:translate-x-4 active:translate-y-4 transition-all text-center inline-block touch-target"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START A PROJECT
            </Link>
            <Link
              href="/process"
              className="bg-background text-on-background border-[3px] md:border-[4px] border-on-background px-8 md:px-12 py-5 md:py-6 text-[20px] md:text-[32px] font-black uppercase neo-shadow hover:translate-x-2 hover:translate-y-2 active:translate-x-4 active:translate-y-4 transition-all text-center inline-block touch-target"
              style={{ fontFamily: "var(--font-display)" }}
            >
              OUR PROCESS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
