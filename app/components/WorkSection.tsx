'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { projects } from '@/lib/projects';

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -60]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20"
    >
      <Link
        href={`/work/${project.id}`}
        className="group w-full max-w-7xl"
      >
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-surface border border-border shadow-xl shadow-black/5"
        >
          <div className="aspect-[16/9] w-full relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <span className="text-xs tracking-wider uppercase text-white font-medium">
                    {project.platform}
                  </span>
                  <span className="text-white/50">·</span>
                  <span className="text-xs text-white/80">{project.year}</span>
                </motion.div>

                <motion.div
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>

              <div>
                <motion.h3
                  className="text-4xl md:text-6xl font-semibold tracking-tight mb-3 text-white"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function WorkSection() {
  return (
    <section className="relative w-full bg-background py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-[0.3em] text-secondary uppercase font-medium mb-4">
            Featured Apps
          </h2>
          <p className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Building experiences that matter
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
