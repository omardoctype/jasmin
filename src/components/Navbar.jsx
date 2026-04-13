import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { brand } from '../data/siteData';
import useScrolled from '../hooks/useScrolled';

const mainLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: "L'ecole", href: '#ecole' },
  { label: 'Nos chefs', href: '#chefs' },
  { label: 'Contact', href: '#contact' },
];

const formationLinks = [
  { label: 'BTP Patisserie', href: '#/formations/btp-patisserie' },
  { label: 'BTP Cuisine', href: '#/formations/btp-cuisine' },
  { label: 'CAP', href: '#/formations/cap' },
  { label: 'CC Patisserie', href: '#/formations/cc-patisserie' },
  { label: 'CC Cuisine', href: '#/formations/cc-cuisine' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [formationsOpen, setFormationsOpen] = useState(false);
  const scrolled = useScrolled(16);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
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
            alt="Logo Ecole Jasmin"
            className="h-14 w-14 rounded-2xl shadow-[0_16px_32px_-24px_rgba(74,58,42,0.8)] sm:h-16 sm:w-16"
          />
          <div className="min-w-0">
            <p className="truncate font-display text-[1.65rem] leading-none text-jasmin-dark sm:text-[1.85rem]">
              {brand.name}
            </p>
            <p className="truncate text-xs uppercase tracking-[0.24em] text-jasmin-brown/78">
              {brand.subtitle}
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          <a
            href="#accueil"
            className="text-sm font-medium text-jasmin-dark/76 transition-colors hover:text-jasmin-dark"
          >
            Accueil
          </a>

          <div
            className="relative"
            onMouseEnter={() => setFormationsOpen(true)}
            onMouseLeave={() => setFormationsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-jasmin-dark/76 transition-colors hover:text-jasmin-dark"
              aria-expanded={formationsOpen}
              aria-haspopup="menu"
              onClick={() => setFormationsOpen((current) => !current)}
            >
              <span>Formations</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${formationsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {formationsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-[24px] border border-jasmin-brown/10 bg-white/96 p-3 shadow-[0_26px_70px_-34px_rgba(74,58,42,0.32)] backdrop-blur-md"
                >
                  <div className="grid gap-2">
                    {formationLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl px-4 py-3 text-sm font-medium text-jasmin-dark/80 transition-colors hover:bg-jasmin-ivory hover:text-jasmin-dark"
                        onClick={() => setFormationsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <a
            href="#ecole"
            className="text-sm font-medium text-jasmin-dark/76 transition-colors hover:text-jasmin-dark"
          >
            L'ecole
          </a>

          <a
            href="#chefs"
            className="text-sm font-medium text-jasmin-dark/76 transition-colors hover:text-jasmin-dark"
          >
            Nos chefs
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-jasmin-dark/76 transition-colors hover:text-jasmin-dark"
          >
            Contact
          </a>
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
              <div className="rounded-[24px] border border-jasmin-brown/10 bg-jasmin-ivory/45 p-2">
                <a
                  href="#formations"
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-jasmin-dark"
                  onClick={() => setOpen(false)}
                >
                  Formations
                </a>
                <div className="grid gap-2 px-2 pb-2">
                  {formationLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-jasmin-dark/78 transition-colors hover:border-jasmin-brown/10 hover:bg-white"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {mainLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-jasmin-dark/80 transition-colors hover:border-jasmin-brown/10 hover:bg-jasmin-ivory"
                  onClick={() => setOpen(false)}
                >
                    {item.label}
                  </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
