import ButtonLink from '../components/ButtonLink';
import Reveal from '../components/Reveal';

export default function CTASection() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-jasmin-brown/10 bg-jasmin-dark px-6 py-14 text-white shadow-[0_28px_90px_-54px_rgba(74,58,42,0.95)] sm:px-10 lg:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,199,166,0.32),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(183,154,107,0.24),transparent_36%)]" />
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <span className="section-tag border-white/12 bg-white/10 text-white/78">
                  Admission
                </span>
                <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
                  Prêt à commencer votre carrière culinaire ?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
                  Rejoignez une école qui valorise autant le geste, l’exigence que la progression humaine des futurs professionnels.
                </p>
              </div>

              <ButtonLink
                href="#contact"
                variant="ghost"
                className="shrink-0"
              >
                S’inscrire maintenant
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

