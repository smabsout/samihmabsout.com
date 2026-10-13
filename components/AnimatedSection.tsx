"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 20,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
