import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
const languages=["az","en"]
i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    whiteList:languages,
    lng: localStorage.getItem('lang') || 'EN' , // use en if detected lng is not available
    saveMissing: true // send not translated keys to endpoint
  });

export default i18n;