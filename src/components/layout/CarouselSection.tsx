import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRef, useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import GridBG from '../GridBG';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const supporters = [
  { 
    src: '/assets/images/Carsouel/concern.gif', 
    alt: 'Concern', 
    link: 'https://concern.net',
    description: 'Concern Worldwide is an international humanitarian organization dedicated to reducing suffering and working towards the ultimate elimination of extreme poverty.'
  },
  { 
    src: '/assets/images/Carsouel/Childhope.png', 
    alt: 'Childhope', 
    link: 'https://childhope.org.uk',
    description: 'Childhope works to protect and support street children around the world, providing education, healthcare, and opportunities for a better future.'
  },
  { 
    src: '/assets/images/Carsouel/pwc.png', 
    alt: 'PwC', 
    link: 'https://pwc.com',
    description: 'PwC is a global network of firms delivering world-class assurance, tax, and consulting services for your business.'
  },
  { 
    src: '/assets/images/Carsouel/dfid_logo.png', 
    alt: 'DFID', 
    link: 'https://gov.uk/dfid',
    description: 'The Department for International Development leads the UK government\'s work to end extreme poverty and build a safer, healthier, more prosperous world.'
  },
  { 
    src: '/assets/images/Carsouel/Oak.png', 
    alt: 'Oak Foundation', 
    link: 'https://oakfnd.org',
    description: 'Oak Foundation commits its resources to address issues of global, social, and environmental concern, particularly those that have a major impact on the lives of the disadvantaged.'
  },
  { 
    src: '/assets/images/Carsouel/ethiopiaid.jpg', 
    alt: 'Ethiopiaid', 
    link: 'https://ethiopiaid.org.uk',
    description: 'Ethiopiaid supports local organizations in Ethiopia to help the most vulnerable people access healthcare, education, and livelihood opportunities.'
  },
  { 
    src: '/assets/images/Carsouel/canadian.jpg', 
    alt: 'Canadian Government', 
    link: 'https://canada.ca',
    description: 'The Government of Canada provides international development assistance to help reduce poverty and inequality in developing countries.'
  },
  { 
    src: '/assets/images/Carsouel/britishcouncil-logo.png', 
    alt: 'British Council', 
    link: 'https://britishcouncil.org',
    description: 'The British Council creates international opportunities for the people of the UK and other countries and builds trust between them worldwide.'
  },
  { 
    src: '/assets/images/Carsouel/pact.jpg', 
    alt: 'Pact', 
    link: 'https://pactworld.org',
    description: 'Pact works on the ground in nearly 40 countries to improve the lives of those who are challenged by poverty and marginalization.'
  },
  { 
    src: '/assets/images/Carsouel/usaid.jpg', 
    alt: 'USAID', 
    link: 'https://usaid.gov',
    description: 'USAID leads international development and humanitarian efforts to save lives, reduce poverty, strengthen democratic governance, and help people progress beyond assistance.'
  },
  { 
    src: '/assets/images/Carsouel/save.png', 
    alt: 'Save the Children', 
    link: 'https://savethechildren.org',
    description: 'Save the Children believes every child deserves a future. In the US and around the world, we give children a healthy start in life, the opportunity to learn, and protection from harm.'
  },
  { 
    src: '/assets/images/Carsouel/comic relief.jpg', 
    alt: 'Comic Relief', 
    link: 'https://comicrelief.com',
    description: 'Comic Relief is a major charity based in the UK which strives to create a just world, free from poverty.'
  },
];

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSupporter = () => {
    setCurrentIndex((prev) => (prev + 1) % supporters.length);
  };

  const prevSupporter = () => {
    setCurrentIndex((prev) => (prev - 1 + supporters.length) % supporters.length);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-green-50 to-white py-32 px-2 sm:px-6 lg:px-8 overflow-hidden border-b-2 border-green-700">
      <GridBG />
      {/* Soft glowing gradients and blurred shapes (same as Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Left Glow */}
        <div className="absolute left-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        {/* Right Glow (now matches left) */}
        <div className="absolute right-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        {/* Top Right Abstract Shape */}
        <div className="absolute right-10 top-0 w-60 h-60 bg-green-100 opacity-30 blur-2xl rounded-full rotate-12" />
      </div>

      <h2 className="relative z-20 text-5xl sm:text-6xl font-bold text-center text-green-700 mb-24 tracking-wide uppercase drop-shadow-lg">Partnership: Past & Present</h2>
      
      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevSupporter}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white border border-green-200 rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        
        <button
          onClick={nextSupporter}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white border border-green-200 rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
        >
          <FaChevronRight className="text-xl" />
        </button>

        {/* Current Supporter Card */}
        <div className="bg-white border border-green-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow mx-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <a
                href={supporters[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <Image
                  src={supporters[currentIndex].src}
                  alt={supporters[currentIndex].alt}
                  width={180}
                  height={100}
                  className="rounded-xl shadow-md object-contain w-48 h-24 bg-white transition-transform duration-300 hover:scale-105"
                  draggable={false}
                  priority={true}
                />
              </a>
            </div>
            
            {/* Description on the right */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                <a
                  href={supporters[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-800 hover:no-underline transition-colors"
                >
                  {supporters[currentIndex].alt}
                </a>
              </h3>
              <p className="text-gray-600 leading-relaxed">{supporters[currentIndex].description}</p>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {supporters.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-green-600' : 'bg-green-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 