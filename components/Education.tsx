"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";
import { education, type EducationItem } from "@/data/education";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A software engineering foundation, now extending into cybersecurity
            law and policy.
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6">
          {education.map((item, index) => (
            <EducationCard key={item.degree} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-5 rounded-xl bg-white p-6 transition-colors duration-300 dark:bg-slate-800"
    >
      <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
        <GraduationCap className="h-7 w-7" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {item.degree}
          </h3>
          <span className="flex-shrink-0 text-sm text-slate-500 dark:text-slate-400">
            {item.date}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {item.school} · {item.location}
        </p>
        {item.note && (
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
            {item.note}
          </p>
        )}
      </div>
    </motion.div>
  );
}
