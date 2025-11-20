import HomePage from "@/react-app/pages/Home";
import { LanguageProvider } from "@/react-app/contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
