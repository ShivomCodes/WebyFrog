"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactBrief } from "../actions/contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";
import { siteConfig } from "../../config";

function BriefForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formState, setFormState] = useState({ name: "", email: "", scope: "", mission: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success
  const [consoleLogs, setConsoleLogs] = useState([]);

  // Map URL service parameter to select option
  useEffect(() => {
    if (serviceParam) {
      let initialScope = "";
      switch (serviceParam.toLowerCase()) {
        case "web":
          initialScope = "FULL-STACK DEVELOPMENT";
          break;
        case "mobile":
          initialScope = "MOBILE APP DEVELOPMENT";
          break;
        case "ai":
          initialScope = "AI SYSTEMS ARCHITECTURE";
          break;
        case "automations":
          initialScope = "AI AUTOMATIONS & ROBOTICS";
          break;
        case "design":
          initialScope = "PRODUCT & UI/UX DESIGN";
          break;
        case "schedule":
          initialScope = "ON-GOING PARTNERSHIP";
          break;
        case "quote":
          initialScope = "FULL-STACK DEVELOPMENT";
          break;
        default:
          initialScope = "";
      }
      setFormState((prev) => ({ ...prev, scope: initialScope }));
    }
  }, [serviceParam]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.scope || !formState.mission) {
      alert("PLEASE COMPLETE ALL DATA FIELDS BEFORE DEPLOYMENT.");
      return;
    }

    setStatus("submitting");
    setConsoleLogs([]);

    const result = await submitContactBrief(formState);
    if (!result.success) {
      alert("ERROR: " + (result.error || "Deployment failed."));
      setStatus("idle");
      return;
    }

    const logs = [
      "INITIALIZING SECURE BROADCAST PROTOCOL...",
      `ESTABLISHING HANDSHAKE WITH client: ${formState.name.toUpperCase()}...`,
      "ROUTING COMMS ENCRYPTION KEYS...",
      "UPLOADING ENCRYPTED BRIEF PACKETS...",
      `CLASSIFYING MISSION TYPE: ${formState.scope}...`,
      "CALIBRATING NEURAL ALIGNMENT INDEX...",
      "BROADCAST DEPLOYED SUCCESSFULLY. SECURE CONNECTION LOCKED.",
      "SLOT RESERVED. ANTIGRAVITY AGENT NOTIFIED."
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setConsoleLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setTimeout(() => {
            setStatus("success");
          }, 800);
        }
      }, index * 600);
    });
  };

  if (status === "submitting") {
    return (
      <div className="bg-on-background text-primary-fixed border-[3px] md:border-[4px] border-on-background p-6 md:p-12 neo-shadow h-full min-h-[400px] md:min-h-[500px] flex flex-col justify-between" style={{ fontFamily: "var(--font-body)" }}>
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 border-b-2 border-primary-container/30 pb-3 md:pb-4">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary-fixed animate-ping"></span>
            <span className="font-black text-primary-container text-[12px] md:text-[14px]">COMMS CHANNEL LIVE RUN</span>
          </div>
          <div className="space-y-2 text-xs md:text-base leading-relaxed max-h-[300px] md:max-h-[350px] overflow-y-auto">
            {consoleLogs.map((log, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-primary-container font-black">&gt;</span>
                <span>{log}</span>
              </div>
            ))}
            <span className="inline-block w-2 h-4 md:w-2.5 md:h-5 bg-primary-fixed animate-pulse ml-1 align-middle"></span>
          </div>
        </div>
        <div className="border-t border-primary-container/30 pt-4 md:pt-6 text-[10px] md:text-[12px] uppercase opacity-60 text-right">
          SECURITY SYSTEM ACTIVE
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="bg-primary-container text-on-primary-container border-[3px] md:border-[4px] border-on-background p-6 md:p-12 neo-shadow h-full min-h-[400px] md:min-h-[500px] flex flex-col justify-between text-center" style={{ fontFamily: "var(--font-body)" }}>
        <div></div>
        <div className="space-y-4 md:space-y-6">
          <span className="material-symbols-outlined text-[60px] md:text-[80px] text-on-background block animate-bounce">
            verified
          </span>
          <h2 className="text-[24px] md:text-[40px] font-black uppercase text-on-background" style={{ fontFamily: "var(--font-display)" }}>
            Brief Deployed!
          </h2>
          <p className="text-[16px] md:text-[18px] font-bold leading-relaxed max-w-md mx-auto text-on-background">
            Secure transmission completed. An operative will contact you at <span className="underline">{formState.email}</span> within 24 hours.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormState({ name: "", email: "", scope: "", mission: "" });
          }}
          className="bg-background text-on-background border-[3px] md:border-[4px] border-on-background px-6 md:px-8 py-3 md:py-4 font-black uppercase text-[12px] md:text-[14px] hard-pop mx-auto max-w-xs mt-6 md:mt-8 touch-target"
          style={{ fontFamily: "var(--font-label)" }}
        >
          SEND ANOTHER BRIEF
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background border-[3px] md:border-[4px] border-on-background p-6 md:p-12 neo-shadow h-full">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12 border-b-[3px] md:border-b-[4px] border-on-background pb-4 md:pb-6">
        <span className="material-symbols-outlined text-[32px] md:text-4xl text-primary font-black">edit_note</span>
        <h2
          className="text-[28px] md:text-[40px] font-black uppercase leading-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Brief
        </h2>
      </div>
      <form className="space-y-6 md:space-y-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-3 md:space-y-4">
            <label
              className="text-[12px] md:text-[14px] font-black uppercase block tracking-widest text-on-surface-variant"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Name / Organization
            </label>
            <input
              className="w-full bg-surface-container-lowest border-[3px] md:border-[4px] border-on-background p-4 md:p-5 text-[16px] focus:bg-primary-container/10 focus:outline-none transition-colors"
              placeholder="IDENTITY REQUIRED"
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              style={{ fontFamily: "var(--font-body)" }}
            />
          </div>
          <div className="space-y-3 md:space-y-4">
            <label
              className="text-[12px] md:text-[14px] font-black uppercase block tracking-widest text-on-surface-variant"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Email Address
            </label>
            <input
              className="w-full bg-surface-container-lowest border-[3px] md:border-[4px] border-on-background p-4 md:p-5 text-[16px] focus:bg-primary-container/10 focus:outline-none transition-colors"
              placeholder="COMMS CHANNEL"
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              style={{ fontFamily: "var(--font-body)" }}
            />
          </div>
        </div>
        <div className="space-y-3 md:space-y-4">
          <label
            className="text-[12px] md:text-[14px] font-black uppercase block tracking-widest text-on-surface-variant"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Project Scope
          </label>
          <select
            className="w-full bg-surface-container-lowest border-[3px] md:border-[4px] border-on-background p-4 md:p-5 text-[16px] appearance-none focus:bg-primary-container/10 focus:outline-none transition-colors touch-target"
            value={formState.scope}
            onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
            required
            style={{ fontFamily: "var(--font-body)" }}
          >
            <option value="">SELECT CLASSIFICATION</option>
            <option value="FULL-STACK DEVELOPMENT">FULL-STACK DEVELOPMENT</option>
            <option value="MOBILE APP DEVELOPMENT">MOBILE APP DEVELOPMENT</option>
            <option value="AI SYSTEMS ARCHITECTURE">AI SYSTEMS ARCHITECTURE</option>
            <option value="AI AUTOMATIONS & ROBOTICS">AI AUTOMATIONS & ROBOTICS</option>
            <option value="PRODUCT & UI/UX DESIGN">PRODUCT & UI/UX DESIGN</option>
            <option value="ON-GOING PARTNERSHIP">ON-GOING PARTNERSHIP</option>
          </select>
        </div>
        <div className="space-y-3 md:space-y-4">
          <label
            className="text-[12px] md:text-[14px] font-black uppercase block tracking-widest text-on-surface-variant"
            style={{ fontFamily: "var(--font-label)" }}
          >
            The Mission
          </label>
          <textarea
            className="w-full bg-surface-container-lowest border-[3px] md:border-[4px] border-on-background p-4 md:p-5 text-[16px] focus:bg-primary-container/10 focus:outline-none transition-colors resize-none"
            placeholder="DESCRIBE THE TARGET OBJECTIVES..."
            rows={5}
            required
            value={formState.mission}
            onChange={(e) => setFormState({ ...formState, mission: e.target.value })}
            style={{ fontFamily: "var(--font-body)" }}
          ></textarea>
        </div>
        <button
          className="w-full bg-primary-container text-on-primary-container text-fluid-cta font-black uppercase border-[3px] md:border-[4px] border-on-background py-6 md:py-8 hard-pop flex justify-center items-center gap-4 md:gap-6 group transition-all touch-target"
          type="submit"
          style={{ fontFamily: "var(--font-display)" }}
        >
          DEPLOY MESSAGE
          <span className="material-symbols-outlined text-[28px] md:text-4xl transition-transform group-hover:translate-x-4">
            arrow_forward
          </span>
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="px-[16px] md:px-[64px] py-16 md:py-32 max-w-7xl mx-auto pt-28 bg-background min-h-dvh">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 border-b-[4px] md:border-b-[8px] border-on-background pb-12 md:pb-16">
            <div className="max-w-3xl">
              <span
                className="text-[12px] md:text-[14px] font-black bg-primary-container text-on-primary-container border-2 border-on-background px-3 md:px-4 py-1 mb-4 md:mb-6 inline-block uppercase"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Comms Channel Open
              </span>
              <h1
                className="text-fluid-hero font-black leading-[0.9] uppercase mb-6 md:mb-8 tracking-tighter"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
              >
                INITIATE PROJECT PROTOCOL
              </h1>
              <p
                className="text-fluid-body text-on-surface-variant max-w-xl font-medium leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Deploy your vision into reality. We bridge the gap between architectural code and high-performance aesthetics.
              </p>
            </div>
            <div className="hidden lg:block relative group">
              <span className="material-symbols-outlined text-[160px] text-primary-container leading-none group-hover:rotate-12 transition-transform duration-500">
                terminal
              </span>
              <div className="absolute -top-4 -right-4 bg-on-background text-background px-3 py-1 font-black text-sm" style={{ fontFamily: "var(--font-label)" }}>CMD+N</div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-[32px]">
          {/* Left Column: Form (Wrapped in Suspense) */}
          <div className="lg:col-span-7">
            <Suspense fallback={
              <div className="bg-background border-[3px] md:border-[4px] border-on-background p-8 md:p-12 neo-shadow h-full flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                <div className="text-center font-black uppercase text-lg md:text-xl text-primary animate-pulse" style={{ fontFamily: "var(--font-label)" }}>
                  INITIALIZING SECURE TERMINAL...
                </div>
              </div>
            }>
              <BriefForm />
            </Suspense>
          </div>

          {/* Right Column: Stats & Details */}
          <div className="lg:col-span-5 space-y-6 md:space-y-[32px]">
            {/* System Status */}
            <div className="bg-on-background text-primary-fixed border-[3px] md:border-[4px] border-on-background p-6 md:p-10 neo-shadow">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 border-b-2 border-primary-container/30 pb-3 md:pb-4">
                <span className="material-symbols-outlined text-primary-container text-[20px] md:text-[24px]">monitoring</span>
                <h3
                  className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Project Capacity
                </h3>
              </div>
              <div className="space-y-5 md:space-y-8" style={{ fontFamily: "var(--font-label)" }}>
                {[
                  { label: "Response Time", value: "24H" },
                  { label: "Open Slots", value: "02" },
                  { label: "Next Onboarding", value: "FEB 2025" },
                  { label: "Uptime", value: "99.9%" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center group"
                  >
                    <span className="text-surface-dim uppercase text-[10px] md:text-[12px] font-bold group-hover:text-primary-fixed transition-colors">{stat.label}</span>
                    <span className="terminal-glow font-black text-primary-container text-[14px] md:text-[16px]">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Comms Card */}
            <div className="bg-surface-container text-on-background border-[3px] md:border-[4px] border-on-background p-6 md:p-10 neo-shadow">
              <h3
                className="text-[24px] md:text-[32px] font-black uppercase mb-8 md:mb-10 leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Direct Comms
              </h3>
              <div className="space-y-6 md:space-y-10">
                <div className="group">
                  <span
                    className="text-[10px] md:text-[12px] font-black block uppercase tracking-widest opacity-50 mb-1.5 md:mb-2"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    Secure Email
                  </span>
                  <a
                    className="text-[18px] md:text-[24px] font-black hover:text-primary transition-all break-all"
                    href={`mailto:${siteConfig.contact.email}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <span
                    className="text-[10px] md:text-[12px] font-black block uppercase tracking-widest opacity-50 mb-1.5 md:mb-2"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    HQ Base
                  </span>
                  <p
                    className="text-[18px] md:text-[20px] uppercase font-black"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {siteConfig.contact.hqBase}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
