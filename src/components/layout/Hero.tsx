'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaPlay, FaHandHoldingHeart, FaLeaf, FaHandsHelping } from 'react-icons/fa';
import { useEffect, useState } from 'react';
// import AnimatedLinesBG from '../AnimatedLinesBG';
// import GridBG from '../GridBG';

export default function Hero() {
  // Counter logic
  const [budget, setBudget] = useState(0);
  const [projects, setProjects] = useState(0);
  
  // Background slide logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgroundImages = [
    '/assets/images/HeroSlides/joel-muniz-BErJJL_KsjA-unsplash.jpg',
    '/assets/images/HeroSlides/bill-wegener-8ldqRkOk5oo-unsplash.jpg',
    '/assets/images/HeroSlides/ben-white-PAiVzSmYy-c-unsplash.jpg',
    '/assets/images/HeroSlides/background-Image.jpg'
  ];

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

  // Background slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [backgroundImages.length]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-green-100 sm:bg-transparent">
      {/* Background Image Slides - Hidden on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden sm:block">
        <motion.div
          className="absolute inset-0 flex"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
          {/* Duplicate first image for seamless loop */}
          <div
            className="w-full h-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[0]})`,
            }}
          />
        </motion.div>
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Mobile Background Pattern */}
      <div className="absolute inset-0 z-0 sm:hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-300 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-100 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Animated floating icons - Hidden on mobile for better performance */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
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

      {/* Unified Glassmorphic Box */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center">
        <div
          className={`relative w-full rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col items-center gap-4 sm:gap-6 ${
            // Mobile: enhanced white card with border, Desktop: glassmorphic effect
            'bg-white border-2 border-green-200 shadow-2xl sm:bg-white/20 sm:border sm:border-white/30'
          }`}
          style={{
            // Only apply glassmorphic styles on larger screens
            ...(typeof window !== 'undefined' && window.innerWidth >= 640 ? {
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.37)',
              border: '1px solid rgba(255, 255, 255, 0.18)'
            } : {})
          }}
        >
          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center leading-tight tracking-tight drop-shadow-2xl shadow-black text-green-700 sm:text-white"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
          >
            CHADET ETHIOPIA
          </motion.h1>
          {/* Tagline */}
          <motion.p
            className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-center max-w-2xl mx-auto font-medium drop-shadow-2xl shadow-black px-2 text-gray-700 sm:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
          >
            Empowering children and communities for a brighter tomorrow. Join us in making a lasting impact.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: 'easeOut' }}
          >
            <Link
              href="#donate"
              className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-green-600 text-white font-bold text-sm sm:text-lg shadow-lg hover:bg-green-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 w-full sm:w-auto"
            >
              2025 Annual Report
            </Link>
          </motion.div>
          {/* Counters Section */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 mt-4 sm:mt-6">
            {/* Budget Counter */}
            <div className="flex flex-col items-center flex-1">
              <span className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-2xl shadow-black text-green-700 sm:text-white">Budget</span>
              <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tabular-nums drop-shadow-2xl shadow-black text-green-600 sm:text-green-300">{budget.toLocaleString()}<span className="text-xl sm:text-2xl lg:text-3xl align-super font-bold">+</span></span>
            </div>
            {/* Divider */}
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-white/30 mx-2 sm:mx-4" />
            {/* Projects Counter */}
            <div className="flex flex-col items-center flex-1">
              <span className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-2xl shadow-black text-green-700 sm:text-white">Projects this year</span>
              <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tabular-nums drop-shadow-2xl shadow-black text-green-600 sm:text-green-300">{projects}<span className="text-xl sm:text-2xl lg:text-3xl align-super font-bold">+</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 