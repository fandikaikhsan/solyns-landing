import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const sanaLinks = [
  { name: 'Overview', href: '#' },
  { name: 'AI agents', href: '#' },
  { name: 'Enterprise search', href: '#' },
  { name: 'iOS app', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Stories', href: '#' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Help Center', href: '#' },
];

const sanaLearnLinks = [
  { name: 'Overview', href: '#' },
  { name: 'Learning management', href: '#' },
  { name: 'Content creation', href: '#' },
  { name: 'AI tutor', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Customer stories', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Help Center', href: '#' },
  { name: 'Changelog', href: '#' },
];

const companyLinks = [
  { name: 'Sana AI Summit 2026', href: '#' },
  { name: 'Strange Loop Podcast', href: '#' },
  { name: 'Swedish AI Reform', href: '#' },
  { name: 'Mission', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Legal', href: '#' },
  { name: 'Cookie settings', href: '#' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'X', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Sana Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="text-sm font-medium text-text-primary mb-4">Sana</h4>
            <ul className="space-y-3">
              {sanaLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sana Learn Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="text-sm font-medium text-text-primary mb-4">Sana Learn</h4>
            <ul className="space-y-3">
              {sanaLearnLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-sm font-medium text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <label className="text-xs text-text-muted uppercase tracking-wider">UTM Term</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 text-sm border border-border-color rounded-lg focus:outline-none focus:border-text-primary"
                />
              </div>
              <div>
                <label className="text-xs text-text-muted uppercase tracking-wider">UTM Source</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 text-sm border border-border-color rounded-lg focus:outline-none focus:border-text-primary"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border-color gap-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-muted">A Workday company</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-text-muted">Sana Labs AB 2026</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
