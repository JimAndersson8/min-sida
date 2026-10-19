import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const år = new Date().getFullYear();

  return (
    <footer className="footer" id="kontakt">
      <div className="footer-info">
        <p>Kontakt: jim.and79sweden@gmail.com.se</p>
        <p>© {år} Jim Andersson</p>
      </div>

      <div className="footer-lankar">
        <Link to="/">Hem</Link>
        <Link to="/om-mig">Om mig</Link>
        <a href="#kontakt">Kontakt</a>
      </div>
    </footer>
  );
}

export default Footer;
