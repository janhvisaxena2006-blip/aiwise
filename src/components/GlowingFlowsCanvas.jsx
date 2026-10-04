import React, { useEffect, useRef, useState } from 'react';

export default function GlowingFlowsCanvas({ height = 360, label = "TL.001 TELEMETRY FLOWS · REAL-TIME AI ROUTING FABRIC" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [tokensPerSec, setTokensPerSec] = useState(1420890);

  useEffect(() => {
    // Token counter tick animation
    const interval = setInterval(() => {
      setTokensPerSec(prev => prev + Math.floor(Math.random() * 450) - 200);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = containerRef.current ? containerRef.current.clientWidth : 1200);
    let h = (canvas.height = height);

    const handleResize = () => {
      if (containerRef.current && canvas) {
        width = canvas.width = containerRef.current.clientWidth;
        h = canvas.height = height;
      }
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive wave deflection
    const mouse = { x: width / 2, y: h / 2, targetX: width / 2, targetY: h / 2 };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = h / 2;
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener('mousemove', handleMouseMove);
      containerEl.addEventListener('mouseleave', handleMouseLeave);
    }

    // Strand Parameters - 48 fine fiber strands bundled together
    const strandCount = 48;
    const strands = [];

    for (let i = 0; i < strandCount; i++) {
      strands.push({
        baseY: h * 0.5 + (i - strandCount / 2) * 1.8,
        amplitude1: 25 + Math.random() * 35,
        amplitude2: 15 + Math.random() * 25,
        freq1: 0.002 + Math.random() * 0.0025,
        freq2: 0.005 + Math.random() * 0.004,
        speed: 0.008 + Math.random() * 0.012,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.15 + (1 - Math.abs(i - strandCount / 2) / (strandCount / 2)) * 0.65,
        thickness: 0.8 + Math.random() * 1.4,
        color: i % 7 === 0 ? '#FFFFFF' : (i % 3 === 0 ? '#D6FF55' : '#B6FF00'),
      });
    }

    // Glowing Data Packets traveling along the strands
    const particleCount = 35;
    const particles = [];
    for (let p = 0; p < particleCount; p++) {
      particles.push({
        strandIndex: Math.floor(Math.random() * strandCount),
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.004,
        size: 1.5 + Math.random() * 2.5,
        glow: 8 + Math.random() * 12,
      });
    }

    let time = 0;

    const render = () => {
      time += 1;

      // Smooth lerp mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Clear Canvas with subtle dark trail
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, width, h);

      // Draw subtle background grid
      ctx.strokeStyle = 'rgba(217, 217, 210, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Draw Strands
      strands.forEach((strand, idx) => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = strand.color;
        ctx.globalAlpha = strand.alpha;
        ctx.lineWidth = strand.thickness;

        // Subtle glow for central strands
        if (idx % 6 === 0) {
          ctx.shadowColor = '#B6FF00';
          ctx.shadowBlur = 10;
        }

        const step = 6;
        for (let x = 0; x <= width + step; x += step) {
          // Distance to mouse for interactive influence
          const distToMouse = Math.abs(x - mouse.x);
          const mouseInfluence = Math.max(0, 1 - distToMouse / 280) * (mouse.y - h / 2) * 0.45;

          const y =
            strand.baseY +
            Math.sin(x * strand.freq1 + time * strand.speed + strand.phase) * strand.amplitude1 +
            Math.cos(x * strand.freq2 + time * strand.speed * 0.7) * strand.amplitude2 +
            mouseInfluence;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
        ctx.restore();
      });

      // Draw Data Packet Particles
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.strandIndex = Math.floor(Math.random() * strandCount);
        }

        const strand = strands[p.strandIndex];
        const x = p.progress * width;
        const distToMouse = Math.abs(x - mouse.x);
        const mouseInfluence = Math.max(0, 1 - distToMouse / 280) * (mouse.y - h / 2) * 0.45;

        const y =
          strand.baseY +
          Math.sin(x * strand.freq1 + time * strand.speed + strand.phase) * strand.amplitude1 +
          Math.cos(x * strand.freq2 + time * strand.speed * 0.7) * strand.amplitude2 +
          mouseInfluence;

        ctx.save();
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#B6FF00';
        ctx.shadowBlur = p.glow;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (containerEl) {
        containerEl.removeEventListener('mousemove', handleMouseMove);
        containerEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [height]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-dark border-y border-neutral-800 shadow-2xl select-none group">
      <canvas ref={canvasRef} className="block w-full cursor-crosshair" />

      {/* Overlay Technical Labels & Controls */}
      <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between text-xs font-mono pointer-events-none z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
          <span className="text-lime font-bold tracking-wider uppercase drop-shadow">
            {label}
          </span>
        </div>

        <div className="flex items-center gap-6 text-neutral-400">
          <span className="hidden sm:inline">
            BANDWIDTH: <strong className="text-white font-mono">100 Gbps</strong>
          </span>
          <span>
            LIVE TELEMETRY: <strong className="text-lime font-mono">{tokensPerSec.toLocaleString()} tps</strong>
          </span>
        </div>
      </div>

      {/* Top Left Subtle Label */}
      <div className="absolute top-4 left-6 text-[11px] font-mono text-neutral-500 uppercase tracking-widest pointer-events-none">
        AIWISE TELEMETRY LAYER 02 // LONG EXPOSURE FLOWS
      </div>
    </div>
  );
}
