import "../styles/Accessibility.css";

function Accessibility() {
  return (
    <section id="accessibility" className="accessibility">
      <h2>Enhanced Accessibility</h2>
      <div className="accessibility-features">
        <div className="accessibility-feature">
          <h3>Voice Control</h3>
          <p>Navigate and interact with the system using voice commands.</p>
          <button className="feature-button">Try Voice Control</button>
        </div>
        <div className="accessibility-feature">
          <h3>Text-to-Speech</h3>
          <p>Have medication information and interactions read aloud.</p>
          <button className="feature-button">Enable Text-to-Speech</button>
        </div>
        <div className="accessibility-feature">
          <h3>High Contrast Mode</h3>
          <p>Improve visibility with enhanced color contrast.</p>
          <button className="feature-button">Switch to High Contrast</button>
        </div>
        <div className="accessibility-feature">
          <h3>Font Size Adjustment</h3>
          <p>Change text size for better readability.</p>
          <div className="font-size-controls">
            <button className="font-control">A-</button>
            <button className="font-control">A</button>
            <button className="font-control">A+</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accessibility;
