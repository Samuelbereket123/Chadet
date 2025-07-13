'use client';
import Image from 'next/image';
import GridBG from '../../components/GridBG';
import { useState, useEffect } from 'react';

function useTypewriter(text: string, speed: number = 80, pause: number = 1200) {
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    setDisplayed(''); // Ensure it starts empty
    function type() {
      interval = setInterval(() => {
        setDisplayed((prev) => (prev + (text[i] ?? '')));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setTyping(false);
          timeout = setTimeout(() => erase(), pause);
        }
      }, speed);
    }
    function erase() {
      interval = setInterval(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        i--;
        if (i <= 0) {
          clearInterval(interval);
          setTyping(true);
          timeout = setTimeout(() => type(), speed * 2);
        }
      }, speed / 2);
    }
    if (typing) type();
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed, pause, typing]);
  return displayed;
}

export default function AboutPage() {
  return (
    <div className="relative bg-white min-h-screen py-12 pt-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <GridBG />
      <div className="relative z-10">
        {/* Top Section */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col items-start text-left mb-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-green-700 mb-2 leading-tight">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-xl">Empowering communities, transforming lives.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Block */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Who We Are</h2>
              <p className="text-gray-700 text-lg mb-4">
                ChaOrg is a dedicated charity organization committed to making a tangible difference in the lives of those we serve. Our mission is to empower communities through education, health, and sustainable development initiatives, fostering hope and opportunity for all.
              </p>
              <p className="text-gray-600">
                With a passionate team and the support of our partners, we strive to create lasting impact and inspire positive change, one project at a time.
              </p>
            </div>
            {/* Group Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md">
                <Image
                  src="/assets/images/Carsouel/canadian.jpg"
                  alt="Group photo of ChaOrg team"
                  width={500}
                  height={350}
                  className="object-cover w-full h-64"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="max-w-5xl mx-auto grid gap-16">
          {/* Block 1: Activity Image Left, Mission Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Left */}
            <div className="rounded-xl overflow-hidden shadow-md w-full max-w-md mx-auto md:mx-0">
              <Image
                src="/assets/images/Carsouel/pact.jpg"
                alt="Team working on a project"
                width={500}
                height={350}
                className="object-cover w-full h-64"
              />
            </div>
            {/* Mission Statement Right */}
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg mb-4">
                We believe in the power of collective action. Our mission is to uplift underprivileged communities by providing access to essential resources, education, and healthcare. Through collaboration and innovation, we aim to break the cycle of poverty and build a brighter future for all.
              </p>
            </div>
          </div>
          {/* Block 2: Text Left, Cozy Photo Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            {/* Cozy Photo Right */}
            <div className="rounded-xl overflow-hidden shadow-md w-full max-w-md mx-auto md:mx-0">
              <Image
                src="/assets/images/Carsouel/ethiopiaid.jpg"
                alt="Two people working together"
                width={500}
                height={350}
                className="object-cover w-full h-64"
              />
            </div>
            {/* Our Story Text Left */}
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Story</h3>
              <p className="text-gray-700 text-lg mb-4">
                Founded on the belief that every individual deserves dignity and opportunity, ChaOrg began as a small group of volunteers. Over the years, we have grown into a vibrant organization, united by compassion and a shared vision for a better world.
              </p>
              <p className="text-gray-600">
                Our journey is shaped by the stories of those we serve and the unwavering commitment of our supporters. Together, we continue to write new chapters of hope and transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="max-w-5xl mx-auto mt-20 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:border-green-200 border border-transparent">
              <span className="text-green-600 mb-4 text-5xl">
                {/* Office Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21V5a2 2 0 012-2h3a2 2 0 012 2v16m0 0h4m-4 0v-7a2 2 0 012-2h3a2 2 0 012 2v7m-4 0h4" />
                </svg>
              </span>
              <div className="text-3xl font-extrabold text-green-800 mb-2">15 Global Offices</div>
              <a href="#" className="text-green-600 hover:underline text-sm mt-2">Learn more</a>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:border-green-200 border border-transparent">
              <span className="text-green-600 mb-4 text-5xl">
                {/* People Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0zm6 4a4 4 0 00-3-3.87" />
                </svg>
              </span>
              <div className="text-3xl font-extrabold text-green-800 mb-2">10,000+ Lives Impacted</div>
              <a href="#" className="text-green-600 hover:underline text-sm mt-2">Learn more</a>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:border-green-200 border border-transparent">
              <span className="text-green-600 mb-4 text-5xl">
                {/* Project Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 0V4m0 8v8m8-8a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
              </span>
              <div className="text-3xl font-extrabold text-green-800 mb-2">25+ Projects Completed</div>
              <a href="#" className="text-green-600 hover:underline text-sm mt-2">Learn more</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 