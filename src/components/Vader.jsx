import "./Vader.css";
import { useState, useEffect } from "react";
import { STADER } from "../data/stader";
import { grader } from "../utils/text";

const BAS_URL = "https://api.open-meteo.com/v1/forecast";

function Vader() {
  const [selectedCity, setSelectedCity] = useState(STADER[0].namn);
  const [vader, setVader] = useState(null);
  const [fel, setFel] = useState("");

  useEffect(() => {
    const city = STADER.find((c) => c.namn === selectedCity);
    let aktuell = true;

    async function hamta() {
      setVader(null);
      setFel("");
      try {
        const url = BAS_URL + "?latitude=" + city.lat + "&longitude=" + city.lon
          + "&current=temperature_2m,wind_speed_10m";
        const svar = await fetch(url);
        if (!svar.ok) {
          throw new Error("Kunde inte hämta " + city.namn);
        }
        const data = await svar.json();
        if (aktuell) {
          setVader({
            temp: data.current.temperature_2m,
            vind: data.current.wind_speed_10m,
          });
        }
      } catch {
        if (aktuell) {
          setFel("Kunde inte hämta vädret just nu.");
        }
      }
    }

    hamta();

    return () => {
      aktuell = false;
    };
  }, [selectedCity]);

  return (
    <section className="vader">
      <h2>Vädret just nu</h2>
      <label htmlFor="stad">Välj stad</label>
      <select
        id="stad"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {STADER.map((stad) => (
          <option key={stad.namn} value={stad.namn}>
            {stad.namn}
          </option>
        ))}
      </select>

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
