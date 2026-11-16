import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { grafiskaKategorier } from "../data/grafiskaProjekt";
import "./GrafiskaProjekt.css";

function GrafiskKategori() {
  const { slug } = useParams();
  const kategori = grafiskaKategorier.find((item) => item.slug === slug);
  const [valdTagg, setValdTagg] = useState("Alla");

  if (!kategori) {
    return (
      <main className="grafiska-sida">
        <p role="alert">Kategorin kunde inte hittas.</p>
        <Link className="grafisk-tillbaka" to="/grafiska-projekt">
          Till alla kategorier
        </Link>
      </main>
    );
  }

  const taggar = [...new Set(kategori.verk.flatMap((verk) => verk.taggar))];
  const synligaVerk = kategori.verk.filter(
    (verk) => valdTagg === "Alla" || verk.taggar.includes(valdTagg),
  );

  return (
    <main className="grafiska-sida">
      <Link className="grafisk-tillbaka" to="/grafiska-projekt">
        ← Alla kategorier
      </Link>
      <header className="grafiska-intro">
        <p className="grafiska-overrad">Grafiska projekt</p>
        <h1>{kategori.namn}</h1>
        <p>{kategori.beskrivning}</p>
      </header>

      <div className="grafiska-filter" aria-label="Filtrera verk efter tagg">
        {["Alla", ...taggar].map((tagg) => (
          <button
            className={valdTagg === tagg ? "grafisk-filter aktiv" : "grafisk-filter"}
            key={tagg}
            type="button"
            aria-pressed={valdTagg === tagg}
            onClick={() => setValdTagg(tagg)}
          >
            {tagg}
          </button>
        ))}
      </div>

      {synligaVerk.length === 0 ? (
        <p>Det finns inga verk med den här taggen ännu.</p>
      ) : (
        <div className="grafiska-galleri">
          {synligaVerk.map((verk) => (
            <article className="grafiskt-verk" key={verk.id}>
              <img src={verk.bild} alt={verk.alt} loading="lazy" />
              <div className="grafiskt-verk-info">
                <h2>{verk.titel}</h2>
                <p>{verk.beskrivning}</p>
                <ul aria-label="Taggar">
                  {verk.taggar.map((tagg) => (
                    <li key={tagg}>{tagg}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default GrafiskKategori;
