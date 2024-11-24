"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [cursorStyle, setCursorStyle] = useState({
    left: "0px",
    top: "0px",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        transition: "transform 0.1s ease-out",
        ...cursorStyle,
      }}
    ></div>
  );
}
