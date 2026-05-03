import { useEffect, useMemo, useRef, useState } from 'react';
import schoolLogo from '../assets/logo.png';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { sponsors } from '../data/siteData';

const ITEMS_PER_VIEW = 3;

export default function SponsorsSection() {
  const carouselRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(sponsors.length / ITEMS_PER_VIEW)),
    [],
  );

  useEffect(() => {
    const track = carouselRef.current;
    if (!track) {
      return undefined;
    }

    const onScroll = () => {
      const rawPage = track.clientWidth > 0 ? track.scrollLeft / track.clientWidth : 0;
      const nextPage = Math.min(pageCount - 1, Math.max(0, Math.round(rawPage)));
      setActivePage(nextPage);
    };

    onScroll();
    track.addEventListener('scroll', onScroll, { passive: true });

    return () => track.removeEventListener('scroll', onScroll);
  }, [pageCount]);

  const scrollToPage = (nextPage) => {
    const track = carouselRef.current;
    if (!track) {
      return;
    }

    const targetPage = Math.min(pageCount - 1, Math.max(0, nextPage));
    track.scrollTo({
      left: targetPage * track.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="sponsors"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-12">
        <SectionHeading
          eyebrow="Nos partenaires"
          eyebrowLogo={schoolLogo}
          title="Nos partenaires"
          description="Des entreprises qui soutiennent la formation et les activités de l'école."
          align="center"
        />

        <Reveal variant="zoom-in">
          <div className="rounded-[34px] border border-jasmin-brown/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,245,240,0.92))] px-6 py-8 shadow-[0_24px_80px_-48px_rgba(74,58,42,0.3)] sm:px-10 sm:py-10">
            <div className="relative md:hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-white to-transparent" />

              <div
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {sponsors.map((sponsor, index) => (
                  <Reveal
                    key={sponsor.name}
                    className="group flex shrink-0 basis-1/3 snap-start items-center justify-center px-1"
                    delay={index * 0.04}
                    variant="fade-up"
                  >
                    <div className="flex min-h-[72px] w-full items-center justify-center">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                        className="h-auto w-auto max-h-12 max-w-20 object-contain opacity-95 transition-[transform,opacity] duration-300 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5">
                {Array.from({ length: pageCount }).map((_, pageIndex) => (
                  <button
                    key={`sponsor-page-${pageIndex}`}
                    type="button"
                    aria-label={`Aller à la page ${pageIndex + 1}`}
                    onClick={() => scrollToPage(pageIndex)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      pageIndex === activePage ? 'w-5 bg-jasmin-dark' : 'w-1.5 bg-jasmin-brown/35'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="hidden md:flex md:flex-wrap md:items-center md:justify-center md:gap-8 lg:flex-nowrap lg:gap-10">
              {sponsors.map((sponsor, index) => (
                <Reveal
                  key={sponsor.name}
                  delay={index * 0.06}
                  variant="fade-up"
                >
                  <div className="group flex min-h-[86px] items-center justify-center">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      className={`${sponsor.imageClassName} h-auto w-auto max-w-full object-contain opacity-95 transition-[transform,opacity,filter] duration-300 ease-out group-hover:scale-[1.04] group-hover:brightness-110 group-hover:opacity-100`}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
