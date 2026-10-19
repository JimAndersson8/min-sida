import './ProjektKort.css';

function ProjektKort({ titel, beskrivning, teknik }) {
  return (
    <article className="projekt-kort">
      <h3>{titel}</h3>
      <p>{beskrivning}</p>
      <span className="teknik">{teknik}</span>
    </article>
  );
}

export default ProjektKort;