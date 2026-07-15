"use client";

import React, { useEffect } from "react";
import Link from "../components/TransitionLink";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";

const teamMembers = [
  {
    name: "M. FROST",
    role: "Lead Eng.",
    specialty: "System Architecture & Core",
    image: "/team-frost.png",
  },
  {
    name: "E. VANCE",
    role: "Director",
    specialty: "Visual Identity & Motion",
    image: "/team-vance.png",
  },
  {
    name: "S. CHEN",
    role: "Strategist",
    specialty: "Growth & Data Analytics",
    image: "/team-chen.png",
  },
  {
    name: "A. BLYTHE",
    role: "Architect",
    specialty: "UX / Product Logic",
    image: "/team-blythe.png",
  },
];

export default function AboutPage() {
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

      <main className="w-full pt-24 bg-background">
        {/* Hero Section */}
        <section className="px-[16px] md:px-[64px] py-20 md:py-32 border-b-[4px] md:border-b-[8px] border-on-background bg-background grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span
              className="text-[12px] md:text-[14px] font-black text-primary mb-4 md:mb-6 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-label)" }}
            >
              [EST. 2024]
            </span>
            <h1
              className="text-fluid-hero font-black mb-6 md:mb-8 uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              <span className="block leading-[0.9]">Aggressive</span>
              <span className="inline-block mt-4 md:mt-6 bg-primary-container px-4 md:px-6 py-1.5 md:py-2 text-on-primary-container border-[3px] md:border-[4px] border-on-background leading-none">
                Functional
              </span>
            </h1>
            <p
              className="text-fluid-body text-on-surface-variant font-medium leading-relaxed mt-6 md:mt-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Webyfrog is not a &quot;creative agency.&quot; We are a structural engineering firm for the digital era. We build high-performance systems for brands that value impact over aesthetics.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center">
            <div className="w-full aspect-square border-[4px] md:border-[8px] border-on-background neo-shadow overflow-hidden bg-primary-container flex items-center justify-center p-6 md:p-8">
              <div
                className="w-full h-full bg-cover bg-center grayscale border-[3px] md:border-[4px] border-on-background shadow-none"
                style={{
                  backgroundImage: "url('/about-hero-bg.png')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* The Philosophy Section */}
        <section className="px-[16px] md:px-[64px] py-20 md:py-32 border-b-[4px] md:border-b-[8px] border-on-background bg-surface-container-lowest grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start pb-bottom-nav md:pb-0">
          <div className="space-y-12 md:space-y-16">
            <h2
              className="text-fluid-h1 font-black uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              The Philosophy
            </h2>
            <div className="space-y-8 md:space-y-12">
              <div className="p-6 md:p-10 border-[3px] md:border-[4px] border-on-background bg-background neo-shadow">
                <h3
                  className="text-[12px] md:text-[14px] font-black uppercase mb-3 md:mb-4 text-primary tracking-widest"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Engineered Precision
                </h3>
                <p
                  className="text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Every pixel serves a functional purpose. If it doesn&apos;t contribute to the conversion path or user experience, it&apos;s deleted. No fluff, no filler.
                </p>
              </div>
              <div className="p-6 md:p-10 border-[3px] md:border-[4px] border-on-background bg-background neo-shadow">
                <h3
                  className="text-[12px] md:text-[14px] font-black uppercase mb-3 md:mb-4 text-primary tracking-widest"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Zero Latency Mindset
                </h3>
                <p
                  className="text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Speed is the ultimate luxury. Our architectures are stripped down to the metal to ensure instantaneous response times across all devices.
                </p>
              </div>
            </div>
          </div>
          <div className="h-full hidden md:block">
            <div className="sticky top-40 p-8 md:p-12 border-[4px] md:border-[8px] border-on-background bg-on-background neo-shadow h-[400px] md:h-[600px] overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: "url('/about-philosophy-bg.png')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Our Values Section (Bento Grid) */}
        <section className="px-[16px] md:px-[64px] py-20 md:py-32 border-b-[4px] md:border-b-[8px] border-on-background bg-background pb-bottom-nav md:pb-0">
          <h2
            className="text-fluid-h1 font-black uppercase mb-12 md:mb-20 text-center tracking-tighter"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Core Directives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { title: "Speed", desc: "Load time is a feature. We optimize for the first millisecond.", icon: "bolt", bg: "bg-primary-container", text: "text-on-background" },
              { title: "Purity", desc: "Code is poetry when it's lean. We write clean, proprietary solutions.", icon: "filter_tilt_shift", bg: "bg-background", text: "text-on-background" },
              { title: "Impact", desc: "Design that demands attention. We don't build to blend in.", icon: "cognition", bg: "bg-on-background", text: "text-primary-container" },
            ].map((value, i) => (
              <div
                key={i}
                className={`group relative p-6 md:p-10 border-[4px] md:border-[6px] border-on-background ${value.bg} neo-shadow hover:translate-x-1 hover:translate-y-1 min-h-[280px] md:h-96 flex flex-col justify-end overflow-hidden transition-[transform,box-shadow,opacity] duration-200 ease-[var(--ease-out)] active:scale-[0.98] reveal-text`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className={`material-symbols-outlined text-[80px] md:text-[120px] absolute -top-2 md:-top-4 -right-2 md:-right-4 opacity-10 group-hover:scale-110 transition-transform duration-300 ease-[var(--ease-out)] ${value.text}`}>
                  {value.icon}
                </span>
                <h3
                  className={`text-[28px] md:text-[48px] font-black uppercase leading-none mb-4 md:mb-6 ${value.text}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value.title}
                </h3>
                <p
                  className={`text-[12px] md:text-[14px] font-black uppercase tracking-widest leading-relaxed ${value.text === 'text-on-background' ? 'text-on-surface-variant' : `${value.text} opacity-80`}`}
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The Team Section */}
        <section className="px-[16px] md:px-[64px] py-20 md:py-32 bg-surface-container-lowest pb-bottom-nav md:pb-0">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-6 md:gap-12 border-b-[3px] md:border-b-[4px] border-on-background pb-8 md:pb-12">
            <h2
              className="text-fluid-h1 font-black uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              The Operatives
            </h2>
            <p
              className="text-[16px] md:text-[18px] max-w-sm text-on-surface-variant uppercase font-black tracking-widest leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A tight-knit unit of developers, designers, and strategists.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="border-[4px] md:border-[6px] border-on-background bg-background overflow-hidden group neo-shadow-sm hover:neo-shadow transition-[transform,box-shadow,opacity] duration-150 ease-[var(--ease-out)] active:scale-[0.98] reveal-text"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="aspect-[3/4] bg-on-background relative overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[transform,filter] duration-350 ease-[var(--ease-out)]"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  ></div>
                  <div className="absolute bottom-0 left-0 bg-primary-container p-2 md:p-3 border-t-[3px] md:border-t-[4px] border-r-[3px] md:border-r-[4px] border-on-background">
                    <span
                      className="text-[9px] md:text-[12px] font-black uppercase tracking-widest text-on-background"
                      style={{ fontFamily: "var(--font-label)" }}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-8">
                  <h4
                    className="text-[18px] md:text-[32px] font-black uppercase mb-1 md:mb-2 leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="text-[9px] md:text-[12px] text-on-surface-variant uppercase font-bold tracking-widest"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-[16px] md:px-[64px] py-24 md:py-40 bg-primary-container flex flex-col items-center text-center border-t-[8px] md:border-t-[16px] border-on-background pb-bottom-nav md:pb-0">
          <h2
            className="text-fluid-h1 font-black uppercase mb-12 md:mb-16 tracking-tighter"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
          >
            STOP SETTLING FOR <br />
            MEDIOCRE SYSTEMS.
          </h2>
          <Link
            href="/contact"
            className="bg-on-background text-background px-10 md:px-16 py-6 md:py-8 border-[4px] md:border-[8px] border-on-background neo-shadow uppercase hover:translate-x-2 hover:translate-y-2 active:translate-x-4 active:translate-y-4 transition-all text-fluid-cta font-black text-center inline-block touch-target"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start a Project
          </Link>
        </section>
      </main>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
