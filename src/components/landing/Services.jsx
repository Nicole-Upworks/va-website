import React, { useId } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Home,
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  ShieldCheck,
  Calculator,
  Landmark,
  Languages,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

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

const industries = [
  {
    title: "Law Firms",
    tagline: "Reliable legal admin for fast-moving practices.",
    icon: Scale,
    services: ["Lemon Law", "Immigration Law", "ADA Compliance", "Civil Litigation"],
  },
  {
    title: "Credit Repair Companies",
    tagline: "Scale your credit repair operations efficiently.",
    icon: BadgeDollarSign,
    services: ["Credit Report Analysis", "Dispute Letters", "Client Onboarding", "CRM Management"],
  },
  {
    title: "Business Funding & Financial",
    tagline: "Support funding workflows and client readiness.",
    icon: Landmark,
    services: ["Profile Review", "Funding Applications", "Lender Coordination", "Doc Verification"],
  },
  {
    title: "Debt Relief & Settlement",
    tagline: "Structured support for enrollment and documentation.",
    icon: ShieldCheck,
    services: ["Debt Settlement", "Debt Management Plans", "Restructuring", "Program Enrollment"],
  },
  {
    title: "Real Estate & Investors",
    tagline: "Lead handling and transaction coordination.",
    icon: Home,
    services: ["Cold Calling & Lead Gen", "Seller Qualification", "Transaction Coordination", "CRM Management"],
  },
  {
    title: "Tax Preparation & Accounting",
    tagline: "Dependable admin support during tax season.",
    icon: Calculator,
    services: ["Client Intake", "W-2 / 1099 Data Entry", "Bookkeeping Prep", "Tax Season Admin"],
  },
  {
    title: "Startups & Growing Businesses",
    tagline: "Flexible support without full-time overhead.",
    icon: BriefcaseBusiness,
    services: ["Customer Support", "Appointment Setting", "Lead Generation", "Admin Assistance"],
  },
  {
    title: "Spanish-Speaking Markets",
    tagline: "Bilingual support that expands your client reach.",
    icon: Languages,
    services: ["Bilingual VAs", "Law Firm Support", "Real Estate Support", "Financial Services"],
  },
];

const shortList = [
  "Law Firms",
  "Credit Repair Companies",
  "Business Funding Firms",
  "Debt Relief Companies",
  "Real Estate Agencies & Investors",
  "Tax Preparation Firms",
  "Financial Consulting Firms",
  "Startups & Growing Businesses",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
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
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#e8f1fc] py-24">
      {/* Grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #dde8f5 1px, transparent 1px), linear-gradient(to bottom, #dde8f5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, white 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#289efd]"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#289efd]"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Industries We Serve
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Specialized VA Support For{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                High-Trust Industries
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-blue-100 opacity-60"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate-500"
          >
            Our Virtual Assistants are trained for specialized industries that demand
            reliability, confidentiality, and operational excellence.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry, idx) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                {/* Top gradient band */}
                <div className="relative flex-none bg-gradient-to-br from-[#289efd] to-[#0a3f82] px-5 pb-9 pt-5">
                  <motion.span
                    className="absolute right-3 top-2 select-none text-[64px] font-black leading-none text-white/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.45 }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </motion.span>

                  <motion.div
                    whileHover={{ rotate: -4, scale: 1.06 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#062d60] shadow ring-1 ring-white/10"
                  >
                    <MetallicGoldIcon
                      Icon={Icon}
                      className="h-[18px] w-[18px]"
                      strokeWidth={2.4}
                    />
                  </motion.div>

                  <div className="mt-4 h-[76px]">
                    <h3 className="line-clamp-2 text-[16px] font-extrabold leading-snug text-white">
                      {industry.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-white/70">
                      {industry.tagline}
                    </p>
                  </div>
                </div>

                {/* Wave divider */}
                <div className="-mt-4 flex-none">
                  <svg
                    viewBox="0 0 400 16"
                    preserveAspectRatio="none"
                    className="h-4 w-full"
                    aria-hidden
                  >
                    <path d="M0,16 C133,0 266,0 400,16 L400,16 L0,16 Z" fill="white" />
                  </svg>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
                  <ul className="space-y-2">
                    {industry.services.map((item, serviceIdx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{
                          duration: 0.35,
                          delay: serviceIdx * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-center gap-2.5 rounded-lg border border-blue-50 bg-[#f0f6ff] px-3 py-2.5"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5 flex-none text-[#289efd]"
                          strokeWidth={2.5}
                        />
                        <span className="text-[12px] font-semibold leading-none text-slate-700">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover CTA */}
                  <div className="mt-4 h-5 overflow-hidden">
                    <motion.a
                      href="#contact"
                      initial={{ opacity: 0, y: 8 }}
                      whileHover={{ x: 2 }}
                      className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-blue-500 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      Book Free Consultation
                      <ChevronRight className="h-3 w-3" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Short list panel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="mt-14 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                Quick Overview
              </span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
                We Commonly Work With
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Our assistants are matched to organizations that need confidentiality,
                responsiveness, and structured operational support.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-2.5">
              {shortList.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-white text-emerald-500 shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <motion.p variants={fadeUp} className="text-sm text-slate-400">
            Need help choosing the right industry-specific VA support model?
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#contact"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700"
          >
            Get Matched With a VA
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}