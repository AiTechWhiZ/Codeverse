import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InputMethods from "./components/InputMethods";
import MedicineSearch from "./components/MedicineSearch";
import DrugInteractions from "./components/DrugInteractions";
import Accessibility from "./Components/Accessibility";
import Footer from "./Components/Footer";
import "./styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [interactionResults, setInteractionResults] = useState([]);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <InputMethods />
        <MedicineSearch
          setSearchResults={setSearchResults}
          results={searchResults}
        />
        <DrugInteractions
          setInteractionResults={setInteractionResults}
          results={interactionResults}
        />
        <Accessibility />
      </main>
      <Footer />
    </div>
  );
}

export default App;
