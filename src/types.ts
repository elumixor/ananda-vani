export interface Language {
  code: string;
  name: string;
  englishName?: string; // Optional: English name for the language (omit for English)
  title: string;
  content: string;
  attribution: {
    author: string;
    source: string;
    date: string;
  };
}
