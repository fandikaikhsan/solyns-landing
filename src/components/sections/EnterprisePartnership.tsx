import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Dedicated deployment lead',
  'Complete implementation support',
  'Tailored onboarding',
  'Priority support',
  'AI strategy and consulting',
  'Change management model',
  'Community, events, and resources',
];

export function EnterprisePartnership() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/dashboard.jpg"
                alt="Enterprise Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-sm text-text-muted uppercase tracking-wider mb-4">
              Enterprise partnership services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight mb-4">
              Driving AI adoption together
            </h2>
            <p className="text-text-secondary mb-8">
              AI is revolutionizing work in real time. Our partnership-led approach helps your organization become truly AI-first.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-text-primary flex-shrink-0" />
                  <span className="text-sm text-text-primary">{feature}</span>
                </motion.div>
              ))}
            </div>

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
