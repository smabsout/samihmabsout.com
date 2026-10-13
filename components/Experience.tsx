"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Download } from "lucide-react";
import { experience, type ExperienceItem } from "@/data/experience";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Professional journey
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            My career highlights and the impact I&apos;ve made at leading
            companies.
          </p>
        </AnimatedSection>

        <div className="mt-16 flex flex-col gap-3">
          {experience.map((item, index) => (
            <ExperienceRow
              key={item.company}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: ExperienceItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
        isOpen
          ? "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
          : "border-slate-200 bg-transparent dark:border-slate-800"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        <span
          className={`h-2.5 w-2.5 flex-shrink-0 rounded-full transition-colors duration-300 ${
            isOpen ? "bg-sky-500" : "bg-slate-300 dark:bg-slate-600"
          }`}
        />
        <span className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-base font-semibold text-slate-900 dark:text-white">
            {item.role}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {item.company}
          </span>
        </span>
        <span className="flex-shrink-0 text-right text-sm text-slate-500 dark:text-slate-400">
          {item.date}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[2.625rem] sm:pl-[3.125rem]">
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.summary}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-500/10 dark:text-sky-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="/resume.pdf"
                download
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors duration-300 hover:border-sky-600 hover:text-sky-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
