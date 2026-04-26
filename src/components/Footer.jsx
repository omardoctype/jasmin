import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { brand, contactDetails } from '../data/siteData';

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Formations', href: '#formations' },
  { label: "L'école", href: '#ecole' },
  { label: 'Chefs', href: '#chefs' },
  { label: 'Nos partenaires', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-jasmin-brown/10 bg-[linear-gradient(180deg,rgba(239,232,221,0.82),rgba(247,245,240,0.98))] py-14">
      <div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.95fr]">
        <div className="space-y-6">
          <a
            href="#accueil"
            className="inline-flex items-center gap-3"
          >
            <img
              src={brand.mark}
              alt="Logo École Jasmin"
              className="h-14 w-14 rounded-2xl object-cover shadow-[0_18px_34px_-24px_rgba(74,58,42,0.42)]"
            />
            <div>
              <p className="font-display text-3xl leading-none text-jasmin-dark">{brand.name}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-jasmin-brown">{brand.subtitle}</p>
            </div>
          </a>

          <p className="max-w-xl text-sm leading-8 text-jasmin-dark/72">
            Un centre de formation en cuisine et en pâtisserie pour apprendre un vrai métier.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
            Navigation
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {quickLinks.map((link) => (
              <a
                key={link.href}
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
            Coordonnées
          </h3>
          <div className="grid gap-4">
            <a
              href={contactDetails.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[22px] border border-jasmin-brown/10 bg-white/72 p-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <MapPin className="h-5 w-5 text-jasmin-gold" />
              <p className="mt-3 text-sm font-semibold text-jasmin-dark">Adresse</p>
              <p className="mt-1 text-sm leading-7 text-jasmin-dark/70">{contactDetails.address}</p>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}
                className="rounded-[22px] border border-jasmin-brown/10 bg-white/72 p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <Phone className="h-5 w-5 text-jasmin-gold" />
                <p className="mt-3 text-sm font-semibold text-jasmin-dark">Téléphone</p>
                <p className="mt-1 text-sm text-jasmin-dark/70">{contactDetails.phone}</p>
              </a>

              <a
                href={`mailto:${contactDetails.email}`}
                className="rounded-[22px] border border-jasmin-brown/10 bg-white/72 p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <Mail className="h-5 w-5 text-jasmin-gold" />
                <p className="mt-3 text-sm font-semibold text-jasmin-dark">Email</p>
                <p className="mt-1 break-all text-sm text-jasmin-dark/70">{contactDetails.email}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-container mt-12 border-t border-jasmin-brown/10 pt-6 text-sm text-jasmin-dark/58">
        © 2026 École Jasmin - Centre de formation professionnelle. Tous droits réservés.
      </div>
    </footer>
  );
}
