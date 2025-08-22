
import React, { useRef, useEffect, useState } from 'react';

// Utility: Generate points for a blobby shape
function generateBlobPoints(cx, cy, r, points, noise = 0) {
  const angleStep = (Math.PI * 2) / points;
  let arr = [];
  for (let i = 0; i < points; i++) {
    const angle = i * angleStep;
    // Add noise for blobbiness
    const rad = r + Math.sin(Date.now() / 200 + i * 1.3) * noise;
    arr.push({
      x: cx + Math.cos(angle) * rad,
      y: cy + Math.sin(angle) * rad,
    });
  }
  return arr;
}

function pointsToPath(points) {
  if (!points.length) return '';
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    d += ` Q${points[i].x},${points[i].y} ${(points[i].x + points[(i + 1) % points.length].x) / 2},${(points[i].y + points[(i + 1) % points.length].y) / 2}`;
  }
  d += ' Z';
  return d;
}

const BlobCursor = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [hovering, setHovering] = useState(false);
  const requestRef = useRef();
  const svgRef = useRef();
  const target = useRef({ x: window.innerWidth / 1, y: window.innerHeight / 2 });
  const blob = useRef({ x: window.innerWidth / 1, y: window.innerHeight / 2, r: 15 });

  useEffect(() => {
    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    // Detect hover on links or text
    const onMove = (e) => {
      let el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return setHovering(false);
      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.tagName === 'SELECT' ||
        el.getAttribute('role') === 'button' ||
        window.getComputedStyle(el).cursor === 'pointer'
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    // Animate blob position and morph
    const animate = () => {
      blob.current.x += (target.current.x - blob.current.x) * 0.18;
      blob.current.y += (target.current.y - blob.current.y) * 0.18;
      // Morph radius for squishiness
      const dist = Math.hypot(target.current.x - blob.current.x, target.current.y - blob.current.y);
  const targetR = hovering ? 28 : 25 + Math.min(dist, 120) * 0.07;
      blob.current.r += (targetR - blob.current.r) * 0.2;
      setPos({ x: blob.current.x, y: blob.current.y, r: blob.current.r });
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(requestRef.current);
  }, [hovering]);

  // Hide the default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  // Responsive SVG size
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const resize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Generate blobby points
  const points = generateBlobPoints(pos.x, pos.y, pos.r, 10, hovering ? 6 : 6);
  const path = pointsToPath(points);

  return (
    <svg
      ref={svgRef}
      width={size.w}
      height={size.h}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'background 0.2s',
      }}
    >
      <path
        d={path}
        fill={hovering ? '#FF00A8' : '#00FFC2'}
        opacity={0.85}
        style={{
          filter: hovering ? 'drop-shadow(0 0 16px #FF00A8)' : 'drop-shadow(0 0 12px #00FFC2)',
          transition: 'fill 0.2s, filter 0.2s',
        }}
      />
    </svg>
  );
};

export default BlobCursor;
