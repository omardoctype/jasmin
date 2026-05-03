import { Award, Coffee, Croissant, Soup, Store, UtensilsCrossed } from 'lucide-react';

const iconMap = {
  award: Award,
  coffee: Coffee,
  croissant: Croissant,
  soup: Soup,
  store: Store,
  utensils: UtensilsCrossed,
};

export default function SponsorCard({
  name,
  category,
  icon,
}) {
  const Icon = iconMap[icon] ?? Award;

  return (
    <article className="soft-panel hover-lift flex min-h-40 flex-col justify-between p-6">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-jasmin-dark text-white shadow-[0_18px_34px_-24px_rgba(74,58,42,0.95)]">
        <Icon className="h-6 w-6" />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jasmin-brown">
          {category}
        </p>
        <h3 className="font-display text-3xl leading-none text-jasmin-dark">{name}</h3>
      </div>
    </article>
  );
}

