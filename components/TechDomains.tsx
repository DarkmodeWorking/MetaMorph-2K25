import { motion } from 'framer-motion';
import React, { memo } from 'react';
import PlanetModel from './planet-model';
import { MorphingText } from "@/components/ui/liquid-text";

const texts = [
  "Coming Soon",
  "Stay Tuned",
  "For More",
  "Updates",
];

const TechDomains = () => {
  return (
    <section className="space-section pt-20">
      <div className="container mb-60 mx-auto px-4">
        <AnimatedHeader />
        <br />
        <PlanetGrid />
        {/* <MorphingText texts={texts} /> */}
      </div>
    </section>
  );
};

const AnimatedHeader = memo(() => (
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
      Explore our futuristic challenge domains and push the boundaries of technology
    </p>
  </motion.div>
));

const PlanetGrid = memo(() => (
  <div className='mt-40'>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
  {planetData.slice(0, 4).map((planet, index) => (
    <div key={index} className="h-80 relative">
      <PlanetModel {...planet} />
    </div>
  ))}
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
  {planetData.slice(4).map((planet, index) => (
    <div key={index + 4} className="h-80 relative">
      <PlanetModel {...planet} />
    </div>
  ))}
</div>
  </div>
  


));

const planetData = [
  { name: "Cyber Security ", color: "#2563eb", glowColor: "#3b82f6", size: 12, hasMoons: true, moonCount: 1 },
  { name: "AI & ML", color: "#dc2626", glowColor: "#ef4444", size: 16, rotationSpeed: 30, hasRings: true },
  { name: "Blockchain", color: "#0891b2", glowColor: "#06b6d4", size: 10, rotationSpeed: 15, hasMoons: true, moonCount: 2 },
  { name: "AR / VR", color: "#7c3aed", glowColor: "#8b5cf6", size: 14, rotationSpeed: 20, hasMoons: true, moonCount: 3 },
  { name: "Hardware / IOT", color: "#059669", glowColor: "#10b981", size: 13, rotationSpeed: 25, hasRings: true },
  { name: "Web / App / Cloud", color: "#d97706", glowColor: "#f59e0b", size: 11, rotationSpeed: 22, hasRings: true, hasMoons: true, moonCount: 2 },
  { name: "Open Inovation", color: "#6366f1", glowColor: "#818cf8", size: 15, rotationSpeed: 18, hasMoons: true, moonCount: 1 },
  
];

export default TechDomains;
