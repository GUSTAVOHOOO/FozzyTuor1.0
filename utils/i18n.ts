import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en/translation.json";
import es from "../locales/es/translation.json";
import zh from "../locales/zh/translation.json";
import fr from "../locales/fr/translation.json";
import pt from "../locales/pt/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      zh: { translation: zh },
      fr: { translation: fr },
      pt: { translation: pt },
      "pt-BR": { translation: pt },
    },
    fallbackLng: "pt",
    lng: "pt",
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

export default i18n; 