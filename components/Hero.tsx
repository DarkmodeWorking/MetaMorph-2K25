import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Code, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeScene from './three-scene';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const introRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);

    if (introRef.current) {
      // Animate only non-Framer-Motion elements
      gsap.from(introRef.current.querySelectorAll('.gsap-animate'), {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });
    }

    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Registration failed');
      
      setSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
        setEmail('');
      }, 2000);
    } catch (err) {
      setError('Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 3D Scene */}
      <div className="inset-0 -z-10">
        <ThreeScene />
      </div>

      {/* Email Registration Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-background p-8 rounded-xl max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={24} />
            </button>
            
            {!success ? (
              <>
                <h3 className="text-2xl font-bold mb-6">Pre-Register for MetaMorph</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full p-3 mb-4 border border-muted rounded-lg bg-transparent"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Confirm Registration'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center p-8">
                <div className="text-green-500 text-xl font-bold mb-4">
                  ✓ Registration Successful!
                </div>
                <p className="text-muted-foreground">
                  Check your email for confirmation
                </p>
              </div>
            )}
            
            {error && (
              <div className="mt-4 text-red-500 text-center">{error}</div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <motion.div
          ref={introRef}
          className="container mx-auto px-4 text-center z-10"
          style={{ opacity }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MetaMorph
          </motion.h1>
          
          <motion.div
            className="flex items-center gap-3 justify-center text-xl md:text-2xl font-bold mb-6 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Code className="w-6 h-6 text-blue-400" />
            6 - 7 September, 2025
            <Code className="w-6 h-6 text-blue-400" />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform your ideas into reality in this cyberpunk-themed coding
            extravaganza
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Pre-Register
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 flex flex-col items-center text-muted-foreground"
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="mb-2">Scroll to explore</span>
          <ChevronDown className="animate-bounce" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;