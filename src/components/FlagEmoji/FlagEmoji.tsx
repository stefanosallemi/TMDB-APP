import React from 'react';

type Language =
  | 'ar'
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'he'
  | 'hi'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sv'
  | 'th'
  | 'tr'
  | 'zh';

const FLAG_EMOJIS: Record<Language, string> = {
  ar: '🇸🇦',
  de: '🇩🇪',
  en: '🇺🇸',
  es: '🇪🇸',
  fr: '🇫🇷',
  he: '🇮🇱',
  hi: '🇮🇳',
  hu: '🇭🇺',
  id: '🇮🇩',
  it: '🇮🇹',
  ja: '🇯🇵',
  ko: '🇰🇷',
  nl: '🇳🇱',
  pl: '🇵🇱',
  pt: '🇵🇹',
  ro: '🇷🇴',
  ru: '🇷🇺',
  sv: '🇸🇪',
  th: '🇹🇭',
  tr: '🇹🇷',
  zh: '🇨🇳',
};



const getFlagEmoji = (language: string): string | undefined => { // Funzione che restituisce l'emoji della bandiera in base alla lingua specificata
    const validLanguages: Language[] = Object.keys(FLAG_EMOJIS) as Language[]; // ottieni una lista di lingue valide

    if (validLanguages.includes(language as Language)) { // controlla se la lingua è valida
        return FLAG_EMOJIS[language as Language];
    }

    return undefined;
};

const FlagEmoji: React.FC<{ language: string }> = ({ language }) => { // Componente React che restituisce l'emoji della bandiera
    const flagEmoji = getFlagEmoji(language);

    return <span>{flagEmoji}</span>;
};

export default FlagEmoji;
