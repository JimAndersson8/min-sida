import "./Footer.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import { Link } from "react-router-dom";

function Footer() {
  const år = new Date().getFullYear();

  return (
    <footer className="footer" id="kontakt">
      <div className="footer-info">
        <p>Kontakt: jim.and79sweden@gmail.com</p>
        <p>© {år} Jim Andersson</p>
      </div>

      <div className="footer-lankar">
        <Link to="/">Hem</Link>
        <Link to="/om-mig">Om mig</Link>
        <a
          href="https://github.com/JimAndersson8/min-sida"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github fa-lg" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
