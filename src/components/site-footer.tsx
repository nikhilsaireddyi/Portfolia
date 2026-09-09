import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs tracking-wide text-subtle">
          {profile.name} · {profile.role}
        </p>
        <p className="text-sm text-subtle">
          CSE student · AI & ML
        </p>
      </div>
    </footer>
  );
}
