import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>MedAI Recommender</h4>
          <p>
            AI-driven medicine recommendation system for personalized, safe, and
            accurate drug suggestions.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#input-methods">Input Methods</a>
            </li>
            <li>
              <a href="#medicine-search">Medicine Search</a>
            </li>
            <li>
              <a href="#interactions">Drug Interactions</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Important Disclaimer</h4>
          <p>
            This system is for informational purposes only and does not replace
            professional medical advice. Always consult with a healthcare
            provider before making medication decisions.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} MedAI Recommender. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> |
          <a href="/terms">Terms of Service</a> |
          <a href="/contact">Contact Us</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
