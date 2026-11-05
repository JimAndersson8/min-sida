import { Link } from 'react-router-dom';
import './ProjektKort.css';

function ProjektKort({ id, titel, beskrivning, teknik, bild }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt={titel} />
      <h3>{titel}</h3>
      <p>{beskrivning}</p>
      <span className="teknik">{teknik}</span>
      <Link className="projekt-las-mer" to={`/projekt/${id}`}>
        Läs mer
      </Link>
    </article>
  );
}

export default ProjektKort;
