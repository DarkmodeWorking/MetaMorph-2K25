import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeScene from './three-scene';
// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
const Hero = () => {
    const introRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    useEffect(() => {
        // Set loaded state
        setIsLoaded(true);
    
        // Intro text animation
        if (introRef.current) {
          gsap.from(introRef.current.querySelectorAll(".animate-text"), {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
          });
        }
    
        // Add scroll listener to detect direction
        let lastScrollTop = 0;
        const handleScroll = () => {
          const st = window.scrollY || document.documentElement.scrollTop;
          lastScrollTop = st <= 0 ? 0 : st;
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <>
    <div>
        <ThreeScene />
      </div>
     <section className="space-section max-h-screen flex flex-col items-center justify-center">
        <motion.div
          ref={introRef}
          className="container mx-auto px-4 text-center z-10"
          style={{ opacity }}
        >
          <motion.h1
            className="animate-text text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >MetaMorph</motion.h1>
          <motion.p
            className="animate-text text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your ideas into reality in this cyberpunk-themed coding
            extravaganza
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
              Register Now
            </button>
          </motion.div>
        </motion.div>

        <motion.div className="scroll-prompt" style={{ opacity }}>
          <span className="mb-2">Scroll to explore</span>
          <ChevronDown className="animate-bounce" />
        </motion.div>
      </section>
    </>
  )
}

export default Hero