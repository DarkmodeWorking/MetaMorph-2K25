"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface BlackHoleProps {
  size: number
}

export default function BlackHole({ size }: BlackHoleProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing elements first
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // Create a background glow to make the black hole visible against dark backgrounds
    const backgroundGlow = document.createElement("div")
    backgroundGlow.style.position = "absolute"
    backgroundGlow.style.top = "50%"
    backgroundGlow.style.left = "50%"
    backgroundGlow.style.width = `${size * 3}rem`
    backgroundGlow.style.height = `${size * 3}rem`
    backgroundGlow.style.borderRadius = "50%"
    backgroundGlow.style.background = "radial-gradient(circle, rgba(100, 100, 255, 0.2), rgba(50, 50, 100, 0.1) 40%, transparent 70%)"
    backgroundGlow.style.transform = "translate(-50%, -50%)"
    backgroundGlow.style.zIndex = "1"
    containerRef.current.appendChild(backgroundGlow)

    // Create accretion disk with better visibility
    const accretionDisk = document.createElement("div")
    accretionDisk.style.position = "absolute"
    accretionDisk.style.top = "50%"
    accretionDisk.style.left = "50%"
    accretionDisk.style.width = `${size * 2.5}rem`
    accretionDisk.style.height = `${size * 2.5}rem`
    accretionDisk.style.borderRadius = "50%"
    accretionDisk.style.background = "transparent"
    accretionDisk.style.boxShadow = "0 0 30px rgba(150, 100, 255, 0.5)"
    accretionDisk.style.border = "2px solid rgba(180, 130, 255, 0.7)"
    accretionDisk.style.transform = "translate(-50%, -50%) rotate(0deg)"
    accretionDisk.style.animation = "rotate-disk 20s linear infinite"
    accretionDisk.style.zIndex = "2"
    containerRef.current.appendChild(accretionDisk)

    // Add keyframes for the rotation animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rotate-disk {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    // Create gravitational lensing effect with better visibility
    const lensCount = 8
    for (let i = 0; i < lensCount; i++) {
      const lens = document.createElement("div")
      lens.style.position = "absolute"
      lens.style.top = "50%"
      lens.style.left = "50%"
      lens.style.width = `${size * 2.5}rem`
      lens.style.height = `${size * 0.05}rem`
      lens.style.background = "rgba(200, 180, 255, 0.15)"
      lens.style.borderRadius = "50%"
      lens.style.transform = `translate(-50%, -50%) rotate(${i * (360 / lensCount)}deg)`
      lens.style.filter = "blur(5px)"
      lens.style.zIndex = "3"
      containerRef.current.appendChild(lens)
    }

    // Create the event horizon (the black hole itself)
    const eventHorizon = document.createElement("div")
    eventHorizon.style.position = "absolute"
    eventHorizon.style.top = "50%"
    eventHorizon.style.left = "50%"
    eventHorizon.style.width = `${size * 0.8}rem`
    eventHorizon.style.height = `${size * 0.8}rem`
    eventHorizon.style.background = "#000"
    eventHorizon.style.borderRadius = "50%"
    eventHorizon.style.transform = "translate(-50%, -50%)"
    eventHorizon.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(100, 100, 255, 0.3)"
    eventHorizon.style.zIndex = "4"
    containerRef.current.appendChild(eventHorizon)

    // Add a subtle blue ring around the event horizon for better visibility
    const blueRing = document.createElement("div")
    blueRing.style.position = "absolute"
    blueRing.style.top = "50%"
    blueRing.style.left = "50%"
    blueRing.style.width = `${size * 0.9}rem`
    blueRing.style.height = `${size * 0.9}rem`
    blueRing.style.borderRadius = "50%"
    blueRing.style.border = "2px solid rgba(100, 100, 255, 0.6)"
    blueRing.style.transform = "translate(-50%, -50%)"
    blueRing.style.boxShadow = "0 0 10px rgba(100, 100, 255, 0.4)"
    blueRing.style.zIndex = "5"
    containerRef.current.appendChild(blueRing)

    // Create light particles being sucked in
    const particleCount = 15
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.style.position = "absolute"
      particle.style.width = "2px"
      particle.style.height = "2px"
      particle.style.background = "white"
      particle.style.borderRadius = "50%"

      // Random starting position on a circle around the black hole
      const angle = Math.random() * Math.PI * 2
      const distance = size * (1.5 + Math.random())
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance

      particle.style.top = `calc(50% + ${y}rem)`
      particle.style.left = `calc(50% + ${x}rem)`

      // Animation to be sucked into the black hole
      particle.animate(
        [
          {
            transform: "scale(1) translate(0, 0)",
            opacity: 0.8,
          },
          {
            transform: `scale(0.1) translate(${-x * 10}px, ${-y * 10}px)`,
            opacity: 0,
          },
        ],
        {
          duration: 3000 + Math.random() * 2000,
          iterations: Number.POSITIVE_INFINITY,
        },
      )

      containerRef.current.appendChild(particle)
    }
  }, [size])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }} // Changed from 0.3 to 0.1 to trigger earlier
      transition={{ duration: 0.8 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Container for the black hole - actual elements are created in useEffect */}
    </motion.div>
  )
}
