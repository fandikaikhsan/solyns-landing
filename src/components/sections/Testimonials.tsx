import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "All of a sudden, a valuation memo that our CFO previously spent almost a week preparing was completed within three or four hours.",
    author: "Chief Sustainability Officer",
    company: "Leading renewable energy company",
  },
  {
    quote: "If we removed Sana Agents, there would be a revolt.",
    author: "Managing Director",
    company: "Global private equity firm",
  },
  {
    quote: "With Sana, our sales prep is now 10x quicker. Instead of spending hours gathering data manually, our team can instantly access the research insights they need—freeing them to focus on designing more meaningful, strategic client conversations.",
    author: "Product Operations Lead",
    company: "International research and analytics firm",
  },
  {
    quote: "We're leveraging our AI agents to find and compare product information, build sales arguments, support R&D, and much more. We see real operational efficiency, and Sana has already provided us with a quick payback.",
    author: "CEO",
    company: "Global industrial automation company",
  },
  {
    quote: "Sana gives us control over the AI, allowing us to choose the material it accesses and tailor its parameters to our specific needs.",
    author: "Executive Vice President",
    company: "Global medical technology provider",
  },
  {
    quote: "With Sana Agents, even colleagues who aren't tech-savvy can leverage AI in their everyday work. It's empowered everyone, not just the experts.",
    author: "Head of Digitalization",
    company: "Major real estate group",
  },
  {
    quote: "With Sana, we're creating assistants to accelerate everything from deal analysis to portfolio reviews, transforming the way our investment teams operate.",
    author: "Chief Digital Officer",
    company: "Leading private equity firm",
  },
  {
    quote: "Asking Sana in Slack for someone's actions from the last meeting, or our definition of retention—it's a game-changer.",
    author: "CTO",
    company: "Leading mobility startup",
  },
];

export function Testimonials() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px] sm:w-[400px] bg-bg-secondary rounded-2xl p-6 sm:p-8 select-none"
            >
              <Quote className="w-8 h-8 text-text-muted mb-4" />
              <p className="text-text-primary text-base sm:text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-sm font-medium text-text-primary">{testimonial.author}</p>
                <p className="text-sm text-text-secondary">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
