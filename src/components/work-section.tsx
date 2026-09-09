import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

function ProjectCard({
  project,
  open,
  onToggle,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-xl bg-surface hairline hairline-hover transition-[box-shadow] duration-150">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="grid w-full text-left md:grid-cols-5"
      >
        <div className="relative aspect-video overflow-hidden bg-raised md:col-span-2 md:aspect-auto md:min-h-56">
          <img
            src={project.image}
            alt=""
            className="size-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
          />
          <span className="absolute top-3 left-3 font-mono text-xs text-fg/90">
            {project.number}
          </span>
        </div>

        <div className="flex flex-col justify-between p-5 md:col-span-3 md:p-7">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl tracking-tight text-fg">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-subtle">{project.year}</span>
            </div>
            <p className="mt-3 max-w-prose text-muted">{project.blurb}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-muted">
            <span>{open ? "Hide notes" : "Read notes"}</span>
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-200",
                open && "rotate-180",
              )}
            />
          </div>
        </div>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-out-smooth",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden" inert={!open} aria-hidden={!open}>
          <div className="grid gap-6 border-t border-border px-5 py-6 md:grid-cols-3 md:px-7">
            <div>
              <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">
                Problem
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">
                Approach
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.approach}
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">
                Result
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.result}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm text-accent hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Source
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function WorkSection() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <section id="work" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-kicker text-accent uppercase">
            02 — Selected work
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-fg sm:text-5xl">
            Three projects, three evaluation stories
          </h2>
          <p className="mt-4 text-muted">
            Vision, retrieval, and time series. Each one ships with a protocol,
            not just an architecture.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              open={openId === project.id}
              onToggle={() =>
                setOpenId((current) =>
                  current === project.id ? null : project.id,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
