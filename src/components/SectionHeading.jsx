import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowLogo,
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center items-center"
      : "max-w-3xl";

  return (
    <Reveal
      className={className}
      variant={align === "center" ? "zoom-in" : "fade-right"}
    >
      <div className={`flex flex-col gap-4 ${alignment}`}>

        {/* EYEBROW */}
        <span className="section-tag gap-3 flex items-center">
          {eyebrowLogo && (
            <img
              src={eyebrowLogo}
              alt=""
              className="h-5 w-5 rounded-full object-cover"
            />
          )}
          <span>{eyebrow}</span>
        </span>

        {/* TITLE */}
        <motion.h2
          className="font-display text-4xl sm:text-5xl leading-tight text-jasmin-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className="text-base sm:text-lg leading-7 text-jasmin-dark/72"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          {description}
        </motion.p>

      </div>
    </Reveal>
  );
}