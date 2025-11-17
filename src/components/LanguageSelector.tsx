import type { Language } from "../types";

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
}

export function LanguageSelector({ languages, selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="language-selector">
      <div className="language-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            className={`language-button ${selectedLanguage === lang.code ? "active" : ""}`}
            onClick={() => onLanguageChange(lang.code)}
          >
            <span className="language-name">{lang.name}</span>
            {lang.englishName && <span className="language-name-en">{lang.englishName}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
