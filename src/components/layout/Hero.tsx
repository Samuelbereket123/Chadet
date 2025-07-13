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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-0 sm:px-0 lg:px-0 py-32">
      {/* Background Image Slides */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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

      {/* Unified Glassmorphic Box */}
      <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -16, 0, 16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full bg-white/20 border border-white/30 rounded-3xl shadow-2xl backdrop-blur-xl px-8 py-10 flex flex-col items-center gap-6"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)'
          }}
        >
          {/* Badge */}
          {/* <span className="inline-block rounded-full bg-black/10 border border-green-600 px-5 py-2 text-sm font-semibold text-green-700 shadow backdrop-blur-md mb-2">
            Been here since 2000
          </span> */}
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight tracking-tight drop-shadow-2xl shadow-black"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
          >
            CHADET ETHIOPIA
          </motion.h1>
          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-2xl text-white text-center max-w-2xl mx-auto font-medium drop-shadow-2xl shadow-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
          >
            Empowering children and communities for a brighter tomorrow. Join us in making a lasting impact.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: 'easeOut' }}
          >
            <Link
              href="#donate"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-600 text-white font-bold text-lg shadow-lg hover:bg-green-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              2025 Annual Report
            </Link>
          </motion.div>
                      {/* Counters Section */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 mt-6">
              {/* Budget Counter */}
              <div className="flex flex-col items-center flex-1">
                <span className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-2xl shadow-black">Budget</span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-green-300 tabular-nums drop-shadow-2xl shadow-black">{budget.toLocaleString()}<span className="text-3xl align-super font-bold">+</span></span>
              </div>
              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-white/30 mx-4" />
              {/* Projects Counter */}
              <div className="flex flex-col items-center flex-1">
                <span className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-2xl shadow-black">Projects this year</span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-green-300 tabular-nums drop-shadow-2xl shadow-black">{projects}<span className="text-3xl align-super font-bold">+</span></span>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
} 