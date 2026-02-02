import { motion } from 'framer-motion';
import { TextRotate } from '../animations/TextRotate';

const rotatingTexts = [
  'Action items',
  'Call analysis',
  'Email responses',
  'Pitch decks',
  'Client deliverables',
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/asset_1.jpg)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mb-4"
        >
          <span className="text-lg sm:text-xl text-text-primary">
            <TextRotate texts={rotatingTexts} interval={3000} />
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[1.1] tracking-tight mb-6"
        >
          done with AI
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-xl mx-auto text-base sm:text-lg text-text-secondary mb-8"
        >
          Accelerate work with AI agents that collaborate, automate, and think alongside your teams.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
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
