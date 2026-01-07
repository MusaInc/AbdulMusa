'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative w-full bg-background px-6 md:px-12 py-32 md:py-48">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm tracking-[0.3em] text-secondary uppercase font-medium mb-8">
            Get in Touch
          </h2>

          <p className="text-2xl md:text-3xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in working together or learning more about my apps?
          </p>

          <motion.a
            href="mailto:contact@abdulmusa.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium text-lg hover:bg-foreground/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Send an Email
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-sm text-secondary">
              © 2024 Abdul Musa. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
