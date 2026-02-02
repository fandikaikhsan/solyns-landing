import { motion } from 'framer-motion';

export function PlatformOverview() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-primary leading-tight mb-6"
        >
          Your all-in-one
          <br />
          AI platform for real work
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg sm:text-xl text-text-secondary mb-10"
        >
          A seamless, beautiful way to bring AI into your company's apps, knowledge, and culture.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Book an intro
          </a>
        </motion.div>
      </div>
    </section>
  );
}
