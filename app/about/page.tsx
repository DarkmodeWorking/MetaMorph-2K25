"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PageTransition from "@/components/page-transition"
import CustomCursor from "@/components/cursor"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Content sections animation
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      })
    }

    // Image parallax effect
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <PageTransition>
      <CustomCursor />

      <div className="container px-4 md:px-6 py-12 md:py-20">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-medium mb-4">
            About
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">OUR COMMITMENT TO SUSTAINABILITY</h1>
          <p className="text-muted-foreground text-lg">
            In a world where the lines between technology and humanity blur, WYM/8 emerges as the ultimate brand for
            cyberpunk fashion.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div ref={imageRef} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-djCk0UuyJHVQLdBRGCl0qBTwxcmEfg.png"
                alt="Sustainable Cyberpunk Fashion"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </motion.div>
          </div>

          <div ref={contentRef}>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Each jacket is a fusion of cutting-edge technology and high-quality materials, offering not just style
                but also functionality and durability. Our commitment to sustainability means that each jacket is
                crafted with eco-friendly materials, ensuring that your futuristic style doesn't come at the cost of our
                planet's future.
              </p>

              <p className="text-muted-foreground">
                In a world where the lines between technology and humanity blur, WYM/8 emerges as the ultimate brand for
                cyberpunk fashion. Each jacket is a fusion of cutting-edge technology and high-quality materials,
                offering not just style but also functionality and durability.
              </p>

              <h3 className="text-2xl font-bold tracking-tighter mt-8 mb-4">Our Vision</h3>

              <p className="text-muted-foreground">
                To create a brand that not only pushes the boundaries of fashion but also respects the environment. We
                believe that the future of fashion lies in sustainable practices and innovative design.
              </p>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of what's possible in fashion through technology and design.",
              },
              {
                title: "Sustainability",
                description: "Creating products that are not only stylish but also environmentally responsible.",
              },
              {
                title: "Quality",
                description: "Crafting garments that are built to last, both in style and durability.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

