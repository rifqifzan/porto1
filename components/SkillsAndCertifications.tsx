"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillGroup {
  category: string;
  description: string;
  items: string[];
  color: string;
  icon: React.ReactNode;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
  details?: string;
}

export default function SkillsAndCertifications() {
  const containerRef = useRef<HTMLDivElement>(null);

  const skillGroups: SkillGroup[] = [
    {
      category: "Network Administration",
      description: "LAN/WAN routing, switching, and configuration architectures.",
      items: ["Computer Networking", "MikroTik Routing", "Cisco CLI", "VRouter / Firewall Setup"],
      color: "border-primary hover:shadow-primary/10",
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      )
    },
    {
      category: "Databases & Storage",
      description: "Structured query formulation, administration, and secure backup routines.",
      items: ["Oracle Database", "Microsoft SQL Server", "Relational Database Management", "Database Administration"],
      color: "border-secondary hover:shadow-secondary/10",
      icon: (
        <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      category: "Systems & Diagnostics",
      description: "Hypervisor virtualization setups, bare-metal hardware and corporate software troubleshooting.",
      items: ["VMware ESXi", "Virtualization & Hypervisors", "Hardware Servicing", "Operating Systems Setup", "System Maintenance"],
      color: "border-accent hover:shadow-accent/10",
      icon: (
        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  const certifications: Certification[] = [
    {
      title: "CCNA Routing and Switching",
      issuer: "Netcampus",
      year: "2019",
      details: "Cisco Certified Network Associate routing policies & CLI controls"
    },
    {
      title: "MTCNA (MikroTik Certified Network Associate)",
      issuer: "MikroTik",
      year: "2015",
      details: "MikroTik RouterOS setups, bridging, queueing & routing controls"
    },
    {
      title: "Introduction to Fiber Optic Cabling",
      issuer: "Netcampus",
      year: "2019",
      details: "Splicing, measuring link losses, and fiber distribution principles"
    },
    {
      title: "Database Fundamentals",
      issuer: "Microsoft",
      year: "2017",
      details: "Core relational structures, SQL syntax, security configurations"
    },
    {
      title: "Introduction to Oracle Report Developer",
      issuer: "Oracle",
      year: "2018",
      details: "Enterprise reporting structures, PL/SQL data fetching modules"
    },
    {
      title: "TOEFL ITP Certificate (Score: 483)",
      issuer: "Lembaga Bahasa / ETS",
      year: "2015",
      details: "Professional working English proficiency credentials"
    },
    {
      title: "English Course (High Intermediate Level)",
      issuer: "LBPP LIA",
      year: "2013",
      details: "Advanced conversational and technical syntax training"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate skill cards
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".skills-grid-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger animate certs cards
      gsap.fromTo(
        ".cert-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".certs-grid-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="relative bg-zinc-950 py-24 sm:py-32 border-t border-zinc-900/60">
      {/* Decorative Blur Spheres */}
      <div className="absolute left-10 top-[20%] -z-10 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute right-10 bottom-[20%] -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
            Competencies &amp; Credentials
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Skills &amp; Certifications
          </h1>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-primary" />
        </div>

        {/* Section Grid: Skills Hub and Certifications List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Skills Columns (5 columns on large screen) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-primary" />
                Technical Competencies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Core technologies, database engines, operating architectures, and hardware diagnostics compiled throughout engineering posts.
              </p>
            </div>

            <div className="skills-grid-container space-y-6">
              {skillGroups.map((group, idx) => (
                <div
                  key={idx}
                  className={`skill-card rounded-2xl border bg-zinc-900/30 glass-card p-6 transition-all duration-300 hover:scale-[1.02] shadow-md ${group.color}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800">
                      {group.icon}
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-white">{group.category}</h4>
                      <p className="text-[11px] text-muted-foreground">{group.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-full bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-300 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications Cards (7 columns on large screen) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-accent" />
                Professional Credentials
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vendor certifications and training validating network management, optical transmission, query building, and english capacities.
              </p>
            </div>

            <div className="certs-grid-container grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="cert-card rounded-xl border border-zinc-850 bg-zinc-900/40 glass-card p-5 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="rounded-md bg-zinc-950 border border-zinc-800 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                        {cert.year}
                      </span>
                      <svg className="h-5 w-5 text-zinc-650" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708-.523H4.5a2 2 0 00-2 2v1.07c0 .35.186.671.491.846L5 8.2v1.3a2 2 0 00.586 1.414l2.121 2.121a2 2 0 001.414.586h1.758a2 2 0 001.414-.586l2.121-2.121A2 2 0 0015 9.5V8.2l2.009-1.352c.305-.175.491-.496.491-.846V4.932a2 2 0 00-2-2h-1.059a.75.75 0 00-.708.523l-.337 1.012H6.604l-.337-1.012zm1.656 4.045h4.154l-.454 1.362a.5.5 0 01-.474.338H8.91a.5.5 0 01-.474-.338L7.923 7.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-semibold mb-2">
                      Issued by: {cert.issuer}
                    </p>
                  </div>
                  {cert.details && (
                    <p className="text-[11px] text-muted-foreground/80 mt-2 border-t border-zinc-900/60 pt-2 font-mono">
                      {cert.details}
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
