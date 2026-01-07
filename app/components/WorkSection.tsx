'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Project, projects } from '@/lib/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [50, 0, 0, -40]);
  const isReversed = index % 2 === 1;
  const gradientStyle = {
    background: `linear-gradient(135deg, ${project.color}26 0%, transparent 60%)`,
  };
  const shadowStyle = {
    boxShadow: `0 40px 120px -60px ${project.color}`,
  };

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="px-6 md:px-12 py-16">
      <Link href={`/work/${project.id}`} className="group block max-w-6xl mx-auto">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-border bg-surface/90 p-8 md:p-12"
          style={shadowStyle}
        >
          <div className="absolute inset-0" style={gradientStyle} />

          <div
            className={`relative grid items-center gap-10 lg:grid-cols-[1fr,1.1fr] ${
              isReversed ? 'lg:grid-cols-[1.1fr,1fr]' : ''
            }`}
          >
            <div className={`${isReversed ? 'lg:order-2' : ''}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-secondary">
                <span>{project.platform}</span>
                <span className="text-secondary/40">&middot;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="mt-6 text-4xl md:text-5xl font-serif tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 text-lg text-secondary leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.features.map((feature: string) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                View case study
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className={`${isReversed ? 'lg:order-1' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-background/80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
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
    <section id="work" className="relative w-full py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs tracking-[0.4em] text-secondary uppercase mb-4">
            Selected Work
          </h2>
          <p className="text-3xl md:text-5xl font-serif tracking-tight text-foreground">
            Experiences engineered for clarity, speed, and repeat use.
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
