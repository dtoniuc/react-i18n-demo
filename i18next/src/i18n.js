import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          'Hello World': 'Hello World!',
        },
      },
      fr: {
        translation: {
          'Hello World': 'Bonjour le monde',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

const locales = {
  en: 'English',
  fr: 'Française',
};

export default i18n;

export { locales };
