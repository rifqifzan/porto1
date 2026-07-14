"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoSchoolOutline, IoPeopleOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  period: string;
  details?: string;
}

interface OrganizationItem {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export default function EducationAndOrganizations() {
  const containerRef = useRef<HTMLDivElement>(null);

  const bootcamps: EducationItem[] = [
    {
      degree: "Full Stack Software Engineering",
      major: "Learning Bootcamp",
      institution: "RevoU",
      period: "Jun 2025 - Jan 2026",
      details: "An intensive full-stack development program focusing on production-ready applications. Built projects using TypeScript, Next.js, Nest.js, and PostgreSQL. Final Project: RevoHotel (Hotel Booking Website)."
    }
  ];

  const degrees: EducationItem[] = [
    {
      degree: "Bachelor Degree of Computer System",
      major: "Computer Systems Engineering",
      institution: "Gunadarma University",
      period: "Aug 2014 - Jul 2019",
      details: "Graduated with a GPA of 3.38 / 4.00. Thesis: Design of IoT Based Excavator Robot Prototype Using the Raspberry Pi 3 B and Raspberry Pi Camera Module."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal education blocks
      gsap.fromTo(
        ".edu-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".edu-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger reveal degree blocks
      gsap.fromTo(
        ".deg-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".deg-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={containerRef} className="relative bg-zinc-950 py-24 sm:py-32 border-t border-zinc-900/60">
      <div className="absolute right-[10%] top-[10%] -z-10 h-72 w-72 rounded-full bg-secondary/5 blur-[90px]" />
      <div className="absolute left-[10%] bottom-[10%] -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[90px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-3">
            Academic Background
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Education
          </h1>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-secondary to-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="edu-container flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                  <IoSchoolOutline className="h-5 w-5 text-secondary" />
                </div>
                Bootcamps &amp; Specializations
              </h3>
              <p className="text-sm text-muted-foreground">
                Intensive vocational programs and software engineering Bootcamps.
              </p>
            </div>

            <div className="space-y-6">
              {bootcamps.map((edu, idx) => (
                <div
                  key={idx}
                  className="edu-item rounded-2xl border border-zinc-850 bg-zinc-900/40 glass-card p-6 md:p-8 hover:border-secondary/40 transition-all duration-300 relative group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-accent">{edu.major}</p>
                    </div>
                    <span className="rounded-full bg-zinc-950 border border-zinc-800 px-3.5 py-1 text-xs font-semibold text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-zinc-300 mb-3">{edu.institution}</h5>
                  {edu.details && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="deg-container flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                  <IoSchoolOutline className="h-5 w-5 text-primary" />
                </div>
                University Education
              </h3>
              <p className="text-sm text-muted-foreground">
                Formal higher education degrees and academic credentials.
              </p>
            </div>

            <div className="space-y-6">
              {degrees.map((org, idx) => (
                <div
                  key={idx}
                  className="deg-item rounded-2xl border border-zinc-850 bg-zinc-900/40 glass-card p-6 md:p-8 hover:border-primary/40 transition-all duration-300 relative group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {org.degree}
                      </h4>
                      <p className="text-sm font-semibold text-accent">{org.major}</p>
                    </div>
                    <span className="rounded-full bg-zinc-950 border border-zinc-800 px-3.5 py-1 text-xs font-semibold text-muted-foreground">
                      {org.period}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-zinc-300 mb-3">{org.institution}</h5>
                  {org.details && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {org.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
