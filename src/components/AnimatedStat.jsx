import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function AnimatedStat({
  value,
  prefix = '',
  label,
  detail,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView || typeof value !== 'number') {
      return undefined;
    }

    const controls = animate(count, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <div
      ref={ref}
      className="soft-panel flex min-h-[164px] flex-col justify-between p-6"
    >
      {typeof value === 'number' ? (
        <>
          <div className="font-display text-5xl leading-none text-jasmin-dark">
            <span>{prefix}</span>
            <motion.span>{rounded}</motion.span>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jasmin-brown/86">
            {label}
          </p>
        </>
      ) : (
        <>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jasmin-dark text-white">
            <BadgeCheck className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="font-display text-3xl leading-none text-jasmin-dark">{label}</p>
            <p className="text-sm leading-6 text-jasmin-dark/68">{detail}</p>
          </div>
        </>
      )}
    </div>
  );
}

