import { motion } from 'framer-motion'
import React from 'react'

const Prizes = () => {
  return (
    <>
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
    </>
  )
}

export default Prizes