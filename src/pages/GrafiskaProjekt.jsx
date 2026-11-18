import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hamtaKategorier } from "../data/grafiskaProjekt";
import "./GrafiskaProjekt.css";

function GrafiskaProjekt() {
  const [kategorier, setKategorier] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchKategorier() {
      try {
        const data = await hamtaKategorier();
        setKategorier(data);
      } catch {
        setError("Får inget svar från servern. Är den igång?");
      } finally {
        setLoading(false);
      }
    }

    fetchKategorier();
  }, []);

  return (
    <main className="grafiska-sida">
      <header className="grafiska-intro">
        <p className="grafiska-overrad">Portfolio</p>
        <h1>Grafiska projekt</h1>
        <p>Utforska ett urval av mina bilder och kreativa arbeten.</p>
      </header>

      <section aria-labelledby="grafiska-kategorier-rubrik">
        <h2 id="grafiska-kategorier-rubrik">Kategorier</h2>
        {loading && <p>Hämtar kategorier...</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && kategorier.length === 0 && (
          <p>Det finns inga kategorier att visa.</p>
        )}
        <div className="grafiska-kategorier">
          {kategorier.map((kategori) => (
            <Link
              className="grafisk-kategori-kort"
              key={kategori.slug}
              to={`/grafiska-projekt/${kategori.slug}`}
            >
              <img src={kategori.thumbnailUrl} alt="" loading="lazy" />
              <div className="grafisk-kategori-info">
                <h3>{kategori.name}</h3>
                <span>{kategori.count} bilder</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default GrafiskaProjekt;
