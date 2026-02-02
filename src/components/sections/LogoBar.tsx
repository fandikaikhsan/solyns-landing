import { motion } from 'framer-motion';

const logos = [
  { name: 'truecaller', text: 'truecaller' },
  { name: 'piab', text: 'piab' },
  { name: 'B Lab', text: 'B Lab' },
  { name: 'asics', text: 'asics' },
  { name: 'Polestar', text: 'Polestar' },
  { name: 'ahlsell', text: 'ahlsell' },
  { name: 'Brex', text: 'Brex' },
];

export function LogoBar() {
  return (
    <section className="py-12 bg-white border-b border-border-color overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-xl sm:text-2xl font-semibold text-text-primary/70 hover:text-text-primary transition-colors cursor-default"
            >
              {logo.name === 'B Lab' ? (
                <span className="flex items-center gap-1">
                  <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs">B</span>
                  <span className="text-sm">Lab</span>
                </span>
              ) : logo.name === 'asics' ? (
                <span className="italic font-bold tracking-tight">asics</span>
              ) : logo.name === 'Polestar' ? (
                <span className="font-light tracking-wide">Polestar</span>
              ) : logo.name === 'ahlsell' ? (
                <span className="italic">ahlsell</span>
              ) : logo.name === 'Brex' ? (
                <span className="flex items-center gap-1">
                  <span className="text-2xl">B</span>
                  <span>rex</span>
                </span>
              ) : (
                logo.text
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
