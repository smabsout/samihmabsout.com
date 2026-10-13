"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills, type Skill } from "@/data/skills";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            What I do
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            I specialize in building comprehensive security frameworks and
            business continuity strategies that protect organizations from
            cyber threats and operational disruptions.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl bg-white p-6 pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800"
    >
      <div className="-mt-6 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
        {skill.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {skill.description}
      </p>
    </motion.div>
  );
}
