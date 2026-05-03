import { motion, useReducedMotion } from 'framer-motion';

const variantMap = {
  'fade-up': { opacity: 0, y: 18 },
  'fade-down': { opacity: 0, y: -18 },
  'fade-left': { opacity: 0, x: 20 },
  'fade-right': { opacity: 0, x: -20 },
  'zoom-in': { opacity: 0, scale: 0.97, y: 12 },
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 18,
  variant = 'fade-up',
  once = true,
  amount = 0.12,
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = variantMap[variant] ?? { opacity: 0, y };
  const inView = { opacity: 1 };

  if ('x' in initial) {
    inView.x = 0;
  }

  if ('y' in initial) {
    inView.y = 0;
  }

  if ('scale' in initial) {
    inView.scale = 1;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={inView}
      viewport={{ once, amount, margin: '0px 0px 8% 0px' }}
      transition={{ duration: 0.34, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
