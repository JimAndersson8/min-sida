import './Navbar.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeKnapp from "./DarkModeKnapp";

function Navbar() {
  const [oppen, setOppen] = useState(false);

  function stangMeny() {
    setOppen(false);
  }

  return (
    <nav className="navbar">
      <span className="logo">Tech Talent</span>
      <div className="navbar-hoger">
        <button
          className="hamburger"
          aria-label="Öppna meny"
          aria-expanded={oppen}
          aria-controls="huvudmeny"
          onClick={() => setOppen(!oppen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div id="huvudmeny" className={oppen ? "lankar oppen" : "lankar"}>
          <Link to="/" onClick={stangMeny}>Hem</Link>
          <Link to="/om-mig" onClick={stangMeny}>Om mig</Link>
          <Link to="/projekt" onClick={stangMeny}>Projekt</Link>
          <Link to="/kontakt" onClick={stangMeny}>Kontakt</Link>
        </div>
        <DarkModeKnapp />
      </div>
    </nav>
  );
}

export default Navbar;
