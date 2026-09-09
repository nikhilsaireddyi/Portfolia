import { nav } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function SectionRail({ active }: { active: string }) {
  return (
    <nav
      aria-label="Section index"
      className="pointer-events-none fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ol className="pointer-events-auto flex flex-col gap-3">
        {nav.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={cn(
                  "group flex items-center gap-3 font-mono text-xs tracking-wide transition-colors duration-150",
                  isActive ? "text-accent" : "text-subtle hover:text-muted",
                )}
              >
                <span
                  className={cn(
                    "h-px w-4 transition-[width,background-color] duration-200",
                    isActive ? "w-8 bg-accent" : "bg-border group-hover:bg-muted",
                  )}
                />
                {item.index}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
