import React, { useRef, useEffect, useState } from 'react';

// Minimal, luxurious custom cursor: small circle, smooth, with elegant color and subtle hover effect
const CURSOR_SIZE = 18; // px
const CURSOR_COLOR = '#00FFC2'; // matches your neon green accent
const CURSOR_HOVER_COLOR = '#fff'; // white for contrast on hover
const CURSOR_SHADOW = '0 2px 12px 0 #00ffc299';

const MinimalLuxuryCursor = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [hovering, setHovering] = useState(false);
  const requestRef = useRef();
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    // Detect hover on links or interactive elements
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
    // Animate cursor position
    const animate = () => {
      cursor.current.x += (target.current.x - cursor.current.x) * 0.22;
      cursor.current.y += (target.current.y - cursor.current.y) * 0.22;
      setPos({ x: cursor.current.x, y: cursor.current.y });
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Hide the default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {/* Subtle ring */}
      <div
        style={{
          position: 'absolute',
          left: pos.x - CURSOR_SIZE,
          top: pos.y - CURSOR_SIZE,
          width: CURSOR_SIZE * 2,
          height: CURSOR_SIZE * 2,
          borderRadius: '50%',
          border: `1.5px solid ${CURSOR_COLOR}55`,
          opacity: hovering ? 0.32 : 0.18,
          transition: 'opacity 0.18s',
          pointerEvents: 'none',
        }}
      />
      {/* Main dot */}
      <div
        style={{
          position: 'absolute',
          left: pos.x - CURSOR_SIZE / 2,
          top: pos.y - CURSOR_SIZE / 2,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          borderRadius: '50%',
          background: hovering ? CURSOR_HOVER_COLOR : CURSOR_COLOR,
          boxShadow: hovering ? '0 2px 24px 0 #fff8, 0 0 0 4px #00ffc233' : CURSOR_SHADOW,
          border: hovering ? `2px solid ${CURSOR_COLOR}` : 'none',
          transform: hovering ? 'scale(1.18)' : 'scale(1)',
          transition: 'background 0.18s, box-shadow 0.18s, border 0.18s, transform 0.18s',
          opacity: 0.92,
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default MinimalLuxuryCursor;
