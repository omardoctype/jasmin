import { CalendarDays } from 'lucide-react';

export default function EventCard({
  title,
  date,
  description,
  image,
}) {
  return (
    <article className="surface-card hover-lift h-full overflow-hidden">
      <div className="overflow-hidden rounded-t-[28px]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-60 w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-jasmin-ivory px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-jasmin-brown">
          <CalendarDays className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-3xl leading-none text-jasmin-dark">{title}</h3>
          <p className="text-sm leading-7 text-jasmin-dark/70">{description}</p>
        </div>
      </div>
    </article>
  );
}
