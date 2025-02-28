"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      viewport={{ once: false, amount: 0.2 }} // Adjust 'amount' for when the animation should trigger (0 = top, 1 = bottom)
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      }}
      className="min-h-screen pt-16"
    >
      {children}
    </motion.div>
  )
}
