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
      role: "IT Support Technician",
      company: "PT Megariamas Sentosa",
      period: "Jul 2023 - Present",
      description: [
        "Diagnosed and resolved complex hardware, software, and network issues across corporate environments, consistently minimizing technical downtime and maintaining end-user productivity.",
        "Established structured maintenance routines for corporate laptops and desktop PCs, reducing recurring technical incidents through proactive servicing and system configuration.",
        "Administered and maintained corporate network infrastructure, including switches, routers, and access points to ensuring stable and secure connectivity across the organization's operational environment.",
        "Overhauled IT inventory documentation system to improve asset lifecycle visibility and streamline software deployment tracking across the organization."
      ],
      skillsLearned: ["Hardware & Network", "System Configuration", "Network Infrastructure", "IT Asset Lifecycle"]
    },
    {
      role: "System Engineer",
      company: "PT Berca Hardayaperkasa",
      period: "Jan 2022 - Dec 2022",
      description: [
        "Maintained high availability of core enterprise systems within Bank Mandiri's production environment by continuously monitoring real-time performance metrics and resolving degradation before user impact occurred.",
        "Ensured business continuity of Bank Mandiri's automated robot systems through rigorous operational maintenance and rapid troubleshooting of critical failures.",
        "Strengthened incident response workflows by leading timely escalation of critical infrastructure issues to specialized engineering teams, minimizing operational disruption across production services.",
        "Delivered structured performance analytical reports that provided engineering and management teams with actionable visibility into system health trends."
      ],
      skillsLearned: ["System Monitoring", "Incident Response", "Automation Systems", "Performance Analytics"]
    },
    {
      role: "IT Support",
      company: "PT Swalayan Sukses Abadi (The Foodhall)",
      period: "Jul 2020 - Jun 2021",
      description: [
        "Maintained uninterrupted IT operations across 2 supermarket branches by providing end-to-end infrastructure support covering networks, hardware, software, CCTV, and digital scales.",
        "Resolved multi-site network and hardware failures through systematic troubleshooting, ensuring minimal downtime across store operations.",
        "Strengthened data integrity by designing and implementing automated database backup strategies, eliminating the risk of transactional data loss across both branches.",
        "Sustained system performance during high-load stock inventory audits by proactively identifying and resolving network bottlenecks, ensuring seamless data collection continuity."
      ],
      skillsLearned: ["Infrastructure Support", "Multi-site Networking", "Database Backups", "Troubleshooting"]
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
