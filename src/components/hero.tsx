import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { NodeField } from "@/components/node-field";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      id="intro"
      className="relative grid-paper overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 text-accent/40 lg:block">
        <NodeField className="absolute top-1/2 right-8 h-[min(520px,70vh)] w-auto -translate-y-1/2" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:py-24">
        <p className="rise rise-1 font-mono text-xs tracking-kicker text-accent uppercase">
          {profile.role}
          <span className="mx-2 text-subtle">/</span>
          {profile.location}
        </p>

        <h1 className="rise rise-2 mt-5 max-w-3xl font-display text-5xl leading-display tracking-tight text-fg sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline}
        </p>

        <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
          <Button
            onClick={() => scrollToId("work")}
            className="min-w-36"
          >
            View work
            <ArrowDown />
          </Button>
          <Button variant="outline" asChild>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight />
            </a>
          </Button>
        </div>

        <dl className="rise rise-5 mt-16 grid max-w-2xl gap-6 border-t border-border pt-8 sm:grid-cols-3">
          {profile.now.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-xs tracking-wide text-subtle uppercase">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-snug text-fg">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
