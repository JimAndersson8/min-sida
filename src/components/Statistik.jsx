import { useEffect, useState } from "react";
import "./Statistik.css";

const SERVER_URL = "http://localhost:3001/projekt";

function Statistik() {
  const [projektLista, setProjektLista] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaProjekt() {
      try {
        const svar = await fetch(SERVER_URL);
        if (!svar.ok) {
          throw new Error(`Servern svarade med status ${svar.status}`);
        }
        const json = await svar.json();
        setProjektLista(json);
      } catch {
        setFel("Kunde inte hämta statistiken från servern. Kontrollera att min-server körs.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaProjekt();
  }, []);

  if (laddar) {
    return <p>Laddar statistik...</p>;
  }

  if (fel) {
    return <p role="alert">{fel}</p>;
  }

  // Börja med en tom räknartavla och gå igenom projekten ett i taget.
  const antalPerTeknik = projektLista.reduce((summa, projekt) => {
    // Varje projekt kan ha flera tekniker, så räkna dem var för sig.
    for (const teknik of projekt.teknik) {
      summa[teknik] = (summa[teknik] || 0) + 1;
    }
    return summa;
  }, {});

  // Gör räknarobjektet till par i en array, sortera flest först och sedan A–Ö.
  const sorteradStatistik = Object.entries(antalPerTeknik).sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0], "sv");
  });

  return (
    <ul className="statistik-lista">
      {sorteradStatistik.map(([teknik, antal]) => (
        <li key={teknik}>
          <span>{teknik}</span>
          <span>{antal} projekt</span>
        </li>
      ))}
    </ul>
  );
}

export default Statistik;
