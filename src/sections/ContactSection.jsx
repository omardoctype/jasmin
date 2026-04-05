import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import schoolLogo from '../assets/logo.png';
import { contactDetails } from '../data/siteData';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError('');
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.phone || !trimmedData.message) {
      setError('Veuillez remplir tous les champs obligatoires avant l envoi.');
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Bonjour, je vous contacte depuis le site de l'école.\n\nNom: ${trimmedData.name}\nEmail: ${trimmedData.email}\nTéléphone: ${trimmedData.phone}\nMessage: ${trimmedData.message}`,
    );

    window.open(`https://wa.me/21652694594?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="Contact"
          eyebrowLogo={schoolLogo}
          title="Un accompagnement clair, rapide et humain"
          description="Prenez contact avec l'ecole pour preparer votre inscription, visiter le centre ou obtenir un conseil sur le meilleur parcours a suivre."
        />

        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="surface-card overflow-hidden p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.2467742473423!2d10.75735701132729!3d34.799732877779604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d3a472360ef3%3A0x8fb51b76828bd55f!2sCentre%20Jasmin%20pour%20la%20Formation%20en%20P%C3%A2tisserie%20et%20en%20cuisine!5e0!3m2!1sfr!2stn!4v1775411867203!5m2!1sfr!2stn"
                title="Localisation Ecole Jasmin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full rounded-[24px]"
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
                  <p className="mt-2 text-sm leading-7 text-jasmin-dark/70">{contactDetails.address}</p>
                </a>

                <div className="grid gap-4">
                  <a
                    href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}
                    className="rounded-[22px] border border-jasmin-brown/10 bg-white/72 p-4 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Phone className="h-5 w-5 text-jasmin-gold" />
                    <p className="mt-4 text-sm font-semibold text-jasmin-dark">Telephone</p>
                    <p className="mt-2 text-sm text-jasmin-dark/70">{contactDetails.phone}</p>
                  </a>

                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="rounded-[22px] border border-jasmin-brown/10 bg-white/72 p-4 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Mail className="h-5 w-5 text-jasmin-gold" />
                    <p className="mt-4 text-sm font-semibold text-jasmin-dark">Email</p>
                    <p className="mt-2 break-all text-sm text-jasmin-dark/70">{contactDetails.email}</p>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card p-6 sm:p-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                  Formulaire
                </p>
                <h3 className="font-display text-4xl leading-none text-jasmin-dark">
                  Demander un echange personnalise
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-jasmin-dark/70">
                  Votre message ouvre directement WhatsApp avec les informations du formulaire, pour garder l'experience simple, rapide et sans backend.
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
                  <span className="text-sm font-medium text-jasmin-dark">Telephone</span>
                  <input
                    required
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
                    placeholder="Parlez-nous de votre projet ou de la formation qui vous interesse."
                  />
                </label>

                {error ? (
                  <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                ) : null}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-7 text-jasmin-dark/62">
                    Reponse rapide via WhatsApp pour vous orienter efficacement.
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
