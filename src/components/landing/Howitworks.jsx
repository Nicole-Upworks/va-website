import React, { useId } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  ClipboardCheck,
  Rocket,
  ArrowRight,
  MoveRight,
} from "lucide-react";

/** Metallic gold gradient for Lucide (stroke-based) SVG icons */
function MetallicGoldIcon({ Icon, className = "", strokeWidth = 2.5 }) {
  const gid = useId();

  return (
    <Icon
      className={className}
      strokeWidth={strokeWidth}
      stroke={`url(#gold-${gid})`}
      fill="none"
    >
      <defs>
        <linearGradient id={`gold-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F7E7A1" />
          <stop offset="28%" stopColor="#E3C766" />
          <stop offset="55%" stopColor="#C9A227" />
          <stop offset="78%" stopColor="#9E7C12" />
          <stop offset="100%" stopColor="#F7E7A1" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us What You're Building",
    description:
      "Share your business goals, the tasks you need done, tools you use, and the kind of assistant you're looking for. Takes less than 10 minutes.",
    detail: "Free 15-min consultation",
  },
  {
    number: "02",
    icon: Users,
    title: "We Find Great Candidates",
    description:
      "Our recruitment team hand-sources candidates from a vetted talent pool matched specifically to your requirements and company culture.",
    detail: "From 10,000+ vetted VAs",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "We Interview & Assess For You",
    description:
      "Every candidate is interviewed, skills-tested, and background-checked — so you don't spend hours screening. We present only the top picks.",
    detail: "Multi-step vetting process",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Top Talent Joins Your Team",
    description:
      "Your assistant is onboarded, trained on your workflows, and ready to hit the ground running from day one. No ramp-up time needed.",
    detail: "Ready from day one",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-[#289efd] to-[#0a3f82] py-24 text-white"
    >
      {/* Soft highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
      </div>

      {/* Animated glow accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl"
          >
            How It{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-white/90"
          >
            From your first call to your first task completed, we handle
            everything in between.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative flex flex-col"
              >
                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.45 }}
                    className="absolute -right-3 top-12 z-10 hidden items-center justify-center lg:flex"
                  >
                    <MoveRight
                      className="h-5 w-5 text-white/50"
                      strokeWidth={2}
                    />
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/25 bg-white/[0.08] p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/[0.12] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
                >
                  {/* Step number badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.15, duration: 0.4 }}
                    className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
                  >
                    <span className="text-sm font-bold text-white/70">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: -5, scale: 1.06 }}
                    transition={{ duration: 0.25 }}
                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#062d60] shadow-sm ring-1 ring-white/10"
                  >
                    <MetallicGoldIcon
                      Icon={Icon}
                      className="h-6 w-6"
                      strokeWidth={2.4}
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.08 + 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-3 pr-8 text-lg font-bold leading-tight text-white"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08 + 0.24,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-5 flex-1 text-sm leading-relaxed text-white/80"
                  >
                    {step.description}
                  </motion.p>

                  {/* Detail badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08 + 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 backdrop-blur-sm"
                  >
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="text-xs font-medium text-white">
                      {step.detail}
                    </span>
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08 + 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white via-blue-200 to-transparent"
                  />

                  {/* Subtle corner gradient */}
                  <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-white/80"
          >
            No commitment required, start with a free consultation
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a3f82] shadow-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl"
          >
            Get Started Today
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}