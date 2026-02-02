import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'automate', label: 'Automate', description: 'Generate collaborative content in any format' },
  { id: 'create', label: 'Create', description: 'Turn data into live dashboards and reports' },
  { id: 'analyze', label: 'Analyze', description: 'All the latest company docs and data' },
  { id: 'act', label: 'Act', description: 'Take instant actions across your tools' },
  { id: 'find', label: 'Find', description: 'Search everything in one place' },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('create');

  const activeDescription = tabs.find(tab => tab.id === activeTab)?.description || '';

  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-black text-white'
                  : 'bg-white text-text-primary hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center text-xl sm:text-2xl text-text-primary mb-12"
          >
            {activeDescription}
          </motion.p>
        </AnimatePresence>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-card"
        >
          <img
            src="/images/dashboard.jpg"
            alt="Sana Platform Dashboard"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
