import { motion } from 'framer-motion'
import React from 'react'
import CosmicPortal from './cosmic-portal'

const Wormhole = () => {
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
        </section></>
  )
}

export default Wormhole