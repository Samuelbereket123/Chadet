import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import GridBG from '../GridBG';
import testimonials from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-white py-20 px-2 sm:px-6 lg:px-8 overflow-hidden">
      <GridBG />
      {/* Soft glowing gradients and blurred shapes (same as Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute right-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute right-10 top-0 w-60 h-60 bg-green-100 opacity-30 blur-2xl rounded-full rotate-12" />
      </div>
      <div className="relative z-20 flex flex-col items-center mb-12">
        <span className="inline-block mb-4 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold text-green-700 shadow">Testimonials</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 tracking-wide">Testimonials</h2>
      </div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg px-8 py-8 flex flex-col items-start gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 border border-green-100"
          >
            {/* Stars */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-green-400 text-lg mr-1" />
              ))}
            </div>
            {/* Quote */}
            <blockquote className="text-gray-700 text-base sm:text-lg italic mb-4">“{t.quote}”</blockquote>
            {/* User info */}
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full border-2 border-green-200 shadow object-cover"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 leading-tight">{t.name}</span>
                <span className="text-gray-500 text-xs leading-tight">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 