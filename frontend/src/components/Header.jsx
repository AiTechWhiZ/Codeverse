import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>MedAI Recommender</h1>
      </div>
      <nav className="nav">
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
          <li>
            <a href="#accessibility">Accessibility</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
