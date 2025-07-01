"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ParticlesBG from "@/components/Particles";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="relative w-full min-h-screen bg-white py-24 px-2 sm:px-6 lg:px-8 overflow-hidden">
      <ParticlesBG />
      <h1 className="text-4xl font-bold text-green-600 mb-16 text-center tracking-wide uppercase">Our Projects</h1>
      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-green-100 z-0" aria-hidden="true" />
        {/* Timeline entries */}
        <ol className="relative w-full space-y-16">
          {projects.map((project, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.li
                key={project.slug}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="relative flex w-full"
              >
                {/* Timeline marker above card */}
                <div className="absolute left-1/2 -top-6 -translate-x-1/2 z-10">
                  <span className="block w-4 h-4 rounded-full bg-black border-4 border-white shadow" />
                </div>
                {/* Card */}
                <div
                  className={`flex-1 flex ${
                    isLeft
                      ? "justify-end pr-8 md:pr-16"
                      : "justify-start pl-8 md:pl-16"
                  }`}
                >
                  <article
                    className="bg-white border border-green-100 rounded-2xl shadow-lg px-6 py-6 max-w-md w-full flex flex-col gap-2 md:gap-4"
                  >
                    <header className="flex items-center gap-4 mb-2">
                      <Link href={`/projects/${project.slug}`} className="text-xl font-bold underline text-green-700 tracking-wide flex-1 hover:underline hover:text-blue-800">
                        {project.title}
                      </Link>
                      <time className="text-green-500 font-mono text-base" dateTime={project.year}>
                        {project.year}
                      </time>
                    </header>
                    <p className="text-gray-600 text-base mb-2">{project.description}</p>
                    {project.image && (
                      <div className="w-full h-40 relative rounded-lg overflow-hidden border border-green-100">
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
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
