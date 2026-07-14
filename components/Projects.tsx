"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  github: string;
  techStack: string[];
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "RevoHotel",
      image: "/HBS-homepage.webp",
      description: "Architected and developed RevoHotel, a modern full-stack hotel booking platform utilizing Next.js, React Server Actions, and TypeScript to deliver a high-performance, SEO-optimized user experience. Designed a relational PostgreSQL schema using Prisma ORM, utilizing Prisma to handle database writes atomically, and established secure role-based access control via Auth.js. Integrated the Midtrans Payment Gateway API for secure transactions, and engineered dynamic workflows with date-conflict resolution.",
      link: "https://hotel-booking-crack.vercel.app/",
      github: "https://github.com/rifqifzan/Hotel-Booking-Crack",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Auth.js", "Midtrans API"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="absolute right-0 top-[20%] -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute left-0 bottom-[20%] -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">
            Portfolio
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Featured Projects
          </h1>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card group relative rounded-2xl glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b border-border/50 bg-zinc-900/50">
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-450"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <IoOpenOutline className="h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl border border-border bg-zinc-900/50 hover:bg-zinc-800/50 p-3 text-white hover:scale-[1.02] active:scale-95 transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <IoLogoGithub className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
