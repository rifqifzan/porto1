"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-zinc-950 pt-20 pb-12 border-t border-zinc-900/60 overflow-hidden"
    >
      {/* Glow highlight */}
      <div className="absolute left-1/2 bottom-[-100px] -translate-x-1/2 -z-10 h-80 w-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Main CTA Card */}
        <div
          ref={cardRef}
          className="mx-auto max-w-4xl rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900/40 via-zinc-900/20 to-zinc-950 glass-card p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle grid pattern overlay inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Column 1: Info (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Let&apos;s build or monitor something secure together.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Seeking a dedicated IT Support Specialist or System Engineer? I am equipped to handle network failures, optimize active databases, manage device diagnostics, and maintain mission-critical infrastructure services. Reach out directly.
              </p>

              {/* Instant contact methods */}
              <div className="flex flex-col gap-3.5 pt-2">
                <a
                  href="mailto:rifqifauzan78@gmail.com"
                  className="flex items-center gap-3 w-fit group text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-850 group-hover:border-primary transition-colors">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none">Email Me</p>
                    <span className="text-sm font-semibold">rifqifauzan78@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+6285156638177"
                  className="flex items-center gap-3 w-fit group text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-850 group-hover:border-secondary transition-colors">
                    <svg className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none">Call Me</p>
                    <span className="text-sm font-semibold">+62 851 5663 8177</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Column 2: Button link (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center md:border-l md:border-zinc-800/80 md:pl-8">
              <a
                href="mailto:rifqifauzan78@gmail.com"
                className="w-full text-center rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-6 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-95 text-md mb-4 flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Send Message
              </a>
              <p className="text-xs text-muted-foreground text-center">
                Response time: usually within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="mt-20 border-t border-zinc-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Rifqi Fauzan. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
          </div>
        </div>
      </div>
    </section>
  );
}
