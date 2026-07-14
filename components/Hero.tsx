"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoLanguageOutline, IoDownloadOutline } from "react-icons/io5";

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
      <div className="bg-orb absolute top-[20%] left-[10%] -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px] sm:h-96 sm:w-96" />
      <div className="bg-orb absolute bottom-[20%] right-[10%] -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[100px] sm:h-96 sm:w-96" />
      <div className="bg-orb absolute top-[50%] left-[50%] -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row sm:px-12 w-full">
        <div ref={textRef} className="flex flex-1 flex-col text-left max-w-2xl">
          <div className="animate-hero-text inline-flex items-center gap-2 rounded-full border border-border/80 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-muted-foreground w-fit mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-zinc-300">Available for Full-time Roles</span>
          </div>

          <h2 className="animate-hero-text text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            Full Stack Software Engineer
          </h2>
          <h1 className="animate-hero-text text-4xl font-extrabold tracking-tight sm:text-6xl text-white mb-6">
            Rifqi Fauzan
          </h1>

          <p className="animate-hero-text text-lg text-muted-foreground leading-relaxed mb-8">
            I&apos;m a Full Stack Software Engineer with roots in enterprise infrastructure, from network administration to managing production systems at Bank Mandiri. Years of watching software failures cascade into business-critical downtime made one thing clear, that great systems start with great code. That conviction drove me to pivot into full-stack development through RevoU&apos;s intensive bootcamp, where I built production-ready applications with TypeScript, Next.js, Nest.js, and PostgreSQL.
          </p>

          <div className="animate-hero-text grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8 border-y border-border/60 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-border">
                <IoMailOutline className="h-5 w-5 text-accent" />
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
                <IoLocationOutline className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Location</p>
                <span className="text-sm font-medium text-white">Jakarta, Indonesia</span>
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
            <a
              href="/ATS-Rifqi.pdf"
              download="Rifqi_Fauzan_CV.pdf"
              className="rounded-xl border border-border bg-zinc-900/40 hover:bg-zinc-800/40 px-6 py-3.5 text-sm font-semibold text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Download CV</span>
              <IoDownloadOutline className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center w-full max-w-md lg:max-w-none">
          <div
            ref={imageContainerRef}
            className="relative w-full aspect-square rounded-2xl p-1.5 glass-card shadow-2xl shadow-black/80 group overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

            <div className="relative w-full h-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/40">
              <img
                src="/FotoJazzz.webp"
                alt="Rifqi Fauzan"
                fetchPriority="high"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-zinc-950/75 backdrop-blur-md p-3.5 shadow-lg flex items-center justify-between transition-all duration-500 group-hover:border-primary/30 group-hover:bg-zinc-950/85">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-wide">Rifqi Fauzan</span>
                  <span className="text-[11px] text-zinc-400 font-medium font-mono uppercase tracking-wider mt-0.5">
                    Full Stack Software Engineer
                  </span>
                </div>
              </div>
            </div>

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
