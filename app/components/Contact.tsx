'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full px-6 md:px-12 py-32 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,118,110,0.12),transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-xs tracking-[0.4em] text-secondary uppercase mb-6">
            Contact
          </h2>
          <p className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
            Let&apos;s build something that moves fast and feels human.
          </p>
          <p className="mt-6 text-lg text-secondary leading-relaxed max-w-xl">
            I partner with teams who care about detail, performance, and product momentum.
            If that sounds like you, I&apos;d love to hear about the next release.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-[32px] border border-border bg-surface/90 p-8 shadow-xl shadow-black/10"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-secondary">Start a project</div>
          <div className="mt-6 text-xl md:text-2xl font-serif text-foreground">
            contact@abdulmusa.com
          </div>
          <p className="mt-4 text-secondary">
            Share a brief, a timeline, or the idea you want to pressure-test.
          </p>

          <motion.a
            href="mailto:contact@abdulmusa.com"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Send an email
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          <div className="mt-8 grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.25em] text-secondary">
            <div className="rounded-2xl border border-border bg-background/70 px-4 py-3">
              Remote-ready
            </div>
            <div className="rounded-2xl border border-border bg-background/70 px-4 py-3">
              Open to collaborations
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-20 border-t border-border pt-10 text-center text-xs uppercase tracking-[0.3em] text-secondary">
        © 2024 Abdul Musa. All rights reserved.
      </div>
    </section>
  );
}
