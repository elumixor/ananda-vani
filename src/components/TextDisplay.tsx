import type { Language } from "../types";

interface TextDisplayProps {
  language: Language;
}

export function TextDisplay({ language }: TextDisplayProps) {
  return (
    <div className="text-display">
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
