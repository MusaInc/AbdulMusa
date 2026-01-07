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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-colors duration-300 shadow-lg backdrop-blur"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </motion.div>

      <main className="relative w-full min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,118,110,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(217,119,6,0.12),transparent_55%)]" />

        <section className="relative px-6 md:px-12 pt-24 md:pt-28 pb-20">
          <div className="max-w-5xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/90 border border-border mb-8"
            >
              <span className="text-xs tracking-wider uppercase text-secondary font-medium">
                {project.platform}
              </span>
              <span className="text-secondary/50">&middot;</span>
              <span className="text-xs text-secondary">{project.year}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6 text-foreground"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-secondary max-w-3xl mb-10 leading-relaxed"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl shadow-black/10 border border-border bg-surface/80"
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

        <section className="py-20 md:py-24 px-6 md:px-12 bg-surface/80">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs tracking-[0.4em] text-secondary uppercase mb-10">
                Build Notes
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-[24px] border border-border bg-background/70 p-5 md:p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                      <span className="text-xl font-semibold text-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-base md:text-lg text-foreground leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
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
