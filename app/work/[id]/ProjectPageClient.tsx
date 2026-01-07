'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border hover:bg-foreground hover:text-background transition-colors duration-300 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </motion.div>

      <main className="relative w-full min-h-screen bg-background">
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-32">
          <div className="max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border mb-8"
            >
              <span className="text-xs tracking-wider uppercase text-secondary font-medium">
                {project.platform}
              </span>
              <span className="text-secondary/50">·</span>
              <span className="text-xs text-secondary">{project.year}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 text-foreground"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-secondary max-w-3xl mb-16 leading-relaxed"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-border"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm tracking-[0.3em] text-secondary uppercase font-medium mb-16">
                Key Features
              </h2>

              <div className="grid md:grid-cols-3 gap-12">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                      <span className="text-xl font-semibold text-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-lg text-foreground leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium text-lg hover:bg-foreground/90 transition-colors duration-300"
              >
                View All Apps
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
