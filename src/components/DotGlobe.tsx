import { useEffect, useRef } from "react";

const DotGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 520;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = 210;

    // World map coordinates (lon, lat) simplified
    const landPoints: [number, number][] = [];
    
    // Generate a dot-sphere and filter for land-like pattern
    const worldData = getWorldDots();
    
    // Shield pulse state
    let shieldPulse = 0;
    
    // Connection arcs
    const arcs = [
      { from: [-46, -23], to: [2, 48], progress: 0, speed: 0.008 },    // Brazil → Europe
      { from: [-46, -23], to: [-74, 40], progress: 0, speed: 0.006 },   // Brazil → US
      { from: [-74, 40], to: [139, 35], progress: 0, speed: 0.005 },    // US → Japan
      { from: [2, 48], to: [55, 25], progress: 0, speed: 0.007 },       // Europe → Dubai
      { from: [-46, -23], to: [28, -26], progress: 0, speed: 0.009 },   // Brazil → South Africa
    ];

    // Pulsing shield nodes
    const shieldNodes = [
      { lon: -46, lat: -23 },  // São Paulo
      { lon: -74, lat: 40 },   // New York
      { lon: 2, lat: 48 },     // Paris
      { lon: 139, lat: 35 },   // Tokyo
      { lon: 55, lat: 25 },    // Dubai
    ];

    function project(lon: number, lat: number, rotation: number): [number, number, number] {
      const phi = (lat * Math.PI) / 180;
      const lambda = ((lon + rotation) * Math.PI) / 180;
      const x = cx + R * Math.cos(phi) * Math.sin(lambda);
      const y = cy - R * Math.sin(phi);
      const z = Math.cos(phi) * Math.cos(lambda);
      return [x, y, z];
    }

    function draw() {
      ctx.clearRect(0, 0, size, size);
      rotationRef.current += 0.15;
      shieldPulse += 0.03;
      const rot = rotationRef.current;

      // Outer glow
      const glowGrad = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.3);
      glowGrad.addColorStop(0, "hsla(125, 100%, 45%, 0.04)");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, size, size);

      // Globe outline circle
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "hsla(125, 100%, 45%, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Grid lines (longitude)
      for (let lon = -180; lon < 180; lon += 30) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 2) {
          const [x, y, z] = project(lon, lat, rot);
          if (z < 0) continue;
          if (lat === -90 || z < 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "hsla(125, 100%, 45%, 0.04)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Grid lines (latitude)
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        for (let lon = -180; lon <= 180; lon += 2) {
          const [x, y, z] = project(lon, lat, rot);
          if (z < 0) continue;
          if (lon === -180) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "hsla(125, 100%, 45%, 0.04)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Land dots
      for (const [lon, lat] of worldData) {
        const [x, y, z] = project(lon, lat, rot);
        if (z < -0.05) continue;
        const alpha = Math.max(0, z) * 0.7 + 0.1;
        const dotSize = 1.2 + z * 0.8;
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(125, 100%, 50%, ${alpha})`;
        ctx.fill();
      }

      // Connection arcs
      for (const arc of arcs) {
        arc.progress += arc.speed;
        if (arc.progress > 1.5) arc.progress = 0;

        const [x1, y1, z1] = project(arc.from[0], arc.from[1], rot);
        const [x2, y2, z2] = project(arc.to[0], arc.to[1], rot);

        if (z1 < 0 && z2 < 0) continue;

        // Draw arc
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2 - 40;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(midX, midY, x2, y2);
        ctx.strokeStyle = `hsla(125, 100%, 55%, ${Math.min(z1, z2) > 0 ? 0.3 : 0.08})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Traveling dot
        if (arc.progress <= 1) {
          const t = arc.progress;
          const px = (1-t)*(1-t)*x1 + 2*(1-t)*t*midX + t*t*x2;
          const py = (1-t)*(1-t)*y1 + 2*(1-t)*t*midY + t*t*y2;
          const pz = (1-t)*z1 + t*z2;
          if (pz > 0) {
            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fillStyle = "hsla(125, 100%, 60%, 0.9)";
            ctx.fill();
            // Trail glow
            ctx.beginPath();
            ctx.arc(px, py, 8, 0, Math.PI * 2);
            ctx.fillStyle = "hsla(125, 100%, 50%, 0.2)";
            ctx.fill();
          }
        }
      }

      // Shield nodes (pulsing)
      for (let i = 0; i < shieldNodes.length; i++) {
        const node = shieldNodes[i];
        const [x, y, z] = project(node.lon, node.lat, rot);
        if (z < 0.1) continue;

        const pulse = Math.sin(shieldPulse + i * 1.2) * 0.3 + 0.7;

        // Outer pulse ring
        ctx.beginPath();
        ctx.arc(x, y, 8 + pulse * 6, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(125, 100%, 50%, ${0.15 * pulse})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(125, 100%, 55%, ${0.8 * z})`;
        ctx.fill();

        // Shield icon (small diamond shape)
        ctx.beginPath();
        ctx.moveTo(x, y - 5);
        ctx.lineTo(x + 3, y - 1);
        ctx.lineTo(x + 3, y + 2);
        ctx.lineTo(x, y + 5);
        ctx.lineTo(x - 3, y + 2);
        ctx.lineTo(x - 3, y - 1);
        ctx.closePath();
        ctx.strokeStyle = `hsla(125, 100%, 60%, ${0.6 * z})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Orbiting ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, R + 20, R * 0.3, -0.4, 0, Math.PI * 2);
      ctx.strokeStyle = "hsla(125, 100%, 45%, 0.06)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Orbiting dot on ring
      const orbAngle = rot * 0.02;
      const orbX = cx + (R + 20) * Math.cos(orbAngle) * Math.cos(-0.4) - R * 0.3 * Math.sin(orbAngle) * Math.sin(-0.4);
      const orbY = cy + (R + 20) * Math.cos(orbAngle) * Math.sin(-0.4) + R * 0.3 * Math.sin(orbAngle) * Math.cos(-0.4);
      ctx.beginPath();
      ctx.arc(orbX, orbY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(125, 100%, 55%, 0.6)";
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-[520px] h-[520px] max-w-full"
        style={{ imageRendering: "auto" }}
      />
      {/* Ambient glow behind */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10 scale-90" />
    </div>
  );
};

// Simplified world land mass dots
function getWorldDots(): [number, number][] {
  const dots: [number, number][] = [];
  
  // Define land regions as bounding boxes [lonMin, lonMax, latMin, latMax]
  const regions: [number, number, number, number][] = [
    // North America
    [-170, -50, 25, 72],
    [-130, -60, 30, 50],
    // Central America
    [-120, -80, 10, 30],
    // South America  
    [-82, -34, -56, 12],
    [-75, -40, -40, 5],
    // Europe
    [-10, 40, 36, 70],
    [0, 30, 40, 60],
    // Africa
    [-18, 52, -35, 37],
    [-10, 40, -20, 30],
    // Middle East
    [25, 65, 12, 42],
    // Russia/Asia
    [40, 180, 42, 75],
    [60, 140, 30, 55],
    // India
    [68, 90, 8, 35],
    // Southeast Asia
    [95, 140, -10, 25],
    // Australia
    [112, 154, -44, -10],
    // Japan/Korea
    [125, 146, 30, 46],
    // UK/Ireland
    [-11, 2, 50, 59],
    // Scandinavia
    [4, 32, 55, 71],
  ];

  const step = 3;
  for (const [lonMin, lonMax, latMin, latMax] of regions) {
    for (let lon = lonMin; lon <= lonMax; lon += step) {
      for (let lat = latMin; lat <= latMax; lat += step) {
        // Add some randomness to avoid perfect grid
        const noise = Math.sin(lon * 12.9898 + lat * 78.233) * 43758.5453;
        const frac = noise - Math.floor(noise);
        if (frac > 0.25) { // ~75% fill for density
          dots.push([lon + (frac - 0.5) * 1.5, lat + (frac - 0.5) * 1.5]);
        }
      }
    }
  }

  return dots;
}

export default DotGlobe;
