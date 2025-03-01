import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>AI-Driven Medicine Recommendation System</h1>
        <p>
          Extract key medical information from prescriptions and user queries to
          provide personalized, safe, and accurate drug suggestions. Our system
          ensures prescription accuracy, detects potential drug interactions,
          and enhances accessibility through multimodal inputs like text, voice,
          and OCR.
        </p>
        <div className="hero-buttons">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/ai-medical.jpg" alt="AI Medical Assistance" />
      </div>
    </section>
  );
}

export default Hero;
