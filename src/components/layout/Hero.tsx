'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPlay, FaHandHoldingHeart, FaLeaf, FaHandsHelping } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import AnimatedLinesBG from '../AnimatedLinesBG';
import GridBG from '../GridBG';

export default function Hero() {
  // Counter logic
  const [budget, setBudget] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    let budgetStart = 0;
    let projectsStart = 0;
    const budgetTarget = 20000;
    const projectsTarget = 20;
    const duration = 1200; // ms
    const steps = 60;
    const budgetStep = Math.ceil(budgetTarget / steps);
    const projectsStep = Math.ceil(projectsTarget / steps);
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      budgetStart = Math.min(budgetTarget, budgetStart + budgetStep);
      projectsStart = Math.min(projectsTarget, projectsStart + projectsStep);
      setBudget(budgetStart);
      setProjects(projectsStart);
      if (frame >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-0 sm:px-0 lg:px-0 py-24 bg-white">
      <AnimatedLinesBG />
      <GridBG />
      {/* Soft glowing gradients and blurred shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Left Glow */}
        <div className="absolute left-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        {/* Right Glow (now matches left) */}
        <div className="absolute right-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        {/* Top Right Abstract Shape */}
        <div className="absolute right-10 top-0 w-60 h-60 bg-green-100 opacity-30 blur-2xl rounded-full rotate-12" />
      </div>

      {/* Animated floating icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div initial={{ y: -20, opacity: 0.7 }} animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} className="absolute left-10 top-1/3 text-green-400 text-4xl">
          <FaHandHoldingHeart />
        </motion.div>
        <motion.div initial={{ x: 20, opacity: 0.7 }} animate={{ x: [0, 10, 0], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }} className="absolute right-16 top-1/4 text-green-300 text-3xl">
          <FaLeaf />
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0.7 }} animate={{ y: [0, 12, 0], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }} className="absolute left-1/4 bottom-10 text-green-500 text-4xl">
          <FaHandsHelping />
        </motion.div>
        <motion.div initial={{ x: -20, opacity: 0.7 }} animate={{ x: [0, -10, 0], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1.5 }} className="absolute right-1/4 bottom-16 text-green-400 text-3xl">
          <FaHandHoldingHeart />
        </motion.div>
      </div>

      {/* SVG Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-48">
          <path fill="#bbf7d0" fillOpacity="0.5" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>

      {/* Badge */}
      <div className="relative z-20 mb-6">
        <span className="inline-block rounded-full bg-black/10 border border-green-600 px-5 py-2 text-sm font-semibold text-green-700 shadow backdrop-blur-md">
          Been here since 2000
        </span>
      </div>

      {/* Pill-shaped headline container */}
      <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center">
        <div className="bg-black/5 border border-green-600 rounded-full px-8 py-4 flex flex-col items-center w-full shadow-lg backdrop-blur-md">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black text-center leading-tight tracking-tight"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
          >
            CHADET ETHIOPIA
          </motion.h1>
        </div>
        {/* Tagline */}
        <motion.p
          className="mt-6 text-lg sm:text-2xl text-gray-800 text-center max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
        >
          Empowering children and communities for a brighter tomorrow. Join us in making a lasting impact.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, ease: 'easeOut' }}
        >
          <Link
            href="#get-involved"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-600 text-white font-bold text-lg shadow-lg hover:bg-green-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Get Involved
          </Link>
          <Link
            href="#donate"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-black/5 border border-green-600 text-green-700 font-semibold text-lg hover:bg-green-600/10 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <FaHandHoldingHeart className="text-green-600" />
            Donate Now
          </Link>
        </motion.div>
        {/* Counters Section */}
        <div className="relative z-30 w-full max-w-6xl mt-12 flex flex-row items-center justify-between">
          {/* Left Counter */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-4xl font-bold text-gray-700 mb-2">Budget</span>
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-green-700 tabular-nums">{budget.toLocaleString()}<span className="text-3xl align-super font-bold">+</span></span>
          </div>
          {/* Divider */}
          <div className="w-px h-16 bg-green-100 mx-4 hidden sm:block" />
          {/* Right Counter */}
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-4xl font-bold text-gray-700 mb-2">Projects this year</span>
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-green-700 tabular-nums">{projects}<span className="text-3xl align-super font-bold">+</span></span>
          </div>
        </div>
      </div>
    </section>
  );
} 