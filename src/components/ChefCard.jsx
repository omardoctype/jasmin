export default function ChefCard({
  name,
  specialty,
  bio,
  image,
}) {
  return (
    <article className="surface-card hover-lift h-full overflow-hidden">
      <div className="relative overflow-hidden rounded-[28px]">
        <div className="overflow-hidden rounded-t-[28px] bg-[#e9ddcb]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-80 w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <span className="inline-flex rounded-full bg-jasmin-ivory px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-jasmin-brown">
              {specialty}
            </span>
            <h3 className="font-display text-3xl leading-none text-jasmin-dark">{name}</h3>
          </div>
          <p className="text-sm leading-7 text-jasmin-dark/70">{bio}</p>
        </div>
      </div>
    </article>
  );
}

