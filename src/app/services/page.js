"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

      <main className="pt-32 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="px-[20px] md:px-[64px] py-24 md:py-32 bg-surface-container-lowest border-b-[8px] border-on-background">
          <div className="max-w-6xl">
            <h1
              className="text-[64px] md:text-[120px] font-black uppercase leading-[0.9] mb-12 tracking-tighter"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              Services <br />
              <span className="text-primary-container bg-on-background px-4">Engineered</span> <br />
              For Precision.
            </h1>
            <p
              className="text-[20px] md:text-[24px] max-w-3xl border-l-[8px] border-primary-container pl-8 font-medium leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We don&apos;t build generic solutions. We build high-performance digital infrastructure for businesses that demand technical superiority and uncompromising design.
            </p>
          </div>
        </section>

        {/* Service Block 1: Web Development */}
        <section className="reveal-section px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div
                className="w-full aspect-video border-[8px] border-on-background neo-shadow bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80')",
                }}
              ></div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-[48px] font-black">terminal</span>
                <span className="text-[14px] font-black uppercase tracking-widest text-primary" style={{ fontFamily: "var(--font-label)" }}>
                  Web Architecture
                </span>
              </div>
              <h2 className="text-[48px] md:text-[64px] font-black uppercase mb-8 leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                Web Development
              </h2>
              <p className="text-[18px] mb-10 leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
                High-availability, lightning-fast web applications built on React, Next.js, and TypeScript. We prioritize clean code structures that scale without friction. No fluff, just pure functional engineering.
              </p>
              <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Custom CMS Architecture", "E-commerce Engines", "Performance Tuning"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] font-black uppercase tracking-wide" style={{ fontFamily: "var(--font-label)" }}>
                    <span className="w-4 h-4 bg-primary-container border-2 border-on-background"></span> {item}
                  </div>
                ))}
              </div>
              <Link href="/contact?service=web" className="bg-primary-container text-on-primary-container px-10 py-5 border-[4px] border-on-background hard-pop text-[18px] font-black uppercase text-center inline-block" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT WEB
              </Link>
            </div>
          </div>
        </section>

        {/* Service Block 2: Mobile Apps */}
        <section className="reveal-section px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background bg-on-background text-background">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary-container text-[48px] font-black">phone_iphone</span>
                <span className="text-[14px] font-black uppercase tracking-widest text-primary-container" style={{ fontFamily: "var(--font-label)" }}>
                  Native Experiences
                </span>
              </div>
              <h2 className="text-[48px] md:text-[64px] font-black uppercase mb-8 leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                Mobile Apps
              </h2>
              <p className="text-[18px] mb-10 leading-relaxed opacity-90 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                Crafting intuitive iOS and Android applications that live in your users&apos; pockets. Using Flutter and React Native for unified performance across platforms without compromising on native feel.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="p-6 border-[4px] border-primary-container bg-background text-on-background neo-shadow-sm">
                  <span className="text-[32px] md:text-[40px] font-black block mb-2 leading-none" style={{ fontFamily: "var(--font-display)" }}>99.9%</span>
                  <span className="text-[12px] font-black uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-label)" }}>Uptime Guarantee</span>
                </div>
                <div className="p-6 border-[4px] border-primary-container bg-background text-on-background neo-shadow-sm">
                  <span className="text-[32px] md:text-[40px] font-black block mb-2 leading-none" style={{ fontFamily: "var(--font-display)" }}>&lt; 1s</span>
                  <span className="text-[12px] font-black uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-label)" }}>Response Time</span>
                </div>
              </div>
              <Link href="/contact?service=mobile" className="bg-primary-container text-on-primary-container px-10 py-5 border-[4px] border-primary-container hard-pop text-[18px] font-black uppercase text-center inline-block" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT MOBILE
              </Link>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                className="w-full aspect-video border-[8px] border-primary-container neo-shadow bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Service Block 3: AI B2B SaaS */}
        <section className="reveal-section px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-4 mb-8 border-b-[6px] border-primary-container w-fit pb-4">
                <span className="material-symbols-outlined text-on-background text-[56px] font-black">memory</span>
                <span className="text-[14px] font-black uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>
                  Intelligence Systems
                </span>
              </div>
              <h2 className="text-[64px] md:text-[96px] font-black uppercase mb-10 leading-[0.8] tracking-tighter" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
                AI <span className="text-primary bg-on-background px-4">B2B</span> SAAS
              </h2>
              <p className="text-[20px] mb-12 text-on-surface-variant border-l-[12px] border-primary-container pl-10 font-medium leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                We engineer proprietary neural architectures that transcend simple API wrappers. Our systems are built for high-stakes industrial applications where precision is the only metric that matters.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  { title: "Predictive Analytics", desc: "Time-series forecasting with 99.9% uptime for supply chain optimization." },
                  { title: "LLM Integration", desc: "Context-aware RAG pipelines for secure enterprise knowledge management." },
                  { title: "Custom Logic", desc: "Hard-coded heuristic layers combined with probabilistic neural outputs." },
                  { title: "Neural Scaling", desc: "Auto-optimizing model weights based on real-time edge-case detection." },
                ].map((item, i) => (
                  <div key={i} className="p-8 border-[4px] border-on-background bg-surface-container-lowest neo-shadow-sm group hover:neo-shadow transition-all">
                    <h3 className="text-[14px] font-black text-primary uppercase mb-4 tracking-widest" style={{ fontFamily: "var(--font-label)" }}>
                      {item.title}
                    </h3>
                    <p className="text-[16px] font-medium leading-relaxed opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact?service=ai" className="bg-on-background text-background px-12 py-6 border-[6px] border-on-background hard-pop text-[24px] md:text-[32px] font-black uppercase text-center inline-block" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT AI
              </Link>
            </div>
            <div className="lg:col-span-6 space-y-12">
              <div className="bg-on-background p-10 border-[8px] border-primary-container neo-shadow relative aspect-video flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(var(--color-primary-container)_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <pre className="text-primary-container text-sm md:text-lg leading-relaxed overflow-hidden" style={{ fontFamily: "var(--font-body)" }}>
                  <code>{`class NeuralEngine:
  def __init__(self, weights):
    self.core = Transformer(layers=24)
    self.logic = HeuristicGate()

  def predict(self, data):
    raw = self.core.forward(data)
    return self.logic.verify(raw)`}</code>
                </pre>
                <div className="mt-8 flex gap-4">
                  <div className="h-3 w-32 bg-primary-container"></div>
                  <div className="h-3 w-16 bg-background/20"></div>
                  <div className="h-3 w-40 bg-primary-container"></div>
                </div>
              </div>
              <div className="p-12 border-[8px] border-on-background bg-primary-container relative neo-shadow">
                <p className="text-[32px] md:text-[40px] font-black italic mb-8 leading-tight text-on-background" style={{ fontFamily: "var(--font-display)" }}>
                  &quot;Our AI-driven analytics dashboard allowed us to predict inventory needs with 94% accuracy.&quot;
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-1 bg-on-background"></div>
                  <span className="text-[14px] font-black uppercase text-on-background tracking-[0.2em]" style={{ fontFamily: "var(--font-label)" }}>
                    CTO, Global Logistics Corp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Block 4: AI Automations */}
        <section className="reveal-section px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background bg-on-background text-background">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary-container text-[48px] font-black">smart_toy</span>
                <span className="text-[14px] font-black uppercase tracking-widest text-primary-container" style={{ fontFamily: "var(--font-label)" }}>
                  Autonomous Agents
                </span>
              </div>
              <h2 className="text-[48px] md:text-[64px] font-black uppercase mb-8 leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                AI Automations
              </h2>
              <p className="text-[18px] mb-10 leading-relaxed opacity-90 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                Replacing manual workflows with zero-latency automation engines. We develop custom voice call agents, WhatsApp business flows, and Telegram automation tunnels that convert.
              </p>
              <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["WhatsApp Integrations", "Telegram Comms Tunnels", "Automated Voice Agents"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] font-black uppercase tracking-wide text-background" style={{ fontFamily: "var(--font-label)" }}>
                    <span className="w-4 h-4 bg-primary-container border-2 border-background"></span> {item}
                  </div>
                ))}
              </div>
              <Link href="/contact?service=automations" className="bg-primary-container text-on-primary-container px-10 py-5 border-[4px] border-primary-container hard-pop text-[18px] font-black uppercase text-center inline-block" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT AUTOMATIONS
              </Link>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                className="w-full aspect-video border-[8px] border-primary-container neo-shadow bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Service Block 5: Product & UI/UX Design */}
        <section className="reveal-section px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div
                className="w-full aspect-video border-[8px] border-on-background neo-shadow bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80')",
                }}
              ></div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-[48px] font-black">architecture</span>
                <span className="text-[14px] font-black uppercase tracking-widest text-primary" style={{ fontFamily: "var(--font-label)" }}>
                  Visual Hierarchy
                </span>
              </div>
              <h2 className="text-[48px] md:text-[64px] font-black uppercase mb-8 leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                UI/UX Design
              </h2>
              <p className="text-[18px] mb-10 leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
                High-contrast digital armor. We craft bold visual styles, wireframes, and design systems that command authority. No boring SaaS-cream templates, only premium layouts.
              </p>
              <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Brutalist Systems", "High-Fidelity Wireframes", "UX/UI Architecture"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] font-black uppercase tracking-wide" style={{ fontFamily: "var(--font-label)" }}>
                    <span className="w-4 h-4 bg-primary-container border-2 border-on-background"></span> {item}
                  </div>
                ))}
              </div>
              <Link href="/contact?service=design" className="bg-primary-container text-on-primary-container px-10 py-5 border-[4px] border-on-background hard-pop text-[18px] font-black uppercase text-center inline-block" style={{ fontFamily: "var(--font-display)" }}>
                ENQUIRE ABOUT DESIGN
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-container px-[20px] md:px-[64px] py-40 border-t-[16px] border-on-background text-center">
          <h2 className="text-[64px] md:text-[120px] font-black uppercase mb-12 leading-[0.8] tracking-tighter" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
            Ready to <br />
            <span className="bg-on-background text-background px-6 border-[8px] border-on-background">Frog</span> Ahead?
          </h2>
          <p className="text-[20px] md:text-[24px] max-w-2xl mx-auto mb-16 font-medium leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Stop settling for mediocrity. Partner with an agency that speaks the language of engineering and high-end design.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <Link href="/contact?service=schedule" className="bg-background text-on-background px-16 py-8 border-[6px] border-on-background hard-pop text-[24px] md:text-[32px] font-black uppercase text-center inline-block" style={{ fontFamily: "var(--font-display)" }}>
              SCHEDULE CALL
            </Link>
            <Link href="/contact?service=quote" className="bg-on-background text-background px-16 py-8 border-[6px] border-on-background hard-pop text-[24px] md:text-[32px] font-black uppercase text-center inline-block" style={{ fontFamily: "var(--font-display)" }}>
              GET A QUOTE
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
