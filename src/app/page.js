"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);
    document.querySelectorAll(".reveal-text").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-on-background">
        <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="w-full h-full bg-cover bg-center grayscale"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-on-background to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-[20px]">
          <h1
            className="text-[64px] md:text-[120px] font-black text-background text-stroke tracking-tighter mb-4 reveal-text leading-[0.9]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
          >
            WEBYFROG
          </h1>
          <p
            className="text-[20px] md:text-[32px] text-primary-fixed font-black uppercase mb-12 tracking-widest reveal-text"
            style={{ fontFamily: "var(--font-body)", transitionDelay: "0.2s" }}
          >
            Digital Brutality.
          </p>
          <div className="reveal-text" style={{ transitionDelay: "0.4s" }}>
            <button
              type="button"
              className="bg-primary-container text-on-primary-container px-12 py-6 border-[8px] border-on-background hard-pop uppercase tracking-tighter text-[24px] md:text-[32px] font-extrabold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START A PROJECT
            </button>
          </div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 w-full bg-on-background py-4 border-t-[4px] border-primary overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            {[
              "NO GRADIENTS",
              "NO SOFT CORNERS",
              "ONLY RESULTS",
              "PURE PRECISION",
              "NO GRADIENTS",
              "NO SOFT CORNERS",
              "ONLY RESULTS",
              "PURE PRECISION",
            ].map((text, i) => (
              <span key={i} className="flex items-center">
                <span
                  className="text-background text-[24px] md:text-[32px] font-bold mx-8"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {text}
                </span>
                <span
                  className="text-primary-container text-[32px] font-bold mx-8"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  •
                </span>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 px-[20px] md:px-[64px] bg-background" id="services">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-[8px] border-on-background pb-8">
            <div>
              <h2
                className="text-[48px] md:text-[72px] font-black text-on-background uppercase tracking-tighter reveal-text leading-[1.1]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
              >
                Our Arsenal
              </h2>
              <p
                className="text-[18px] text-on-surface-variant max-w-xl reveal-text"
                style={{ fontFamily: "var(--font-body)", transitionDelay: "0.1s" }}
              >
                High-performance digital weaponry engineered for market dominance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: "terminal", title: "Website Dev", desc: "Uncompromising speed. Structural integrity. Built for conversion.", tag: "CODE READY" },
              { icon: "smartphone", title: "App Dev", desc: "Native-feel performance. Brutally efficient user flows.", tag: "IOS / ANDROID" },
              { icon: "settings_suggest", title: "Automations", desc: "Eliminate friction. Liquidate manual labor. Scale without limits.", tag: "FLOW STATE" },
              { icon: "memory", title: "AI B2B SaaS", desc: "Custom intelligence layers. Enterprise-grade AI implementation.", tag: "CORE AI" },
              { icon: "architecture", title: "Design", desc: "Visual dominance. High-contrast hierarchies. Functional beauty.", tag: "UX/UI ARMOR" },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest border-[4px] border-on-background p-8 flex flex-col justify-between min-h-[400px] hard-pop transition-all cursor-crosshair"
              >
                <div>
                  <span className="material-symbols-outlined text-[48px] text-on-background mb-8 block">
                    {service.icon}
                  </span>
                  <h3
                    className="text-[28px] md:text-[32px] font-extrabold uppercase mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-on-surface-variant" style={{ fontFamily: "var(--font-body)" }}>
                    {service.desc}
                  </p>
                </div>
                <div className="pt-4 border-t-[2px] border-on-background mt-8">
                  <span
                    className="text-[14px] font-bold text-primary"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {service.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Webyfrog Section */}
      <section className="bg-on-background text-background py-32 px-[20px] md:px-[64px]" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] items-start">
          <div className="lg:col-span-5">
            <h2
              className="text-[48px] md:text-[72px] font-black uppercase tracking-tighter mb-8 leading-none reveal-text"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              Why Webyfrog?
            </h2>
            <p
              className="text-[18px] md:text-[24px] text-surface-variant mb-12 reveal-text border-l-[8px] border-primary-container pl-8"
              style={{ fontFamily: "var(--font-body)", transitionDelay: "0.2s" }}
            >
              We don&apos;t build websites. We build digital assets that demand attention and command the market. No fluff, no filler. Just heavy-hitting engineering.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Structural Purity", desc: "Every line of code is optimized for raw performance. We prioritize the foundation over the decoration." },
              { title: "Aggressive Speed", desc: "Latency is the enemy. Our builds are stripped of bloat to ensure instant interaction across all devices." },
              { title: "Radical Clarity", desc: "We don't hide behind jargon. Our process is transparent, our goals are measurable, and our output is undeniable." },
              { title: "Market Edge", desc: "Our brutalist aesthetic cuts through the noise of generic modern design to give your brand a distinct personality." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-on-background p-10 border-[4px] border-primary-container flex flex-col gap-6 reveal-text"
                style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
              >
                <h4
                  className="text-[28px] md:text-[32px] font-extrabold uppercase text-primary-fixed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h4>
                <p className="text-[16px] text-surface-dim" style={{ fontFamily: "var(--font-body)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
