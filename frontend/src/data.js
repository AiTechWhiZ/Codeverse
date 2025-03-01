// Sample data for demonstration purposes

export const medicines = [
  {
    id: 1,
    name: "Lisinopril",
    category: "ACE Inhibitor",
    description: "Used to treat high blood pressure and heart failure.",
    dosages: ["5mg", "10mg", "20mg"],
    sideEffects: ["Dry cough", "Dizziness", "Headache"],
  },
  {
    id: 2,
    name: "Metformin",
    category: "Biguanide",
    description: "Used to treat type 2 diabetes.",
    dosages: ["500mg", "850mg", "1000mg"],
    sideEffects: ["Nausea", "Diarrhea", "Stomach pain"],
  },
  {
    id: 3,
    name: "Atorvastatin",
    category: "Statin",
    description: "Used to lower cholesterol and reduce risk of heart attack.",
    dosages: ["10mg", "20mg", "40mg", "80mg"],
    sideEffects: ["Muscle pain", "Liver problems", "Digestive issues"],
  },
  {
    id: 4,
    name: "Levothyroxine",
    category: "Thyroid Medication",
    description: "Used to treat hypothyroidism.",
    dosages: ["25mcg", "50mcg", "75mcg", "100mcg"],
    sideEffects: ["Weight loss", "Tremors", "Insomnia"],
  },
  {
    id: 5,
    name: "Amlodipine",
    category: "Calcium Channel Blocker",
    description: "Used to treat high blood pressure and angina.",
    dosages: ["2.5mg", "5mg", "10mg"],
    sideEffects: ["Swelling", "Flushing", "Dizziness"],
  },
];

export const knownInteractions = [
  {
    drugs: ["Lisinopril", "Potassium supplements"],
    severity: "High",
    effect: "May cause dangerously high potassium levels",
  },
  {
    drugs: ["Metformin", "Atorvastatin"],
    severity: "Low",
    effect: "May slightly reduce the effectiveness of both medications",
  },
  {
    drugs: ["Amlodipine", "Simvastatin"],
    severity: "Medium",
    effect: "May increase statin side effects",
  },
  {
    drugs: ["Levothyroxine", "Calcium supplements"],
    severity: "Medium",
    effect: "Calcium may decrease levothyroxine absorption",
  },
];

export const features = [
  {
    id: 1,
    title: "Personalized Recommendations",
    description:
      "Receive drug suggestions tailored to your medical history and current prescriptions.",
  },
  {
    id: 2,
    title: "Prescription Accuracy",
    description:
      "Our AI system ensures all recommendations follow medical guidelines and dosage protocols.",
  },
  {
    id: 3,
    title: "Drug Interaction Detection",
    description:
      "Automatically identifies potential harmful interactions between medications.",
  },
  {
    id: 4,
    title: "Multimodal Input",
    description:
      "Upload prescriptions through text, voice commands, or by scanning documents.",
  },
];
