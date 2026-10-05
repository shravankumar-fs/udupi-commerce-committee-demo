"use client";
import { MotionConfig, motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Minimal, consistent motion: short fade-up, gentle easing, plays once.
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Respects the visitor's "reduce motion" setting site-wide. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades content up when it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "aside" | "li" }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{ hidden: fadeUp.hidden, show: { ...(fadeUp.show as object), transition: { duration: 0.6, ease: EASE, delay } } }}
    >
      {children}
    </M>
  );
}

/** Container whose StaggerItem children appear one after another. */
export function Stagger({ children, className, gap = 0.07, onLoad = false }: { children: ReactNode; className?: string; gap?: number; onLoad?: boolean }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(onLoad ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "0px 0px -60px 0px" } })}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/** Subtle lift on hover/tap for cards. */
export function Lift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ y: -4 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
      {children}
    </motion.div>
  );
}
