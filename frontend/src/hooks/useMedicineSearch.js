import { useState } from "react";
import { medicines } from "../data";

function useMedicineSearch() {
  const [loading, setLoading] = useState(false);

  const searchMedicines = (query) => {
    if (!query.trim()) return [];

    setLoading(true);

    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = medicines.filter(
          (medicine) =>
            medicine.name.toLowerCase().includes(query.toLowerCase()) ||
            medicine.category.toLowerCase().includes(query.toLowerCase()) ||
            medicine.description.toLowerCase().includes(query.toLowerCase())
        );

        setLoading(false);
        resolve(results);
      }, 500);
    });
  };

  return { searchMedicines, loading };
}

export default useMedicineSearch;
