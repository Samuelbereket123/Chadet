import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import pillars from '../../data/pillars';
import { FaHandHoldingHeart, FaLeaf, FaHandsHelping, FaShieldAlt } from 'react-icons/fa';

const iconMap = {
  FaHandHoldingHeart: FaHandHoldingHeart,
  FaLeaf: FaLeaf,
  FaHandsHelping: FaHandsHelping,
  FaShieldAlt: FaShieldAlt,
};

export default function VerticalPillarsSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft glowing gradients and blurred shapes (same as Hero) - Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute right-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute right-10 top-0 w-60 h-60 bg-green-100 opacity-30 blur-2xl rounded-full rotate-12" />
      </div>
      {/* Content */}
      <div className="relative z-20 w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-700 mb-12 sm:mb-16 lg:mb-24 text-center tracking-wide uppercase drop-shadow-lg">
          <span className="border-b-0 sm:border-b-2 border-green-700 pb-0 sm:pb-2">Strategic Problem Areas</span>
        </h2>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
            {pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon];
              const isLastTwo = idx >= 3; // 4th and 5th cards (index 3 and 4)
              return (
                <div 
                  key={pillar.slug} 
                  className={`flex flex-col items-center text-center w-full max-w-sm ${
                    // On large screens, center the last two cards
                    idx >= 3 ? 'lg:col-span-1.5 xl:col-span-1' : 'col-span-1'
                  } ${
                    // Center positioning for last two cards on large screens
                    idx === 3 ? 'lg:col-start-1 xl:col-start-2' : 
                    idx === 4 ? 'lg:col-start-2 xl:col-start-3' : ''
                  }`}
                >
                  {/* Number */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold shadow-lg mb-3 sm:mb-4">
                    {idx + 1}
                  </div>
                  {/* Content */}
                  <div className={`bg-white border border-green-100 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full ${isLastTwo ? 'p-4 sm:p-6 lg:p-8' : 'p-4 sm:p-6'}`}>
                    <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <Icon className="text-green-500 text-2xl sm:text-3xl lg:text-4xl" />
                      <Link
                        href={`/${pillar.slug}`}
                        target=""
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl font-bold text-green-700 hover:underline text-center"
                      >
                        {pillar.title}
                      </Link>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 