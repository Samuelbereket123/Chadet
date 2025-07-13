import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import pillars from '../../data/pillars';
import { FaHandHoldingHeart, FaLeaf, FaHandsHelping } from 'react-icons/fa';

const iconMap = {
  FaHandHoldingHeart: FaHandHoldingHeart,
  FaLeaf: FaLeaf,
  FaHandsHelping: FaHandsHelping,
};

export default function VerticalPillarsSection() {
  return (
    <section className="relative w-full bg-white py-32 px-2 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft glowing gradients and blurred shapes (same as Hero) - Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute right-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute right-10 top-0 w-60 h-60 bg-green-100 opacity-30 blur-2xl rounded-full rotate-12" />
      </div>
      {/* Content */}
      <div className="relative z-20 w-full">
        <h2 className="text-5xl sm:text-6xl font-bold text-green-700 mb-24 text-center tracking-wide uppercase drop-shadow-lg">
          <span className="border-b-2 border-green-700 pb-2">Strategic Problem Areas</span>
        </h2>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon];
              const isLastTwo = idx >= 3; // 4th and 5th cards (index 3 and 4)
              return (
                <div key={pillar.slug} className="flex flex-col items-center text-center w-full max-w-sm">
                  {/* Number */}
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-4">
                    {idx + 1}
                  </div>
                  {/* Content */}
                  <div className={`bg-white border border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full ${isLastTwo ? 'p-8' : 'p-6'}`}>
                    <div className="flex flex-col items-center gap-4 mb-4">
                      <Icon className="text-green-500 text-4xl" />
                      <Link
                        href={`/${pillar.slug}`}
                        target=""
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-green-700 hover:underline text-center"
                      >
                        {pillar.title}
                      </Link>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed text-center">
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