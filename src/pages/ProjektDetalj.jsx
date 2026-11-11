import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjektDetalj.css";

const SERVER_URL = "http://localhost:3001/projekt";

function ProjektDetalj() {
  // Läs id:t från adressen. Parametrar från URL:en är text.
  const { id } = useParams();

  const [projekt, setProjekt] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaProjekt() {
      try {
        const svar = await fetch(`${SERVER_URL}/${id}`);

        if (svar.status === 404) {
          setFel("Projektet finns inte.");
          return;
        }

        if (!svar.ok) {
          throw new Error(`Servern svarade med status ${svar.status}`);
        }

        const json = await svar.json();
        setProjekt(json);
      } catch {
        setFel("Kunde inte hämta projektet från servern. Kontrollera att min-server körs.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaProjekt();
  }, [id]);

  if (laddar) {
    return (
      <section className="projekt-detalj">
        <p>Laddar projekt...</p>
      </section>
    );
  }

  // Om id:t inte finns visas ett meddelande och en länk tillbaka.
  if (fel) {
    return (
      <section className="projekt-detalj">
        <p role="alert">
          {fel} <Link to="/">Till startsidan</Link>
        </p>
      </section>
    );
  }

  // Plocka ut de värden sidan ska visa ur projektobjektet.
  const { titel, beskrivning, teknik } = projekt;

  return (
    <section className="projekt-detalj">
      <h2>{titel}</h2>
      <p>{beskrivning}</p>
      <h3>Teknik</h3>
      <ul>
        {teknik.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <Link to="/projekt">Till alla projekt</Link>
    </section>
  );
}

export default ProjektDetalj;
