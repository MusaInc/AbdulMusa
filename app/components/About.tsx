'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-surface/70 px-6 md:px-12 py-32 md:py-44">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.6),transparent)]" />
      <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-xs tracking-[0.4em] text-secondary uppercase mb-6">
            About
          </h2>

          <p className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
            I build product systems that feel calm, precise, and fast - no matter the screen size.
          </p>

          <p className="mt-6 text-lg text-secondary leading-relaxed max-w-xl">
            From trivia arenas to finance tools, I focus on the invisible details:
            latency, clarity of motion, and interfaces that make repeat use feel effortless.
          </p>

          <div className="mt-10 space-y-4">
            {[
              'Performance is a feature, not a nice-to-have.',
              'Design systems should scale with content and velocity.',
              'Every interaction should earn its place.',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-secondary">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="rounded-[28px] border border-border bg-surface/90 p-8 shadow-xl shadow-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Capabilities</p>
            <div className="mt-6 space-y-3 text-foreground">
              {[
                'Realtime product loops and multiplayer systems',
                'TV-first navigation and living-room UX',
                'Product design systems and performance tuning',
                'Launch playbooks, iteration, and optimization',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-highlight" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: 'Apps published', value: '4+' },
              { label: 'Platforms', value: '2' },
              { label: 'Latest release', value: '2024' },
              { label: 'Focus', value: 'iOS + TV' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background/70 px-4 py-5"
              >
                <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.3em] text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
