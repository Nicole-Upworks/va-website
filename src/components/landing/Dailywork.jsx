import { motion } from "framer-motion";
import {
  Headphones,
  BadgeDollarSign,
  FileText,
  ClipboardList,
  Home,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

const messages = [
  {
    icon: Headphones,
    tag: "Client Support",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-500",
    badgeBg: "bg-blue-100 text-blue-700",
    iconRing: "ring-1 ring-blue-100 bg-blue-50",
    summary: "Tickets cleared & inbox covered",
    text: "I resolved priority tickets, replied to new inquiries, and escalated the few that needed your approval.",
    meta: "Response time improved",
  },
  {
    icon: BadgeDollarSign,
    tag: "Revenue",
    accentColor: "text-violet-600",
    accentBg: "bg-violet-500",
    badgeBg: "bg-violet-100 text-violet-700",
    iconRing: "ring-1 ring-violet-100 bg-violet-50",
    summary: "Leads followed up, pipeline updated",
    text: "I followed up with warm leads, updated the CRM, and booked new calls for interested prospects.",
    meta: "Pipeline kept clean",
  },
  {
    icon: ClipboardList,
    tag: "Legal Intake",
    accentColor: "text-indigo-600",
    accentBg: "bg-indigo-500",
    badgeBg: "bg-indigo-100 text-indigo-700",
    iconRing: "ring-1 ring-indigo-100 bg-indigo-50",
    summary: "Client intake organized & scheduled",
    text: "I collected intake details, ensured forms were complete, and scheduled the next client appointments.",
    meta: "Forms + scheduling handled",
  },
  {
    icon: FileText,
    tag: "Legal Admin",
    accentColor: "text-rose-600",
    accentBg: "bg-rose-500",
    badgeBg: "bg-rose-100 text-rose-700",
    iconRing: "ring-1 ring-rose-100 bg-rose-50",
    summary: "Case docs organized & ready",
    text: "I prepared and organized documentation, labeled files correctly, and kept case folders up to date.",
    meta: "Documentation streamlined",
  },
  {
    icon: Home,
    tag: "Real Estate",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-500",
    badgeBg: "bg-emerald-100 text-emerald-700",
    iconRing: "ring-1 ring-emerald-100 bg-emerald-50",
    summary: "Listing coordination & follow-ups",
    text: "I coordinated listing tasks, followed up with leads, and confirmed upcoming showings and appointments.",
    meta: "Showings confirmed",
  },
  {
    icon: LayoutDashboard,
    tag: "CRM Updates",
    accentColor: "text-amber-600",
    accentBg: "bg-amber-500",
    badgeBg: "bg-amber-100 text-amber-700",
    iconRing: "ring-1 ring-amber-100 bg-amber-50",
    summary: "CRM updated, notes logged",
    text: "I cleaned up records, added call notes, updated deal stages, and flagged next actions for tomorrow.",
    meta: "Next actions queued",
  },
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

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DailyWork() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            What Your Assistant{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Gets Done Every Day
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate-500"
          >
            These aren't hypotheticals — this is what your assistant will actually
            send you at the end of each workday.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {messages.map((msg, idx) => {
            const Icon = msg.icon;

            return (
              <motion.div
                key={msg.tag}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Top row */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      whileHover={{ rotate: -4, scale: 1.06 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${msg.iconRing}`}
                    >
                      <Icon className={`h-4 w-4 ${msg.accentColor}`} strokeWidth={2} />
                    </motion.div>

                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${msg.badgeBg}`}
                    >
                      {msg.tag}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-2 text-sm font-semibold text-slate-900"
                >
                  {msg.summary}
                </motion.p>

                {/* Body */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05 + 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex-1 text-sm leading-relaxed text-slate-500"
                >
                  {msg.text}
                </motion.p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.05 + 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-1.5 text-xs text-slate-400"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-emerald-500"
                      strokeWidth={2.5}
                    />
                    {msg.meta}
                  </motion.span>

                  <span className="text-xs font-medium uppercase tracking-wider text-slate-300">
                    Your Assistant
                  </span>
                </div>

                {/* Hover bottom accent bar */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.05 + 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute bottom-0 left-0 h-0.5 ${msg.accentBg}`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center text-sm text-slate-400"
        >
          Your assistant works your hours — reporting back daily so you're always
          in the loop.
        </motion.p>
      </div>
    </section>
  );
}