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
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 flex justify-center w-full z-50 transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-3xl px-2">
        <div 
          className="rounded-3xl p-4 flex items-center justify-center"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)'
          }}
        >
          {/* Desktop Nav */}
          <div className="hidden md:flex w-full justify-center">
            <div className="bg-green-50 rounded-full flex items-center gap-2 px-2 py-1 w-full max-w-2xl">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-6 py-2 rounded-full font-medium text-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                      ${
                        isActive
                          ? 'bg-green-500 text-white shadow'
                          : 'text-green-700 hover:bg-green-100 hover:text-green-600'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex w-full justify-between items-center">
            <span className="text-green-700 text-xl font-mono tracking-widest ml-2">MENU</span>
            <button
              className="flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent relative z-50 bg-green-50"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-green-700 mb-1 rounded transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-green-700 mb-1 rounded transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-green-700 rounded transition-all"
              />
            </button>
          </div>
        </div>
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
            className="fixed top-24 left-0 w-full flex justify-center z-40"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="bg-white rounded-3xl p-4 w-[90vw] max-w-md shadow-2xl">
              <div className="bg-green-50 rounded-full flex flex-col items-center gap-2 px-2 py-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`w-full text-center px-6 py-2 rounded-full font-medium text-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                        ${
                          isActive
                            ? 'bg-green-500 text-white shadow'
                            : 'text-green-700 hover:bg-green-100 hover:text-green-600'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 