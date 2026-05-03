import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.18,
  });

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px bg-white/40" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-[linear-gradient(90deg,#d8c7a6_0%,#b79a6b_45%,#8c6f4a_100%)] shadow-[0_0_24px_rgba(183,154,107,0.4)]"
        style={{ scaleX }}
      />
    </>
  );
}
