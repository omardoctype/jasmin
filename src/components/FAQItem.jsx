import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export default function FAQItem({
  id,
  question,
  answer,
  open,
  onToggle,
}) {
  return (
    <article className="soft-panel overflow-hidden">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          onClick={onToggle}
        >
          <span className="text-base font-semibold text-jasmin-dark sm:text-lg">{question}</span>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jasmin-dark text-white">
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1">
              <p className="max-w-3xl text-sm leading-7 text-jasmin-dark/70 sm:text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

