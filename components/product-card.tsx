"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { gsap } from "gsap"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  collection?: string
  index: number
}

export default function ProductCard({ id, name, price, image, collection, index }: ProductCardProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const imageRef = useRef<HTMLImageElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // GSAP animation for hover effect
  useEffect(() => {
    if (!imageRef.current) return

    if (isHovered) {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
      })
    } else {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }, [isHovered])

  // Framer Motion animation for card appearance
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
          },
        },
      }}
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${id}`}>
        <div className="relative overflow-hidden rounded-lg bg-secondary aspect-[3/4]">
          <div ref={imageRef} className="w-full h-full relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {collection && (
            <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs">
              {collection}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-3"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{name}</span>
              <span className="text-primary font-bold">${price}</span>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

