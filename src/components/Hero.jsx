import "./Hero.css";
import herobild from "../assets/Hero1.jpg";
import { halsning } from "../utils/text";
import { namn } from "../data/installningar";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-titel">
      <div className="hero-innehall">
        <p className="hero-intro">{halsning()}, jag heter {namn}!</p>
        <h2 id="hero-titel">Jag lär mig att bygga för webben.</h2>
        <p className="hero-text">
          Välkommen till min portfolio. Här delar jag det jag lär
          med HTML, CSS och React.
        </p>
        <a className="hero-knapp" href="#valkommen">
          Läs vidare
        </a>
      </div>
      <img className="hero-bild" src={herobild} alt="Abstrakt illustration av ett kretskort" />
    </section>
  );
}

export default Hero;
