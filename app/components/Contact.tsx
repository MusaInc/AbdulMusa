'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-8 md:px-16 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h2 className="text-sm tracking-[0.3em] text-muted uppercase font-mono mb-12">
          Contact
        </h2>

        <motion.a
          href="mailto:contact@abdulmusa.com"
          className="inline-block text-3xl md:text-5xl font-light tracking-tight hover:text-accent transition-colors duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          contact@abdulmusa.com
        </motion.a>
      </motion.div>
    </section>
  );
}
