"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const points: Point[] = [];
    const pointCount = Math.floor((width * height) / 15000); // Adaptable a la resolución
    const connectionDistance = 150;
    const goldColor = "200, 153, 51"; // RGB para #C89933

    // Inicializar puntos
    const initPoints = () => {
      points.length = 0;
      for (let i = 0; i < pointCount; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initPoints();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Actualizar y dibujar puntos
      points.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Rebote en bordes
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Dibujar nodo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${goldColor}, 0.6)`;
        ctx.fill();

        // Conectar con otros puntos
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Efecto de brillo dorado en conexiones
            ctx.strokeStyle = `rgba(${goldColor}, ${opacity * 0.4})`;
            ctx.lineWidth = opacity * 1.5;
            
            // Añadir brillo si la conexión es fuerte (muy cercana)
            if (opacity > 0.6) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${goldColor}, 1)`;
            } else {
                ctx.shadowBlur = 0;
            }
            
            ctx.stroke();
            ctx.shadowBlur = 0; // Reset para el siguiente
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-40"
    />
  );
}
