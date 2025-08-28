import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    
    // Fallback to English if translation not found
    if (value === undefined) {
      let fallback = translations.en;
      for (const k of keys) {
        if (fallback && typeof fallback === 'object') {
          fallback = fallback[k];
        } else {
          fallback = key; // Return key if no translation found
          break;
        }
      }
      return fallback;
    }
    
    return value;
  };
  
  return { t, language };
};
