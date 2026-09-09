import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AboutSection } from "@/components/about-section";
import { CinematicBackground } from "@/components/cinematic-background";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { SectionRail } from "@/components/section-rail";
import { SectionSceneFX } from "@/components/section-scene-fx";
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
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08, rootMargin: "0px 0px -90px 0px" },
    );
    elements.forEach((element) => observer.observe(element));

    let ticking = false;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();
    let velocity = 0;
    const updateScrollScene = () => {
      const now = performance.now();
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, scrollY / maxScroll);
      const dt = Math.max(16, now - lastTime);
      const rawVelocity = Math.abs(scrollY - lastScroll) / dt;
      velocity += (Math.min(1, rawVelocity * 2.8) - velocity) * 0.18;
      document.documentElement.style.setProperty("--scroll-y", `${scrollY}px`);
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
      document.documentElement.style.setProperty("--scroll-velocity", `${velocity}`);
      document.documentElement.style.setProperty("--scroll-angle", `${scrollY * 0.035}deg`);
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax ?? 0);
        element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
      lastScroll = scrollY;
      lastTime = now;
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(updateScrollScene); ticking = true; } };
    updateScrollScene();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-svh bg-bg text-fg">
      <CinematicBackground />
      <SectionSceneFX />
      <div className="scroll-progress"><span /></div>
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg">Skip to content</a>
      <SiteHeader active={active} />
      <SectionRail active={active} />
      <main className="relative z-10">
        <Hero />
        <div className="reveal reveal-about"><AboutSection /></div>
        <div className="reveal reveal-work"><WorkSection /></div>
        <div className="reveal reveal-skills"><SkillsSection /></div>
        <div className="reveal reveal-contact"><ContactSection /></div>
      </main>
      <SiteFooter />
      <Toaster theme="dark" position="bottom-right" toastOptions={{ className: "font-sans" }} />
    </div>
  );
}
