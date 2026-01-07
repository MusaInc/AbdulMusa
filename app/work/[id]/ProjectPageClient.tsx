'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/lib/projects';

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <>
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 text-sm tracking-wider text-muted hover:text-foreground transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2"
        >
          <span>←</span>
          <span className="font-mono uppercase text-xs tracking-[0.2em]">Back</span>
        </motion.div>
      </Link>

      <main className="relative w-full min-h-screen">
        <section className="h-screen flex items-center justify-center px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl w-full"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <span className="text-xs tracking-[0.3em] text-muted uppercase font-mono">
                {project.platform} · {project.year}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-light tracking-tight mb-8"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl text-foreground/70 font-light max-w-3xl mb-16"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="w-full aspect-[16/9] rounded-sm"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)`
                }}
              />
            </motion.div>
          </motion.div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-8 md:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl w-full"
          >
            <h2 className="text-sm tracking-[0.3em] text-muted uppercase font-mono mb-16">
              Features
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="text-4xl md:text-5xl font-light mb-4 text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-xl text-foreground/80">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="min-h-[50vh] flex items-center justify-center px-8 md:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl w-full"
          >
            <Link
              href="/"
              className="inline-block text-3xl md:text-4xl font-light tracking-tight hover:text-accent transition-colors duration-500"
            >
              View all work →
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}
