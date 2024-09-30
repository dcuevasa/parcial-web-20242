import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            LogIn: "Log In",
            Password: "Password",
            SaveChanges: "Save Changes",
            Running: "Running",
            Swimming: "Swimming",
            Cycling: "Cycling",
            RunningSession: "Running Session",
            SwimmingSession: "Swimming Session",
            CyclingSession: "Cycling Session",
            Cartagena: "Around the bay of Cartagena",
            Distance: "Distance",
            Duration: "Duration",
        }
      },
      es: {
        translation: {
            LogIn: "Iniciar Sesión",
            Password: "Contraseña",
            SaveChanges: "Guardar Cambios",
            Running: "Correr",
            Swimming: "Nadar",
            Cycling: "Ciclismo",
            RunningSession: "Sesión de Correr",
            SwimmingSession: "Sesión de Nadar",
            CyclingSession: "Sesión de Ciclismo",
            Cartagena: "Recorrido alrededor de la bahia de Cartagena",
            Distance: "Distancia",
            Duration: "Duración",
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      
      caches: [],
    }
  });

export default i18n;
