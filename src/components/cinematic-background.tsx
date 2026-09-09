import { useEffect, useRef } from "react";

export function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;
    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let scrollY = window.scrollY;
    let targetScroll = scrollY;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; phase: number };
    let particles: Particle[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(95, Math.max(42, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.12,
        r: i % 9 === 0 ? 1.6 : Math.random() * 0.9 + 0.35,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", `${targetScroll}px`);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${Math.min(1, targetScroll / Math.max(1, document.documentElement.scrollHeight - window.innerHeight))}`,
      );
    };

    const draw = () => {
      scrollY += (targetScroll - scrollY) * 0.075;
      frame += 0.006;
      ctx.clearRect(0, 0, width, height);

      const drift = scrollY * 0.045;
      const hue = 188 + Math.sin(frame * 0.7) * 8;

      const glowA = ctx.createRadialGradient(width * 0.78, height * 0.25 - drift * 0.2, 0, width * 0.78, height * 0.25 - drift * 0.2, width * 0.42);
      glowA.addColorStop(0, `hsla(${hue}, 100%, 65%, .11)`);
      glowA.addColorStop(0.45, `hsla(${hue}, 100%, 55%, .035)`);
      glowA.addColorStop(1, "transparent");
      ctx.fillStyle = glowA;
      ctx.fillRect(0, 0, width, height);

      const glowB = ctx.createRadialGradient(width * 0.18, height * 0.82 + drift * 0.12, 0, width * 0.18, height * 0.82 + drift * 0.12, width * 0.35);
      glowB.addColorStop(0, "hsla(218, 100%, 65%, .065)");
      glowB.addColorStop(1, "transparent");
      ctx.fillStyle = glowB;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const py = p.y - (drift * (0.15 + (p.r / 2))) % height;
        const alpha = 0.18 + Math.sin(frame * 2 + p.phase) * 0.08;
        ctx.beginPath();
        ctx.arc(p.x, py < 0 ? py + height : py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 100%, 78%, ${alpha})`;
        ctx.fill();
      }

      ctx.lineWidth = 0.65;
      for (let i = 0; i < particles.length; i += 2) {
        const a = particles[i];
        for (let j = i + 2; j < Math.min(i + 8, particles.length); j += 2) {
          const b = particles[j];
          const ax = a.x;
          const ay = ((a.y - drift * 0.16) % height + height) % height;
          const bx = b.x;
          const by = ((b.y - drift * 0.16) % height + height) % height;
          const dx = ax - bx;
          const dy = ay - by;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 125) {
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `hsla(${hue}, 90%, 70%, ${0.045 * (1 - distance / 125)})`;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    onScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="cinematic-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="cinematic-canvas" />
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      <div className="scan-beam" />
      <div className="viewport-vignette" />
    </div>
  );
}
