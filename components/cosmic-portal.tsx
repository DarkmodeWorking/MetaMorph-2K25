"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { motion } from "framer-motion"

interface CosmicPortalProps {
  size: number
  primaryColor: string
  secondaryColor: string
  layerCount?: number
}

export default function CosmicPortal({ size, primaryColor, secondaryColor, layerCount = 5 }: CosmicPortalProps) {
  const portalRef = useRef<HTMLDivElement>(null)
  const wormholeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!portalRef.current || !wormholeRef.current) return

    // Clear any existing elements first
    while (portalRef.current.firstChild) {
      portalRef.current.removeChild(portalRef.current.firstChild);
    }
    
    while (wormholeRef.current.firstChild) {
      wormholeRef.current.removeChild(wormholeRef.current.firstChild);
    }

    // Create portal rings
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement("div")
      ring.className = "portal-ring"

      const ringSize = size * (1 - i * 0.1)
      ring.style.width = `${ringSize}rem`
      ring.style.height = `${ringSize}rem`
      ring.style.top = `${(size - ringSize) / 2}rem`
      ring.style.left = `${(size - ringSize) / 2}rem`
      ring.style.borderColor = i % 2 === 0 ? primaryColor : secondaryColor
      ring.style.position = "absolute"
      ring.style.borderRadius = "50%"
      ring.style.borderWidth = "4px"
      ring.style.borderStyle = "solid"

      // Animate the rings
      gsap.to(ring, {
        rotation: 360,
        duration: 10 + i * 5,
        repeat: -1,
        ease: "linear",
      })

      portalRef.current.appendChild(ring)
    }

    // Create wormhole layers
    for (let i = 0; i < layerCount; i++) {
      const layer = document.createElement("div")
      layer.className = "wormhole-layer"
      layer.style.position = "absolute"
      layer.style.width = "100%"
      layer.style.height = "100%"
      layer.style.borderRadius = "50%"
      layer.style.border = `2px solid ${i % 2 === 0 ? primaryColor : secondaryColor}`
      layer.style.boxShadow = `0 0 10px ${i % 2 === 0 ? primaryColor : secondaryColor}`

      // Scale down each deeper layer
      const scale = 1 - i * 0.15
      layer.style.transform = `scale(${scale}) translateZ(${-i * 20}px)`

      // Animate rotation
      gsap.to(layer, {
        rotation: i % 2 === 0 ? 360 : -360,
        duration: 15 - i,
        repeat: -1,
        ease: "linear",
      })

      wormholeRef.current.appendChild(layer)
    }

    // Add a glowing center
    const center = document.createElement("div")
    center.style.position = "absolute"
    center.style.width = "30%"
    center.style.height = "30%"
    center.style.borderRadius = "50%"
    center.style.background = `radial-gradient(circle, ${primaryColor}, ${secondaryColor})`
    center.style.top = "35%"
    center.style.left = "35%"
    center.style.filter = "blur(5px)"
    center.style.animation = "pulse 2s infinite alternate"
    
    // Add keyframes for the pulse animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { opacity: 0.7; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1.05); }
      }
    `;
    document.head.appendChild(style);
    
    wormholeRef.current.appendChild(center);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!portalRef.current) return

      const rect = portalRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(portalRef.current, {
        rotationX: y * 10,
        rotationY: x * 10,
        duration: 1,
        ease: "power2.out",
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [size, primaryColor, secondaryColor, layerCount])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }} // Changed from 0.3 to 0.1 to trigger earlier
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <div
        ref={portalRef}
        className="cosmic-portal"
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          position: "relative",
          perspective: "1000px",
          zIndex: "10"
        }}
      >
        <div 
          ref={wormholeRef} 
          className="wormhole" 
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${primaryColor}33, transparent 70%)`,
            overflow: "hidden",
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
    </motion.div>
  )
}
