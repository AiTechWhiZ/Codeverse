import { useState } from "react";
import { knownInteractions } from "../data";
import "../styles/DrugInteractions.css";

function DrugInteractions({ setInteractionResults, results }) {
  const [medications, setMedications] = useState(["", ""]);

  const handleAddMedication = () => {
    setMedications([...medications, ""]);
  };

  const handleMedicationChange = (index, value) => {
    const newMedications = [...medications];
    newMedications[index] = value;
    setMedications(newMedications);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out empty inputs
    const medicationList = medications.filter((med) => med.trim() !== "");

    if (medicationList.length < 2) {
      alert("Please enter at least two medications to check for interactions");
      return;
    }

    // For demo purposes, check against our known interactions
    const foundInteractions = knownInteractions.filter((interaction) => {
      return medicationList.some((med) =>
        interaction.drugs.some((drug) =>
          drug.toLowerCase().includes(med.toLowerCase())
        )
      );
    });

    setInteractionResults(foundInteractions);
  };

  return (
    <section id="interactions" className="drug-interactions">
      <h2>Check for Drug Interactions</h2>
      <p>
        Enter your medications to identify potential interactions and safety
        concerns.
      </p>

      <form onSubmit={handleSubmit} className="interactions-form">
        <div className="medications-list">
          {medications.map((medication, index) => (
            <div key={index} className="medication-input">
              <label htmlFor={`medication-${index}`}>
                Medication {index + 1}
              </label>
              <input
                type="text"
                id={`medication-${index}`}
                value={medication}
                onChange={(e) => handleMedicationChange(index, e.target.value)}
                placeholder="Enter medication name"
              />
            </div>
          ))}
        </div>

        <div className="interaction-buttons">
          <button
            type="button"
            onClick={handleAddMedication}
            className="add-medication-button"
          >
            Add Another Medication
          </button>
          <button type="submit" className="check-interactions-button">
            Check Interactions
          </button>
        </div>
      </form>

      {results.length > 0 ? (
        <div className="interactions-results">
          <h3>Potential Interactions Found</h3>
          {results.map((interaction, index) => (
            <div
              key={index}
              className={`interaction-card severity-${interaction.severity.toLowerCase()}`}
            >
              <div className="interaction-header">
                <h4>{interaction.drugs.join(" + ")}</h4>
                <span
                  className={`severity severity-${interaction.severity.toLowerCase()}`}
                >
                  {interaction.severity} Risk
                </span>
              </div>
              <p>{interaction.effect}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-interactions">
          {medications.some((med) => med.trim() !== "") && (
            <p>
              No interactions found for the entered medications. Please check
              more medications or consult your healthcare provider.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default DrugInteractions;
