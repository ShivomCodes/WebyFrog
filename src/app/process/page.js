"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProcessPage() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="hidden md:block fixed w-6 h-6 border-2 border-on-background bg-primary-container z-[9999] pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%) ${isHovering ? "scale(2.5)" : "scale(1)"}`,
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
      ></div>
      <Navbar />

      <main className="min-h-screen pt-28 bg-background">
        {/* Hero Section */}
        <header className="relative px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background overflow-hidden bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="inline-block bg-primary-container border-[4px] border-on-background px-6 py-2 mb-8 neo-shadow-sm">
              <span
                className="text-[14px] font-bold uppercase text-on-background"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Systematic Execution
              </span>
            </div>
            <h1
              className="text-[64px] md:text-[120px] font-black leading-[0.9] mb-8 tracking-tighter"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              OUR <span className="bg-primary-container px-4">METHODOLOGY</span>
            </h1>
            <p
              className="text-[20px] md:text-[24px] max-w-2xl border-l-[8px] border-primary-container pl-8 mb-12 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We&apos;ve eliminated the guesswork from digital product development. Our process is a rigorous series of engineering checkpoints designed for speed, scale, and surgical precision.
            </p>
          </div>
          <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block select-none">
            <span className="text-[400px] font-black leading-none uppercase" style={{ fontFamily: "var(--font-display)" }}>ENGINE</span>
          </div>
        </header>

        {/* Process Bento Grid */}
        <section className="px-[20px] md:px-[64px] py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px]">
            {/* Phase 1 */}
            <div className="md:col-span-7 group bg-background border-[4px] border-on-background p-12 neo-shadow transition-all">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="text-[14px] font-bold text-primary mb-2 block" style={{ fontFamily: "var(--font-label)" }}>PHASE 01</span>
                  <h2 className="text-[48px] md:text-[64px] font-extrabold uppercase leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>Discovery</h2>
                </div>
                <span className="material-symbols-outlined text-6xl text-on-background">search_insights</span>
              </div>
              <div className="space-y-8">
                <p className="text-[18px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Before writing a single line of code, we dismantle your assumptions. We audit the competition, interview users, and define the technical constraints that will shape your solution.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-[4px] border-on-background pt-8">
                  {["MARKET RESEARCH", "USER INTERVIEWS", "INFRASTRUCTURE AUDITING"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[14px] font-bold" style={{ fontFamily: "var(--font-label)" }}>
                      <span className="w-4 h-4 bg-primary-container border-2 border-on-background"></span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Accent 1 */}
            <div className="md:col-span-5 h-[400px] relative border-[4px] border-on-background neo-shadow overflow-hidden bg-on-background">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                alt="Engineering visualization"
              />
              <div className="absolute bottom-6 left-6 bg-primary-container text-on-primary-container border-[3px] border-on-background px-4 py-2 text-[14px] font-bold" style={{ fontFamily: "var(--font-label)" }}>
                PHASE_01_RAW_INTEL
              </div>
            </div>

            {/* Phase 2 */}
            <div className="md:col-span-12 bg-on-background text-background border-[4px] border-on-background p-12 neo-shadow">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <span className="text-[14px] font-bold text-primary-container mb-2 block" style={{ fontFamily: "var(--font-label)" }}>PHASE 02</span>
                    <h2 className="text-[48px] md:text-[64px] font-extrabold uppercase leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>Strategy</h2>
                  </div>
                  <p className="text-[18px] md:text-[20px] leading-relaxed opacity-90" style={{ fontFamily: "var(--font-body)" }}>
                    We map out the technical blueprint. Tech stack selection isn&apos;t about what&apos;s trendy—it&apos;s about what scales. We wireframe the flow and build a roadmap that guarantees delivery.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    {["TECH STACK SELECTION", "SYSTEM ARCHITECTURE", "DEPLOYMENT ROADMAP"].map((item, i) => (
                      <span key={i} className="bg-background text-on-background border-[3px] border-primary-container px-4 py-2 text-[14px] font-bold uppercase" style={{ fontFamily: "var(--font-label)" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-square border-[8px] border-primary-container p-8 flex items-center justify-center overflow-hidden group">
                  <span className="material-symbols-outlined text-[200px] text-primary-container group-hover:rotate-90 transition-transform duration-700">schema</span>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="md:col-span-12 bg-primary-container border-[4px] border-on-background p-12 neo-shadow group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[14px] font-bold text-on-primary-container mb-2 block" style={{ fontFamily: "var(--font-label)" }}>PHASE 03</span>
                  <h2 className="text-[48px] md:text-[64px] font-black uppercase text-on-background mb-8 leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>Execution</h2>
                  <p className="text-[18px] md:text-[20px] text-on-background mb-8 leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    This is where the engine starts. High-velocity development using a component-based architecture ensures clean code that is easy to maintain and impossible to break.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <div className="bg-background border-[4px] border-on-background px-8 py-4 text-[24px] md:text-[32px] font-black neo-shadow-sm group-hover:-translate-x-2 transition-transform uppercase" style={{ fontFamily: "var(--font-display)" }}>
                      CLEAN CODE
                    </div>
                    <div className="bg-background border-[4px] border-on-background px-8 py-4 text-[24px] md:text-[32px] font-black neo-shadow-sm group-hover:translate-x-2 transition-transform uppercase" style={{ fontFamily: "var(--font-display)" }}>
                      SCALABLE
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "data_object", bg: "bg-on-background", text: "text-background" },
                    { icon: "dynamic_form", bg: "bg-background border-[4px] border-on-background neo-shadow-sm", text: "text-on-background" },
                    { icon: "hub", bg: "bg-background border-[4px] border-on-background neo-shadow-sm", text: "text-on-background" },
                    { icon: "terminal", bg: "bg-on-background", text: "text-primary-container" },
                  ].map((item, i) => (
                    <div key={i} className={`aspect-square ${item.bg} flex items-center justify-center p-4 transition-all hover:scale-105`}>
                      <span className={`material-symbols-outlined ${item.text} text-7xl`}>
                        {item.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="md:col-span-12 group bg-background border-[4px] border-on-background p-12 neo-shadow transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
                <div>
                  <span className="text-[14px] font-bold text-primary mb-2 block" style={{ fontFamily: "var(--font-label)" }}>PHASE 04</span>
                  <h2 className="text-[48px] md:text-[64px] font-extrabold uppercase leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>Optimization</h2>
                </div>
                <div className="flex gap-4">
                   {["AUTOMATED QA", "PERF TUNING"].map((tag, i) => (
                     <span key={i} className="bg-surface-container border-[3px] border-on-background px-4 py-1 text-[12px] font-black uppercase" style={{ fontFamily: "var(--font-label)" }}>{tag}</span>
                   ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 border-t-[4px] border-on-background pt-12">
                <p className="text-[18px] md:text-[20px] leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  Before launch, we break things. Stress testing and performance tuning ensure that your product can handle the load. We deploy only when every metric is in the green.
                </p>
                <div className="bg-on-background p-8 border-[4px] border-primary-container flex items-center justify-center">
                  <span className="text-background font-black text-[32px] md:text-[40px] uppercase tracking-tighter" style={{ fontFamily: "var(--font-display)" }}>ZERO_DOWNTIME</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-[20px] md:px-[64px] py-40 bg-on-background text-background text-center overflow-hidden relative border-t-[16px] border-primary-container">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 
              className="text-[64px] md:text-[120px] font-black mb-8 leading-[0.8] tracking-tighter uppercase" 
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              READY TO SCALE?
            </h2>
            <p className="text-[20px] md:text-[24px] mb-16 opacity-90 max-w-2xl mx-auto font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Don&apos;t settle for &quot;good enough.&quot; Get a product engineered for market dominance.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <Link 
                href="/contact"
                className="bg-primary-container text-on-background text-[24px] md:text-[32px] font-black px-12 py-6 border-[8px] border-background neo-shadow hover:translate-x-1 hover:translate-y-1 transition-all uppercase text-center inline-block" 
                style={{ fontFamily: "var(--font-display)" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Start Your Project
              </Link>
              <Link 
                href="/portfolio"
                className="bg-background text-on-background text-[24px] md:text-[32px] font-black px-12 py-6 border-[8px] border-background neo-shadow hover:translate-x-1 hover:translate-y-1 transition-all uppercase text-center inline-block" 
                style={{ fontFamily: "var(--font-display)" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
            <div className="font-black text-[500px] whitespace-nowrap animate-pulse">WEBYFROG WEBYFROG</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
