import { useEffect, useState } from "react";
import "./MinServer.css";

const SERVER_URL = "http://localhost:3001/hej";

function MinServer() {
  const [data, setData] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaData() {
      try {
        const svar = await fetch(SERVER_URL);
        if (!svar.ok) {
          throw new Error(`Servern svarade med status ${svar.status}`);
        }
        const json = await svar.json();
        setData(json);
      } catch {
        setFel("Kunde inte hämta data från servern. Kontrollera att min-server körs.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaData();
  }, []);

  return (
    <main className="sida-innehall">
      <h1>Min server</h1>
      {laddar && <p>Laddar data från servern...</p>}
      {fel && <p role="alert">{fel}</p>}
      {data && (
        <section aria-label="Svar från min server">
          <p>{data.meddelande}</p>
          <p>Namn: {data.namn}</p>
          <p>Roll: {data.roll}</p>
          <h2>Intressen</h2>
          <ul className="min-server-intressen">
            {data.intressen.map((intresse) => (
              <li key={intresse}>{intresse}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default MinServer;
