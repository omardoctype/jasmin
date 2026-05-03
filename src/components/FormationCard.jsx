import { Award, BadgeCheck, BookOpen, ChefHat, Sparkles } from 'lucide-react';

const iconMap = {
  chefHat: ChefHat,
  award: Award,
  badge: BadgeCheck,
  book: BookOpen,
  sparkles: Sparkles,
};

export default function FormationCard({
  id,
  title,
  description,
  icon,
}) {
  const Icon = iconMap[icon] ?? ChefHat;

  return (
    <article
      id={id}
      className="surface-card hover-lift h-full scroll-mt-32 p-6 sm:p-7"
    >
      <div className="flex h-full flex-col gap-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-jasmin-dark text-white shadow-[0_18px_34px_-24px_rgba(74,58,42,0.95)]">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-2xl leading-tight text-jasmin-dark">{title}</h3>
          <p className="text-sm leading-7 text-jasmin-dark/70">{description}</p>
        </div>
      </div>
    </article>
  );
}
