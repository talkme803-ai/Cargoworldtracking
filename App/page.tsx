'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { Search, Truck, Package, MapPin, Clock, Shield, Users, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export default function LogisticsHome() {
  const [trackingId, setTrackingId] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 })
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const isCTAInView = useInView(ctaRef, { once: true, amount: 0.3 })

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/90" />
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={floatingAnimation}
          />
          <motion.div 
            className="absolute bottom-1/4 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={floatingAnimation}
            transition={{ duration: 4, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-xl"
            animate={floatingAnimation}
            transition={{ duration: 3.5, delay: 0.5 }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.span 
                className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary backdrop-blur-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Companies
              </motion.span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Track Your <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Shipments</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Real-time logistics tracking with enterprise-grade security. Monitor your freight from 
                pickup to delivery across 200+ countries.
              </motion.p>
            </motion.div>

            {/* BL Tracking Search */}
            <motion.div 
              variants={itemVariants}
              className="max-w-2xl mx-auto"
            >
              <form onSubmit={handleTrack} className="group">
                <div className="relative">
                  <motion.div 
                    className="glass p-1 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-3xl hover:shadow-3xl transition-all duration-500 group-hover:bg-white/5"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center bg-slate-900/50 rounded-3xl p-1 gap-1">
                      <div className="glass px-6 py-5 rounded-2xl flex items-center flex-1">
                        <Search className="w-6 h-6 text-slate-400 mr-4" />
                        <input
                          type="text"
                          placeholder="Enter BL/AWB number"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          className="bg-transparent outline-none text-foreground placeholder-slate-500 text-lg w-full font-medium"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isSearching}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass group-hover:bg-primary/90 bg-primary/80 backdrop-blur-xl px-8 py-5 rounded-2xl font-bold text-lg text-white shadow-2xl border border-primary/50 hover:shadow-primary/25 transition-all duration-300 flex items-center gap-3"
                      >
                        {isSearching ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Tracking...
                          </>
                        ) : (
                          <>
                            Track Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
              </form>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-8 text-sm md:text-base pt-8"
            >
              <div className="flex items-center space-x-2 text-slate-400">
                <Truck className="w-5 h-5" />
                <span>200+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Clock className="w-5 h-5" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Package className="w-5 h-5" />
                <span>99.9% Accuracy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { num: '50M+', label: 'Shipments Tracked', icon: Package },
              { num: '10K+', label: 'Active Companies', icon: Users },
              { num: '99.9%', label: 'Delivery Accuracy', icon: Shield },
              { num: '24/7', label: 'Live Support', icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-black text-white mb-2 bg-gradient-to-r from-white to-slate-200 bg-clip-text">
                  {stat.num}
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-32 bg-slate-950/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent mb-6">
              Enterprise Grade Tracking
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Advanced logistics platform trusted by Fortune 500 companies worldwide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time GPS Tracking",
                description: "Live location updates with 5-second refresh rate across all carriers",
                icon: MapPin
              },
              {
                title: "Multi-modal Support",
                description: "Sea, air, road, and rail freight tracking in one unified platform",
                icon: Truck
              },
              {
                title: "Automated Alerts",
                description: "Custom notifications for delays, arrivals, and exceptions",
                icon: Clock
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass p-10 rounded-3xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <feature.icon className="w-16 h-16 text-primary bg-primary/10 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 lg:p-20 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Track Your First Shipment
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Free Forever
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              No credit card required. Get started in 30 seconds.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            >
              Start Tracking Free
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
