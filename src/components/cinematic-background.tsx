import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
  twinkle: number;
};

type Orb = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  phase: number;
  hue: number;
};

type Shockwave = { x: number; y: number; radius: number; life: number };

export function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;
    let scroll = window.scrollY;
    let targetScroll = scroll;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let hidden = false;
    let lastFrame = performance.now();

    let particles: Particle[] = [];
    let orbs: Orb[] = [];
    let shockwaves: Shockwave[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(260, Math.max(110, Math.floor((width * height) / 8500)));
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * (0.08 + Math.random() * 0.12),
        vy: (Math.random() - 0.5) * (0.05 + Math.random() * 0.09),
        size: i % 19 === 0 ? 1.8 : Math.random() * 1.15 + 0.3,
        phase: Math.random() * Math.PI * 2,
        twinkle: Math.random() * 1.6 + 0.5,
      }));

      orbs = Array.from({ length: 7 }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 90 + Math.random() * 180,
        speed: 0.08 + Math.random() * 0.12,
        phase: Math.random() * Math.PI * 2,
        hue: i % 3 === 0 ? 185 : i % 3 === 1 ? 220 : 270,
      }));
    };

    const onPointerMove = (event: PointerEvent) => {
      targetMouseX = event.clientX;
      targetMouseY = event.clientY;
    };

    const onPointerDown = (event: PointerEvent) => {
      shockwaves.push({ x: event.clientX, y: event.clientY, radius: 10, life: 1 });
      if (shockwaves.length > 8) shockwaves.shift();
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
    };

    const drawGlow = (x: number, y: number, radius: number, hue: number, alpha: number) => {
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
      glow.addColorStop(0, `hsla(${hue}, 100%, 70%, ${alpha})`);
      glow.addColorStop(0.32, `hsla(${hue}, 100%, 60%, ${alpha * 0.32})`);
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const draw = (now: number) => {
      if (hidden) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const dt = Math.min(32, now - lastFrame);
      lastFrame = now;
      time += dt * 0.001;
      scroll += (targetScroll - scroll) * 0.055;
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const progress = Math.min(1, scroll / Math.max(1, document.documentElement.scrollHeight - height));
      const velocity = Number(getComputedStyle(document.documentElement).getPropertyValue("--scroll-velocity")) || 0;
      const intensity = 1 + velocity * 1.8;
      const drift = scroll * 0.055;

      // Deep-space color fields.
      drawGlow(width * 0.78 + Math.sin(time * 0.23) * 100, height * 0.18 - drift * 0.08, width * 0.58, 190, 0.08 * intensity);
      drawGlow(width * 0.14 + Math.cos(time * 0.17) * 90, height * 0.72 - drift * 0.04, width * 0.48, 230, 0.06 * intensity);
      drawGlow(width * 0.54 + Math.sin(time * 0.13) * 160, height * 1.08 - drift * 0.12, width * 0.6, 275, 0.055 * intensity);

      // Moving volumetric orbs.
      ctx.globalCompositeOperation = "screen";
      for (const orb of orbs) {
        const ox = orb.x + Math.sin(time * orb.speed + orb.phase) * 120;
        const oy = orb.y + Math.cos(time * orb.speed * 0.8 + orb.phase) * 90 - drift * (0.015 + orb.radius / 15000);
        drawGlow(ox, ((oy % height) + height) % height, orb.radius, orb.hue, 0.025 * intensity);
      }

      // Starfield with depth, mouse parallax and scroll drift.
      const projected = particles.map((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const depth = 0.35 + p.z * 1.2;
        const px = p.x + (mouseX - width / 2) * p.z * 0.018;
        const py = ((p.y - drift * depth) % height + height) % height + (mouseY - height / 2) * p.z * 0.012;
        return { p, x: px, y: py, depth };
      });

      for (const item of projected) {
        const alpha = 0.18 + (0.12 + Math.sin(time * item.p.twinkle + item.p.phase) * 0.08) * item.depth;
        const radius = item.p.size * (0.7 + item.depth * 0.7);
        ctx.beginPath();
        ctx.arc(item.x, item.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${185 + item.p.z * 55}, 100%, ${72 + item.p.z * 18}%, ${alpha})`;
        ctx.fill();

        if (item.p.size > 1.4) {
          ctx.beginPath();
          ctx.moveTo(item.x - radius * 5, item.y);
          ctx.lineTo(item.x + radius * 5, item.y);
          ctx.moveTo(item.x, item.y - radius * 5);
          ctx.lineTo(item.x, item.y + radius * 5);
          ctx.strokeStyle = `hsla(190, 100%, 75%, ${alpha * 0.28})`;
          ctx.lineWidth = 0.45;
          ctx.stroke();
        }
      }

      // Dynamic constellation mesh: nearby stars connect more strongly during scroll.
      const linkDistance = 105 + velocity * 80;
      for (let i = 0; i < projected.length; i += 1) {
        const a = projected[i];
        for (let j = i + 1; j < Math.min(i + 11, projected.length); j += 1) {
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < linkDistance) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.lineWidth = 0.35 + velocity * 0.45;
            ctx.strokeStyle = `hsla(${195 + progress * 60}, 100%, 72%, ${0.018 + (1 - distance / linkDistance) * 0.055 * intensity})`;
            ctx.stroke();
          }
        }
      }

      // Cursor gravity field.
      const cursorRadius = 230 + velocity * 90;
      const cursorGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, cursorRadius);
      cursorGlow.addColorStop(0, `rgba(125, 240, 255, ${0.08 * intensity})`);
      cursorGlow.addColorStop(0.18, `rgba(77, 231, 255, ${0.025 * intensity})`);
      cursorGlow.addColorStop(1, "transparent");
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(mouseX - cursorRadius, mouseY - cursorRadius, cursorRadius * 2, cursorRadius * 2);

      // HUD reticle around the cursor.
      ctx.save();
      ctx.translate(mouseX, mouseY);
      ctx.rotate(time * 0.12 + progress * Math.PI);
      ctx.strokeStyle = `rgba(120, 240, 255, ${0.12 + velocity * 0.08})`;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.arc(0, 0, 24 + velocity * 10, 0.2, 1.5);
      ctx.arc(0, 0, 31 + velocity * 10, 3.2, 5.4);
      ctx.stroke();
      ctx.restore();

      // Scroll-powered energy streaks.
      if (velocity > 0.03) {
        const streakCount = Math.floor(8 + velocity * 18);
        for (let i = 0; i < streakCount; i += 1) {
          const x = (i * 137.37 + time * 220) % (width + 180) - 90;
          const y = ((i * 83.21 + time * 420 - drift * 0.5) % (height + 100) + height + 50) % (height + 50) - 50;
          const length = 30 + velocity * 150 + (i % 4) * 12;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + length, y - length * 0.08);
          ctx.strokeStyle = `hsla(${185 + (i % 3) * 30}, 100%, 72%, ${0.025 + velocity * 0.055})`;
          ctx.lineWidth = 0.6 + velocity;
          ctx.stroke();
        }
      }

      // Click shockwaves.
      for (const wave of shockwaves) {
        wave.radius += 7 + velocity * 16;
        wave.life -= 0.018;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100, 235, 255, ${Math.max(0, wave.life) * 0.18})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      shockwaves = shockwaves.filter((wave) => wave.life > 0);

      // Scan arc / cinematic horizon line.
      const scanY = ((time * 55 + progress * height * 1.7) % (height + 160)) - 80;
      const scan = ctx.createLinearGradient(0, scanY, width, scanY);
      scan.addColorStop(0, "transparent");
      scan.addColorStop(0.35, "rgba(77,231,255,0.0)");
      scan.addColorStop(0.5, `rgba(120,245,255,${0.08 + velocity * 0.12})`);
      scan.addColorStop(0.65, "rgba(77,231,255,0.0)");
      scan.addColorStop(1, "transparent");
      ctx.fillStyle = scan;
      ctx.fillRect(0, scanY - 1, width, 3);

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      hidden = document.hidden;
      lastFrame = performance.now();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="cinematic-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="cinematic-canvas" />
      <div className="nebula-cloud nebula-one" />
      <div className="nebula-cloud nebula-two" />
      <div className="nebula-cloud nebula-three" />
      <div className="energy-ring ring-one" />
      <div className="energy-ring ring-two" />
      <div className="energy-ring ring-three" />
      <div className="scan-beam" />
      <div className="viewport-vignette" />
      <div className="cinematic-grain" />
    </div>
  );
}
