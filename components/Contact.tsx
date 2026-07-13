"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMailOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";

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

      <div className="absolute left-1/2 bottom-[-100px] -translate-x-1/2 -z-10 h-80 w-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12">

        <div
          ref={cardRef}
          className="mx-auto max-w-4xl rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900/40 via-zinc-900/20 to-zinc-950 glass-card p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Let&apos;s build something exceptional together.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Looking for a dedicated Software Engineer to develop scalable web applications, write clean code, and design modern user experiences? Let&apos;s collaborate to bring your ideas to life. Reach out directly.
              </p>

              <div className="flex flex-col gap-3.5 pt-2">
                <a
                  href="mailto:rifqifauzan78@gmail.com"
                  className="flex items-center gap-3 w-fit group text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-850 group-hover:border-primary transition-colors">
                    <IoMailOutline className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none">Email Me</p>
                    <span className="text-sm font-semibold">rifqifauzan78@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

           
            <div className="md:col-span-5 flex flex-col items-center justify-center md:border-l md:border-zinc-800/80 md:pl-8">
              <a
                href="mailto:rifqifauzan78@gmail.com"
                className="w-full text-center rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-6 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-95 text-md mb-4 flex items-center justify-center gap-2"
              >
                <IoChatbubbleEllipsesOutline className="h-5 w-5" />
                Send Message
              </a>
            </div>
          </div>
        </div>

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
