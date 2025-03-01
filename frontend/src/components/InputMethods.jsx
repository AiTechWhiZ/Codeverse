import "../styles/InputMethods.css";

function InputMethods() {
  return (
    <section id="input-methods" className="input-methods">
      <h2>Multiple Input Methods</h2>
      <div className="input-methods-container">
        <div className="input-method">
          <img src="/images/icons/text-icon.svg" alt="Text Input" />
          <h3>Text Input</h3>
          <p>
            Simply type your medication names, dosages, or medical questions.
          </p>
        </div>
        <div className="input-method">
          <img src="/images/icons/voice-icon.svg" alt="Voice Input" />
          <h3>Voice Recognition</h3>
          <p>Speak your medications or symptoms for hands-free interaction.</p>
        </div>
        <div className="input-method">
          <img src="/images/icons/ocr-icon.svg" alt="OCR Input" />
          <h3>Prescription Scanning</h3>
          <p>Upload images of prescriptions for automatic text recognition.</p>
        </div>
      </div>
    </section>
  );
}

export default InputMethods;
