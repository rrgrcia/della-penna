import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/react-app/contexts/LanguageContext";
import LanguageSelector from "@/react-app/components/LanguageSelector";

const navItems = [
  { labelKey: "nav.home", href: "#home" },
  { labelKey: "nav.about", href: "#about-us" },
  { labelKey: "nav.company", href: "#the-company" },
  { labelKey: "nav.fleet", href: "#our-fleet" },
  { labelKey: "nav.history", href: "#history" },
  { labelKey: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center">
            <img
              src="http://www.dellapenna.it/it/sites/default/files/logo_0.png"
              alt="della PENNA"
              className="h-12 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-orange-600 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {t(item.labelKey)}
              </a>
            ))}
            <LanguageSelector isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                >
                  {t(item.labelKey)}
                </a>
              ))}
              <div className="px-4 py-3">
                <LanguageSelector isScrolled={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
