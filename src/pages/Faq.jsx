import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const faqData = [
  {
    category: "General Questions",
    items: [
      {
        question: "What is Eminence VA Solutions?",
        answer:
          "Eminence VA Solutions is a virtual assistant company that provides highly-trained, elite-level VAs primarily from the Philippines to businesses in the US and Canada. We specialize in industries like law firms, credit repair, real estate, and more.",
      },
      {
        question: "Where are your virtual assistants based?",
        answer:
          "Our virtual assistants are primarily based in the Philippines, known for strong English proficiency, high education levels, and an excellent work ethic.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve law firms, credit repair companies, business funding and financial services, debt relief and settlement, real estate and investors, tax preparation and accounting, startups, and Spanish-speaking markets.",
      },
      {
        question: "Do you offer bilingual virtual assistants?",
        answer:
          "Yes. We offer bilingual English/Spanish virtual assistants who can support law firms, real estate businesses, and financial services companies looking to serve Spanish-speaking markets.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "How do I get started?",
        answer:
          "Reach out through our website or contact page and we will schedule a discovery call to understand your business needs and match you with the right VA.",
      },
      {
        question: "How long does it take to get a VA placed?",
        answer:
          "Placement timelines vary based on your needs, but we work efficiently to match you with a qualified VA as quickly as possible, typically within a few business days after finalizing your requirements.",
      },
      {
        question: "Can I interview or select my VA before committing?",
        answer:
          "Yes. We believe the right fit matters, so you will have the opportunity to meet and evaluate your VA candidate before moving forward.",
      },
    ],
  },
  {
    category: "About the VAs",
    items: [
      {
        question: 'What makes your VAs "elite level"?',
        answer:
          "Our VAs go through a rigorous vetting and training process. They are selected for their industry knowledge, communication skills, reliability, and ability to integrate into fast-paced business workflows.",
      },
      {
        question: "Are your VAs trained for specific industries?",
        answer:
          "Absolutely. Unlike generic VA services, our assistants are trained in industry-specific tasks, whether that means drafting dispute letters for credit repair companies or handling lender coordination for business funding firms.",
      },
      {
        question: "What tools and software are your VAs familiar with?",
        answer:
          "Our VAs are experienced with a wide range of CRMs, legal management tools, accounting software, and communication platforms. During onboarding, we also make sure they align with the specific tools your business uses.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    items: [
      {
        question: "How are your services priced?",
        answer:
          "Pricing depends on the scope of work, number of hours, and specific industry requirements. Contact us for a customized quote tailored to your business needs.",
      },
      {
        question: "Are there long-term contracts?",
        answer:
          "We offer flexible engagement models to suit your business. Whether you need ongoing support or a more tailored arrangement, we can discuss an option that fits your goals.",
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
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

function FaqContent() {
  const allItems = useMemo(
    () =>
      faqData.flatMap((group) =>
        group.items.map((item) => ({
          ...item,
          category: group.category,
          id: `${group.category}-${item.question}`,
        }))
      ),
    []
  );

  const [openItem, setOpenItem] = useState(allItems[0]?.id ?? "");

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-[-80px] top-16 h-64 w-64 rounded-full bg-[#efeefe] blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="absolute right-[-100px] top-40 h-72 w-72 rounded-full bg-[#dff1ff] blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#f3f8ff] blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#cfe5ff] bg-white/80 px-4 py-1 text-sm font-medium text-[#289efd] shadow-sm backdrop-blur">
            Frequently Asked Questions
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything you need to know about working with Eminence VA Solutions
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Learn how our elite virtual assistants help businesses delegate
            smarter, move faster, and grow with confidence.
          </p>
        </motion.div>

        {/* FAQ groups */}
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          animate="show"
          className="mt-16 space-y-10"
        >
          {faqData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              transition={{ delay: groupIndex * 0.08 }}
              whileHover={{ y: -2 }}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#289efd]" />
                <h2 className="text-2xl font-semibold text-slate-900">
                  {group.category}
                </h2>
              </div>

              <div className="space-y-4">
                {group.items.map((item, index) => {
                  const id = `${group.category}-${item.question}`;
                  const isOpen = openItem === id;

                  return (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#fafcff] transition duration-300 hover:border-[#bfdcff] hover:shadow-md"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenItem(isOpen ? "" : id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                      >
                        <span className="text-base font-semibold text-slate-900 sm:text-lg">
                          {item.question}
                        </span>

                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#289efd] shadow-sm"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                              <div className="h-px w-full bg-slate-200" />
                              <motion.p
                                initial={{ y: 8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -6, opacity: 0 }}
                                transition={{ duration: 0.25, delay: 0.08 }}
                                className="pt-4 leading-7 text-slate-600"
                              >
                                {item.answer}
                              </motion.p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
          className="mt-16 rounded-3xl border border-[#d8eaff] bg-[#f8fbff] p-8 text-center shadow-[0_10px_30px_rgba(40,158,253,0.08)] sm:p-10"
        >
          <h3 className="text-2xl font-semibold text-slate-900">
            Still have questions?
          </h3>
          <p className="mt-3 text-slate-600">
            Let’s talk about your business needs and find the right VA solution
            for you.
          </p>

          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex rounded-xl border border-[#289efd] bg-white px-5 py-3 text-sm font-semibold text-[#289efd] transition hover:bg-[#062d60] hover:text-white"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Faq() {
  return (
    <>
      <Navbar />
      <FaqContent />
      <Footer />
    </>
  );
}