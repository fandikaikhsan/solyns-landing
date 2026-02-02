import { motion } from "framer-motion"
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react"

const sanaLinks = [
  { name: "Overview", href: "#" },
  { name: "AI agents", href: "#" },
  { name: "Enterprise search", href: "#" },
  { name: "iOS app", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "Events", href: "#" },
  { name: "Security", href: "#" },
  { name: "Stories", href: "#" },
  { name: "Pricing", href: "#pricing" },
  { name: "Help Center", href: "#" },
]

const sanaLearnLinks = [
  { name: "Overview", href: "#" },
  { name: "Learning management", href: "#" },
  { name: "Content creation", href: "#" },
  { name: "AI tutor", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Customer stories", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "Events", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Changelog", href: "#" },
]

const companyLinks = [
  { name: "Sana AI Summit 2026", href: "#" },
  { name: "Strange Loop Podcast", href: "#" },
  { name: "Swedish AI Reform", href: "#" },
  { name: "Mission", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Legal", href: "#" },
  { name: "Cookie settings", href: "#" },
]

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "X", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between border-border-color gap-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-muted">
              Interview with Solyns
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-text-muted">Solyns 2025</span>
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
  )
}
