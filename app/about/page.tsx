"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import {
  Rocket,
  Code,
  Users,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Star,
  Sparkles,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CosmicAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.05, 0.1, 0.3, 0.35], [0, 1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.36, 0.39, 0.65, 0.69], [0, 1, 1, 0])
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 1], [0, 1, 1, 1])

  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: "Innovation",
      description: "Push the boundaries of technology with creative solutions",
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: "Coding",
      description: "36 hours of intense coding to bring your ideas to life",
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      title: "Collaboration",
      description: "Form teams of up to 4 members to tackle challenges together",
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: "Competition",
      description: "Compete for prizes totaling $65,000 across multiple categories",
    },
  ]

  const timelineSteps = [
    {
      icon: <Star className="w-5 h-5" />,
      title: "Registration",
      description: "Sign up individually or as a team through our portal",
      color: "#6366f1",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Idea Submission",
      description: "Submit your project idea and get feedback from mentors",
      color: "#ec4899",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Hackathon Weekend",
      description: "36 hours of coding, workshops, and mentorship sessions",
      color: "#06b6d4",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Presentations",
      description: "Present your project to judges and fellow participants",
      color: "#8b5cf6",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Awards Ceremony",
      description: "Winners announced and prizes distributed",
      color: "#f59e0b",
    },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && (
          <>
            <motion.div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ y: y1 }}>
              <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-purple-900/20 blur-3xl" />
              <div className="absolute top-[40%] right-[10%] w-[250px] h-[250px] rounded-full bg-blue-900/20 blur-3xl" />
              <div className="absolute bottom-[20%] left-[30%] w-[200px] h-[200px] rounded-full bg-pink-900/20 blur-3xl" />
            </motion.div>

            <motion.div className="absolute top-0 left-0 w-full h-full" style={{ y: y2, opacity: opacity1 }}>
              <div className="absolute top-[20%] right-[20%] w-[3px] h-[3px] rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
              <div className="absolute top-[30%] left-[40%] w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]" />
              <div className="absolute top-[70%] right-[30%] w-[4px] h-[4px] rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)]" />
              <div className="absolute top-[80%] left-[20%] w-[3px] h-[3px] rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
              <div className="absolute top-[40%] right-[50%] w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]" />
            </motion.div>

            <motion.div className="absolute top-0 left-0 w-full h-full" style={{ y: y3, opacity: opacity2 }}>
              <div className="absolute top-[15%] left-[25%] w-[3px] h-[3px] rounded-full bg-purple-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]" />
              <div className="absolute top-[35%] right-[35%] w-[2px] h-[2px] rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.8)]" />
              <div className="absolute top-[65%] left-[40%] w-[4px] h-[4px] rounded-full bg-pink-400 shadow-[0_0_12px_3px_rgba(244,114,182,0.8)]" />
              <div className="absolute top-[75%] right-[15%] w-[3px] h-[3px] rounded-full bg-purple-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]" />
              <div className="absolute top-[45%] left-[10%] w-[2px] h-[2px] rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.8)]" />
            </motion.div>
          </>
        )}
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden"
        style={{ opacity: opacity1 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT METAMORPH
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-200/80 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A cosmic journey of innovation, collaboration, and transformation
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <Card key={index} className="bg-black/40 border border-purple-500/30 backdrop-blur-sm w-64 h-56">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/30 border border-purple-500/30">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-100/70">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is MetaMorph Section */}
      <motion.section className="relative py-16 md:py-24 px-4" style={{ opacity: opacity2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                What is MetaMorph?
              </h2>

              <div className="space-y-4 text-blue-100/80">
                <p>
                  MetaMorph is a 36-hour cosmic coding adventure where innovators from across the galaxy come together
                  to build groundbreaking projects. Our hackathon creates a gravitational pull of talent, bringing
                  together the brightest minds to form a singularity of innovation in the tech universe.
                </p>
                <p>
                  Participants will explore futuristic challenge domains including AI & ML, Web Technologies, Blockchain
                  Revolution, and more. With access to cutting-edge resources, mentorship from industry experts, and a
                  collaborative environment, MetaMorph provides the perfect launchpad for your ideas.
                </p>
                <p>
                  Whether you're a seasoned developer or just beginning your coding journey, MetaMorph offers an
                  inclusive space to learn, create, and transform your ideas into reality.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                  Register Now
                </Button>
                <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                  View Challenges
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl" />
              <div className="relative aspect-video rounded-lg overflow-hidden border border-purple-500/30 bg-black/40 backdrop-blur-sm">
                <Image
                  src="/images/gnit.jpeg"
                  alt="MetaMorph Hackathon"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-blue-200/80 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 6-7, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-200/80">
                      <MapPin className="w-4 h-4" />
                      <span>Guru Nanak Institute of Technology, Kolkata</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How it Works Section */}
      <motion.section
        className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-purple-900/10"
        style={{ opacity: opacity3 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              How MetaMorph Works
            </h2>
            <p className="text-xl text-blue-200/80 max-w-2xl mx-auto">
              Your journey through the MetaMorph universe follows these cosmic milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Timeline dot */}
                    <div
                      className="absolute left-1/2 top-0 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-white bg-black hidden md:block"
                      style={{ borderColor: step.color }}
                    />

                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <Card className="bg-black/40 border border-purple-500/30 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center md:order-1"
                              style={{ backgroundColor: `${step.color}30`, color: step.color }}
                            >
                              {step.icon}
                            </div>
                            <h3
                              className={`text-xl font-bold text-white ${index % 2 === 0 ? "md:order-0" : "md:order-1"}`}
                            >
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-blue-100/70">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="md:w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* About GNIT Section */}
      <motion.section className="relative py-16 md:py-24 px-4" style={{ opacity: opacity4 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl" />
                <div className="relative aspect-square rounded-lg overflow-hidden border border-purple-500/30 bg-black/40 backdrop-blur-sm">
                  <Image
                    src="/images/gnit.jpeg"
                    alt="Guru Nanak Institute of Technology"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                About Guru Nanak Institute of Technology
              </h2>

              <div className="space-y-4 text-blue-100/80">
                <p>
                  Guru Nanak Institute of Technology (GNIT) is a premier engineering institution located in Kolkata,
                  West Bengal, India. Established with a vision to provide quality technical education, GNIT has emerged
                  as a center of excellence in engineering and technology.
                </p>
                <p>
                  The institute offers undergraduate and postgraduate programs in various disciplines of engineering and
                  technology. With state-of-the-art infrastructure, experienced faculty, and a focus on innovation, GNIT
                  provides students with the perfect environment to develop their technical skills and creativity.
                </p>
                <p>
                  MetaMorph is proudly organized by the students and faculty of GNIT, showcasing the institution's
                  commitment to fostering innovation and technological advancement among the next generation of
                  engineers and developers.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.gnit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Visit GNIT Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200/60">Students</div>
                    <div className="font-bold text-white">5,000+</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200/60">Departments</div>
                    <div className="font-bold text-white">12+</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-900/30 flex items-center justify-center text-pink-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200/60">Ranking</div>
                    <div className="font-bold text-white">Top 50</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200/60">Established</div>
                    <div className="font-bold text-white">2003</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl" />
            <h2 className="relative text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Ready to Join the Cosmic Adventure?
            </h2>
          </div>

          <p className="text-xl text-blue-200/80 mb-8 max-w-2xl mx-auto">
            Embark on a journey of innovation, collaboration, and transformation at MetaMorph Hackathon 2025
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg"
            >
              Contact Us <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

