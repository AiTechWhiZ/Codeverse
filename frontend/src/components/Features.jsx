import { features } from "../data";
import "../styles/Features.css";

function Features() {
  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
