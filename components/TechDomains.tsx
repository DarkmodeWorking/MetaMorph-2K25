import { motion } from 'framer-motion'
import React from 'react'
import PlanetModel from './planet-model'

const TechDomains = () => {
  return (
   <>
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

   </>
  )
}

export default TechDomains