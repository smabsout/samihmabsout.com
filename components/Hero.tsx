"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { site } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="top"
      ref={ref}
      className="scroll-mt-16 flex flex-col items-center px-4 pb-16 pt-28 text-center transition-colors duration-300 sm:px-6 lg:px-8"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0 }}
        className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-52 sm:w-52 dark:border-slate-800"
      >
        <Image
          src="/avatar.png"
          alt={site.name}
          fill
          sizes="(min-width: 640px) 13rem, 11rem"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.h1
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
      >
        {site.name}
      </motion.h1>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 text-xl text-slate-600 dark:text-slate-300"
      >
        {site.title}
      </motion.p>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
      >
        I ensure organizations{" "}
        <Highlight inView={inView} delay={0.9}>
          stay operational when crisis strikes
        </Highlight>
        . From cyber incidents to natural disasters, I build the frameworks
        that{" "}
        <Highlight inView={inView} delay={1.2}>
          keep businesses running
        </Highlight>{" "}
        and people employed. It&apos;s what I&apos;m passionate about.
      </motion.p>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#contact"
          className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-colors duration-300 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
        >
          Get in touch
        </a>
        <a
          href="#experience"
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Experience
        </a>
      </motion.div>
    </section>
  );
}

function Highlight({
  children,
  inView,
  delay,
}: {
  children: ReactNode;
  inView: boolean;
  delay: number;
}) {
  return (
    <span className="relative inline-block font-semibold text-sky-600 dark:text-sky-400">
      {children}
      <motion.span
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.6, delay }}
        className="absolute bottom-0 left-0 -z-10 h-1.5 bg-sky-100 dark:bg-sky-900/50"
      />
    </span>
  );
}
