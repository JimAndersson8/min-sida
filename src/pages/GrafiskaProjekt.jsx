import { Link } from "react-router-dom";
import { grafiskaKategorier } from "../data/grafiskaProjekt";
import "./GrafiskaProjekt.css";

function GrafiskaProjekt() {
  return (
    <main className="grafiska-sida">
      <header className="grafiska-intro">
        <p className="grafiska-overrad">Portfolio</p>
        <h1>Grafiska projekt</h1>
        <p>Utforska ett urval av mina bilder och kreativa arbeten.</p>
      </header>

      <section aria-labelledby="grafiska-kategorier-rubrik">
        <h2 id="grafiska-kategorier-rubrik">Kategorier</h2>
        <div className="grafiska-kategorier">
          {grafiskaKategorier.map((kategori) => (
            <Link
              className="grafisk-kategori-kort"
              key={kategori.slug}
              to={`/grafiska-projekt/${kategori.slug}`}
            >
              <img src={kategori.omslagsbild} alt="" />
              <div className="grafisk-kategori-info">
                <h3>{kategori.namn}</h3>
                <p>{kategori.beskrivning}</p>
                <span>{kategori.verk.length} exempel</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default GrafiskaProjekt;
