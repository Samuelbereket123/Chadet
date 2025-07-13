"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projects from '../../data/projects';
import GridBG from '../../components/GridBG';

export default function ProjectsPage() {
  return (
    <section className="relative w-full min-h-screen bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <GridBG />
      
      <h1 className="text-3xl sm:text-4xl font-bold text-green-600 mb-12 sm:mb-16 text-center tracking-wide uppercase">Our Projects</h1>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/4 sm:left-1/3 lg:left-1/4 top-0 h-full w-1 bg-green-300 z-0" aria-hidden="true" />
        
        {/* Timeline entries */}
        <div className="relative w-full space-y-8 sm:space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex items-center w-full"
            >
              {/* Timeline marker */}
              <div className="absolute left-1/4 sm:left-1/3 lg:left-1/4 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-green-600 border-4 border-white shadow-lg"></div>
              </div>
              
              {/* Year on the left */}
              <div className="w-1/4 sm:w-1/3 lg:w-1/4 pr-4 sm:pr-6 lg:pr-8">
                <div className="text-right">
                  <time 
                    className="text-2xl sm:text-3xl font-bold text-green-600 font-mono" 
                    dateTime={project.year}
                  >
                    {project.year}
                  </time>
                </div>
              </div>
              
              {/* Project details on the right */}
              <div className="flex-1 pl-4 sm:pl-6 lg:pl-8">
                <article className="bg-white border border-green-100 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-4 sm:p-6">
                  <header className="mb-3 sm:mb-4">
                    <Link 
                      href={`/projects/${project.slug}`} 
                      className="text-lg sm:text-xl font-bold text-green-700 hover:text-green-800 transition-colors block"
                    >
                      {project.title}
                    </Link>
                  </header>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {project.image && (
                    <div className="w-full h-32 sm:h-40 relative rounded-lg overflow-hidden border border-green-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
