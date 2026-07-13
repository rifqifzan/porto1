"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkExperience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skillsLearned: string[];
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const experiences: WorkExperience[] = [
    {
      role: "IT Support",
      company: "PT Megariamas Sentosa",
      period: "July 2023 - Present",
      description: [
        "Managed day-to-day enterprise hardware and software troubleshooting for terminal users and corporate systems.",
        "Serviced and maintained laptops, desktop PCs, workstation hardware, and critical peripherals.",
        "Maintained structured and up-to-date IT inventory databases, software licenses, and equipment tracking documentation."
      ],
      skillsLearned: ["Hardware Diagnostic", "Software Configuration", "Asset Management", "User Service Operations"]
    },
    {
      role: "System Engineer",
      company: "PT Berca Hardayaperkasa",
      period: "Jan 2022 - Dec 2022",
      description: [
        "Monitored server and infrastructure system performance actively at Bank Mandiri (one of the largest financial institutions in Indonesia).",
        "Reported status reviews and critical system performance analytics directly to the Board of Directors.",
        "Maintained and updated the automated robotic systems operating across Bank Mandiri's production environment."
      ],
      skillsLearned: ["Enterprise Monitoring", "Robotics System Maintenance", "Executive Reporting", "Linux & Shell Scripts"]
    },
    {
      role: "IT Support",
      company: "PT Swalayan Sukses Abadi (Foodhall)",
      period: "July 2020 - June 2021",
      description: [
        "Provided full-stack IT infrastructure support and system maintenance for two major Foodhall supermarket outlets.",
        "Troubleshooted computer hardware, corporate software client tools, internal local networks, CCTV systems, and smart digital scales.",
        "Maintained, backup configured, and managed branch servers and local databases (Oracle & Microsoft SQL Server)."
      ],
      skillsLearned: ["Network Maintenance", "Database Backups", "CCTV Infrastructure", "POS & Scales Tuning", "SQL Server & Oracle"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Glow fill animation for the timeline vertical line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 35%",
            scrub: true,
          },
        }
      );

      // Staggered reveal for timeline cards
      gsap.utils.toArray<HTMLElement>(".timeline-card-wrapper").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
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
    <section id="experience" ref={containerRef} className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="absolute right-0 top-[30%] -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />
      <div className="absolute left-0 bottom-[10%] -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">
            Career Journey
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Professional Experience
          </h1>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-zinc-900 md:left-1/2 md:-translate-x-1/2" />
          <div
            ref={lineRef}
            className="absolute left-4 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-1/2 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="timeline-card-wrapper flex flex-col md:flex-row relative items-stretch"
                >
                  <div className="absolute left-4 top-6 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-zinc-950 border-2 border-primary md:left-1/2">
                    <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:order-last md:pl-12"}`}>
                    {isEven && (
                      <div className="rounded-2xl glass-card p-6 md:p-8 hover:border-primary/60 transition-all duration-300 shadow-xl group">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-accent mb-4">
                          {exp.company}
                        </p>
                        <ul className="space-y-2.5 text-sm text-muted-foreground list-none md:list-none pl-0">
                          {exp.description.map((desc, dIdx) => (
                            <li key={dIdx} className="flex gap-2 justify-start md:justify-end">
                              <span className="hidden md:inline text-muted-foreground">{desc}</span>
                              <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0 md:order-last md:ml-2" />
                              <span className="inline md:hidden text-left">{desc}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-2 justify-start md:justify-end">
                          {exp.skillsLearned.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="rounded-lg bg-zinc-900 border border-border/80 px-2.5 py-1 text-xs text-zinc-300 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${!isEven ? "md:pl-12 text-left" : "md:order-first md:pr-12"}`}>
                    {!isEven && (
                      <div className="rounded-2xl glass-card p-6 md:p-8 hover:border-secondary/60 transition-all duration-300 shadow-xl group">
                        <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary mb-3">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-accent mb-4">
                          {exp.company}
                        </p>
                        <ul className="space-y-2.5 text-sm text-muted-foreground list-none pl-0">
                          {exp.description.map((desc, dIdx) => (
                            <li key={dIdx} className="flex gap-2 items-start text-left">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-2 justify-start">
                          {exp.skillsLearned.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="rounded-lg bg-zinc-900 border border-border/80 px-2.5 py-1 text-xs text-zinc-300 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
