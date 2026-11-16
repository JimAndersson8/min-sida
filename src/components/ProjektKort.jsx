import { Link } from 'react-router-dom';
import './ProjektKort.css';

function ProjektKort({ id, titel, beskrivning, teknik, bild, lank }) {
  const innehall = (
    <>
      <img className="projekt-bild" src={bild} alt={lank ? "" : titel} />
      <h3>{titel}</h3>
      <p>{beskrivning}</p>
      <span className="teknik">{teknik}</span>
      {lank ? (
        <span className="projekt-las-mer">Läs mer</span>
      ) : (
        <Link className="projekt-las-mer" to={`/projekt/${id}`}>
          Läs mer
        </Link>
      )}
    </>
  );

  if (lank) {
    return (
      <Link className="projekt-kort projekt-kort-lank" to={lank}>
        {innehall}
      </Link>
    );
  }

  return <article className="projekt-kort">{innehall}</article>;
}

export default ProjektKort;
