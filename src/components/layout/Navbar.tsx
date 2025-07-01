'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Sticky fade-in on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`navbar fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/20 transition-all duration-500 ${
        isScrolled ? 'bg-white/10 shadow-lg' : 'bg-white/5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-white drop-shadow-[0_2px_12px_rgba(34,211,238,0.7)] hover:drop-shadow-[0_4px_24px_rgba(34,211,238,1)] transition duration-300"
          aria-label="Home"
        >
          <span className="">🚀</span>
          <span className="hidden sm:inline-block">ChaOrg</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-lg font-medium transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                ${
                  pathname === link.href
                    ? 'text-cyan-400 drop-shadow-[0_2px_12px_rgba(34,211,238,0.7)]'
                    : 'text-white/90 hover:text-cyan-400 hover:drop-shadow-[0_2px_12px_rgba(34,211,238,0.7)]'
                }
              `}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
              <span
                className={`absolute left-1/2 -bottom-1 w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  pathname === link.href ? 'opacity-100' : ''
                }`}
                aria-hidden="true"
              ></span>
            </Link>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent relative z-50 bg-white/10 hover:bg-white/20 transition"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white mb-1 rounded transition-all"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white mb-1 rounded transition-all"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden absolute top-16 left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-xl z-40"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col items-center py-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`w-full text-center py-3 text-lg font-semibold rounded-lg transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                    ${
                      pathname === link.href
                        ? 'text-cyan-400 drop-shadow-[0_2px_12px_rgba(34,211,238,0.7)]'
                        : 'text-white/90 hover:text-cyan-400 hover:drop-shadow-[0_2px_12px_rgba(34,211,238,0.7)]'
                    }
                  `}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 