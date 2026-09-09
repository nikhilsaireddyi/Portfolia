import { profile } from "@/lib/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="font-mono text-xs tracking-kicker text-accent uppercase">
          01 — About
        </p>
        <div className="mt-3 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl tracking-tight text-fg sm:text-5xl">
              A student of systems that learn
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-8 lg:text-lg">
          <p className="text-fg">{profile.summary}</p>
          <p>{profile.about}</p>

          <div className="grid gap-6 pt-4 sm:grid-cols-2">
            <article className="rounded-xl bg-surface p-5 hairline">
              <p className="font-mono text-xs tracking-wide text-subtle uppercase">
                Education
              </p>
              <h3 className="mt-3 text-lg font-medium text-fg">
                {profile.education.degree}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {profile.education.school}
              </p>
              <p className="mt-1 font-mono text-xs text-subtle">
                {profile.education.years}
              </p>
            </article>

            <article className="rounded-xl bg-surface p-5 hairline">
              <p className="font-mono text-xs tracking-wide text-subtle uppercase">
                Coursework
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full bg-raised px-2.5 py-1 text-sm text-fg"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
