'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-background">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,118,110,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,6,0.06),transparent_50%)]" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-lg font-serif tracking-[0.25em] text-foreground hover:text-accent transition-colors">
            AM
          </Link>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.3em] text-secondary">
            <Link href="/#work" className="hover:text-foreground transition-colors">Work</Link>
            <Link href="/#about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-surface border border-border text-xs uppercase tracking-[0.3em] text-secondary">
              Product Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-foreground leading-[1.05] mb-6"
          >
            Abdul Musa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-secondary leading-relaxed mb-8 max-w-2xl"
          >
            Building apps and games for iOS and Fire TV. Focused on performance, clean systems, and experiences that feel fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:contact@abdulmusa.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface text-foreground text-sm font-medium hover:border-foreground transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-wider text-secondary"
        >
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
