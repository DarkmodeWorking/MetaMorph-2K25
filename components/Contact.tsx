"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function CosmicContact() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Generate stars for background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const stars = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05,
        color: i % 5 === 0 ? "#8b5cf6" : i % 7 === 0 ? "#ec4899" : "#ffffff",
      })
    }

    // function animate() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height)

    //   stars.forEach((star) => {
    //     ctx.beginPath()
    //     ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
    //     ctx.fillStyle = `${star.color}${Math.floor(star.opacity * 255)
    //       .toString(16)
    //       .padStart(2, "0")}`
    //     ctx.fill()

    //     star.y += star.speed
    //     if (star.y > canvas.height) {
    //       star.y = 0
    //       star.x = Math.random() * canvas.width
    //     }
    //   })

    //   requestAnimationFrame(animate)
    // }

    // animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const contactOptions = [
    {
      title: "TRANSMIT A MESSAGE",
      icon: <Mail className="w-8 h-8" />,
      description: "Send us a subspace transmission",
      action: "MAIL US",
      href: "mailto:contact@metamorph-hackathon.com",
      color: "#6366f1",
      hoverColor: "#818cf8",
    },
    {
      title: "ESTABLISH COMMS",
      icon: <Phone className="w-8 h-8" />,
      description: "Direct communication channel",
      action: "CALL US",
      href: "tel:+1234567890",
      color: "#ec4899",
      hoverColor: "#f472b6",
    },
    {
      title: "JOIN OUR NEBULA",
      icon: <MessageSquare className="w-8 h-8" />,
      description: "Connect with fellow cosmic coders",
      action: "DISCORD",
      href: "https://discord.gg/metamorph-hackathon",
      color: "#06b6d4",
      hoverColor: "#22d3ee",
    },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/metamorph-hackathon" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/metamorph_hack" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/metamorph-hackathon" },
  ]

  return (
    <div className="relative w-full h-auto overflow-hidden py-16 px-4 md:px-8">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Cosmic glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl" />
            <h2 className="relative text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              COSMIC CONNECTIONS
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-purple-500/50" />
            <p className="text-xl text-blue-200/80">CONTACT MISSION CONTROL</p>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-purple-500/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-blue-100/70"
          >
            Have questions about the MetaMorph hackathon? Our mission control team is standing by to assist you on your
            cosmic coding journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Animated border glow */}
              <div
                className={`absolute -inset-0.5 rounded-3xl opacity-75 blur-sm transition-all duration-300 ${hoveredCard === index ? "opacity-100 scale-105" : "opacity-50 scale-100"}`}
                style={{
                  background: `linear-gradient(45deg, ${option.color}, transparent)`,
                  filter: "blur(8px)",
                }}
              />

              <Card className="relative border-0 bg-black/40 backdrop-blur-sm overflow-hidden rounded-3xl h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60 z-0" />

                {/* Animated particles */}
                {hoveredCard === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full z-0"
                        initial={{
                          x: "50%",
                          y: "50%",
                          opacity: 0.8,
                          scale: 0,
                        }}
                        animate={{
                          x: `${50 + (Math.random() * 60 - 30)}%`,
                          y: `${50 + (Math.random() * 60 - 30)}%`,
                          opacity: 0,
                          scale: 2,
                        }}
                        transition={{
                          duration: 1.5 + Math.random(),
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          delay: i * 0.2,
                        }}
                        style={{ backgroundColor: option.color }}
                      />
                    ))}
                  </>
                )}

                <CardHeader className="relative z-10 pb-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">{option.title}</h3>
                    <div
                      className="p-2 rounded-full transition-colors duration-300"
                      style={{
                        color: hoveredCard === index ? option.hoverColor : option.color,
                        backgroundColor: hoveredCard === index ? `${option.color}20` : "transparent",
                      }}
                    >
                      {option.icon}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 py-2">
                  <p className="text-blue-100/70">{option.description}</p>
                </CardContent>

                <CardFooter className="relative z-10 mt-auto pt-4">
                  <a
                    href={option.href}
                    target={option.href.startsWith("http") ? "_blank" : undefined}
                    rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-full"
                  >
                    <Button
                      className="w-full group relative rounded-full overflow-hidden border-0 transition-all duration-300"
                      style={{
                        backgroundColor: hoveredCard === index ? option.hoverColor : option.color,
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {option.action}
                        {option.href.startsWith("http") && <ExternalLink className="w-4 h-4" />}
                      </span>
                      <span
                        className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-y-full group-hover:translate-y-0"
                        style={{ backgroundColor: option.hoverColor }}
                      />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-200/80 mb-4">Follow our cosmic journey</p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-black/40 border border-purple-500/30 text-white hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

