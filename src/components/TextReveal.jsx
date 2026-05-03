import { motion, useReducedMotion } from 'framer-motion';

function getMotionTag(as) {
  if (as === 'h1') return motion.h1;
  if (as === 'h2') return motion.h2;
  if (as === 'h3') return motion.h3;
  if (as === 'span') return motion.span;
  return motion.p;
}

export default function TextReveal({
  text,
  as = 'p',
  className = '',
  delay = 0,
  once = true,
  amount = 0.35,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = getMotionTag(as);

  if (reduceMotion) {
    return <MotionTag className={className}>{text}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </MotionTag>
  );
}
