"use client";

import { useEffect, useRef } from "react";

type AuroraBand = {
  color1: [number, number, number];
  color2: [number, number, number];
  alpha: number;
  speed: number;
  yOffset: number;
  amplitude: number;
  frequency: number;
  width: number;
  phase: number;
};

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let isMobile = window.matchMedia("(max-width: 768px)").matches;
    const speedMultiplier = 1.12;

    const resize = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      isMobile = window.matchMedia("(max-width: 768px)").matches;

      const dpr = isMobile ? 1.5 : Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(viewportWidth * dpr);
      canvas.height = Math.floor(viewportHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Aurora band configuration — layered ribbons with independent phases
    const bands: AuroraBand[] = [
      {
        color1: [16, 185, 129],   // emerald-500
        color2: [5, 150, 105],    // emerald-600
        alpha: 0.16,
        speed: 0.36,
        yOffset: 0.25,
        amplitude: 95,
        frequency: 0.0028,
        width: 250,
        phase: 0.2,
      },
      {
        color1: [52, 211, 153],   // emerald-400
        color2: [16, 185, 129],   // emerald-500
        alpha: 0.11,
        speed: 0.29,
        yOffset: 0.35,
        amplitude: 120,
        frequency: 0.0022,
        width: 290,
        phase: 1.1,
      },
      {
        color1: [110, 231, 183],  // emerald-300
        color2: [234, 179, 8],    // yellow-500
        alpha: 0.09,
        speed: 0.33,
        yOffset: 0.3,
        amplitude: 85,
        frequency: 0.0031,
        width: 230,
        phase: 2.3,
      },
      {
        color1: [253, 224, 71],   // yellow-300
        color2: [234, 179, 8],    // yellow-500
        alpha: 0.075,
        speed: 0.26,
        yOffset: 0.2,
        amplitude: 110,
        frequency: 0.0024,
        width: 210,
        phase: 0.7,
      },
      {
        color1: [163, 230, 53],   // lime-400
        color2: [16, 185, 129],   // emerald-500
        alpha: 0.1,
        speed: 0.31,
        yOffset: 0.4,
        amplitude: 95,
        frequency: 0.0029,
        width: 260,
        phase: 1.9,
      },
    ];

    const getBandSample = (x: number, band: AuroraBand, t: number, h: number) => {
      const drift = t * band.speed * speedMultiplier;
      const baseY = h * band.yOffset;

      const wave1 = Math.sin(x * band.frequency + drift + band.phase) * band.amplitude;
      const wave2 =
        Math.sin(x * band.frequency * 0.7 + drift * 0.75 + 1.2 + band.phase) *
        (band.amplitude * 0.55);
      const wave3 =
        Math.sin(x * band.frequency * 1.9 - drift * 0.45 + 2.8 + band.phase) *
        (band.amplitude * 0.28);
      const wave4 =
        Math.sin(x * band.frequency * 3.1 + drift * 1.15 + band.phase * 0.7) *
        (band.amplitude * 0.18);

      // High-frequency column modulation creates vertical curtain sections.
      const columnA = (Math.sin(x * 0.017 + drift * 1.4 + band.phase) + 1) / 2;
      const columnB = (Math.sin(x * 0.031 - drift * 0.9 + band.phase * 2) + 1) / 2;
      const columnC = (Math.sin(x * 0.052 + drift * 1.7 + band.phase * 0.6) + 1) / 2;
      // Keep curtain modulation softer so individual wave contours blend more seamlessly.
      const curtain = Math.pow(columnA * 0.5 + columnB * 0.3 + columnC * 0.2, 1.15);

      const yTop = baseY + wave1 + wave2 + wave3 + wave4;
      const thickness =
        band.width * (0.42 + curtain * 0.62) +
        Math.sin(x * 0.01 + drift * 0.6 + band.phase) * (band.width * 0.03);
      const yBottom = yTop + Math.max(40, thickness);

      return { yTop, yBottom, curtain };
    };

    const drawAurora = (timestamp: number) => {
      const time = timestamp / 1000;
      const width = viewportWidth;
      const height = viewportHeight;

      // Clear with dark background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // Subtle radial vignette
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        height * 0.2,
        width / 2,
        height / 2,
        height * 0.9
      );
      vignette.addColorStop(0, "rgba(10, 10, 10, 0)");
      vignette.addColorStop(1, "rgba(10, 10, 10, 0.4)");

      // Blend aurora layers additively for a natural glow overlap.
      ctx.globalCompositeOperation = "lighter";

      // Draw each aurora ribbon
      for (const band of bands) {
        ctx.beginPath();

        // Top edge
        for (let x = -10; x <= width + 10; x += 4) {
          const { yTop } = getBandSample(x, band, time, height);
          if (x === -10) {
            ctx.moveTo(x, yTop);
          } else {
            ctx.lineTo(x, yTop);
          }
        }

        // Bottom edge (reverse) to form ribbon/curtain volume
        for (let x = width + 10; x >= -10; x -= 4) {
          const { yBottom } = getBandSample(x, band, time, height);
          ctx.lineTo(x, yBottom);
        }
        ctx.closePath();

        const bandCenter = height * band.yOffset;
        const gradient = ctx.createLinearGradient(0, bandCenter - band.width, 0, bandCenter + band.width);
        const [r1, g1, b1] = band.color1;
        const [r2, g2, b2] = band.color2;

        // Dynamic alpha pulsing
        const pulse = 0.8 + 0.2 * Math.sin(time * 0.95 + band.yOffset * 8);
        const a = band.alpha * pulse;

        gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, 0)`);
        gradient.addColorStop(0.22, `rgba(${r1}, ${g1}, ${b1}, ${a * 0.65})`);
        gradient.addColorStop(0.5, `rgba(${r2}, ${g2}, ${b2}, ${a * 1.2})`);
        gradient.addColorStop(0.78, `rgba(${r2}, ${g2}, ${b2}, ${a * 0.42})`);
        gradient.addColorStop(1, `rgba(${r1}, ${g1}, ${b1}, 0)`);

        ctx.fillStyle = gradient;

        if (isMobile) {
          // Mobile fallback: shadow blur keeps glow visible where canvas filter blur is inconsistent.
          ctx.save();
          ctx.globalAlpha = 0.58;
          ctx.shadowColor = `rgba(${r2}, ${g2}, ${b2}, ${Math.min(1, a * 0.95)})`;
          ctx.shadowBlur = 34;
          ctx.fill();
          ctx.restore();

          // Small extra soft pass helps hide residual ribbon silhouettes.
          ctx.save();
          ctx.globalAlpha = 0.26;
          ctx.filter = "blur(16px)";
          ctx.fill();
          ctx.filter = "none";
          ctx.restore();
        } else {
          // Original lightweight desktop blur method.
          ctx.filter = "blur(30px)";
          ctx.fill();
          ctx.filter = "none";
        }
      }

      ctx.globalCompositeOperation = "source-over";

      // Draw floating particles (stars)
      drawStars(ctx, width, height, time);

      // Apply vignette
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(drawAurora);
    };

    // Floating star particles with slightly exaggerated twinkle
    const stars: {
      x: number;
      y: number;
      size: number;
      twinkleSpeed: number;
      baseOpacity: number;
      phase: number;
      twinkleStrength: number;
    }[] = [];
    for (let i = 0; i < 75; i++) {
      stars.push({
        x: Math.random() * 2000,
        y: Math.random() * 2000,
        size: Math.random() * 1.5 + 0.5,
        twinkleSpeed: Math.random() * 1.2 + 0.6,
        baseOpacity: Math.random() * 0.5 + 0.25,
        phase: Math.random() * Math.PI * 2,
        twinkleStrength: Math.random() < 0.35 ? 1.15 : 0.5 + Math.random() * 0.35,
      });
    }

    const drawStars = (
      c: CanvasRenderingContext2D,
      w: number,
      h: number,
      t: number
    ) => {
      for (const star of stars) {
        const twinkleBase = (Math.sin(t * star.twinkleSpeed + star.phase) + 1) / 2;
        const twinkle = 0.2 + 0.8 * Math.pow(twinkleBase, 1.1) * star.twinkleStrength;
        const shimmer = 0.8 + 0.2 * Math.sin(t * star.twinkleSpeed * 2 + star.phase * 1.7);
        const alpha = Math.min(1, star.baseOpacity * twinkle * shimmer * 1.1);
        const radius = star.size * (0.8 + twinkle * 0.45);
        c.beginPath();
        c.arc(star.x % w, star.y % h, radius, 0, Math.PI * 2);
        c.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        c.fill();
      }
    };

    animationId = requestAnimationFrame(drawAurora);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
