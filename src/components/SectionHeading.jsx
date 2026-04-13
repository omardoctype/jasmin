import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowLogo,
  align = 'left',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'mx-auto max-w-3xl text-center items-center' : 'max-w-3xl';

  return (
    <Reveal
      className={className}
      variant={align === 'center' ? 'zoom-in' : 'fade-right'}
    >
      <div className={`flex flex-col gap-4 ${alignment}`}>
        <span className="section-tag gap-3">
          {eyebrowLogo ? (
            <img
              src={eyebrowLogo}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 rounded-full object-cover"
            />
          ) : null}
          <span>{eyebrow}</span>
        </span>
        <div className="space-y-4">
          <h2 className="font-display text-4xl leading-none text-jasmin-dark sm:text-5xl">
            {title}
          </h2>
          <p className="text-base leading-7 text-jasmin-dark/72 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
