import { useEffect, useRef } from "react";

type Point = { x: number; y: number; life: number; speed: number; angle: number };

const scenes = ["intro", "about", "work", "skills", "contact"];

export function SectionSceneFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let t = 0;
    let mx = 0;
    let my = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollVelocity = 0;
    let particles: Point[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        life: Math.random(),
        speed: 0.4 + Math.random() * 1.4,
        angle: Math.random() * Math.PI * 2,
      }));
    };

    const pointer = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const sceneInfo = () => {
      const center = h * 0.5;
      let active = "intro";
      let best = Number.POSITIVE_INFINITY;
      let local = 0.5;
      for (const id of scenes) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height * 0.5 - center);
        if (distance < best) {
          best = distance;
          active = id;
          local = Math.max(0, Math.min(1, (center - rect.top) / Math.max(1, rect.height)));
        }
      }
      document.documentElement.dataset.scene = active;
      document.documentElement.style.setProperty("--scene-progress", `${local}`);
      return { active, local };
    };

    const glow = (x: number, y: number, radius: number, hue: number, alpha: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
      g.addColorStop(0, `hsla(${hue},100%,70%,${alpha})`);
      g.addColorStop(0.35, `hsla(${hue},100%,60%,${alpha * 0.22})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const line = (x1: number, y1: number, x2: number, y2: number, alpha: number, hue = 190) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `hsla(${hue},100%,72%,${alpha})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    };

    const drawHero = (p: number, energy: number) => {
      const cx = w * 0.77 + (mx - w / 2) * 0.04;
      const cy = h * 0.48 + (my - h / 2) * 0.025;
      glow(cx, cy, 260 + energy * 100, 188, 0.12 + energy * 0.06);
      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (0.08 + i * 0.025) + p * Math.PI * (i % 2 ? -1 : 1));
        ctx.beginPath();
        ctx.ellipse(0, 0, 90 + i * 25 + energy * 25, 28 + i * 8, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(105,235,255,${0.12 - i * 0.016 + energy * 0.03})`;
        ctx.stroke();
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(cx, cy, 34 + energy * 20, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(150,245,255,0.08)";
      ctx.fill();
      for (let i = 0; i < 18; i++) {
        const a = t * 0.35 + i * (Math.PI * 2 / 18);
        const r = 62 + Math.sin(t * 2 + i) * 8 + energy * 20;
        line(cx + Math.cos(a) * r, cy + Math.sin(a) * r, cx + Math.cos(a + 0.09) * (r + 12), cy + Math.sin(a + 0.09) * (r + 12), 0.11 + energy * 0.04, 185 + (i % 3) * 25);
      }
    };

    const drawAbout = (p: number, energy: number) => {
      const cx = w * 0.72;
      const cy = h * (0.55 - p * 0.08);
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (0.08 + i * 0.035) - p * Math.PI);
        ctx.beginPath();
        ctx.ellipse(0, 0, 150 + i * 40, 52 + i * 15, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(110,215,255,${0.08 + energy * 0.035})`;
        ctx.stroke();
        ctx.restore();
      }
      for (let i = 0; i < 16; i++) {
        const a = t * 0.2 + i * 0.39;
        const r = 100 + Math.sin(i * 4 + t) * 24;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r * 0.38;
        glow(x, y, 15, 195 + (i % 2) * 40, 0.04 + energy * 0.025);
      }
    };

    const drawWork = (p: number, energy: number) => {
      const horizon = h * (0.48 - p * 0.12);
      const vanX = w * 0.5;
      const vanY = horizon;
      for (let i = -9; i <= 9; i++) {
        const bx = vanX + i * (w / 7);
        line(vanX, vanY, bx, h, 0.045 + energy * 0.025, i % 3 === 0 ? 225 : 190);
      }
      for (let i = 1; i < 10; i++) {
        const y = horizon + Math.pow(i / 9, 1.8) * (h - horizon);
        line(0, y, w, y, 0.04 + energy * 0.02, 190);
      }
      const pulse = 0.5 + Math.sin(t * 2.4) * 0.5;
      glow(w * 0.5, horizon, 170 + pulse * 80, 220, 0.04 + energy * 0.04);
    };

    const drawSkills = (p: number, energy: number) => {
      const cx = w * 0.75;
      const cy = h * 0.5;
      const rings = [75, 125, 180];
      rings.forEach((r, ri) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (ri % 2 ? -0.12 : 0.08) + p * Math.PI);
        ctx.beginPath();
        ctx.arc(0, 0, r + energy * 12, 0, Math.PI * 2);
        ctx.setLineDash(ri === 1 ? [3, 8] : [1, 12]);
        ctx.strokeStyle = `rgba(100,230,255,${0.08 + energy * 0.03})`;
        ctx.stroke();
        ctx.restore();
      });
      for (let i = 0; i < 8; i++) {
        const a = t * 0.22 + i * Math.PI / 4;
        const r = 125 + Math.sin(t * 2 + i) * 8;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r * 0.65;
        glow(x, y, 22, i % 2 ? 265 : 190, 0.07 + energy * 0.03);
        ctx.beginPath();
        ctx.arc(x, y, 2.2 + energy, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(170,248,255,0.75)";
        ctx.fill();
      }
    };

    const drawContact = (p: number, energy: number) => {
      const cx = w * 0.5 + (mx - w / 2) * 0.03;
      const cy = h * 0.52;
      for (let i = 0; i < 12; i++) {
        const z = (i / 12 + t * 0.16 + p * 0.5) % 1;
        const r = 30 + z * Math.max(w, h) * 0.65;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * 0.22, Math.sin(t * 0.15) * 0.2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100,235,255,${(1 - z) * (0.12 + energy * 0.08)})`;
        ctx.lineWidth = 1 + (1 - z) * 1.2;
        ctx.stroke();
      }
      glow(cx, cy, 180 + energy * 100, 190, 0.06 + energy * 0.06);
    };

    const draw = (now: number) => {
      t += Math.min(32, now - (draw as unknown as number)) * 0.001 || 0.016;
      (draw as unknown as number) = now;
      mx += (targetX - mx) * 0.08;
      my += (targetY - my) * 0.08;
      const root = getComputedStyle(document.documentElement);
      scrollVelocity = Number(root.getPropertyValue("--scroll-velocity")) || 0;
      const energy = Math.min(1.8, scrollVelocity * 2.4);
      const { active, local } = sceneInfo();
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "screen";
      if (active === "intro") drawHero(local, energy);
      if (active === "about") drawAbout(local, energy);
      if (active === "work") drawWork(local, energy);
      if (active === "skills") drawSkills(local, energy);
      if (active === "contact") drawContact(local, energy);

      if (energy > 0.03) {
        for (const point of particles) {
          point.life += 0.004 * point.speed + energy * 0.006;
          const radius = (point.life % 1) * Math.max(w, h) * 0.32;
          const x = w / 2 + Math.cos(point.angle) * radius;
          const y = h / 2 + Math.sin(point.angle) * radius * 0.48;
          ctx.beginPath();
          ctx.arc(x, y, 0.6 + energy * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(150,245,255,${0.03 + energy * 0.08})`;
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    resize();
    mx = targetX = w / 2;
    my = targetY = h / 2;
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointer, { passive: true });
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="section-scene-fx" aria-hidden="true" />;
}
