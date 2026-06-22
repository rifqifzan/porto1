import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import SkillsAndCertifications from "@/components/SkillsAndCertifications";
import EducationAndOrganizations from "@/components/EducationAndOrganizations";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="w-full flex flex-col">
        <Hero />
        <Experience />
        <SkillsAndCertifications />
        <EducationAndOrganizations />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
