'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { projects } from '@/lib/projects';

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="h-screen flex items-center justify-center px-8 md:px-16"
    >
      <Link
        href={`/work/${project.id}`}
        className="group w-full max-w-6xl"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
        >
          <div
            className="aspect-[16/10] w-full rounded-sm relative"
            style={{
              background: `linear-gradient(135deg, ${project.color}15 0%, transparent 100%)`
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-between p-12 md:p-16">
              <div className="flex items-start justify-between">
                <div>
                  <motion.h2
                    className="text-5xl md:text-7xl font-light tracking-tight mb-4"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.title}
                  </motion.h2>
                  <p className="text-sm md:text-base text-muted tracking-wider uppercase font-mono">
                    {project.platform}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 4, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl"
                >
                  →
                </motion.div>
              </div>

              <div className="flex items-end justify-between">
                <p className="text-lg md:text-xl text-foreground/70 max-w-md">
                  {project.description}
                </p>
                <span className="text-sm text-muted font-mono">{project.year}</span>
              </div>
            </div>

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at center, ${project.color}08 0%, transparent 70%)`
              }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function WorkSection() {
  return (
    <section className="relative w-full">
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-200px' }}
          className="text-center"
        >
          <h2 className="text-sm tracking-[0.3em] text-muted uppercase font-mono">
            Selected Work
          </h2>
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
