import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Sales teams', href: '#' },
  { name: 'Customer support', href: '#' },
  { name: 'In-house operations', href: '#' },
  { name: 'Financial services', href: '#' },
  { name: 'Industrial companies', href: '#' },
  { name: 'Law firms', href: '#' },
];

export function TeamSolutions() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden bg-cream p-8">
              <img
                src="/images/iphone-mockup.jpg"
                alt="Sana Mobile App"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight mb-8">
              Every team gets smarter with Sana
            </h2>

            <div className="space-y-4 mb-8">
              {categories.map((category, index) => (
                <motion.a
                  key={category.name}
                  href={category.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-between group py-2 border-b border-border-color hover:border-text-primary transition-colors"
                >
                  <span className="text-lg text-text-primary group-hover:text-text-secondary transition-colors">
                    {category.name}
                  </span>
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>

            <p className="text-text-secondary mb-6">
              Optimize every stage of the deal lifecycle with AI that helps you prep for calls, answers your RFPs, and updates your CRM.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book an intro
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
