import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en/common.json";
import es from "./translations/es/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: en,
    },
    es: {
      common: es,
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  defaultNS: "common",
});

export default i18n;
