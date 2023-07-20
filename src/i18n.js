import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin":"To admin view",
      "shops": "Our shops",
      "contact": "Contact with us",
      "cart": "To cart",
      "login": "Login in",
      "Maintain categories": "Maintaine categories",
      "Maintain shops": "Maintain shops",
      "Add product" : "Add product",
      "Maintain product": "Maintain products",
      
    }
  },
  ee: {
    translation: {
      "admin":"Admin vaatesse",
      "shops": "Meie poed",
      "contact": "Kontakteeru meiega",
      "cart": "Ostukorvi",
      "login": "Logi sisse",
      "Maintain categories": "Halda kategooriaid",
      "Maintain shops": "Halda poode",
      "Add product" : "Lisa toode",
      "Maintain product": "Halda tooteid",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;