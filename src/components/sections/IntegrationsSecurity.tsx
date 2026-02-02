import { motion } from "framer-motion"
import {
  Check,
  Shield,
  Lock,
  UserCog,
  FileCheck,
  Globe,
  Eye,
  Server,
} from "lucide-react"

const integrations = [
  { name: "Google Meet", icon: "video" },
  { name: "Google Drive", icon: "drive" },
  { name: "Google Calendar", icon: "calendar" },
  { name: "Dropbox", icon: "box" },
  { name: "Confluence", icon: "file" },
  { name: "Jira", icon: "check-square" },
  { name: "Service Now", icon: "settings" },
  { name: "Salesforce", icon: "cloud" },
  { name: "Microsoft Teams", icon: "users" },
  { name: "Microsoft Sharepoint", icon: "share" },
  { name: "Workday", icon: "briefcase" },
  { name: "Slack", icon: "message" },
]

const securityFeatures = [
  { name: "Custom user roles", icon: UserCog },
  { name: "Encryption", icon: Lock },
  { name: "Flexible groups", icon: Users },
  { name: "User provisioning", icon: UserPlus },
  { name: "SOC 2 Type 2", icon: Shield },
  { name: "GDPR compliant", icon: FileCheck },
  { name: "ISO 27001", icon: Check },
  { name: "SAML single sign-on", icon: Key },
  { name: "Advanced permissions", icon: Eye },
  { name: "Domain verification", icon: Globe },
  { name: "Regional deploys", icon: Server },
  { name: "Audit logging", icon: FileText },
]

import { Users, UserPlus, Key, FileText } from "lucide-react"

export function IntegrationsSecurity() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight mb-4">
            Enterprise-grade
            <br />
            integrations and security
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Solyns connects with 100+ applications and unifies your company's
            data securely.
          </p>
        </motion.div>

        {/* Integrations Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-text-muted text-center mb-6"
        >
          Connect your daily tools automatically
        </motion.p>

        {/* Integration Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-8"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="flex items-center justify-center p-4 border border-border-color rounded-lg hover:border-text-primary transition-colors"
            >
              <span className="text-xs sm:text-sm text-text-secondary text-center">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* See Full List Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <a
            href="#"
            className="text-sm text-text-primary underline hover:no-underline"
          >
            See full integrations list
          </a>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-text-muted text-center mb-6">
            Security you can stand by
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="flex items-center gap-3 p-3"
              >
                <feature.icon className="w-5 h-5 text-text-muted" />
                <span className="text-sm text-text-primary">
                  {feature.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="text-sm text-text-primary underline hover:no-underline"
            >
              Read more about privacy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
