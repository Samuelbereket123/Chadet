"use client";

import Hero from '../components/layout/Hero';
import dynamic from 'next/dynamic';
// import PillarsSection from '../components/layout/PillarsSection';
import VerticalPillarsSection from '../components/layout/VerticalPillarsSection';
import AnimatedLinesBG from '../components/AnimatedLinesBG';
// import GridBG from '../components/GridBG';
import TestimonialsSection from '../components/layout/TestimonialsSection';

const CarouselSection = dynamic(() => import('../components/layout/CarouselSection'), { ssr: false });

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Background Animation */}
      <AnimatedLinesBG />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Strategic Problem Areas Section */}
      <div className="relative">
        <VerticalPillarsSection />
      </div>
      
      {/* Testimonials Section */}
      <div className="relative">
        <TestimonialsSection />
      </div>
      
      {/* Our Supporters Section */}
      <div className="relative">
        <CarouselSection />
      </div>
    </div>
  );
}
