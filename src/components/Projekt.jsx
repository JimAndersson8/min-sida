import { useState } from 'react';
import './Projekt.css';
import ProjektKort from './ProjektKort';
import bild1 from '../assets/nature1.jpg';
import bild2 from '../assets/natur2.jpg';
import bild3 from '../assets/natur3.jpg';
import bild4 from '../assets/comfyui1.jpg';

// Varje projekt får ett unikt id. Det används som key när listan ritas ut.
const projekt = [
  { id: 1, bild: bild1, filnamn: "nature1.jpg", titel: "Min sida", beskrivning: "Sidan du tittar på just nu.", teknik: "React" },
  { id: 2, bild: bild2, filnamn: "natur2.jpg", titel: "Statisk sida", beskrivning: "Min första sida i HTML och CSS.", teknik: "HTML/CSS" },
  { id: 3, bild: bild3, filnamn: "natur3.jpg", titel: "Kommer snart", beskrivning: "Mitt nästa projekt.", teknik: "React" },
  { id: 4, bild: bild4, filnamn: "comfyui1.jpg", titel: "Grafiska projekt", beskrivning: "AI Design.", teknik: "ComfyUI" }
];

function Projekt() {
  const [sok, setSok] = useState("");

  const synliga = projekt.filter((p) =>
    `${p.titel} ${p.beskrivning} ${p.teknik} ${p.filnamn}`.toLowerCase().includes(sok.toLowerCase())
  );

  return (
    <section id="projekt" className="projekt">
      <h2>Mina projekt</h2>
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
      <div className="projekt-lista">
        {synliga.map((p) => (
          <ProjektKort
            key={p.id}
            bild={p.bild}
            titel={p.titel}
            beskrivning={p.beskrivning}
            teknik={p.teknik}
          />
        ))}
      </div>
    </section>
  );
}

export default Projekt;
