"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoGlobeOutline, IoServerOutline, IoHardwareChipOutline, IoRibbonOutline } from "react-icons/io5";

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
      icon: <IoGlobeOutline className="h-6 w-6 text-primary" />
    },
    {
      category: "Databases & Storage",
      description: "Structured query formulation, administration, and secure backup routines.",
      items: ["Oracle Database", "Microsoft SQL Server", "Relational Database Management", "Database Administration"],
      color: "border-secondary hover:shadow-secondary/10",
      icon: <IoServerOutline className="h-6 w-6 text-secondary" />
    },
    {
      category: "Systems & Diagnostics",
      description: "Hypervisor virtualization setups, bare-metal hardware and corporate software troubleshooting.",
      items: ["VMware ESXi", "Virtualization & Hypervisors", "Hardware Servicing", "Operating Systems Setup", "System Maintenance"],
      color: "border-accent hover:shadow-accent/10",
      icon: <IoHardwareChipOutline className="h-6 w-6 text-accent" />
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
                      <IoRibbonOutline className="h-5 w-5 text-zinc-650" />
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
