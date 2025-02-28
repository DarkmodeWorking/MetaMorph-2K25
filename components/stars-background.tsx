"use client"

import { useEffect, useRef } from "react"

interface StarsBackgroundProps {
  starsCount?: number
}

export default function StarsBackground({ starsCount = 100 }: StarsBackgroundProps) {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!starsRef.current) return

    // Clear any existing stars
    starsRef.current.innerHTML = ""

    // Create stars
    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement("div")
      star.className = "star"

      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random twinkle animation duration
      star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`)

      starsRef.current.appendChild(star)
    }
  }, [starsCount])

  return <div ref={starsRef} className="parallax-stars" />
}

