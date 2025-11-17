import type { Language } from "../types";

interface TextDisplayProps {
  language: Language;
}

// RTL languages: Hebrew, Arabic, Persian, Urdu, etc.
const RTL_LANGUAGES = ["he", "ar", "fa", "ur", "yi"];

function isRTL(languageCode: string): boolean {
  return RTL_LANGUAGES.includes(languageCode);
}

export function TextDisplay({ language }: TextDisplayProps) {
  const dir = isRTL(language.code) ? "rtl" : "ltr";

  return (
    <div className="text-display" dir={dir}>
      <h1 className="title">{language.title}</h1>
      <p className="content">{language.content}</p>
      <div className="attribution">
        <p className="author">{language.attribution.author}</p>
        <p className="source">{language.attribution.source}</p>
        <p className="date">{language.attribution.date}</p>
      </div>
    </div>
  );
}
