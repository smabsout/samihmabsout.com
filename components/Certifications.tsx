"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications, type Certification } from "@/data/certifications";
import AnimatedSection from "./AnimatedSection";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-16 bg-white py-24 transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Industry-recognized credentials that validate my expertise in
            cybersecurity and business resilience.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <CertCard key={cert.code} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-5 rounded-xl bg-slate-50 p-6 transition-colors duration-300 dark:bg-slate-800"
    >
      <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-lg font-bold tracking-wide text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
        {cert.code}
      </span>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {cert.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {cert.description}
        </p>
      </div>
    </motion.div>
  );
}
