import { Mail, MapPin, Phone } from 'lucide-react';
import { contactDetails } from '../data/siteData';

const items = [
  { icon: Phone, label: contactDetails.phone, href: `tel:${contactDetails.phone.replaceAll(' ', '')}` },
  { icon: Mail, label: contactDetails.email, href: `mailto:${contactDetails.email}` },
  { icon: MapPin, label: contactDetails.address, href: contactDetails.mapUrl },
];

export default function TopBar() {
  return (
    <div className="border-b border-jasmin-brown/10 bg-[#efe8dd]/88 backdrop-blur-sm">
      <div className="site-container flex flex-col gap-2 py-3 text-sm text-jasmin-dark/78 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        {items.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 transition-colors hover:text-jasmin-dark"
          >
            <Icon className="h-4 w-4 text-jasmin-gold" />
            <span className="leading-6">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

