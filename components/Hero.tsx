"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a stagger animation for text elements
      gsap.fromTo(
        ".animate-hero-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.3,
        }
      );

      // Slide and fade in the image container
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.75)",
          delay: 0.8,
        }
      );

      // Slow floating animation for background decorative orbs
      gsap.to(".bg-orb", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-grid-pattern pt-24 pb-16"
    >
      {/* Decorative Glow Orbs */}
      <div className="bg-orb absolute top-[20%] left-[10%] -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px] sm:h-96 sm:w-96" />
      <div className="bg-orb absolute bottom-[20%] right-[10%] -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[100px] sm:h-96 sm:w-96" />
      <div className="bg-orb absolute top-[50%] left-[50%] -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row sm:px-12 w-full">
        {/* Left: Text & Bio */}
        <div ref={textRef} className="flex flex-1 flex-col text-left max-w-2xl">
          <div className="animate-hero-text inline-flex items-center gap-2 rounded-full border border-border/80 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-muted-foreground w-fit mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-zinc-300">Available for Full-time Roles</span>
          </div>

          <h2 className="animate-hero-text text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            System Engineer &amp; IT Support
          </h2>
          <h1 className="animate-hero-text text-4xl font-extrabold tracking-tight sm:text-6xl text-white mb-6">
            Rifqi Fauzan
          </h1>

          <p className="animate-hero-text text-lg text-muted-foreground leading-relaxed mb-8">
            An experienced IT professional highly capable of resolving complex network issues, implementing new software, installing server hardware, managing user troubleshooting, and maintaining high-availability enterprise services under pressure in fast-paced environments.
          </p>

          {/* Contact Details Grid */}
          <div className="animate-hero-text grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8 border-y border-border/60 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-border">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Email</p>
                <a href="mailto:rifqifauzan78@gmail.com" className="text-sm font-medium text-white hover:text-primary transition-colors">
                  rifqifauzan78@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-border">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Phone</p>
                <a href="tel:+6285156638177" className="text-sm font-medium text-white hover:text-primary transition-colors">
                  +62 851 5663 8177
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-border">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Location</p>
                <span className="text-sm font-medium text-white">Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-border">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2 2 0 002-2V7.5C19 6.12 17.88 5 16.5 5c-.02 0-.03 0-.05.01a1 1 0 00-.7-.29h-.75a1 1 0 01-1-1v-.384" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Languages</p>
                <span className="text-sm font-medium text-white">Indonesian, English</span>
              </div>
            </div>
          </div>

          <div className="animate-hero-text flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="rounded-xl border border-border bg-zinc-900/40 hover:bg-zinc-800/40 px-6 py-3.5 text-sm font-semibold text-white hover:scale-105 active:scale-95 transition-all duration-300"
            >
              View Work History
            </a>
          </div>
        </div>

        {/* Right: Premium Profile Image Card */}
        <div className="flex flex-1 items-center justify-center w-full max-w-md lg:max-w-none">
          <div
            ref={imageContainerRef}
            className="relative w-full aspect-square rounded-2xl p-1.5 glass-card shadow-2xl shadow-black/80 group overflow-hidden"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

            {/* Inner Image Container */}
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/40">
              <img
                src="/FotoJazzz.webp"
                alt="Rifqi Fauzan"
                fetchPriority="high"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
              />

              {/* Sleek Floating Status Card/Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-zinc-950/75 backdrop-blur-md p-3.5 shadow-lg flex items-center justify-between transition-all duration-500 group-hover:border-primary/30 group-hover:bg-zinc-950/85">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-wide">Rifqi Fauzan</span>
                  <span className="text-[11px] text-zinc-400 font-medium font-mono uppercase tracking-wider mt-0.5">
                    System Engineer &amp; IT Support
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-950/50 border border-emerald-900/40 rounded-full px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Interactive Corner Accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-zinc-700/60 rounded-tl transition-colors duration-300 group-hover:border-primary/60" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-zinc-700/60 rounded-tr transition-colors duration-300 group-hover:border-primary/60" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-zinc-700/60 rounded-bl transition-colors duration-300 group-hover:border-secondary/60" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-zinc-700/60 rounded-br transition-colors duration-300 group-hover:border-secondary/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
