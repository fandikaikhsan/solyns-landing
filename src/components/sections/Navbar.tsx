import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, ChevronDown } from "lucide-react"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Products", href: "#", hasDropdown: true },
  { name: "Capabilities", href: "#", hasDropdown: true },
  { name: "Solutions", href: "#", hasDropdown: true },
  { name: "Resources", href: "#", hasDropdown: true },
  { name: "Pricing", href: "#pricing" },
]

const rightLinks = [
  { name: "Mission", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Log in", href: "#" },
]

export function Navbar() {
  const { isScrolled } = useScrollPosition()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border-color"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-xl font-semibold text-text-primary">
              Solyns
            </span>
          </a>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-sm text-text-primary hover:text-text-secondary transition-colors"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {rightLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-text-primary hover:text-text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-black rounded-full hover:opacity-90 transition-opacity"
            >
              Book an intro
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2 text-text-primary">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border-color">
                  <span className="text-xl font-semibold">Sana</span>
                </div>
                <div className="flex-1 overflow-auto py-6">
                  <div className="px-6 space-y-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-between text-lg text-text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                        {link.hasDropdown && (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </a>
                    ))}
                    <div className="pt-6 border-t border-border-color space-y-4">
                      {rightLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block text-lg text-text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-border-color">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-white bg-black rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book an intro
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
