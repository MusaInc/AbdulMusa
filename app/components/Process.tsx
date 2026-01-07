'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Frame the system',
    description: 'Define the loop, the pacing, and the constraints so every screen has a job.',
  },
  {
    title: 'Design for velocity',
    description: 'Prototype quickly, test on device, then turn the best flows into repeatable patterns.',
  },
  {
    title: 'Ship and tune',
    description: 'Launch with telemetry, refine the experience, and scale what proves durable.',
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-surface/60 px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs tracking-[0.4em] text-secondary uppercase mb-4">
            Method
          </h2>
          <p className="text-3xl md:text-5xl font-serif tracking-tight text-foreground max-w-3xl">
            A repeatable approach that keeps product craft and performance in sync.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[28px] border border-border bg-surface/90 p-8"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-transform duration-500 group-hover:scale-110" />
              <div className="text-xs uppercase tracking-[0.3em] text-secondary">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-serif text-foreground">{step.title}</h3>
              <p className="mt-3 text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
