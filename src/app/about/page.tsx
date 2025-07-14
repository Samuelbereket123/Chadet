'use client';
import Image from 'next/image';
import GridBG from '../../components/GridBG';
import { useState, useEffect } from 'react';
import aboutSections from '../../data/about';

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
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-green-700 mb-10 text-center">About Us</h1>
        <div className="grid gap-10">
          {aboutSections.map((section) => (
            <div key={section.slug} className="bg-white border border-green-100 rounded-2xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">{section.title}</h2>
              {section.description && (
                <p className="text-gray-700 text-lg mb-2 whitespace-pre-line">{section.description}</p>
              )}
              {section.list && (
                <ul className="list-disc pl-6 text-gray-700 text-base space-y-2">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 