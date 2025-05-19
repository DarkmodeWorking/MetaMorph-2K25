import { motion } from 'framer-motion'
import React from 'react'

const CallToAction = () => {
  return (
    <>
    <section className="py-20">
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
    </>
  )
}

export default CallToAction