"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "M. FROST",
    role: "Lead Eng.",
    specialty: "System Architecture & Core",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDx7dxBxv02vEjUg59XZJbTbKlHXw2lXgBHE_riKIR5wevq_Rm35MQXB89a4b_Q61k3f3b35GZ5DaGckyI-362nGXCbb76m1wsXUopAwX6F6K4zNl4Q9qdHVgcYwe-S2BT53x41JHb7-WKx5SEXWtLEKECqgyvIzTMhg8Z_rCDFJh4OZYO9NwIMJHCkBkfV2l0xGPWGFnM_5iTi66oy6ru4Bq58QX_MYPC_53i1i9crKHmDJ0LY6gxF55-AAOaUSRjSJOvY-VpvzbBx",
  },
  {
    name: "E. VANCE",
    role: "Director",
    specialty: "Visual Identity & Motion",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAF0B1Ze16tQvm33TdoLNMYz0fwiqXvRd3145vM_HYK-85DUVDOb-PTsVxQqaWmIrn8AFk9iF5hGNx-7fHy64x1ILeVGg0jmRcO79SRpnw9ZNaYTSlY139e01CMLSjnLCJTkfc55FDphUABjGjqGo0GTXN-pP7msWbjwrkMkPba7g5r9GvqMANLtL6DSFERtMUCc8a-GhNLZ3ePNYx7WBJ7s2PxTuDnpr04Ke1XrJmkb7dmg-k5cLWrDlSw5hBKvn9z2JEZdsaN9d_V",
  },
  {
    name: "S. CHEN",
    role: "Strategist",
    specialty: "Growth & Data Analytics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCem1eUEFTKXnBEldmNZxuVlrnfNOWqKAJtDGaPjMF5oeHl3kgzYB0XnMb7yauvFhC-9ftqBWPov1xRHEEzJWd_P68Cyi0qfhHcePX1MploHLEipLHJGHU9HOUpKAWX8w914gj91rf8lx2qngq6AYAR_pVG1Lg0D5HnRvwvENHiewPvwrYTu2ILQRShyATkr2EEswRaIgGiylFWDAUzARAsOV4dHvC4cfMBWLh7vpmxVh9L2en3nanBJ85yWguOOQVKt2jrkL1QYPW6",
  },
  {
    name: "A. BLYTHE",
    role: "Architect",
    specialty: "UX / Product Logic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDefjaMnrKV9SbUe8BCb5QsmPVcto1RQ926a7eKKWOWOqfvhIhJ_V_FOBh3OtAP3wjzF9SrRYrRJmpjXsYIHQVKQBgD64fuBNe8_Qlot9PTcuwUICZbSUmG7pMTnjlcstODeRR8VF_xGukz8dZCr-UGex2ES-c4Uamg4V9wh6_8XU3i0JrLTvL6SDxicXDnGL9KI7SHZmdQCulXYOz_VlPjd5QNVLF-IhsokJYz3jSb8W6ObnZP24quA2rAc4VqF2Vf5rQ91-PLhmUa",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="w-full pt-28 bg-background">
        {/* Hero Section */}
        <section className="px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background bg-background grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span
              className="text-[14px] font-black text-primary mb-6 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-label)" }}
            >
              [EST. 2024]
            </span>
            <h1
              className="text-[64px] md:text-[120px] font-black mb-8 uppercase leading-[0.9]"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              Aggressive <br />
              <span className="bg-primary-container px-4 text-on-primary-container border-[4px] border-on-background">Functionalism</span>
            </h1>
            <p
              className="text-[20px] md:text-[24px] max-w-2xl text-on-surface-variant font-medium leading-relaxed mt-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Webyfrog is not a &quot;creative agency.&quot; We are a structural engineering firm for the digital era. We build high-performance systems for brands that value impact over aesthetics.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center">
            <div className="w-full aspect-square border-[8px] border-on-background neo-shadow overflow-hidden bg-primary-container flex items-center justify-center p-8">
              <div
                className="w-full h-full bg-cover bg-center grayscale border-[4px] border-on-background shadow-none"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* The Philosophy Section */}
        <section className="px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background bg-surface-container-lowest grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <h2
              className="text-[48px] md:text-[72px] font-black uppercase leading-none tracking-tighter"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              The Philosophy
            </h2>
            <div className="space-y-12">
              <div className="p-10 border-[4px] border-on-background bg-background neo-shadow">
                <h3
                  className="text-[14px] font-black uppercase mb-4 text-primary tracking-widest"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Engineered Precision
                </h3>
                <p
                  className="text-[18px] text-on-surface-variant leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Every pixel serves a functional purpose. If it doesn&apos;t contribute to the conversion path or user experience, it&apos;s deleted. No fluff, no filler.
                </p>
              </div>
              <div className="p-10 border-[4px] border-on-background bg-background neo-shadow">
                <h3
                  className="text-[14px] font-black uppercase mb-4 text-primary tracking-widest"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Zero Latency Mindset
                </h3>
                <p
                  className="text-[18px] text-on-surface-variant leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Speed is the ultimate luxury. Our architectures are stripped down to the metal to ensure instantaneous response times across all devices.
                </p>
              </div>
            </div>
          </div>
          <div className="h-full hidden md:block">
            <div className="sticky top-40 p-12 border-[8px] border-on-background bg-on-background neo-shadow h-[600px] overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Our Values Section (Bento Grid) */}
        <section className="px-[20px] md:px-[64px] py-32 border-b-[8px] border-on-background bg-background">
          <h2
            className="text-[48px] md:text-[72px] font-black uppercase mb-20 text-center tracking-tighter"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Core Directives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Speed", desc: "Load time is a feature. We optimize for the first millisecond.", icon: "bolt", bg: "bg-primary-container", text: "text-on-background" },
              { title: "Purity", desc: "Code is poetry when it's lean. We write clean, proprietary solutions.", icon: "filter_tilt_shift", bg: "bg-background", text: "text-on-background" },
              { title: "Impact", desc: "Design that demands attention. We don't build to blend in.", icon: "cognition", bg: "bg-on-background", text: "text-primary-container" },
            ].map((value, i) => (
              <div key={i} className={`group relative p-10 border-[6px] border-on-background ${value.bg} neo-shadow transition-all hover:translate-x-1 hover:translate-y-1 h-96 flex flex-col justify-end overflow-hidden`}>
                <span className={`material-symbols-outlined text-[120px] absolute -top-4 -right-4 opacity-10 group-hover:scale-110 transition-transform ${value.text}`}>
                  {value.icon}
                </span>
                <h3
                  className={`text-[40px] md:text-[48px] font-black uppercase leading-none mb-6 ${value.text}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value.title}
                </h3>
                <p
                  className={`text-[14px] font-black uppercase tracking-widest leading-relaxed ${value.text === 'text-on-background' ? 'text-on-surface-variant' : 'opacity-80'}`}
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The Team Section */}
        <section className="px-[20px] md:px-[64px] py-32 bg-surface-container-lowest">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12 border-b-[4px] border-on-background pb-12">
            <h2
              className="text-[48px] md:text-[72px] font-black uppercase leading-none tracking-tighter"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              The Operatives
            </h2>
            <p
              className="text-[18px] max-w-sm text-on-surface-variant uppercase font-black tracking-widest leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A tight-knit unit of developers, designers, and strategists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="border-[6px] border-on-background bg-background overflow-hidden group neo-shadow-sm hover:neo-shadow transition-all"
              >
                <div className="aspect-[3/4] bg-on-background relative overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  ></div>
                  <div className="absolute bottom-0 left-0 bg-primary-container p-3 border-t-[4px] border-r-[4px] border-on-background">
                    <span
                      className="text-[12px] font-black uppercase tracking-widest text-on-background"
                      style={{ fontFamily: "var(--font-label)" }}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4
                    className="text-[24px] md:text-[32px] font-black uppercase mb-2 leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="text-[12px] text-on-surface-variant uppercase font-bold tracking-widest"
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
        <section className="px-[20px] md:px-[64px] py-40 bg-primary-container flex flex-col items-center text-center border-t-[16px] border-on-background">
          <h2
            className="text-[64px] md:text-[96px] font-black uppercase mb-16 leading-[0.9] tracking-tighter"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
          >
            STOP SETTLING FOR <br />
            MEDIOCRE SYSTEMS.
          </h2>
          <Link
            href="/contact"
            className="bg-on-background text-background px-16 py-8 border-[8px] border-on-background neo-shadow uppercase hover:translate-x-2 hover:translate-y-2 active:translate-x-4 active:translate-y-4 transition-all text-[24px] md:text-[32px] font-black text-center inline-block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start a Project
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
