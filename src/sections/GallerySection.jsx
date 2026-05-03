import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../components/Reveal';

// Import gallery images
import imgA from '../assets/a.jpg';
import imgB from '../assets/b.jpg';
import imgC from '../assets/c.jpg';
import imgD from '../assets/d.jpg';
import imgE from '../assets/e.jpg';
import imgF from '../assets/f.jpg';
import imgJ from '../assets/j.jpg';
import imgH from '../assets/h.jpg';
import thumbA from '../assets/gallery-thumbs/a.jpg';
import thumbB from '../assets/gallery-thumbs/b.jpg';
import thumbC from '../assets/gallery-thumbs/c.jpg';
import thumbD from '../assets/gallery-thumbs/d.jpg';
import thumbE from '../assets/gallery-thumbs/e.jpg';
import thumbF from '../assets/gallery-thumbs/f.jpg';
import thumbJ from '../assets/gallery-thumbs/j.jpg';
import thumbH from '../assets/gallery-thumbs/h.jpg';

const galleryThumbs = new Map([
  [imgA, thumbA],
  [imgB, thumbB],
  [imgC, thumbC],
  [imgD, thumbD],
  [imgE, thumbE],
  [imgF, thumbF],
  [imgJ, thumbJ],
  [imgH, thumbH],
]);

const galleryImages = [
  { src: imgA, alt: 'Cuisine A', category: 'cuisine' },
  { src: imgB, alt: 'Pâtisserie B', category: 'patisserie' },
  { src: imgC, alt: 'Pâtisserie C', category: 'patisserie' },
  { src: imgD, alt: 'Pâtisserie D', category: 'patisserie' },
  { src: imgE, alt: 'Pâtisserie E', category: 'patisserie' },
  { src: imgF, alt: 'Cuisine F', category: 'cuisine' },
  { src: imgJ, alt: 'Cuisine J', category: 'cuisine' },
  { src: imgH, alt: 'Cuisine H', category: 'cuisine' },
];

const categories = [
  { id: 'tout', label: 'Tout' },
  { id: 'patisserie', label: 'Pâtisserie' },
  { id: 'cuisine', label: 'Cuisine' },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('tout');

  const filteredImages = activeCategory === 'tout' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    const actualIndex = galleryImages.findIndex(img => img === filteredImages[index]);
    setSelectedImage(actualIndex);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section id="galerie" className="py-24 sm:py-32">
        <div className="site-container">
          <Reveal>
            <div className="text-center">
              <p className="mb-3 inline-block rounded-full border border-jasmin-gold/30 bg-jasmin-gold/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.16em] text-jasmin-gold">
                Portfolio
              </p>
              <h2 className="mb-4 font-display text-4xl leading-tight text-jasmin-dark sm:text-5xl lg:text-6xl">
                Notre <span className="font-bold">Galerie</span>
              </h2>
              <div className="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-jasmin-gold/40 to-jasmin-gold/20" />
            </div>
          </Reveal>

          {/* Category Filter */}
          <Reveal variant="fade-up">
            <div className="mt-12 flex justify-center gap-3 flex-wrap">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-6 py-2 font-medium uppercase tracking-[0.12em] text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-jasmin-gold text-white shadow-lg'
                      : 'border border-jasmin-brown/20 text-jasmin-brown/60 hover:border-jasmin-gold/40 hover:text-jasmin-brown'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </Reveal>

          {/* Masonry Grid Gallery */}
          <Reveal variant="fade-up">
            <div className="mt-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.src}
                      className="group relative cursor-pointer overflow-hidden rounded-[28px] bg-jasmin-ivory surface-card shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      onClick={() => openLightbox(index)}
                    >
                      <div className="overflow-hidden rounded-t-[28px] bg-[#e9ddcb]">
                        <motion.img
                          src={galleryThumbs.get(image.src) ?? image.src}
                          alt={image.alt}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          whileHover={{ scale: 1.05 }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  ))}

                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-h-full max-w-full object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-jasmin-gold transition-colors"
              >
                <X size={32} />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-jasmin-gold transition-colors"
              >
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-jasmin-gold transition-colors"
              >
                <ChevronRight size={48} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

