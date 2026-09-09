import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("intro");
            setOpen(false);
          }}
          className="flex items-center gap-3 text-fg"
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-raised font-display text-sm text-accent hairline">
            {profile.initials}
          </span>
          <span className="font-medium tracking-tight">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(item.id);
              }}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors duration-150",
                active === item.id
                  ? "text-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
            >
              Get in touch
            </a>
          </Button>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-border transition-[grid-template-rows,opacity] duration-200 ease-out-smooth md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav className="min-h-0 bg-bg" aria-label="Mobile">
          <div className="flex flex-col px-4 py-3">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  scrollToId(item.id);
                }}
                className={cn(
                  "flex min-h-11 items-center justify-between rounded-md px-2 text-base",
                  active === item.id ? "text-fg" : "text-muted",
                )}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-subtle">{item.index}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
