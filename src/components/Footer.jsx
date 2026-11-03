import "./Footer.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import { Link } from "react-router-dom";
import { copyright } from "../utils/text";
import { epost, githubAnvandare, namn } from "../data/installningar";

function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer-info">
        <p>Kontakt: {epost}</p>
        <p>{copyright(namn)}</p>
      </div>

      <div className="footer-lankar">
        <Link to="/">Hem</Link>
        <Link to="/om-mig">Om mig</Link>
        <a
          href={`https://github.com/${githubAnvandare}/min-sida`}
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
