import { skillGroups } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="font-mono text-xs tracking-kicker text-accent uppercase">
          03 — Toolkit
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-fg sm:text-5xl">
          What I reach for
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.label}
              className="rounded-xl bg-surface p-5 hairline"
            >
              <h3 className="font-mono text-xs tracking-wide text-subtle uppercase">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-col">
                {group.items.map((item, i) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-center justify-between py-2.5 text-fg",
                      i !== group.items.length - 1 && "border-b border-border",
                    )}
                  >
                    <span>{item}</span>
                    <span className="font-mono text-xs text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
