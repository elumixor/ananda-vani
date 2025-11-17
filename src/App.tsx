import { useState } from "react";
import { LanguageSelector } from "./components/LanguageSelector";
import { TextDisplay } from "./components/TextDisplay";
import { languages } from "./data/languages";
import "./App.css";

function App() {
  const [selectedLanguageCode, setSelectedLanguageCode] = useState(languages[0]?.code || "");

  const selectedLanguage = languages.find((lang) => lang.code === selectedLanguageCode);

  if (!selectedLanguage) {
    return <div>No languages available</div>;
  }

  return (
    <div className="app">
      <LanguageSelector
        languages={languages}
        selectedLanguage={selectedLanguageCode}
        onLanguageChange={setSelectedLanguageCode}
      />
      <TextDisplay language={selectedLanguage} />
    </div>
  );
}

export default App;
