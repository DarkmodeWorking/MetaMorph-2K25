"use client";
import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarsBackground from "@/components/stars-background";
import Hero from "@/components/Hero";
import TechDomains from "@/components/TechDomains";
import Prizes from "@/components/Prizes";
import ScheduleWithBlackHole from "@/components/ScheduleWithBlackHole";
import CallToAction from "@/components/CallToAction";
import Wormhole from "@/components/Wormhole";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <main className="relative min-h-screen">
      <StarsBackground starsCount={300} />
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