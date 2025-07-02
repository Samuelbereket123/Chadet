"use client";

import Hero from '../components/layout/Hero';
import dynamic from 'next/dynamic';
// import PillarsSection from '../components/layout/PillarsSection';
import VerticalPillarsSection from '../components/layout/VerticalPillarsSection';
import AnimatedLinesBG from '../components/AnimatedLinesBG';
import GridBG from '../components/GridBG';
import TestimonialsSection from '../components/layout/TestimonialsSection';


const CarouselSection = dynamic(() => import('../components/layout/CarouselSection'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <GridBG />
      <AnimatedLinesBG />
      <Hero />
      <CarouselSection />
      {/* <PillarsSection /> */}
      <VerticalPillarsSection />
      <TestimonialsSection />

        </>
  );
}
