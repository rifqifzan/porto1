"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Header entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills & Certifications", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 w-full glass-nav shadow-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12">
        <a href="#about" className="group flex items-center space-x-2">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-xl font-extrabold tracking-wider text-transparent transition-all duration-300 group-hover:scale-105">
            RIFQI FAUZAN
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Contact Link */}
        <div className="flex md:hidden">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
