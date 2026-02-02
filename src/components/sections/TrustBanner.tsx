import { motion } from 'framer-motion';

const logos = [
  { name: 'Polestar', style: 'font-light tracking-wide' },
  { name: 'Merck', style: 'font-bold' },
  { name: 'Apollo', style: 'font-semibold' },
  { name: 'Robinhood', style: 'font-normal' },
  { name: 'Amgen', style: 'font-bold italic' },
  { name: 'Electrolux Group', style: 'font-light' },
  { name: 'piab', style: 'italic' },
];

export function TrustBanner() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-2xl sm:text-3xl text-text-primary text-center mb-12"
        >
          Sana is trusted by leading
          <br />
          enterprises across industries
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.span
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className={`text-lg sm:text-xl text-text-primary/70 ${logo.style}`}
            >
              {logo.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
