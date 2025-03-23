"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Star, Sparkles, Rocket, Zap, HelpCircle } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
  icon: React.ReactNode
}

export default function CosmicFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Generate stars for background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // const stars = []
    // for (let i = 0; i < 150; i++) {
    //   stars.push({
    //     x: Math.random() * canvas.width,
    //     y: Math.random() * canvas.height,
    //     radius: Math.random() * 1.5,
    //     opacity: Math.random(),
    //     speed: Math.random() * 0.05,
    //     color: i % 5 === 0 ? "#8b5cf6" : i % 7 === 0 ? "#ec4899" : "#ffffff",
    //   })
    // }

    // function animate() {
    //   if (ctx) {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //   }

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

  const faqItems: FaqItem[] = [
    {
      question: "What is MetaMorph Hackathon?",
      answer:
        "MetaMorph is a 36-hour cosmic coding adventure where innovators from across the galaxy come together to build groundbreaking projects. Our hackathon creates a gravitational pull of talent, bringing together the brightest minds to form a singularity of innovation in the tech universe.",
      icon: <Rocket className="w-5 h-5 text-blue-400" />,
    },
    {
      question: "How do I register for the hackathon?",
      answer:
        "Registration is simple! Navigate to our Registration Portal through the 'Register Now' button on the homepage. You can register as an individual or as a team of up to 4 members. Make sure to complete your cosmic profile with all required information before the registration deadline.",
      icon: <Star className="w-5 h-5 text-purple-400" />,
    },
    // {
    //   question: "What are the prize categories?",
    //   answer:
    //  " MetaMorph offers stellar rewards, with ₹30K for the First Prize and ₹20K for the Second Prize in each challenge domain! Plus, there are special category prizes like Best Beginners Team. Track-specific prizes will also be available, determined by our track partners. More challenges, more ways to win!",
    //   icon: <Sparkles className="w-5 h-5 text-pink-400" />,
    // },
    {
      question: "What technologies can we use?",
      answer:
        "You're free to explore any technology in the universe! Our challenge domains include AI & ML, Cyber Security, Blockchain Revolution, and more. We encourage innovative use of emerging technologies, but the choice is entirely yours. You can use any programming language, framework, or platform you prefer. Feel free to mix and match multiple technologies—creativity knows no limits.",
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
    },
    {
      question: "Do I need to have a team?",
      answer:
        "While teams of up to 4 members are recommended for interstellar collaboration, solo participants are welcome too! We'll also have a team formation event at the beginning of the hackathon where you can find fellow cosmic travelers to join forces with.",
      icon: <HelpCircle className="w-5 h-5 text-green-400" />,
    },
    {
      question: "Will there be mentors available?",
      answer:
        "Our galaxy of mentors includes industry experts, experienced developers, and technology specialists who will be orbiting throughout the event. They'll provide guidance, technical support, and help you navigate any black holes you encounter during development.",
      icon: <Star className="w-5 h-5 text-yellow-400" />,
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
"Pack your spacecraft with a laptop, charger, any specialized hardware for your project, and your cosmic creativity! We'll provide the fuel—food, drinks, internet, power outlets, and a comfortable space station environment for all participants. If you have any special medical needs, don’t forget to bring your essential medicines. Also, carrying a water bottle is always a good idea to stay hydrated on this intergalactic journey!" ,
      icon: <Rocket className="w-5 h-5 text-orange-400" />,
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden py-16 px-4 md:px-8">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Cosmic glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center justify-center">
          <div className="h-full md:mt-32">
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              COSMIC QUERIES
              <br />
              ANSWERED
            </motion.h2>
            <motion.p
              className="text-xl text-blue-200/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Navigate the MetaMorph universe with our guide to frequently asked questions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/contacts"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Contact Mission Control
              </a>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-8 left-10 opacity-50 pointer-events-none">
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute top-96 left-20 opacity-50 pointer-events-none">
              <Star className="w-6 h-6 text-purple-400" />
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Glow effect on hover */}
                {hoverIndex === index && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm" />
                )}

                <div className="relative border border-purple-500/30 rounded-lg overflow-hidden backdrop-blur-sm bg-black/40">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <span className="font-medium text-white">{item.question}</span>
                    </div>
                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 border-t border-purple-500/30 text-blue-100/80">{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Particle effects on open */}
                {openIndex === index && (
                  <>
                    <motion.div
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: [0, -20, -40],
                        y: [0, -10, -5],
                      }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                      className="absolute w-2 h-2 rounded-full bg-blue-400/60 right-4 top-4"
                    />
                    <motion.div
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: [0, -10, -20],
                        y: [0, 10, 20],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.3 }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/60 right-8 top-6"
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

