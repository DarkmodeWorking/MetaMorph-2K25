"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star, Sparkles, Crown } from "lucide-react";

interface Prize {
  amount: string;
  position: number;
  color: string;
  glow: string;
  description: string;
  shape: "round" | "hexagon" | "star";
}

export default function PrizeDisplay() {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [spacing, setSpacing] = useState(250);

  // Responsive spacing
  useEffect(() => {
    const updateSpacing = () => {
      const width = containerRef.current?.offsetWidth || 800;
      setSpacing(Math.min(width * 0.3, 300));
    };

    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  // Define prizes (order in the array does not matter as we use prize.position)
  const prizes: Prize[] = [
    { 
      amount: "30K", 
      position: 1, 
      color: "#FFD700", 
      glow: "#FFEA80", 
      description: "Grand Champion", 
      shape: "round"
    },
    { 
      amount: "15K", 
      position: 3, 
      color: "#CD7F32", // Bronze for third
      glow: "#E0A96D",
      description: "Valiant Warrior", 
      shape: "round"
    },
   
    
    { 
      amount: "20K", 
      position: 2, 
      color: "#C0C0C0", // Silver for second
      glow: "#D4D4D4",
      description: "Noble Challenger", 
      shape: "round"
    },
   
  ];

  // Animate orbital rings continuously
  const orbitControls = useAnimation();
  useEffect(() => {
    orbitControls.start({
      rotate: 360,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [orbitControls]);

  return (
    <div className="relative w-full min-h-[700px] perspective-1000 overflow-hidden md:overflow-visible" ref={containerRef}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Cosmic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-amber-900/20 via-purple-900/20 to-emerald-900/20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-center text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-500 to-emerald-400">
          Cosmic Rewards
        </h2>
        <p className="text-center text-xl text-blue-200/80 mb-16 max-w-2xl mx-auto">
          Venture into the unknown and claim your place among the stars with these stellar prizes
        </p>

        {/* 3D space with prizes */}
        <div className="preserve-3d w-full h-[500px] flex items-center justify-center">
          <div className="relative preserve-3d w-full max-w-4xl h-full">
            {prizes.map((prize, index) => {
              // Calculate fixed offsets based on prize.position for podium layout
              let offsetX = 0;
              let offsetY = 0;
              if (prize.position === 1) {
                // First place: centered and highest
                offsetX = 0;
                offsetY = -110;
              } else if (prize.position === 2) {
                // Second place: left and slightly lower than first
                offsetX = -spacing;
                offsetY = 25;
              } else if (prize.position === 3) {
                // Third place: right and lowest
                offsetX = spacing;
                offsetY = 60;
              }
              const isFirstPrize = prize.position === 1;
              const size = isFirstPrize ? 64 : 48;

              return (
                // Wrap each prize in an absolutely positioned container centered in the parent
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`
                  }}
                >
                  <motion.div
                    className="preserve-3d origin-center"
                    style={{ 
                      width: `${size * 4}px`,
                      height: `${size * 4}px`,
                      z: hoveredPlanet === index ? 100 : 0
                    }}
                    animate={{ 
                      // Apply a gentle vertical bounce and subtle rotation when hovered
                      y: [0, 10, 0],
                      rotateY: hoveredPlanet === index ? [0, 10, 0] : 0
                    }}
                    transition={{ 
                      y: { 
                        repeat: Infinity, 
                        duration: 3 + index * 0.5,
                        ease: "easeInOut" 
                      },
                      rotateY: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut"
                      }
                    }}
                    onMouseEnter={() => setHoveredPlanet(index)}
                    onMouseLeave={() => setHoveredPlanet(null)}
                  >
                    {/* Glowing background */}
                    <div
                      className={`absolute inset-0 blur-xl opacity-50 transition-all duration-500 ${
                        hoveredPlanet === index ? "scale-110 opacity-70" : "scale-100"
                      } ${{
                        round: "rounded-full",
                        hexagon: "clip-hexagon",
                        star: "clip-star"
                      }[prize.shape]}`}
                      style={{ backgroundColor: prize.glow }}
                    />

                    {/* Orbital ring – stable (no hover scaling) */}
                    <motion.div
                      className={`absolute -inset-4 border-2 border-opacity-30 transition-all duration-500 ${
                        {
                          round: "rounded-full",
                          hexagon: "clip-hexagon",
                          star: "clip-star"
                        }[prize.shape]
                      }`}
                      style={{ borderColor: prize.color }}
                      animate={orbitControls}
                    />

                    {/* Inner planet with hover scaling */}
                    <div
                      className={`relative flex flex-col items-center justify-center w-full h-full transition-transform duration-500 ${
                        hoveredPlanet === index ? "scale-110" : "scale-100"
                      } ${{
                        round: "rounded-full",
                        hexagon: "clip-hexagon",
                        star: "clip-star"
                      }[prize.shape]}`}
                      style={{
                        backgroundColor: prize.color,
                        boxShadow: `0 0 ${isFirstPrize ? '80px' : '60px'} ${prize.glow}`,
                      }}
                    >
                      {/* Prize crown: different crown for each podium position */}
                      {prize.position === 1 && (
                        <Crown className="absolute -top-6 w-12 h-12 fill-amber-400 text-amber-600" />
                      )}
                      {prize.position === 2 && (
                        <Crown className="absolute -top-6 w-12 h-12 fill-gray-300 text-gray-400" />
                      )}
                      {prize.position === 3 && (
                        <Crown className="absolute -top-6 w-12 h-12 fill-amber-800 text-amber-900" />
                      )}

                      {/* Prize amount */}
                      <div className="relative">
                        <span className="absolute -inset-1 blur-sm opacity-70" style={{ color: prize.glow }}>
                          ${prize.amount}
                        </span>
                        <span className={`relative ${isFirstPrize ? 'text-6xl' : 'text-5xl'} font-bold text-white`}>
                          ${prize.amount}
                        </span>
                      </div>

                      {/* Position indicators */}
                      <div className="mt-2 flex items-center gap-1">
                        {Array.from({ length: 4 - prize.position }).map((_, i) => (
                          <Star key={i} className={`${isFirstPrize ? 'w-6 h-6' : 'w-5 h-5'} fill-white text-white`} />
                        ))}
                      </div>

                      <div className="mt-2 text-white font-medium text-center px-2">
                        {prize.description}
                      </div>
                    </div>

                    {/* Floating particles on hover */}
                    {hoveredPlanet === index && (
                      <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-3 h-3 rounded-full bg-white/80"
                            initial={{ scale: 0 }}
                            animate={{
                              scale: [0, 1, 0],
                              x: Math.random() * 40 - 20,
                              y: Math.random() * 40 - 20
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2 + Math.random() * 2,
                              delay: i * 0.2
                            }}
                            style={{
                              boxShadow: `0 0 8px ${prize.glow}`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative elements */}
        <Sparkles className="absolute top-10 md:top-1/4 left-40 w-8 h-8 text-blue-400 opacity-50" />
        <Sparkles className="absolute bottom-5 lg:bottom-10 right-40 w-8 h-8 text-purple-400 opacity-50" />
        <Sparkles className="absolute bottom-5 lg:bottom-10 left-40 w-8 h-8 text-blue-400 opacity-50" />
        <Sparkles className="absolute top-10 md:top-1/4 right-40 w-8 h-8 text-purple-400 opacity-50" />
      </div>
    </div>
  );
}
