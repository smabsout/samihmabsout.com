"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects, type Project } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Projects I&apos;m Passionate About
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A few things I&apos;m building on the side, outside of my day-to-day
            BC/DR work.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = project.icon;

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-white" />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200/70 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
          {project.status}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>
    </>
  );

  const className =
    "group rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block ${className}`}
        >
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </motion.div>
  );
}
