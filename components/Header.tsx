"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/data/site";

const navItems = [
  { id: "about", label: "What I do" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `relative py-1 text-sm font-medium transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-sky-600 after:transition-all after:duration-300 dark:after:bg-sky-400 ${
      activeId === id
        ? "text-sky-600 after:w-full dark:text-sky-400"
        : "text-slate-600 after:w-0 hover:text-sky-600 hover:after:w-full dark:text-slate-300 dark:hover:text-sky-400"
    }`;

  const iconLinkClass =
    "hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors duration-300 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400";

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 h-16 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-sm transition-colors duration-300 dark:border-slate-800/50 dark:bg-slate-950/80"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          samih<span className="text-sky-600 dark:text-sky-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLinkClass}
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLinkClass}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className={iconLinkClass}>
            <Mail className="h-5 w-5" />
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors duration-300 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/50 bg-white/95 dark:border-slate-800/50 dark:bg-slate-950/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeId === item.id
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-4 border-t border-slate-200/50 px-3 pt-3 dark:border-slate-800/50">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={site.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Email"
                  className="text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
