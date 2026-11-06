import { useState } from 'react';
import './Projekt.css';
import ProjektKort from './ProjektKort';
import bild1 from '../assets/nature1.jpg';
import bild2 from '../assets/natur2.jpg';
import bild3 from '../assets/natur3.jpg';
import bild4 from '../assets/comfyui1.jpg';
import projektLista from '../data/projekt.json';

// JSON kan bara innehålla data, inte variabler. Därför står bilden som en sträng
// i projekt.json ("nature1.jpg"), och här slår vi upp vilken importerad bild den betyder.
const bilder = {
  "nature1.jpg": bild1,
  "natur2.jpg": bild2,
  "natur3.jpg": bild3,
  "comfyui1.jpg": bild4,
};

// Börja med knappen som visar alla projekt.
const filterLista = ["Alla"];

// Gå igenom alla projekt och samla varje teknik en gång till filterknapparna.
for (const projekt of projektLista) {
  for (const teknik of projekt.teknik) {
    if (!filterLista.includes(teknik)) {
      filterLista.push(teknik);
    }
  }
}

function Projekt() {
  // Vilken filterknapp är vald, och vad står i sökrutan?
  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");
  const [sortering, setSortering] = useState("standard");

  // Ett projekt visas bara om BÅDE knappen och sökningen stämmer.
  const synligaProjekt = projektLista.filter((p) => {
    const rattTeknik = vald === "Alla" || p.teknik.includes(vald);
    const rattSok = `${p.titel} ${p.text} ${p.teknik.join(" ")} ${p.bild}`
      .toLowerCase()
      .includes(sok.toLowerCase());
    return rattTeknik && rattSok;
  });

  // Sorteringen görs på en kopia, eftersom sort() ändrar arrayen den körs på.
  const sorteradeProjekt = [...synligaProjekt];

  if (sortering === "titel") {
    sorteradeProjekt.sort((a, b) => a.titel.localeCompare(b.titel, "sv"));
  } else if (sortering === "teknik") {
    sorteradeProjekt.sort((a, b) => b.teknik.length - a.teknik.length);
  }

  return (
    <section id="projekt" className="projekt">
      <h2>Mina projekt</h2>
      <div className="projekt-filter">
        {filterLista.map((f) => (
          <button
            key={f}
            className={f === vald ? "filter-knapp aktiv" : "filter-knapp"}
            onClick={() => setVald(f)}
            aria-pressed={f === vald}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="projekt-sok">
        <label htmlFor="sok">Sök bland projekten</label>
        <input
          type="text"
          id="sok"
          value={sok}
          onChange={(e) => setSok(e.target.value)}
          placeholder="Skriv något..."
        />
      </div>
      <div className="projekt-sortering">
        <label htmlFor="sortering">Sortera efter</label>
        <select
          id="sortering"
          value={sortering}
          onChange={(e) => setSortering(e.target.value)}
        >
          <option value="standard">Standard</option>
          <option value="titel">Titel (A–Ö)</option>
          <option value="teknik">Flest tekniker</option>
        </select>
      </div>
      <p className="projekt-antal">
        Visar {sorteradeProjekt.length} av {projektLista.length} projekt
      </p>
      {sorteradeProjekt.length === 0 ? (
        <p className="projekt-tomt">Inga projekt matchar. Prova ett annat filter eller en annan sökning.</p>
      ) : (
        <div className="projekt-lista">
          {sorteradeProjekt.map((p) => (
            <ProjektKort
              key={p.id}
              id={p.id}
              bild={bilder[p.bild]}
              titel={p.titel}
              beskrivning={p.text}
              teknik={p.teknik.join(", ")}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projekt;
