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
import { Sponsors } from "@/components/sponsors";
import Hero from "@/components/Hero";
import TechDomains from "@/components/TechDomains";
import Prizes from "@/components/Prizes";
import ScheduleWithBlackHole from "@/components/ScheduleWithBlackHole";
import CallToAction from "@/components/CallToAction";
import Wormhole from "@/components/Wormhole";
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
      <StarsBackground starsCount={300} />
      <div>
        <ThreeScene />
      </div>

      {/* Intro Section */}
      <Hero/>

      <div ref={sectionsRef}>
        {/* Challenge  Section */}
        <TechDomains/>
        {/* Prizes Section */}
        <Prizes/>
        {/* Sponsors Section */}
        {/* <Sponsors/> */}
        {/* Wormhole Section */}
          <Wormhole/>
        {/* Schedule Section with Black Hole */}
          <ScheduleWithBlackHole/>
        {/* Call to Action Section */}
        <CallToAction/>
      </div>
    </main>
  );
}