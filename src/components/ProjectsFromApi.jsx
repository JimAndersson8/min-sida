import { useEffect, useState } from "react";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/nature1.jpg";
import bild2 from "../assets/natur2.jpg";
import bild3 from "../assets/natur3.jpg";
import bild4 from "../assets/comfyui1.jpg";
import "./ProjectsFromApi.css";

const SERVER_URL = "http://localhost:3001/projekt";

// API:t skickar bildnamn som text. Den här uppslagningen kopplar namnet
// till den bildfil som Vite har importerat.
const bilder = {
  "nature1.jpg": bild1,
  "natur2.jpg": bild2,
  "natur3.jpg": bild3,
  "comfyui1.jpg": bild4,
};

function ProjectsFromApi() {
  const [projekt, setProjekt] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(SERVER_URL);
        // fetch kastar inte automatiskt fel för statusar som 404 och 500.
        if (!response.ok) {
          throw new Error("Servern svarade med " + response.status);
        }
        const data = await response.json();
        setProjekt(data);
      } catch {
        setError("Får inget svar från servern. Är den igång?");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  async function deleteProject(id) {
    // Bekräfta först, så projekt inte råkar tas bort av misstag.
    if (!window.confirm("Vill du ta bort projektet?")) return;

    try {
      const response = await fetch(SERVER_URL + "/" + id, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Servern svarade med " + response.status);
      }

      // Uppdatera React-listan efter att servern bekräftat borttagningen.
      setProjekt((prev) => prev.filter((p) => p.id !== id));
    } catch {
      setError("Kunde inte ta bort projektet. Är servern igång?");
    }
  }

  return (
    <main className="projects-api">
      <h1>Projekt från API</h1>
      {loading && <p>Hämtar projekt...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && projekt.length === 0 && (
        <p>Det finns inga projekt att visa.</p>
      )}
      <div className="projects-api-lista">
        {projekt.map((p) => (
          <div className="api-card" key={p.id}>
            <ProjektKort
              id={p.id}
              titel={p.titel}
              beskrivning={p.beskrivning}
              teknik={p.teknik.join(", ")}
              bild={bilder[p.bild]}
            />
            {/* Pilfunktionen körs först när knappen klickas, inte vid varje rendering. */}
            <button
              className="delete-button"
              type="button"
              onClick={() => deleteProject(p.id)}
            >
              Ta bort
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProjectsFromApi;
