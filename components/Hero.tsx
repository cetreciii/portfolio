"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 0%, #e8f0ff 0%, transparent 70%), radial-gradient(900px 400px at 90% 10%, #fdeaf5 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-6 pt-32 pb-28 md:pt-40 md:pb-40">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="display-64 mt-6 max-w-5xl text-ink"
        >
          Learn.
          <br />
          Improve.
          <br />
          <em className="not-italic text-accent">Empower.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="lead mt-7 max-w-2xl"
        >
          I'm Igor! I like building things from scratch to shipped products, learn while I do it and then give back to the community by sharing my learnings!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.18 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.97]"
          >
            See the projects
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
