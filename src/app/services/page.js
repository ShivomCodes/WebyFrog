"use client";

import { useEffect } from "react";
import Link from "../components/TransitionLink";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";

export default function ServicesPage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, observerOptions);
    document.querySelectorAll(".reveal-section").forEach((s) => revealObserver.observe(s));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-28 bg-background min-h-dvh">
        {/* Hero Section */}
        <section className="px-[16px] md:px-[64px] py-20 md:py-32 bg-surface-container-lowest border-b-[4px] md:border-b-[8px] border-on-background">
          <div className="max-w-6xl">
            <h1
              className="text-fluid-hero font-black uppercase mb-8 md:mb-12 tracking-tighter"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              Services <br />
              <span className="text-primary-container bg-on-background px-3 md:px-4">Engineered</span> <br />
              For Precision.
            </h1>
            <p
              className="text-fluid-body-lg max-w-3xl border-l-[4px] md:border-l-[8px] border-primary-container pl-6 md:pl-8 font-medium leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We don&apos;t build generic solutions. We build high-performance digital infrastructure for businesses that demand technical superiority and uncompromising design.
            </p>
          </div>
        </section>

        {/* Service Block 1: Web Development */}
        <section className="reveal-section px-[16px] md:px-[64px] py-20 md:py-32 border-b-[4px] md:border-b-[8px] border-on-background pb-bottom-nav md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7">
              <div
                className="w-full aspect-video border-[4px] md:border-[8px] border-on-background neo-shadow bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: "url('/web-service-bg.png')",
                }}
              ></div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="material-symbols-outlined text-primary text-[36px] md:text-[48px] font-black">terminal</span>
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest text-primary" style={{ fontFamily: "var(--font-label)" }}>
                  Web Architecture
                </span>
              </div>
              <h2 className="text-fluid-h2 font-black uppercase mb-6 md:mb-8" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                Web Development
              </h2>
              <p className="text-[16px] md:text-[18px] mb-8 md:mb-10 leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
                High-availability, lightning-fast web applications built on React, Next.js, and TypeScript. We prioritize clean code structures that scale without friction. No fluff, just pure functional engineering.
              </p>
              <div className="mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {["Custom CMS Architecture", "E-commerce Engines", "Performance Tuning"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[12px] md:text-[14px] font-black uppercase tracking-wide" style={{ fontFamily: "var(--font-label)" }}>
                    <span className="w-4 h-4 bg-primary-container border-2 border-on-background shrink-0"></span> {item}
                  </div>
                ))}
              </div>
              <Link href="/contact?service=web" className="bg-primary-container text-on-primary-container px-6 md:px-10 py-4 md:py-5 border-[3px] md:border-[4px] border-on-background hard-pop text-[16px] md:text-[18px] font-black uppercase text-center inline-block touch-target" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT WEB
              </Link>
            </div>
          </div>
        </section>

        {/* Service Block 2: Mobile Apps */}
        <section className="reveal-section px-[16px] md:px-[64px] py-20 md:py-32 border-b-[4px] md:border-b-[8px] border-on-background bg-on-background text-background pb-bottom-nav md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="material-symbols-outlined text-primary-container text-[36px] md:text-[48px] font-black">phone_iphone</span>
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest text-primary-container" style={{ fontFamily: "var(--font-label)" }}>
                  Native Experiences
                </span>
              </div>
              <h2 className="text-fluid-h2 font-black uppercase mb-6 md:mb-8" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                Mobile Apps
              </h2>
              <p className="text-[16px] md:text-[18px] mb-8 md:mb-10 leading-relaxed opacity-90 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                Crafting intuitive iOS and Android applications that live in your users&apos; pockets. Using Flutter and React Native for unified performance across platforms without compromising on native feel.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                <div className="p-4 md:p-6 border-[3px] md:border-[4px] border-primary-container bg-background text-on-background neo-shadow-sm">
                  <span className="text-[28px] md:text-[40px] font-black block mb-1 md:mb-2 leading-none" style={{ fontFamily: "var(--font-display)" }}>99.9%</span>
                  <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-label)" }}>Uptime Guarantee</span>
                </div>
                <div className="p-4 md:p-6 border-[3px] md:border-[4px] border-primary-container bg-background text-on-background neo-shadow-sm">
                  <span className="text-[28px] md:text-[40px] font-black block mb-1 md:mb-2 leading-none" style={{ fontFamily: "var(--font-display)" }}>&lt; 1s</span>
                  <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-label)" }}>Response Time</span>
                </div>
              </div>
              <Link href="/contact?service=mobile" className="bg-primary-container text-on-primary-container px-6 md:px-10 py-4 md:py-5 border-[3px] md:border-[4px] border-primary-container hard-pop text-[16px] md:text-[18px] font-black uppercase text-center inline-block touch-target" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT MOBILE
              </Link>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                className="w-full aspect-video border-[4px] md:border-[8px] border-primary-container neo-shadow bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: "url('/mobile-service-bg.png')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Service Block 3: AI B2B SaaS */}
        <section className="reveal-section px-[16px] md:px-[64px] py-20 md:py-32 border-b-[4px] md:border-b-[8px] border-on-background bg-background pb-bottom-nav md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 border-b-[4px] md:border-b-[6px] border-primary-container w-fit pb-3 md:pb-4">
                <span className="material-symbols-outlined text-on-background text-[44px] md:text-[56px] font-black">memory</span>
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>
                  Intelligence Systems
                </span>
              </div>
              <h2 className="text-fluid-h1 font-black uppercase mb-6 md:mb-10 tracking-tighter" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
                AI <span className="text-primary bg-on-background px-3 md:px-4">B2B</span> SAAS
              </h2>
              <p className="text-[18px] md:text-[20px] mb-8 md:mb-12 text-on-surface-variant border-l-[6px] md:border-l-[12px] border-primary-container pl-6 md:pl-10 font-medium leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                We engineer proprietary neural architectures that transcend simple API wrappers. Our systems are built for high-stakes industrial applications where precision is the only metric that matters.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
                {[
                  { title: "Predictive Analytics", desc: "Time-series forecasting with 99.9% uptime for supply chain optimization." },
                  { title: "LLM Integration", desc: "Context-aware RAG pipelines for secure enterprise knowledge management." },
                  { title: "Custom Logic", desc: "Hard-coded heuristic layers combined with probabilistic neural outputs." },
                  { title: "Neural Scaling", desc: "Auto-optimizing model weights based on real-time edge-case detection." },
                ].map((item, i) => (
                  <div key={i} className="p-6 md:p-8 border-[3px] md:border-[4px] border-on-background bg-surface-container-lowest neo-shadow-sm group hover:neo-shadow transition-all">
                    <h3 className="text-[12px] md:text-[14px] font-black text-primary uppercase mb-3 md:mb-4 tracking-widest" style={{ fontFamily: "var(--font-label)" }}>
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] font-medium leading-relaxed opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact?service=ai" className="bg-on-background text-background px-8 md:px-12 py-5 md:py-6 border-[4px] md:border-[6px] border-on-background hard-pop text-fluid-cta font-black uppercase text-center inline-block touch-target" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT AI
              </Link>
            </div>
            <div className="lg:col-span-6 space-y-8 md:space-y-12">
              <div className="bg-on-background p-6 md:p-10 border-[4px] md:border-[8px] border-primary-container neo-shadow relative aspect-video flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(var(--color-primary-container)_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <pre className="text-primary-container text-xs md:text-lg leading-relaxed overflow-hidden" style={{ fontFamily: "var(--font-body)" }}>
                  <code>{`class NeuralEngine:
  def __init__(self, weights):
    self.core = Transformer(layers=24)
    self.logic = HeuristicGate()

  def predict(self, data):
    raw = self.core.forward(data)
    return self.logic.verify(raw)`}</code>
                </pre>
                <div className="mt-6 md:mt-8 flex gap-3 md:gap-4">
                  <div className="h-3 w-24 md:w-32 bg-primary-container"></div>
                  <div className="h-3 w-12 md:w-16 bg-background/20"></div>
                  <div className="h-3 w-28 md:w-40 bg-primary-container"></div>
                </div>
              </div>
              <div className="p-8 md:p-12 border-[4px] md:border-[8px] border-on-background bg-primary-container relative neo-shadow">
                <p className="text-[24px] md:text-[40px] font-black italic mb-6 md:mb-8 leading-tight text-on-background" style={{ fontFamily: "var(--font-display)" }}>
                  &quot;Our AI-driven analytics dashboard allowed us to predict inventory needs with 94% accuracy.&quot;
                </p>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 md:w-16 h-1 bg-on-background"></div>
                  <span className="text-[12px] md:text-[14px] font-black uppercase text-on-background tracking-[0.2em]" style={{ fontFamily: "var(--font-label)" }}>
                    CTO, Global Logistics Corp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Block 4: AI Automations */}
        <section className="reveal-section px-[16px] md:px-[64px] py-20 md:py-32 border-b-[4px] md:border-b-[8px] border-on-background bg-on-background text-background pb-bottom-nav md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="material-symbols-outlined text-primary-container text-[36px] md:text-[48px] font-black">smart_toy</span>
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest text-primary-container" style={{ fontFamily: "var(--font-label)" }}>
                  Autonomous Agents
                </span>
              </div>
              <h2 className="text-fluid-h2 font-black uppercase mb-6 md:mb-8" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                AI Automations
              </h2>
              <p className="text-[16px] md:text-[18px] mb-8 md:mb-10 leading-relaxed opacity-90 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                Replacing manual workflows with zero-latency automation engines. We develop custom voice call agents, WhatsApp business flows, and Telegram automation tunnels that convert.
              </p>
              <div className="mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {["WhatsApp Integrations", "Telegram Comms Tunnels", "Automated Voice Agents"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[12px] md:text-[14px] font-black uppercase tracking-wide text-background" style={{ fontFamily: "var(--font-label)" }}>
                    <span className="w-4 h-4 bg-primary-container border-2 border-background shrink-0"></span> {item}
                  </div>
                ))}
              </div>
              <Link href="/contact?service=automations" className="bg-primary-container text-on-primary-container px-6 md:px-10 py-4 md:py-5 border-[3px] md:border-[4px] border-primary-container hard-pop text-[16px] md:text-[18px] font-black uppercase text-center inline-block touch-target" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT AUTOMATIONS
              </Link>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                className="w-full aspect-video border-[4px] md:border-[8px] border-primary-container neo-shadow bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: "url('/automation-service-bg.png')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Service Block 5: Product & UI/UX Design */}
        <section className="reveal-section px-[16px] md:px-[64px] py-20 md:py-32 border-b-[4px] md:border-b-[8px] border-on-background bg-background pb-bottom-nav md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7">
              <div
                className="w-full aspect-video border-[4px] md:border-[8px] border-on-background neo-shadow bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: "url('/design-service-bg.png')",
                }}
              ></div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="material-symbols-outlined text-primary text-[36px] md:text-[48px] font-black">architecture</span>
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest text-primary" style={{ fontFamily: "var(--font-label)" }}>
                  Visual Hierarchy
                </span>
              </div>
              <h2 className="text-fluid-h2 font-black uppercase mb-6 md:mb-8" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                UI/UX Design
              </h2>
              <p className="text-[16px] md:text-[18px] mb-8 md:mb-10 leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
                High-contrast digital armor. We craft bold visual styles, wireframes, and design systems that command authority. No boring SaaS-cream templates, only premium layouts.
              </p>
              <div className="mb-8 md:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {["Brutalist Systems", "High-Fidelity Wireframes", "UX/UI Architecture"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[12px] md:text-[14px] font-black uppercase tracking-wide" style={{ fontFamily: "var(--font-label)" }}>
                    <span className="w-4 h-4 bg-primary-container border-2 border-on-background shrink-0"></span> {item}
                  </div>
                ))}
              </div>
              <Link href="/contact?service=design" className="bg-primary-container text-on-primary-container px-6 md:px-10 py-4 md:py-5 border-[3px] md:border-[4px] border-on-background hard-pop text-[16px] md:text-[18px] font-black uppercase text-center inline-block touch-target" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT DESIGN
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-container px-[16px] md:px-[64px] py-24 md:py-40 border-t-[8px] md:border-t-[16px] border-on-background text-center pb-bottom-nav md:pb-0">
          <h2 className="text-fluid-hero font-black uppercase mb-8 md:mb-12 tracking-tighter" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
            Ready to <br />
            <span className="bg-on-background text-background px-4 md:px-6 border-[4px] md:border-[8px] border-on-background">Frog</span> Ahead?
          </h2>
          <p className="text-fluid-body max-w-2xl mx-auto mb-12 md:mb-16 font-medium leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Stop settling for mediocrity. Partner with an agency that speaks the language of engineering and high-end design.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
            <Link href="/contact?service=schedule" className="bg-background text-on-background px-10 md:px-16 py-6 md:py-8 border-[4px] md:border-[6px] border-on-background hard-pop text-fluid-cta font-black uppercase text-center inline-block touch-target" style={{ fontFamily: "var(--font-display)" }}>
              SCHEDULE CALL
            </Link>
            <Link href="/contact?service=quote" className="bg-on-background text-background px-10 md:px-16 py-6 md:py-8 border-[4px] md:border-[6px] border-on-background hard-pop text-fluid-cta font-black uppercase text-center inline-block touch-target" style={{ fontFamily: "var(--font-display)" }}>
              GET A QUOTE
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
