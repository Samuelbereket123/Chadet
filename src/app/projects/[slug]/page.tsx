"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "@/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Project Not Found</h1>
        <p className="mb-8 text-gray-600">Sorry, we couldn't find the project you were looking for.</p>
        <Link href="/projects" className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition">Back to Timeline</Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white px-4 py-16 flex flex-col items-center"
    >
      {/* Breadcrumb */}
      <nav className="w-full max-w-2xl mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline text-green-600">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/projects" className="hover:underline text-green-600">Projects</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 font-semibold truncate max-w-[120px]">{project.title}</li>
        </ol>
      </nav>

      <div className="w-full max-w-2xl bg-white border border-green-100 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-500 hover:text-green-800 mb-2 transition-colors duration-200">{project.title}</h1>
        <div className="text-green-600 font-semibold text-lg mb-6">{project.year}</div>
        <div className="prose prose-lg text-gray-700 mb-8 whitespace-pre-line">
          {project.fullDescription}
        </div>
        <Link href="/projects" className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">Back to Timeline</Link>
      </div>
    </motion.section>
  );
} 