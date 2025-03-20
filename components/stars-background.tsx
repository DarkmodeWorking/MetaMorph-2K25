"use client";

import { useEffect, useRef, useMemo } from "react";

interface StarsBackgroundProps {
  starsCount?: number;
}

export default function StarsBackground({ starsCount = 100 }: StarsBackgroundProps) {
  const starsRef = useRef<HTMLDivElement>(null);

  const stars = useMemo(() => {
    return Array.from({ length: starsCount }, (_, i) => {
      const size = Math.random() * 2 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 3 + 2;

      return {
        key: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          animationDuration: `${duration}s`,
        },
      };
    });
  }, [starsCount]);

  useEffect(() => {
    const currentRef = starsRef.current;
    if (!currentRef) return;

    // Clear any existing stars
    currentRef.innerHTML = "";

    // Append stars
    stars.forEach(({ key, style }) => {
      const star = document.createElement("div");
      star.className = "star";
      Object.assign(star.style, style);
      currentRef.appendChild(star);
    });
  }, [stars]);

  return <div ref={starsRef} className="parallax-stars" />;
}
