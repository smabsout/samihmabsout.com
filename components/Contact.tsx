"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(site.email).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-white py-24 transition-colors duration-300 dark:bg-slate-900"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
      >
        <div className="relative mx-auto h-24 w-24">
          <div className="motion-safe:animate-pulse absolute inset-0 -z-10 rounded-full bg-sky-600/10" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-slate-700">
            <Image
              src="/avatar.png"
              alt={site.name}
              fill
              sizes="6rem"
              className="object-cover"
            />
          </div>
          <span className="absolute bottom-1 right-0 flex h-4 w-4">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-slate-800" />
          </span>
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Let&apos;s work together
        </h2>
        <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
          Ready to strengthen your organization&apos;s resilience? Let&apos;s
          discuss your business continuity and cybersecurity needs.
        </p>
        <p className="mt-3 max-w-md text-sm text-slate-500 dark:text-slate-500">
          Whether you need to strengthen your organization&apos;s cyber
          defenses, develop business continuity strategies, or discuss
          resilience challenges, I&apos;m here to help protect what matters
          most to your business.
        </p>

        <div className="mt-8 flex max-w-full items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1.5 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
          <a
            href={`mailto:${site.email}`}
            className="min-w-0 truncate px-4 text-sm text-slate-900 transition-colors duration-300 hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
          >
            {site.email}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="flex-shrink-0 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <a
          href={site.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-2 text-sm text-slate-600 transition-colors duration-300 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn profile
        </a>
      </motion.div>
    </section>
  );
}
