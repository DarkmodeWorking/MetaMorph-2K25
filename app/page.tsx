"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

import Navigation from "@/components/navigation";
import StarsBackground from "@/components/stars-background";
import ThreeScene from "@/components/three-scene";
import PlanetModel from "@/components/planet-model";
import CosmicPortal from "@/components/cosmic-portal";
import BlackHole from "@/components/black-hole";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
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
    <main className="relative min-h-screen">
      <Navigation />
      <StarsBackground starsCount={300} />
      <div>
        <ThreeScene />
      </div>

      {/* Intro Section */}
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

      <div ref={sectionsRef}>
        {/* Challenge  Section */}
        <section className="space-section py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow text-primary">
                Challenge Domains
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our futuristic challenge Domains  and push the boundaries
                of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="h-80 relative">
                <PlanetModel
                  name="AI & ML"
                  color="#2563eb"
                  glowColor="#3b82f6"
                  size={12}
                  hasMoons={true}
                  moonCount={1}
                />
              </div>
              <div className="h-80 relative">
                <PlanetModel
                  name="Web Technologies"
                  color="#dc2626"
                  glowColor="#ef4444"
                  size={16}
                  rotationSpeed={30}
                  hasRings={true}
                />
              </div>
              <div className="h-80 relative">
                <PlanetModel
                  name="Blockchain Revolution"
                  color="#0891b2"
                  glowColor="#06b6d4"
                  size={10}
                  rotationSpeed={15}
                  hasMoons={true}
                  moonCount={2}
                />
              </div>
              <div className="h-80 relative">
                <PlanetModel
                  name="AR/VR Technologies"
                  color="#7c3aed"
                  glowColor="#8b5cf6"
                  size={14}
                  rotationSpeed={20}
                  hasMoons={true}
                  moonCount={3}
                />
              </div>
              <div className="h-80 relative">
                <PlanetModel
                  name="App Development"
                  color="#059669"
                  glowColor="#10b981"
                  size={13}
                  rotationSpeed={25}
                  hasRings={true}
                />
              </div>
              <div className="h-80 relative">
                <PlanetModel
                  name="Cloud Computing"
                  color="#6366f1"
                  glowColor="#818cf8"
                  size={15}
                  rotationSpeed={18}
                  hasMoons={true}
                  moonCount={4}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="space-section py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow text-accent">
                  Epic Prizes
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Compete for a prize pool worth over ₹50,000, including
                  cutting-edge tech gadgets and exclusive opportunities.
                </p>
                <p className="text-xl text-muted-foreground mb-8">
                  Winners will also receive fast-track interviews with top tech
                  companies and potential startup funding.
                </p>
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-md text-lg font-medium hover:bg-accent/90 transition-colors">
                  View Prize Details
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
                transition={{ duration: 0.8 }}
                className="relative h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg opacity-30 animate-pulse-glow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-md max-h-md relative">
                    <div className="cosmic-grid absolute inset-0" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wormhole Section */}
        <section className="space-section py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow text-primary">
                Quantum Networking
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with fellow hackers and mentors through our advanced
                virtual collaboration platform
              </p>
            </motion.div>

            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <CosmicPortal
                  size={24}
                  primaryColor="#4f46e5"
                  secondaryColor="#a855f7"
                  layerCount={7}
                />
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-secondary/50 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Collaborative Hacking
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our quantum networking system allows for seamless
                  collaboration across dimensions. Work with teammates from
                  around the globe as if you're in the same room.
                </p>
                <p className="text-muted-foreground">
                  Access cutting-edge tools, real-time mentorship, and a vast
                  knowledge base to fuel your innovations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Schedule Section with Black Hole */}
        <section className="space-section py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
                transition={{ duration: 0.8 }}
                className="relative h-96 order-2 lg:order-1"
              >
                {/* Black Hole component */}
                <BlackHole size={16} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Event Horizon
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Prepare for 36 hours of intense coding, collaboration, and
                  innovation. Once you cross the event horizon, there's no
                  turning back from this transformative experience.
                </p>
                <p className="text-xl text-muted-foreground mb-8">
                  Our hackathon creates a gravitational pull of talent, bringing
                  together the brightest minds to form a singularity of
                  innovation in the tech universe.
                </p>
                <button className="px-6 py-3 bg-white text-black rounded-md text-lg font-medium hover:bg-white/90 transition-colors">
                  View Full Schedule
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="space-section py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Transform?
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Join the MetaMorph Hackathon and be part of the next
                technological revolution. Register now to secure your spot in
                this cyberpunk coding adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
                  Register Now
                </button>
                <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full text-lg font-medium hover:bg-secondary/90 transition-colors">
                  Sponsor Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}