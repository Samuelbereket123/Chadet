import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import GridBG from '../GridBG';

const images = [
  { src: '/assets/images/Carsouel/concern.gif', alt: 'Concern', link: 'https://concern.net' },
  { src: '/assets/images/Carsouel/Childhope.png', alt: 'Childhope', link: 'https://childhope.org.uk' },
  { src: '/assets/images/Carsouel/pwc.png', alt: 'PwC', link: 'https://pwc.com' },
  { src: '/assets/images/Carsouel/dfid_logo.png', alt: 'DFID', link: 'https://gov.uk/dfid' },
  { src: '/assets/images/Carsouel/Oak.png', alt: 'Oak Foundation', link: 'https://oakfnd.org' },
  { src: '/assets/images/Carsouel/ethiopiaid.jpg', alt: 'Ethiopiaid', link: 'https://ethiopiaid.org.uk' },
  { src: '/assets/images/Carsouel/canadian.jpg', alt: 'Canadian Government', link: 'https://canada.ca' },
  { src: '/assets/images/Carsouel/britishcouncil-logo.png', alt: 'British Council', link: 'https://britishcouncil.org' },
  { src: '/assets/images/Carsouel/pact.jpg', alt: 'Pact', link: 'https://pactworld.org' },
  { src: '/assets/images/Carsouel/usaid.jpg', alt: 'USAID', link: 'https://usaid.gov' },
  { src: '/assets/images/Carsouel/save.png', alt: 'Save the Children', link: 'https://savethechildren.org' },
  { src: '/assets/images/Carsouel/comic relief.jpg', alt: 'Comic Relief', link: 'https://comicrelief.com' },
];

export default function CarouselSection() {
  const swiperRef = useRef<SwiperType | undefined>(undefined);

  // Always restart autoplay after a click
  useEffect(() => {
    const handleWindowFocus = () => {
      if (swiperRef.current && !swiperRef.current.autoplay.running) {
        swiperRef.current.autoplay.start();
      }
    };
    window.addEventListener('focus', handleWindowFocus);
    return () => window.removeEventListener('focus', handleWindowFocus);
  }, []);

  return (
    <section className="relative w-full bg-white py-12 px-2 sm:px-6 lg:px-8 overflow-hidden">
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

      <h2 className="relative z-20 text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">Our Supporters</h2>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={2}
        spaceBetween={24}
        loop={true}
        freeMode={true}
        speed={5000}
        autoplay={{ 
          delay: 0, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        cssMode={false}
        allowTouchMove={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="group"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <div
              onClick={() => {
                window.open(img.link, '_blank', 'noopener,noreferrer');
                // Force restart autoplay after click
                setTimeout(() => {
                  if (swiperRef.current) {
                    swiperRef.current.autoplay.start();
                  }
                }, 200);
              }}
              className="block cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={180}
                height={100}
                className="rounded-xl shadow-md object-contain w-full h-28 sm:h-32 bg-white transition-transform duration-300 hover:scale-105 cursor-pointer"
                draggable={false}
                priority={idx < 3}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 