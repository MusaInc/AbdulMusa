'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative w-full bg-surface px-6 md:px-12 py-32 md:py-48">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm tracking-[0.3em] text-secondary uppercase font-medium mb-8">
            About
          </h2>

          <p className="text-3xl md:text-5xl font-medium leading-[1.4] text-foreground mb-12">
            Building apps and games for iOS and Fire TV.
            Focused on performance, thoughtful design, and shipping quality products.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div>
              <div className="text-4xl md:text-5xl font-semibold text-foreground mb-2">4+</div>
              <div className="text-sm text-secondary">Apps Published</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold text-foreground mb-2">2</div>
              <div className="text-sm text-secondary">Platforms</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold text-foreground mb-2">2024</div>
              <div className="text-sm text-secondary">Latest Release</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
