import Link from 'next/link';
import { motion } from 'framer-motion';
import pillars from '../../data/pillars';
import GridBG from '../GridBG';

export default function VerticalPillarsSection() {
  return (
    <section className="relative w-full min-h-screen bg-white py-24 px-2 sm:px-6 lg:px-8 overflow-hidden">
      <GridBG />
      {/* Soft glowing gradients and blurred shapes (same as Hero) */}  
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute right-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute right-10 top-0 w-60 h-60 bg-green-100 opacity-30 blur-2xl rounded-full rotate-12" />
      </div>
      <h2 className="text-4xl font-bold text-green-600 mb-16 text-center tracking-wide uppercase">Our Pillars</h2>
      <div className="relative max-w-2xl mx-auto flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-green-100 z-0" aria-hidden="true" />
        {/* Timeline entries */}
        <ol className="relative w-full space-y-16">
          {pillars.map((pillar, idx) => (
            <motion.li
              key={pillar.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative flex w-full"
            >
              {/* Timeline marker above card */}
              <div className="absolute left-1/2 -top-6 -translate-x-1/2 z-10">
                <span className="block w-4 h-4 rounded-full bg-black border-4 border-white shadow" />
              </div>
              {/* Card */}
              <div className="flex-1 flex justify-center">
                <article className="bg-white border border-green-100 rounded-2xl shadow-lg px-8 py-8 max-w-md w-full flex flex-col gap-2 items-center">
                  <Link href={`/${pillar.slug}`} className="text-2xl font-bold underline text-green-700 tracking-wide text-center hover:underline hover:text-blue-800">
                    {pillar.title}
                  </Link>
                  <p className="text-gray-600 text-base text-center mt-2">{pillar.description}</p>
                </article>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
} 