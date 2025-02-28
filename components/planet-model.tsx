"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

interface PlanetModelProps {
  name: string
  color: string
  glowColor: string
  size: number
  rotationSpeed?: number
  hasMoons?: boolean
  moonCount?: number
  hasRings?: boolean
  textureType?: "rocky" | "gaseous" | "icy"
}

export default function PlanetModel({
  name,
  color,
  glowColor,
  size,
  rotationSpeed = 20,
  hasMoons = false,
  moonCount = 1,
  hasRings = false,
  textureType = "rocky",
}: PlanetModelProps) {
  const planetRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!planetRef.current || !containerRef.current) return

    // Create planet texture
    const texture = document.createElement("div")
    texture.className = "planet-texture"

    if (textureType === "rocky") {
      // Create craters for rocky planets
      for (let i = 0; i < 8; i++) {
        const crater = document.createElement("div")
        crater.className = "planet-crater"

        // Random size and position
        const craterSize = 0.1 + Math.random() * 0.2
        crater.style.width = `${craterSize * size}rem`
        crater.style.height = `${craterSize * size}rem`
        crater.style.left = `${Math.random() * 80 + 10}%`
        crater.style.top = `${Math.random() * 80 + 10}%`

        texture.appendChild(crater)
      }

      // Add surface texture gradient
      texture.style.background = `radial-gradient(circle at 30% 30%, ${color}, ${adjustColor(color, -20)})`
    } else if (textureType === "gaseous") {
      // Create bands for gas giants
      texture.style.background = `
        repeating-linear-gradient(
          ${Math.random() * 30 - 15}deg,
          ${color} 0%,
          ${adjustColor(color, 10)} 5%,
          ${color} 10%,
          ${adjustColor(color, -10)} 15%,
          ${color} 20%
        )
      `
    } else if (textureType === "icy") {
      // Create icy texture
      texture.style.background = `
        linear-gradient(
          135deg,
          ${adjustColor(color, 20)} 0%,
          ${color} 50%,
          ${adjustColor(color, -10)} 100%
        )
      `
      texture.style.opacity = "0.9"
    }

    planetRef.current.appendChild(texture)

    // Create moons if needed
    if (hasMoons && moonCount > 0) {
      for (let i = 0; i < moonCount; i++) {
        const orbit = document.createElement("div")
        orbit.className = "orbit"

        // Random orbit size between 1.5 and 2.5 times planet size
        const orbitSize = (1.5 + Math.random()) * size
        orbit.style.width = `${orbitSize}rem`
        orbit.style.height = `${orbitSize}rem`
        orbit.style.top = `${size / 2 - orbitSize / 2}rem`
        orbit.style.left = `${size / 2 - orbitSize / 2}rem`

        const moon = document.createElement("div")
        moon.className = "moon"

        // Random moon size between 0.2 and 0.4 times planet size
        const moonSize = (0.2 + Math.random() * 0.2) * size
        moon.style.width = `${moonSize}rem`
        moon.style.height = `${moonSize}rem`

        // Add texture to moon
        moon.style.background = `radial-gradient(circle at 40% 40%, #ccc, #999)`
        moon.style.boxShadow = "inset -5px -5px 10px rgba(0,0,0,0.3)"

        // Random orbit position
        const angle = Math.random() * 360
        const orbitRadius = orbitSize / 2
        moon.style.left = `${Math.cos(angle) * orbitRadius + orbitRadius}px`
        moon.style.top = `${Math.sin(angle) * orbitRadius + orbitRadius}px`

        orbit.appendChild(moon)
        containerRef.current.appendChild(orbit)
      }
    }

    // Create rings if needed
    if (hasRings) {
      const ringsContainer = document.createElement("div")
      ringsContainer.className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ringsContainer.style.width = `${size * 1.8}rem`
      ringsContainer.style.height = `${size * 0.4}rem`
      ringsContainer.style.borderRadius = "50%"
      ringsContainer.style.transform = "translateX(-50%) translateY(-50%) rotateX(75deg)"

      // Create multiple ring layers
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement("div")
        ring.style.position = "absolute"
        ring.style.top = "0"
        ring.style.left = "0"
        ring.style.right = "0"
        ring.style.bottom = "0"
        ring.style.borderRadius = "50%"
        ring.style.border = `2px solid ${adjustColor(color, i * 10 - 10)}`
        ring.style.opacity = `${0.7 - i * 0.15}`

        ringsContainer.appendChild(ring)
      }

      containerRef.current.appendChild(ringsContainer)
    }

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !planetRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(planetRef.current, {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: "power2.out",
      })
    }

    containerRef.current.addEventListener("mousemove", handleMouseMove)

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [size, hasMoons, moonCount, hasRings, color, textureType])

  // Helper function to adjust color brightness
  function adjustColor(color: string, amount: number): string {
    // For hex colors
    if (color.startsWith("#")) {
      return color
    }

    // For named colors, return a slightly different shade
    const colors = {
      red: ["#ff6666", "#cc0000", "#990000"],
      blue: ["#6666ff", "#0000cc", "#000099"],
      green: ["#66ff66", "#00cc00", "#009900"],
    }

    return color
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }} // Changed from 0.3 to 0.1 to trigger earlier
      transition={{ duration: 0.8 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div
        className="glow"
        style={{
          width: `${size * 1.3}rem`,
          height: `${size * 1.3}rem`,
          backgroundColor: glowColor,
          borderRadius: "50%",
          filter: "blur(1.5rem)",
          position: "absolute",
          opacity: "0.6",
          zIndex: "1"
        }}
      />
      <div
        ref={planetRef}
        className="planet"
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          backgroundColor: color,
          borderRadius: "50%",
          position: "relative",
          overflow: "hidden",
          zIndex: "2",
          boxShadow: `0 0 ${size/2}px rgba(${parseInt(glowColor.slice(1,3), 16)}, ${parseInt(glowColor.slice(3,5), 16)}, ${parseInt(glowColor.slice(5,7), 16)}, 0.3)`
        }}
      >
        {/* Planet surface details */}
        <div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 70%)`,
          }}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
    </motion.div>
  )
}
