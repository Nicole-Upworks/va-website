import { motion } from "framer-motion";
import heroImage from "../../assets/va-hero2.png";

function CheckItem({ children, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-3"
    >
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-50 text-xs text-emerald-700 ring-1 ring-emerald-200">
        ✓
      </span>
      <span className="text-sm text-slate-700">{children}</span>
    </motion.li>
  );
}

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

const fadeRight = {
  hidden: { opacity: 0, x: 40, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
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

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#efeefe]">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 py-10 md:grid md:grid-cols-2 md:items-center md:gap-6 md:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:py-16">
          {/* LEFT SIDE */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full text-center md:text-left"
          >
            {/* Badge */}
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-blue-600"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              Empowering Your Business with Elite Virtual Talent
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="
                mx-auto mt-5 max-w-[740px] font-bold tracking-tight text-slate-900 md:mx-0
                text-[1.75rem] leading-[1.08] sm:text-[2.1rem] md:text-[2.35rem] lg:text-[2.75rem] xl:text-[3.05rem]
              "
            >
              Scale Your Business with Reliable
              <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#C084FC] bg-clip-text text-transparent">
                {" "}
                Virtual Assistant Support
              </span>{" "}
              You Can Trust
            </motion.h1>

            {/* Checklist */}
            <ul className="mt-6 inline-flex flex-col space-y-2.5 text-left">
              <CheckItem delay={0.15}>
                Reliable VAs trained for day-to-day business operations
              </CheckItem>
              <CheckItem delay={0.25}>
                Cost-effective support without full-time overhead
              </CheckItem>
              <CheckItem delay={0.35}>
                Flexible outsourcing that scales with your business
              </CheckItem>
            </ul>

            {/* Left CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#289efd] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#062d60]"
              >
                Book a Free Consultation
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 md:justify-start"
            >
              <span className="font-semibold text-slate-700">SERVING</span>
              <span>US & Canada businesses</span>
              <span className="hidden text-slate-400 sm:inline">·</span>
              <span className="hidden sm:inline">
                Built for founders, startups & growing teams
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="relative flex w-full justify-center md:justify-end"
          >
            {/* Glow Effects */}
            <motion.div
              className="pointer-events-none absolute -right-10 top-10 -z-10 hidden h-56 w-56 rounded-full bg-blue-200/40 blur-3xl md:block"
              animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -left-10 bottom-0 -z-10 hidden h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl md:block"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />

            {/* Image Wrapper */}
            <div className="relative inline-block">
              <motion.img
                src={heroImage}
                alt="Eminence VA Solutions virtual assistant support"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
                }}
                className="
                  w-full object-contain
                  max-w-[260px]
                  sm:max-w-[320px]
                  md:h-[400px]
                  md:w-auto
                  md:max-w-none
                  lg:h-[450px]
                  xl:h-[490px]
                "
              />

              {/* OVERLAP BUTTON ON WAIST/BELT AREA */}
              <motion.a
                href="#services"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  absolute
                  left-1/2
                  top-[84%]
                  z-10
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  bg-[#062d60]
                  px-4 py-2
                  text-[10px]
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:bg-[#289efd]
                  sm:px-6 sm:py-2.5 sm:text-xs
                  md:px-10 md:py-3 md:text-sm
                  lg:px-14
                "
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}