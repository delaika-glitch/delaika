"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function RippleEffect({
  children,
  className = "",
  style = {},
  options = {},
  autoDrops = true,
  dropIntervalMs = 1400,
}: {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  options?: Record<string, any>;
  autoDrops?: boolean;
  dropIntervalMs?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!rippleRef.current || !containerRef.current) return;
    
    const canvas = rippleRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!rippleRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Simple ripple effect using canvas
    let drops: Array<{x: number; y: number; radius: number; strength: number; time: number}> = [];
    
    const addDrop = (x: number, y: number, radius: number, strength: number) => {
      drops.push({ x, y, radius, strength, time: 0 });
    };

    const animate = () => {
      if (!ctx || !rippleRef.current) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw ripples
      drops = drops.filter(drop => {
        drop.time += 0.02;
        if (drop.time > 1) return false;
        
        const alpha = (1 - drop.time) * drop.strength;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius * drop.time, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        return true;
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Auto drops
    let intervalId: NodeJS.Timeout | null = null;
    if (autoDrops) {
      intervalId = setInterval(() => {
        const w = canvas.width;
        const h = canvas.height;
        if (!w || !h) return;
        const x = Math.random() * w;
        const y = Math.random() * h;
        const radius = 20 + Math.random() * 40;
        const strength = 0.01 + Math.random() * 0.03;
        addDrop(x, y, radius, strength);
      }, Math.max(400, dropIntervalMs));
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [autoDrops, dropIntervalMs]);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={style}
    >
      {children}
      <canvas
        ref={rippleRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}