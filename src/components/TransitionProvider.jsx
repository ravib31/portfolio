"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  const [cursorStyle, setCursorStyle] = useState({
    left: "0px",
    top: "0px",
  });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      });

      // Create particles on movement
      setParticles((prev) => [
        ...prev,
        {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 2, // Random size
          opacity: 1,
        },
      ]);
    };

    const cleanupParticles = () => {
      setParticles((prev) => prev.filter((particle) => particle.opacity > 0));
    };

    window.addEventListener("mousemove", handleMouseMove);
    const particleCleanupInterval = setInterval(cleanupParticles, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(particleCleanupInterval);
    };
  }, []);

  // Update particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y - 2, // Move upwards
          opacity: particle.opacity - 0.05, // Gradually fade out
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,0,1) 0%, rgba(255,69,0,0.8) 100%)",
          pointerEvents: "none",
          transform: `translate(-50%, -50%)`,
          zIndex: 9999,
          transition: "transform 0.1s ease-out",
          ...cursorStyle,
        }}
      ></div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "fixed",
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.9)",
            pointerEvents: "none",
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.1s ease-out",
          }}
        ></div>
      ))}

      {/* Main Layout */}
      <AnimatePresence mode="wait">
        <div
          key={pathName}
          className="w-screen h-screen bg-gradient-to-b from-white to-green-400"
        >
          <motion.div
            className="h-screen w-screen fixed bg-green-600 rounded-b-[100px] z-40"
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
            initial={{ opacity:1 }}
            animate={{ opacity:0 }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {pathName.substring(1).toUpperCase()}
          </motion.div>
          <motion.div
            className="h-screen w-screen fixed bg-yellow-600 rounded-t-[100px] bottom-0 z-40"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh",transition:{delay:0.5} }}
           
          />

          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default TransitionProvider;
