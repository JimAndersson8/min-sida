import "./Vader.css";
import { useState, useEffect } from "react";
import { STADER } from "../data/stader";
import { grader } from "../utils/text";

// Grundadressen till väder-API:et. Stadens koordinater läggs till längre ner.
const BAS_URL = "https://api.open-meteo.com/v1/forecast";

function Vader() {
  // State håller reda på vad som är valt och vilken data som ska visas.
  const [selectedCity, setSelectedCity] = useState(STADER[0].namn);
  const [vader, setVader] = useState(null);
  const [fel, setFel] = useState("");

  // Hämta nytt väder vid första visningen och varje gång vald stad ändras.
  useEffect(() => {
    // Hitta stadens koordinater i vår egen lista med städer.
    const city = STADER.find((c) => c.namn === selectedCity);
    let aktuell = true;

    async function hamta() {
      // Nollställ gammalt väder och fel medan den nya stadens väder hämtas.
      setVader(null);
      setFel("");
      try {
        // Skapa en adress med stadens latitud/longitud och önskade vädervärden.
        const url = BAS_URL + "?latitude=" + city.lat + "&longitude=" + city.lon
          + "&current=temperature_2m,wind_speed_10m";
        // fetch skickar ett nätverksanrop; await väntar på svaret.
        const svar = await fetch(url);
        if (!svar.ok) {
          throw new Error("Kunde inte hämta " + city.namn);
        }
        // API-svaret är JSON-text. json() tolkar den till JavaScript-data.
        const data = await svar.json();
        // Spara bara svaret om det fortfarande hör till den valda staden.
        if (aktuell) {
          setVader({
            temp: data.current.temperature_2m,
            vind: data.current.wind_speed_10m,
          });
        }
      } catch {
        // Om anropet misslyckas visas ett fel i stället för väderdata.
        if (aktuell) {
          setFel("Kunde inte hämta vädret just nu.");
        }
      }
    }

    // Starta själva hämtningen.
    hamta();

    // Cleanup hindrar ett gammalt svar från att ändra state efter stadsbyte.
    return () => {
      aktuell = false;
    };
  }, [selectedCity]); // selectedCity är effekten beroende av.

  return (
    <section className="vader">
      <h2>Vädret just nu</h2>
      <label htmlFor="stad">Välj stad</label>
      {/* Menyn speglar selectedCity; onChange uppdaterar state vid val. */}
      <select
        id="stad"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {/* Skapa ett menyalternativ för varje stad. key hjälper React följa raderna. */}
        {STADER.map((stad) => (
          <option key={stad.namn} value={stad.namn}>
            {stad.namn}
          </option>
        ))}
      </select>

      {/* Visa fel, laddning eller väder beroende på aktuellt state. */}
      {fel && <p role="alert">{fel}</p>}
      {!fel && !vader && <p>Laddar vädret...</p>}
      {vader && (
        <div className="vader-kort">
          <h3>{selectedCity}</h3>
          <p>{grader(vader.temp)}</p>
          <p>Vind: {vader.vind} km/h</p>
        </div>
      )}
    </section>
  );
}

export default Vader;
