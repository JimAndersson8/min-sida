import './ProjektKort.css';

function ProjektKort({ titel, beskrivning, teknik, bild }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt={titel} />
      <h3>{titel}</h3>
      <p>{beskrivning}</p>
      <span className="teknik">{teknik}</span>
    </article>
  );
}

export default ProjektKort;
