import "./Vader.css";
import { useState, useEffect } from "react";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.69&current=temperature_2m,wind_speed_10m";

function Vader() {
  const [vader, setVader] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamta() {
      try {
        const svar = await fetch(API_URL);
        if (!svar.ok) {
          throw new Error("Svar: " + svar.status);
        }
        const data = await svar.json();
        setVader(data.current);
      } catch {
        setFel("Kunde inte hämta vädret just nu.");
      } finally {
        setLaddar(false);
      }
    }
    hamta();
  }, []);

  return (
    <section className="vader">
      <h2>Vädret just nu</h2>
      {laddar && <p>Laddar vädret...</p>}
      {fel && <p role="alert">{fel}</p>}
      {vader && <p>{vader.temperature_2m} °C i Helsingborg</p>}
      {vader && <p>Vind: {vader.wind_speed_10m} km/h</p>}
    </section>
  );
}

export default Vader;