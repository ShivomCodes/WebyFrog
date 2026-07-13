"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TransitionContext = createContext(null);

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
}

export default function TransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, setIsPending] = useState(false);
  const containerRef = useRef(null);
  const columnsRef = useRef([]);
  const loaderRef = useRef(null);
  const contentRef = useRef(null);

  // Keep track of the current path to detect changes
  const prevPathnameRef = useRef(pathname);

  // Initialize columns array
  columnsRef.current = [];
  const addToRefs = (el) => {
    if (el && !columnsRef.current.includes(el)) {
      columnsRef.current.push(el);
    }
  };

  // Exit Animation (Triggered before route change)
  const navigate = (href) => {
    if (pathname === href) return;
    setIsPending(true);

    const tl = gsap.timeline({
      onComplete: () => {
        // Change route when exit animation is done
        router.push(href);
      },
    });

    // Make overlay interactive during transition
    gsap.set(containerRef.current, { pointerEvents: "all" });

    // Animate content scaling down and fading out slightly
    tl.to(contentRef.current, {
      opacity: 0.3,
      y: -20,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // Stagger slide down the vertical panels
    tl.to(
      columnsRef.current,
      {
        scaleY: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power4.inOut",
        transformOrigin: "top",
      },
      "<0.1"
    );

    // Show the brutalist loader
    tl.to(
      loaderRef.current,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    );
  };

  // Entrance Animation (Triggered when pathname changes)
  useEffect(() => {
    // If the path changed or we completed a transition
    if (prevPathnameRef.current !== pathname || isPending) {
      prevPathnameRef.current = pathname;

      const tl = gsap.timeline({
        onComplete: () => {
          setIsPending(false);
          gsap.set(containerRef.current, { pointerEvents: "none" });
        },
      });

      // Hide loader
      tl.to(loaderRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.3,
        ease: "power3.in",
      });

      // Stagger slide down/out the panels
      tl.to(
        columnsRef.current,
        {
          scaleY: 0,
          duration: 0.6,
          stagger: {
            each: 0.05,
            from: "end", // Slide out in reverse order
          },
          ease: "power4.inOut",
          transformOrigin: "bottom",
        },
        "-=0.1"
      );

      // Animate new page content in
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all", // Clear GSAP styles so layout behaves normally
        },
        "-=0.4"
      );
    }
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate, isPending }}>
      {/* Page Content Wrapper */}
      <div ref={contentRef} className="min-h-screen flex flex-col w-full">
        {children}
      </div>

      {/* Barba-like Transition Overlay */}
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-[99999] flex flex-col md:flex-row"
      >
        {/* 5 alternating brutalist columns */}
        <div
          ref={addToRefs}
          className="flex-1 bg-on-background border-r-[2px] md:border-r-[4px] md:border-b-0 border-b-[2px] border-primary-container transform scale-y-0"
        />
        <div
          ref={addToRefs}
          className="flex-1 bg-primary border-r-[2px] md:border-r-[4px] md:border-b-0 border-b-[2px] border-on-background transform scale-y-0"
        />
        <div
          ref={addToRefs}
          className="flex-1 bg-on-background border-r-[2px] md:border-r-[4px] md:border-b-0 border-b-[2px] border-primary-container transform scale-y-0"
        />
        <div
          ref={addToRefs}
          className="flex-1 bg-primary border-r-[2px] md:border-r-[4px] md:border-b-0 border-b-[2px] border-on-background transform scale-y-0"
        />
        <div
          ref={addToRefs}
          className="flex-1 bg-on-background transform scale-y-0"
        />

        {/* Loader Text Box */}
        <div
          ref={loaderRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 translate-y-4 pointer-events-none z-10"
        >
          <div className="bg-on-background border-[6px] border-primary-fixed px-10 py-6 neo-shadow text-center max-w-sm">
            <p className="font-mono text-primary-fixed text-[20px] md:text-[28px] font-black uppercase tracking-tighter animate-pulse">
              [ WEBYFROG // EXE ]
            </p>
            <p className="font-mono text-surface-dim text-[12px] md:text-[14px] uppercase mt-2 tracking-widest">
              Configuring interface...
            </p>
          </div>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}
