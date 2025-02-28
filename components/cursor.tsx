"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    // Add event listeners for interactive elements
    const links = document.querySelectorAll("a, button")

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setCursorVariant("hover"))
      link.addEventListener("mouseleave", () => setCursorVariant("default"))
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setCursorVariant("hover"))
        link.removeEventListener("mouseleave", () => setCursorVariant("default"))
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.5,
      backgroundColor: "rgba(250, 108, 6, 0.5)",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
  }

  const outlineVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 500,
        damping: 28,
      },
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.5,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 500,
        damping: 28,
      },
    },
  }

  // Only show custom cursor on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <motion.div className="cursor-dot hidden md:block" variants={variants} animate={cursorVariant} />
      <motion.div className="cursor-outline hidden md:block" variants={outlineVariants} animate={cursorVariant} />
    </>
  )
}

