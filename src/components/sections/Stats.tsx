import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  company: string;
  stat: string;
  description: string;
  delay: number;
}

function StatCard({ company, stat, description, delay }: StatCardProps) {
  const isPercentage = stat.includes('%');
  const isMultiplier = stat.includes('x');
  const numericValue = parseInt(stat.replace(/[^0-9]/g, ''));
  const suffix = isPercentage ? '%' : isMultiplier ? 'x' : '';
  const prefix = stat.includes('hours') ? '' : '';

  const { formattedCount, ref } = useCountUp({
    end: numericValue,
    duration: 2000,
    delay: delay * 100,
    suffix,
    prefix,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="text-center"
    >
      <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mb-3">
        {company}
      </p>
      <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-2">
        {stat.includes('hours') ? (
          <>{formattedCount} <span className="text-2xl sm:text-3xl">hours</span></>
        ) : (
          formattedCount
        )}
      </p>
      <p className="text-sm text-text-secondary">{description}</p>
    </motion.div>
  );
}

const stats = [
  { company: 'Fintech scale-up', stat: '10 hours', description: 'saved per week, per employee' },
  { company: 'Global law firm', stat: '62%', description: 'prep time saved' },
  { company: 'Leading manufacturer', stat: '95%', description: 'faster product answers' },
  { company: 'Mining manufacturer', stat: '50%', description: 'time saved in R&D' },
  { company: 'Renewable energy company', stat: '66%', description: 'time saved in R&D' },
  { company: 'Industrial leader', stat: '2x', description: 'more customer service issues resolved' },
];

export function Stats() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.company}
              company={stat.company}
              stat={stat.stat}
              description={stat.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
