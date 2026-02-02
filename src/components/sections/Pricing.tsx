import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Enterprise',
    price: 'Custom pricing',
    description: '',
    features: [
      'Unlimited members per workspace and documents per integration',
      'Enterprise integrations',
      'Domain verification, SAML-based SSO, and SCIM',
      'Extended range of LLMs',
      'Analytics dashboard to measure impact',
      'Dedicated success team, priority support, and SLA',
      'API access for building your own integrations',
    ],
    cta: 'Book an intro',
    ctaLink: '#',
    featured: true,
  },
  {
    name: 'Team',
    price: '$30',
    period: 'per user / month',
    description: '',
    features: [
      'Unlimited queries and meeting recordings',
      'Up to 50 members per workspace',
      'Our most popular integrations incl. Asana, Gmail, Outlook email, Zendesk, and more.',
      'OpenAI and Claude model selection',
      'Enterprise data processing agreement',
      '10,000 documents per integration',
      'Priority in email and chat support',
    ],
    cta: 'Sign up',
    ctaLink: '#',
    featured: false,
  },
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: '',
    features: [
      '10 meetings per month — invite members for more',
      'Up to 5 members per workspace',
      'Unlimited assistants and prompt templates',
      'Meeting integrations with Calendar, Drive, Meet, Teams, and Zoom',
      'Data integrations with Confluence, Google Drive, OneDrive, Notion, and Sharepoint',
      '1,000 documents per integration',
      'Help center support',
    ],
    cta: 'Try it free',
    ctaLink: '#',
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary text-center mb-12"
        >
          Pricing
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-6 sm:p-8 ${
                plan.featured
                  ? 'bg-black text-white'
                  : 'bg-white border border-border-color'
              }`}
            >
              <h3 className={`text-lg font-medium mb-2 ${plan.featured ? 'text-white' : 'text-text-primary'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className={`text-3xl font-serif ${plan.featured ? 'text-white' : 'text-text-primary'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm ml-1 ${plan.featured ? 'text-white/70' : 'text-text-muted'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <a
                href={plan.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-full text-sm font-medium mb-8 transition-all duration-200 ${
                  plan.featured
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'bg-black text-white hover:opacity-90'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-white/70' : 'text-text-muted'}`} />
                    <span className={`text-sm ${plan.featured ? 'text-white/90' : 'text-text-secondary'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
