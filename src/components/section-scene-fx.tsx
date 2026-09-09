import { useEffect, useRef } from "react";

type Point = { life: number; speed: number; angle: number };
const scenes = ["intro", "about", "work", "skills", "contact"];

export function SectionSceneFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0, h = 0, dpr = 1, raf = 0, t = 0, last = performance.now();
    let mx = 0, my = 0, tx = 0, ty = 0;
    let particles: Point[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: 90 }, () => ({ life: Math.random(), speed: .4 + Math.random() * 1.4, angle: Math.random() * Math.PI * 2 }));
    };
    const pointer = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const glow = (x: number, y: number, r: number, hue: number, a: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `hsla(${hue},100%,70%,${a})`); g.addColorStop(.35, `hsla(${hue},100%,60%,${a * .2})`); g.addColorStop(1, "transparent");
      ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
    };
    const stroke = (x1: number, y1: number, x2: number, y2: number, a: number, hue = 190) => {
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.strokeStyle = `hsla(${hue},100%,72%,${a})`; ctx.lineWidth = .7; ctx.stroke();
    };
    const scene = () => {
      const center = h * .5; let active = "intro"; let best = Infinity; let local = .5;
      for (const id of scenes) {
        const el = document.getElementById(id); if (!el) continue;
        const r = el.getBoundingClientRect(); const d = Math.abs(r.top + r.height * .5 - center);
        if (d < best) { best = d; active = id; local = Math.max(0, Math.min(1, (center - r.top) / Math.max(1, r.height))); }
      }
      document.documentElement.dataset.scene = active;
      document.documentElement.style.setProperty("--scene-progress", `${local}`);
      return { active, local };
    };

    const hero = (p: number, e: number) => {
      const cx = w * .77 + (mx - w / 2) * .04, cy = h * .48 + (my - h / 2) * .025;
      glow(cx, cy, 260 + e * 100, 188, .11 + e * .06);
      for (let i = 0; i < 6; i++) {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * (.07 + i * .022) + p * Math.PI * (i % 2 ? -1 : 1));
        ctx.beginPath(); ctx.ellipse(0, 0, 82 + i * 28 + e * 22, 25 + i * 7, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(105,235,255,${.12 - i * .015 + e * .03})`; ctx.stroke(); ctx.restore();
      }
      for (let i = 0; i < 20; i++) { const a = t * .35 + i * Math.PI * 2 / 20, r = 58 + Math.sin(t * 2 + i) * 8 + e * 18; stroke(cx + Math.cos(a) * r, cy + Math.sin(a) * r, cx + Math.cos(a + .08) * (r + 12), cy + Math.sin(a + .08) * (r + 12), .09 + e * .04, 185 + (i % 3) * 25); }
    };
    const about = (p: number, e: number) => {
      const cx = w * .72, cy = h * (.55 - p * .08);
      for (let i = 0; i < 4; i++) { ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * (.06 + i * .03) - p * Math.PI); ctx.beginPath(); ctx.ellipse(0, 0, 145 + i * 42, 48 + i * 14, 0, 0, Math.PI * 2); ctx.strokeStyle = `rgba(110,215,255,${.07 + e * .035})`; ctx.stroke(); ctx.restore(); }
      for (let i = 0; i < 18; i++) { const a = t * .2 + i * .35, r = 95 + Math.sin(i * 4 + t) * 24; glow(cx + Math.cos(a) * r, cy + Math.sin(a) * r * .38, 15, 195 + (i % 2) * 45, .04 + e * .025); }
    };
    const work = (p: number, e: number) => {
      const horizon = h * (.48 - p * .12), vx = w * .5;
      for (let i = -10; i <= 10; i++) stroke(vx, horizon, vx + i * (w / 7), h, .04 + e * .025, i % 3 ? 190 : 225);
      for (let i = 1; i < 11; i++) { const y = horizon + Math.pow(i / 10, 1.8) * (h - horizon); stroke(0, y, w, y, .035 + e * .02); }
      glow(vx, horizon, 180 + Math.sin(t * 2.4) * 60, 220, .035 + e * .04);
    };
    const skills = (p: number, e: number) => {
      const cx = w * .75, cy = h * .5;
      [72, 122, 178].forEach((r, i) => { ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * (i % 2 ? -.12 : .08) + p * Math.PI); ctx.beginPath(); ctx.arc(0, 0, r + e * 12, 0, Math.PI * 2); ctx.setLineDash(i === 1 ? [3, 8] : [1, 12]); ctx.strokeStyle = `rgba(100,230,255,${.08 + e * .03})`; ctx.stroke(); ctx.restore(); });
      for (let i = 0; i < 8; i++) { const a = t * .22 + i * Math.PI / 4, r = 122 + Math.sin(t * 2 + i) * 8, x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r * .65; glow(x, y, 20, i % 2 ? 265 : 190, .065 + e * .03); ctx.beginPath(); ctx.arc(x, y, 2 + e, 0, Math.PI * 2); ctx.fillStyle = "rgba(170,248,255,.75)"; ctx.fill(); }
    };
    const contact = (p: number, e: number) => {
      const cx = w * .5 + (mx - w / 2) * .03, cy = h * .52;
      for (let i = 0; i < 14; i++) { const z = (i / 14 + t * .16 + p * .5) % 1, r = 28 + z * Math.max(w, h) * .68; ctx.beginPath(); ctx.ellipse(cx, cy, r, r * .22, Math.sin(t * .15) * .2, 0, Math.PI * 2); ctx.strokeStyle = `rgba(100,235,255,${(1 - z) * (.11 + e * .08)})`; ctx.lineWidth = 1 + (1 - z); ctx.stroke(); }
      glow(cx, cy, 180 + e * 100, 190, .06 + e * .06);
    };

    const draw = (now: number) => {
      const dt = Math.min(32, now - last); last = now; t += dt * .001;
      mx += (tx - mx) * .08; my += (ty - my) * .08;
      const root = getComputedStyle(document.documentElement); const velocity = Number(root.getPropertyValue("--scroll-velocity")) || 0; const energy = Math.min(1.8, velocity * 2.4);
      const { active, local } = scene(); ctx.clearRect(0, 0, w, h); ctx.globalCompositeOperation = "screen";
      if (active === "intro") hero(local, energy); else if (active === "about") about(local, energy); else if (active === "work") work(local, energy); else if (active === "skills") skills(local, energy); else contact(local, energy);
      if (energy > .03) particles.forEach((point) => { point.life += .004 * point.speed + energy * .006; const r = (point.life % 1) * Math.max(w, h) * .32; const x = w / 2 + Math.cos(point.angle) * r; const y = h / 2 + Math.sin(point.angle) * r * .48; ctx.beginPath(); ctx.arc(x, y, .6 + energy * 1.2, 0, Math.PI * 2); ctx.fillStyle = `rgba(150,245,255,${.03 + energy * .08})`; ctx.fill(); });
      ctx.globalCompositeOperation = "source-over"; raf = requestAnimationFrame(draw);
    };
    resize(); mx = tx = w / 2; my = ty = h / 2; window.addEventListener("resize", resize); window.addEventListener("pointermove", pointer, { passive: true }); raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", pointer); };
  }, []);

  return <canvas ref={canvasRef} className="section-scene-fx" aria-hidden="true" />;
}
