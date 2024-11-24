"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null); // Ref for the cursor element
  const requestRef = useRef(); // Ref for the animation frame
  const mousePosition = useRef({ x: 0, y: 0 }); // Store mouse position
  const cursorPosition = useRef({ x: 0, y: 0 }); // Store cursor position

  useEffect(() => {
    // Update mouse position on mouse move
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop for smooth cursor movement
    const animateCursor = () => {
      const cursorEl = cursorRef.current;

      if (cursorEl) {
        // Smoothly interpolate cursor position
        cursorPosition.current.x +=
          (mousePosition.current.x - cursorPosition.current.x) * 0.1;
        cursorPosition.current.y +=
          (mousePosition.current.y - cursorPosition.current.y) * 0.1;

        // Update cursor element position
        cursorEl.style.left = `${cursorPosition.current.x}px`;
        cursorEl.style.top = `${cursorPosition.current.y}px`;
      }

      // Request the next animation frame
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    // Start the animation loop
    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    ></div>
  );
}
