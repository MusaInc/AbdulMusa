'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const y = scrollY * 0.45;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(15,118,110,0.15),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(217,119,6,0.12),transparent_55%)]" />
      <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-32 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-highlight/10 blur-3xl" />

      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <span className="text-lg font-serif tracking-[0.35em] uppercase text-foreground">AM</span>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.3em] text-secondary">
            <Link href="/#work" className="hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/#about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/#contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground hover:border-foreground transition-colors"
          >
            Let&apos;s build
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ opacity, y }}
        className="relative z-10"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 grid gap-14 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-secondary"
            >
              Product Developer
              <span className="text-secondary/50">&middot;</span>
              iOS + Fire TV
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-foreground"
            >
              Abdul Musa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg md:text-xl text-secondary max-w-xl leading-relaxed"
            >
              I build high-performance products that feel tactile and human - from
              multiplayer trivia to TV-first experiences and mobile utilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Explore work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:contact@abdulmusa.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-6 py-3 text-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                Email me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative"
          >
            <div className="rounded-[32px] border border-border bg-surface/90 p-8 shadow-2xl shadow-black/10 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-secondary">
                <span>Now building</span>
                <span>2024</span>
              </div>
              <h2 className="mt-6 text-3xl md:text-4xl font-serif text-foreground">
                Systems that turn play into habit.
              </h2>
              <p className="mt-4 text-secondary leading-relaxed">
                I obsess over onboarding, pace, and performance so every session feels deliberate,
                fast, and easy to return to.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: 'Apps', value: '4+' },
                  { label: 'Platforms', value: '2' },
                  { label: 'Latest', value: '2024' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-background/70 px-3 py-4 text-center"
                  >
                    <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                    <div className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-secondary">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 -bottom-6 rounded-2xl border border-border bg-background/90 px-4 py-3 text-xs uppercase tracking-[0.25em] text-secondary shadow-lg"
            >
              Remote friendly
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-secondary"
        >
          <span className="h-[1px] w-10 bg-secondary/40" />
          Scroll
          <span className="h-[1px] w-10 bg-secondary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
