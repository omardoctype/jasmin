import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { brand, navigation } from '../data/siteData';
import useScrolled from '../hooks/useScrolled';
import ButtonLink from './ButtonLink';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(16);

  return (
    <nav
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-jasmin-brown/10 bg-white/88 shadow-[0_18px_50px_-36px_rgba(74,58,42,0.4)] backdrop-blur-md'
          : 'border-transparent bg-jasmin-ivory/82 backdrop-blur-sm'
      }`}
    >
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <a
          href="#accueil"
          className="inline-flex min-w-0 items-center gap-3"
        >
          <img
            src={brand.mark}
            alt="Logo École Jasmin"
            className="h-11 w-11 rounded-2xl shadow-[0_16px_32px_-24px_rgba(74,58,42,0.8)]"
          />
          <div className="min-w-0">
            <p className="truncate font-display text-2xl leading-none text-jasmin-dark">
              {brand.name}
            </p>
            <p className="truncate text-xs uppercase tracking-[0.24em] text-jasmin-brown/78">
              {brand.subtitle}
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-jasmin-dark/76 transition-colors hover:text-jasmin-dark"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center xl:flex">
          <ButtonLink href="#contact">S’inscrire</ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-jasmin-brown/14 bg-white/70 text-jasmin-dark transition-transform duration-300 hover:-translate-y-0.5 xl:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="border-t border-jasmin-brown/10 bg-white/96 xl:hidden"
          >
            <div className="site-container flex flex-col gap-3 py-5">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-jasmin-dark/80 transition-colors hover:border-jasmin-brown/10 hover:bg-jasmin-ivory"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink
                href="#contact"
                className="mt-2"
                showIcon={false}
              >
                S’inscrire
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

