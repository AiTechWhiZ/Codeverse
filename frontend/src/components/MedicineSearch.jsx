import { useState } from "react";
import { medicines } from "../data";
import useMedicineSearch from "../hooks/useMedicineSearch";
import "../styles/MedicineSearch.css";

function MedicineSearch({ setSearchResults, results = [] }) {
  const [query, setQuery] = useState("");
  const { searchMedicines, loading } = useMedicineSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    const foundMedicines = searchMedicines(query);
    setSearchResults(foundMedicines);
  };

  return (
    <section id="medicine-search" className="medicine-search">
      <h2>Find Medication Information</h2>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Enter medication name or category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        <div className="upload-container">
          <h3>Or upload a prescription</h3>
          <div className="upload-buttons">
            <button className="upload-button">
              <span>Scan Prescription</span>
            </button>
            <button className="upload-button">
              <span>Upload Image</span>
            </button>
          </div>
        </div>
      </div>

      {results.length > 0 && (
        <div className="results-container">
          <h3>Search Results</h3>
          <div className="medicine-results">
            {results.map((medicine) => (
              <div key={medicine.id} className="medicine-card">
                <h4>{medicine.name}</h4>
                <p className="medicine-category">{medicine.category}</p>
                <p>{medicine.description}</p>
                <div className="medicine-details">
                  <div>
                    <h5>Available Dosages</h5>
                    <ul>
                      {medicine.dosages.map((dosage, index) => (
                        <li key={index}>{dosage}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5>Common Side Effects</h5>
                    <ul>
                      {medicine.sideEffects.map((effect, index) => (
                        <li key={index}>{effect}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default MedicineSearch;
