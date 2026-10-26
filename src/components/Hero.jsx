import "./Hero.css";
import herobild from "../assets/Hero1.jpg";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-titel">
      <div className="hero-innehall">
        <h2 id="hero-titel">Jag lär mig att bygga för webben.</h2>
        <p className="hero-text">
          Välkommen till min portfolio. Här delar jag det jag lär
          med HTML, CSS och React.
        </p>
        <a className="hero-knapp" href="#valkommen">
          Läs vidare
        </a>
      </div>
      <img className="hero-bild" src={herobild} alt="Hero-bild" />
    </section>
  );
}

export default Hero;
