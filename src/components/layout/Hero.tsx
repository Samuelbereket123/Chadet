'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden px-4 md:px-0">
      {/* Large green blurred background accents */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-100 rounded-full blur-3xl opacity-70 z-0" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-green-50 rounded-full blur-2xl opacity-60 z-0" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center md:items-start justify-center py-24 md:py-40">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-green-600 tracking-wider uppercase mb-8 font-sans leading-tight md:text-left text-center">
          Lighting the Path of Compassion
        </h1>
        {/* Subtext */}
        <p className="text-2xl sm:text-2xl md:text-3xl text-gray-600 mb-14 font-medium max-w-3xl md:text-left text-center">
          Empowering lives, one step at a time
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center md:justify-start mb-20">
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-10 py-4 rounded-full bg-green-500 text-white font-semibold text-2xl shadow-md border-2 border-green-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              Get Involved
              {/* Animated underline */}
              <span className="absolute left-1/2 -bottom-1 w-2/3 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 -translate-x-1/2"></span>
              {/* Pulse ring */}
              <span className="absolute -inset-2 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-60 animate-pulse"></span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-green-500 text-green-600 font-semibold text-2xl bg-white hover:bg-green-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              Our Mission
            </Link>
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center mt-8"
          animate={{ y: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              stroke="#00C853"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
} 