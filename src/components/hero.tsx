import { ArrowDown, ArrowUpRight, Cpu, Sparkles } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { NodeField } from "@/components/node-field";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section id="intro" className="relative grid-paper overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <div className="absolute right-24 top-1/4 size-2 rounded-full bg-accent glow-dot shadow-[0_0_30px_8px_rgba(77,231,255,.4)]" />
        <div className="absolute right-12 top-1/2 size-72 rounded-full bg-accent/5 blur-3xl" />
        <NodeField className="absolute top-1/2 right-8 h-[min(560px,72vh)] w-auto -translate-y-1/2 opacity-80" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:py-24">
        <div className="rise rise-1 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-[10px] tracking-kicker text-accent uppercase">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(77,231,255,.7)]" />
          {profile.availability}
        </div>

        <p className="rise rise-2 mt-8 font-mono text-xs tracking-kicker text-accent uppercase">
          {profile.role}<span className="mx-2 text-subtle">/</span>{profile.location}
        </p>

        <h1 className="rise rise-3 mt-4 max-w-4xl font-display text-5xl font-bold leading-[.98] tracking-tight text-fg sm:text-7xl lg:text-8xl">
          I’m <span className="text-accent">Nikhil.</span><br />
          I build for the <span className="text-white">future.</span>
        </h1>

        <p className="rise rise-4 mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline}
        </p>

        <div className="rise rise-5 mt-9 flex flex-wrap items-center gap-3">
          <Button onClick={() => scrollToId("work")} className="min-w-36 shadow-[0_0_28px_rgba(77,231,255,.16)]">
            Explore work <ArrowDown />
          </Button>
          <Button variant="outline" asChild>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Sparkles /> LinkedIn <ArrowUpRight /></a>
          </Button>
          <Button variant="outline" asChild>
            <a href={profile.links.github} target="_blank" rel="noreferrer"><Cpu /> GitHub <ArrowUpRight /></a>
          </Button>
        </div>

        <dl className="rise rise-5 mt-16 grid max-w-4xl gap-5 sm:grid-cols-3">
          {profile.now.map((item) => (
            <div key={item.label} className="glass rounded-xl p-4">
              <dt className="font-mono text-[10px] tracking-kicker text-accent uppercase">{item.label}</dt>
              <dd className="mt-2 text-sm leading-snug text-fg">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
