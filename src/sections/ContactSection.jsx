import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { contactDetails, imagery, studentSupport } from '../data/siteData';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Demande d'inscription - ${formData.name || 'École Jasmin'}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="Contact"
          title="Un accompagnement clair, rapide et humain"
          description="Prenez contact avec l’école pour préparer votre inscription, visiter le centre ou obtenir un conseil sur le meilleur parcours à suivre."
        />

        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-6">
            <Reveal>
              <div
                id="etudiant-etranger"
                className="surface-card scroll-mt-32 p-6 sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                  Étudiant étranger
                </p>
                <h3 className="mt-4 font-display text-4xl leading-none text-jasmin-dark">
                  Une arrivée préparée avec soin
                </h3>
                <div className="mt-6 grid gap-3">
                  {studentSupport.map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-jasmin-brown/10 bg-white/72 px-4 py-4 text-sm leading-7 text-jasmin-dark/74"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="surface-card overflow-hidden p-3">
                <img
                  src={imagery.map}
                  alt="Emplacement de l’École Jasmin"
                  loading="lazy"
                  className="h-72 w-full rounded-[24px] object-cover"
                />
                <div className="grid gap-4 p-4 sm:grid-cols-2">
                  <a
                    href={contactDetails.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[22px] border border-jasmin-brown/10 bg-white/72 p-4 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-jasmin-dark text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-jasmin-dark">Adresse</p>
                    <p className="mt-2 text-sm leading-7 text-jasmin-dark/70">
                      {contactDetails.address}
                    </p>
                  </a>
                  <div className="grid gap-4">
                    <a
                      href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}
                      className="rounded-[22px] border border-jasmin-brown/10 bg-white/72 p-4 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Phone className="h-5 w-5 text-jasmin-gold" />
                      <p className="mt-4 text-sm font-semibold text-jasmin-dark">Téléphone</p>
                      <p className="mt-2 text-sm text-jasmin-dark/70">{contactDetails.phone}</p>
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="rounded-[22px] border border-jasmin-brown/10 bg-white/72 p-4 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Mail className="h-5 w-5 text-jasmin-gold" />
                      <p className="mt-4 text-sm font-semibold text-jasmin-dark">Email</p>
                      <p className="mt-2 break-all text-sm text-jasmin-dark/70">
                        {contactDetails.email}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="surface-card p-6 sm:p-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                  Formulaire
                </p>
                <h3 className="font-display text-4xl leading-none text-jasmin-dark">
                  Demander un échange personnalisé
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-jasmin-dark/70">
                  Votre message prépare directement un email vers l’école afin de garder l’expérience simple, rapide et sans backend.
                </p>
              </div>

              <form
                className="mt-8 grid gap-5"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-jasmin-dark">Nom</span>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-13 rounded-2xl border border-jasmin-brown/12 bg-white/78 px-4 text-sm text-jasmin-dark placeholder:text-jasmin-dark/34"
                      placeholder="Votre nom"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-jasmin-dark">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-13 rounded-2xl border border-jasmin-brown/12 bg-white/78 px-4 text-sm text-jasmin-dark placeholder:text-jasmin-dark/34"
                      placeholder="votre@email.com"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-jasmin-dark">Téléphone</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-13 rounded-2xl border border-jasmin-brown/12 bg-white/78 px-4 text-sm text-jasmin-dark placeholder:text-jasmin-dark/34"
                    placeholder="+216 ..."
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-jasmin-dark">Message</span>
                  <textarea
                    required
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-[24px] border border-jasmin-brown/12 bg-white/78 px-4 py-4 text-sm text-jasmin-dark placeholder:text-jasmin-dark/34"
                    placeholder="Parlez-nous de votre projet ou de la formation qui vous intéresse."
                  />
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-7 text-jasmin-dark/62">
                    Réponse rapide par email ou téléphone pour vous orienter efficacement.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full border border-jasmin-dark bg-jasmin-dark px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                  >
                    Envoyer la demande
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
