import { useState, useRef } from "react";
import { medicines } from "../data";
import useMedicineSearch from "../hooks/useMedicineSearch";
import "../styles/MedicineSearch.css";

function MedicineSearch({ setSearchResults, results = [] }) {
  const [query, setQuery] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const { searchMedicines, loading } = useMedicineSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    const foundMedicines = searchMedicines(query);
    setSearchResults(foundMedicines);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadStatus("Please upload only image files");
      return;
    }

    try {
      setIsUploading(true);
      setUploadStatus("Uploading...");
      const formData = new FormData();
      formData.append("prescriptionImage", file);

      const response = await fetch(
        "http://localhost:5000/api/upload-prescription",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setUploadedImage(data.file);
        setUploadStatus("Upload successful!");

        // If you want to automatically search for medicines based on the image
        // You would need OCR functionality here
        // For now, we'll just show the uploaded image
      } else {
        setUploadStatus(`Upload failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error uploading file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = (type) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Simulate camera access (in a real app, you'd use the device camera API)
  const handleScanPrescription = () => {
    // In a real implementation, you would access the device camera
    // For this example, we'll just open the file dialog
    triggerFileInput("camera");
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
            <button
              className="upload-button"
              onClick={() => triggerFileInput("upload")}
              disabled={isUploading}
            >
              <span>Upload Image</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          {uploadStatus && (
            <p
              className={`upload-status ${
                uploadStatus.includes("failed") ||
                uploadStatus.includes("Error")
                  ? "error"
                  : ""
              }`}
            >
              {uploadStatus}
            </p>
          )}
          {uploadedImage && (
            <div className="uploaded-image-preview">
              <h4>Uploaded Prescription</h4>
              <img
                src={`http://localhost:5000${uploadedImage.path}`}
                alt="Uploaded prescription"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            </div>
          )}
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
