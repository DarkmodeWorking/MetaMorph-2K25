import { motion } from 'framer-motion'
import React from 'react'
import BlackHole from './black-hole'

const ScheduleWithBlackHole = () => {
  return (
    <>
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

    </>
  )
}

export default ScheduleWithBlackHole