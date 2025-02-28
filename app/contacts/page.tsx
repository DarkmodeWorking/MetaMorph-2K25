"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import PageTransition from "@/components/page-transition"
import CustomCursor from "@/components/cursor"

export default function ContactsPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Form animation
    if (formRef.current) {
      gsap.from(formRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3,
      })
    }

    // Map animation
    if (mapRef.current) {
      gsap.from(mapRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: 0.5,
      })
    }
  }, [])

  return (
    <PageTransition>
      <CustomCursor />

      <div className="container px-4 md:px-6 py-12 md:py-20">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have questions about our products or need assistance? We're here to help.
          </p>
        </div>

        {/* Contact information and form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 Cyberpunk Street, Neo Tokyo, 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (888) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@wym8.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                    <p className="text-muted-foreground">Saturday: 10am - 4pm</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={mapRef} className="bg-secondary rounded-lg overflow-hidden h-[300px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-secondary p-8 rounded-lg">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Send Us a Message</h2>
            <form ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Your message"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center justify-center h-10 px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-colors hover:bg-primary/90"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

