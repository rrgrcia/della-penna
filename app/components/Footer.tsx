"use client";

import { ChevronUp } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 transition-colors mb-6"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <a href="#home" className="inline-block">
            <h4 className="text-2xl font-bold mb-4">della PENNA autotrasporti</h4>
          </a>
          
          <p className="text-gray-400 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

