"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "@/utils/i18n";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
];

export default function LanguageSelector() {
  const { i18n: i18next } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    i18next.changeLanguage(code);
    setOpen(false);
  };

  const current = languages.find(l => l.code === i18next.language) || languages[0];

  return (
    <div className="relative z-50">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md transition-all duration-200"
        onClick={() => setOpen(o => !o)}
        aria-label="Selecionar idioma"
      >
        <span className="text-2xl">{current.flag}</span>
        <svg 
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl overflow-hidden"
          >
            {languages.map(lang => (
              <li key={lang.code}>
                <motion.button
                  whileHover={{ x: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 transition-all duration-200 text-white text-lg ${
                    i18next.language === lang.code ? 'bg-white/20 font-semibold' : ''
                  }`}
                  onClick={() => handleSelect(lang.code)}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span>{lang.label}</span>
                </motion.button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
} 