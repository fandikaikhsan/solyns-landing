import { motion } from "framer-motion"
// import { Apple } from "lucide-react"

export function IOSApp() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-sm text-text-muted uppercase tracking-wider mb-4">
              Solyns
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight mb-6">
              A researcher in your pocket
            </h2>
            <p className="text-text-secondary mb-6">
              Connect all your work apps to get instant answers to anything and
              solve hours of complex tasks in seconds. Missed a meeting? No
              problem. The recap is just a tap away. Built on any LLM you want.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Request a demo
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/iphones-app.jpg"
                alt="Sana iOS App"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
