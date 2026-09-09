import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Fill in name, email, and a note.");
      return;
    }
    setSending(true);
    const body = `From: ${name} <${email}>\n\n${message}`;
    try {
      await navigator.clipboard.writeText(body);
      toast.success("Note copied. Opening your mail app.");
    } catch {
      toast.message("Opening your mail app.");
    }
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Hello ${profile.name.split(" ")[0]}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSending(false);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied.");
    } catch {
      toast.error("Could not copy. Use the address beside this button.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="font-mono text-xs tracking-kicker text-accent uppercase">
          04 — Contact
        </p>
        <div className="mt-3 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl tracking-tight text-fg sm:text-5xl">
            {profile.availability}
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Internships, research collaborations, or a question about one of the
            projects. I read everything.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={profile.links.email}
                className="font-mono text-sm text-accent hover:underline"
              >
                {profile.email}
              </a>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-11"
                aria-label="Copy email"
                onClick={copyEmail}
              >
                <Copy />
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-muted hover:text-fg"
              >
                GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-muted hover:text-fg"
              >
                LinkedIn
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 rounded-xl bg-surface p-5 hairline sm:p-6 lg:col-span-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@college.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Note</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="What should we talk about?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={sending} className="min-w-36">
              Send note
              <Send />
            </Button>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
}
