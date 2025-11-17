import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Welcome Home
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8">
            Explore communities, discover homes, and connect with your dream neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#communities" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-orange-400 text-white px-6 py-3 font-medium shadow hover:shadow-lg transition-shadow">
              Explore Now
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 font-medium hover:bg-white/20 transition-colors">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
