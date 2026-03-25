import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
// import FloatingChat from "../components/FloatingChat";
import BackToTop from "../components/BackToTop";

import logo from "../assets/logo1.png";
import ceoImage from "../assets/ceo-ramy.jpeg";
import amaniyImage from "../assets/amaniy.jpeg";
import nicoImage from "../assets/nico.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-white pb-16 pt-20 sm:pb-20 sm:pt-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute right-10 top-24 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />
          </div>

          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mx-auto max-w-[1200px] px-6 text-center lg:px-8"
          >
            <motion.img
              variants={fadeUp}
              src={logo}
              alt="Eminence VA Solutions Logo"
              className="mx-auto mb-10 w-72 object-contain sm:w-96"
            />

            <motion.h1
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              About Eminence VA Solutions
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
            >
              We help founders, startups, and growing businesses delegate
              smarter, operate faster, and scale without hiring full-time
              overhead.
            </motion.p>
          </motion.div>
        </section>

        {/* ================= Mission & Vision ================= */}
        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-[1200px] px-6 lg:px-8"
          >
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <motion.div variants={fadeLeft}>
                <h3 className="text-xl font-semibold text-slate-900">
                  Our Mission
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Our mission is simple — give businesses access to reliable,
                  highly-trained assistants who integrate seamlessly into their
                  workflow. We remove operational bottlenecks so you can focus
                  on growth.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-slate-900">
                  Our Vision
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  We envision a future where businesses of all sizes can scale
                  efficiently without operational limitations. By combining
                  talented virtual assistants with structured systems, we help
                  companies grow with confidence.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-10 text-center shadow-sm"
              >
                <p className="text-xl font-semibold text-slate-900">
                  Structured Systems. Elite Virtual Talent.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ================= Executive Leadership Header ================= */}
        <section className="border-t border-slate-100 bg-slate-50 pb-4 pt-20 sm:pt-24">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-[1200px] px-6 text-center lg:px-8"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Leadership
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Executive Leadership Team
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-xl text-base text-slate-500"
            >
              The people behind the vision, operations, and growth of Eminence
              VA Solutions.
            </motion.p>
          </motion.div>
        </section>

        {/* ================= RAMY SECTION ================= */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-[1200px] px-6 lg:px-8"
          >
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <motion.div variants={fadeLeft}>
                <span className="mb-4 inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  President, Co-Founder, CEO & CFO
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ramy Elsaeed
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  Ramy Elsaeed serves as the President, Co-Founder, Chief
                  Executive Officer, and Chief Financial Officer of Eminence VA
                  Solutions. As President, he leads the company’s overall
                  direction, sets long-term priorities, and ensures every
                  department remains aligned with the organization’s mission,
                  standards, and growth goals.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  As Co-Founder, Ramy helped establish the company’s foundation,
                  vision, and leadership structure. As Chief Executive Officer,
                  he makes final executive decisions, oversees senior leadership,
                  drives strategic partnerships, and represents the company in
                  high-level business relationships. As Chief Financial Officer,
                  he leads financial strategy, budgeting, planning, and fiscal
                  accountability to support sustainable and responsible growth.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.28 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-200/20 to-cyan-100/20 blur-2xl" />
                <img
                  src={ceoImage}
                  alt="Ramy Elsaeed - President, Co-Founder, CEO, and CFO of Eminence VA Solutions"
                  className="relative mx-auto h-[520px] w-[420px] rounded-2xl border border-white/60 object-cover object-top shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ================= AMANIY SECTION ================= */}
        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-[1200px] px-6 lg:px-8"
          >
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <motion.div
                variants={fadeLeft}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.28 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-200/20 to-sky-100/20 blur-2xl" />
                <img
                  src={amaniyImage}
                  alt="Amaniy Ahmad - Vice President, Co-Founder, CMO, and COO of Eminence VA Solutions"
                  className="relative mx-auto h-[520px] w-[420px] rounded-2xl border border-white/60 object-cover object-top shadow-xl"
                />
              </motion.div>

              <motion.div variants={fadeRight}>
                <span className="mb-4 inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Vice President, Co-Founder, CMO & COO
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Amaniy Ahmad
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  Amaniy Ahmad serves as the Vice President, Co-Founder, Chief
                  Marketing Officer, and Chief Operations Officer of Eminence VA
                  Solutions. As Vice President, she supports executive
                  leadership, helps guide company-wide initiatives, and ensures
                  strategic priorities are translated into measurable action
                  across the organization.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  As Co-Founder, Amaniy helped shape the company’s brand,
                  structure, and long-term direction. As Chief Marketing
                  Officer, she leads branding, marketing strategy, market
                  positioning, and client-facing growth efforts that strengthen
                  visibility and acquisition. As Chief Operations Officer, she
                  oversees operational systems, workflow execution, internal
                  coordination, and day-to-day performance to ensure the company
                  delivers a smooth, efficient, and scalable client experience.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ================= NICO SECTION ================= */}
        <section className="border-t border-slate-100 bg-slate-50 py-20 sm:py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-[1200px] px-6 lg:px-8"
          >
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <motion.div variants={fadeLeft}>
                <span className="mb-4 inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Chief Technology Officer & Social Media Director
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Nicole Manaloto
                </h2>

                <p className="mt-6 leading-relaxed text-slate-600">
                  Nicole Manaloto serves as the Chief Technology Officer
                  and Social Media Director of Eminence VA Solutions.
                  In this role, he leads the company’s digital infrastructure,
                  oversees website development and technical operations,
                  and ensures seamless system performance.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  As Social Media Director, Nicole leads the strategic planning
                  and execution of the brand’s online presence. He manages content development,
                  strengthens visibility across platforms, drives audience interaction,
                  and ensures a cohesive brand identity throughout all digital channels.
                  Through this role, he plays a key part in expanding business reach,
                  increasing brand awareness, and positioning Eminence VA Solutions
                  to effectively engage its target market.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.28 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-200/20 to-lime-100/20 blur-2xl" />
                <img
                  src={nicoImage}
                  alt="Nico Paolo Taruc - Business Development Representative and Social Media Director of Eminence VA Solutions"
                  className="relative mx-auto h-[520px] w-[420px] rounded-2xl border border-white/60 object-cover object-top shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
      {/* <FloatingChat /> */}
      <BackToTop />
    </div>
  );
}