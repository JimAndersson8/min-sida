import './Navbar.css';
import { Link } from "react-router-dom";
import DarkModeKnapp from "./DarkModeKnapp";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Tech Talent</span>
      <div className="lankar">
        <DarkModeKnapp />
        <Link to="/">Hem</Link>
        <Link to="/om-mig">Om mig</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}

export default Navbar;
