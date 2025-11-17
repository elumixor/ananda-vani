import type { Language } from "../types";

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
}

export function LanguageSelector({ languages, selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="language-selector">
      <h2>Select Language</h2>
      <div className="language-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            className={`language-button ${selectedLanguage === lang.code ? "active" : ""}`}
            onClick={() => onLanguageChange(lang.code)}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
