'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-8 md:px-16 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <h2 className="text-sm tracking-[0.3em] text-muted uppercase font-mono mb-12">
          About
        </h2>

        <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90">
          Building apps, games, and web products across iOS, Fire TV, and web platforms.
          Focused on performance, system design, and shipping.
        </p>
      </motion.div>
    </section>
  );
}
