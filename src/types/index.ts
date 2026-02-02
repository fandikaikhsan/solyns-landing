export interface StatItem {
  company: string;
  stat: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  featured?: boolean;
}

export interface FeatureTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamCategory {
  name: string;
  href: string;
}

export interface Integration {
  name: string;
  icon: string;
}

export interface SecurityFeature {
  name: string;
  icon: string;
}
