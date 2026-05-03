import { useState } from 'react';
import FAQItem from '../components/FAQItem';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { faqItems } from '../data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell">
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions frequentes avant votre inscription"
          description="Retrouvez ici des reponses claires sur les formations, ladmission et laccueil."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqItems.map((item, index) => (
            <Reveal
              key={item.question}
              delay={index * 0.05}
            >
              <FAQItem
                id={`faq-item-${index}`}
                question={item.question}
                answer={item.answer}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
