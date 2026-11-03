import "./Vader.css";
import { useState, useEffect } from "react";

const stader = [
  { namn: "Helsingborg", lat: 56.05, lon: 12.69 },
  { namn: "Stockholm", lat: 59.33, lon: 18.07 },
  { namn: "Kiruna", lat: 67.86, lon: 20.23 },
];

const BAS_URL = "https://api.open-meteo.com/v1/forecast";

async function hamtaStad(stad) {
  const url = BAS_URL + "?latitude=" + stad.lat + "&longitude=" + stad.lon
    + "&current=temperature_2m,wind_speed_10m";
  const svar = await fetch(url);

  if (!svar.ok) {
    throw new Error("Kunde inte hämta " + stad.namn);
  }

  const data = await svar.json();
  return {
    namn: stad.namn,
    temp: data.current.temperature_2m,
    vind: data.current.wind_speed_10m,
  };
}

function Vader() {
  const [vader, setVader] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamta() {
      try {
        const resultat = await Promise.all(stader.map(hamtaStad));
        setVader(resultat);
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
      <ul className="vader-lista">
        {vader.map((stad) => (
          <li key={stad.namn} className="vader-kort">
            <h3>{stad.namn}</h3>
            <p>{stad.temp} °C</p>
            <p>Vind: {stad.vind} km/h</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Vader;
