import { ArrowUpRight } from 'lucide-react';
import { brand, contactDetails, footerLinks } from '../data/siteData';

const socials = ['Instagram', 'Facebook', 'YouTube'];

export default function Footer() {
  return (
    <footer className="border-t border-jasmin-brown/10 bg-[#efe8dd]/72 py-12">
      <div className="site-container grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.75fr]">
        <div className="space-y-6">
          <a
            href="#accueil"
            className="inline-flex items-center gap-3"
          >
            <img
              src={brand.mark}
              alt="Logo École Jasmin"
              className="h-12 w-12 rounded-2xl"
            />
            <div>
              <p className="font-display text-3xl leading-none text-jasmin-dark">{brand.name}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-jasmin-brown">
                {brand.subtitle}
              </p>
            </div>
          </a>
          <p className="max-w-xl text-sm leading-7 text-jasmin-dark/72">
            Un centre de formation pensé pour révéler des talents culinaires avec élégance,
            exigence et vraie préparation métier.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
              Liens rapides
            </h3>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-jasmin-dark/76 transition-colors hover:text-jasmin-dark"
                >
                  <ArrowUpRight className="h-4 w-4 text-jasmin-gold" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
              Social
            </h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item}
                  href="#contact"
                  className="rounded-full border border-jasmin-brown/12 bg-white/70 px-4 py-2 text-sm text-jasmin-dark/74 transition-transform duration-300 hover:-translate-y-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
            Contact
          </h3>
          <div className="space-y-3 text-sm leading-7 text-jasmin-dark/74">
            <p>{contactDetails.address}</p>
            <a href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}>{contactDetails.phone}</a>
            <br />
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </div>
        </div>
      </div>

      <div className="site-container mt-10 border-t border-jasmin-brown/10 pt-6 text-sm text-jasmin-dark/58">
        © 2026 École Jasmin – Centre de Formation Professionnelle. Tous droits réservés.
      </div>
    </footer>
  );
}

