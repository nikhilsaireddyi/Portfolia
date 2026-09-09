import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { SectionRail } from "@/components/section-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { WorkSection } from "@/components/work-section";
import { useActiveSection } from "@/components/use-active-section";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const active = useActiveSection();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-svh bg-bg text-fg">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg">Skip to content</a>
      <SiteHeader active={active} />
      <SectionRail active={active} />
      <main>
        <Hero />
        <div className="reveal"><AboutSection /></div>
        <div className="reveal"><WorkSection /></div>
        <div className="reveal"><SkillsSection /></div>
        <div className="reveal"><ContactSection /></div>
      </main>
      <SiteFooter />
      <Toaster theme="dark" position="bottom-right" toastOptions={{ className: "font-sans" }} />
    </div>
  );
}
