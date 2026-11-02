// hämta data från ett öppet API med fetch + useEffect
//
// Samma idé som projekt.json – en array av objekt som vi .map():ar till kort.
// Skillnaden: den här datan kommer från GitHub över internet, inte från en fil.

import "./GitHubRepon.css";
import { useState, useEffect } from "react";

// Byt till ditt eget GitHub-användarnamn
const ANVANDARE = "JimAndersson8";
const API_URL =
  "https://api.github.com/users/" + ANVANDARE + "/repos?sort=updated&per_page=6";

function GitHubRepon() {
  // Tre lägen: laddar, fel och klart
  const [repon, setRepon] = useState([]); // datan – tom lista från början
  const [laddar, setLaddar] = useState(true); // vi börjar med att ladda
  const [fel, setFel] = useState(""); // "" = inget fel

  // [] = kör bara en gång, när komponenten visas. Utan useEffect blir det en oändlig loop.
  useEffect(() => {
    async function hamta() {
      try {
        const svar = await fetch(API_URL);
        // fetch räknar inte 404 och 403 som fel – det kollar vi själva
        if (!svar.ok) {
          throw new Error("Svar: " + svar.status);
        }
        const data = await svar.json(); // gör om svaret från text till JavaScript
        setRepon(data);
      } catch {
        setFel("Kunde inte hämta repon från GitHub just nu. Försök igen om en stund.");
      } finally {
        setLaddar(false); // klart – oavsett hur det gick
      }
    }
    hamta();
  }, []);

  return (
    <section className="github">
      <h2>Senast på GitHub</h2>

      {laddar && <p>Laddar repon...</p>}
      {fel && <p className="github-fel" role="alert">{fel}</p>}

      <ul className="github-lista">
        {repon.map((r) => (
          <li key={r.id} className="github-kort">
            <h3>
              <a href={r.html_url}>{r.name}</a>
            </h3>
            {/* || = "eller": har repot ingen beskrivning används texten efter */}
            <p>{r.description || "Ingen beskrivning än."}</p>
            {/* && = visa bara språket om det finns */}
            {r.language && <span className="github-sprak">{r.language}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GitHubRepon;
