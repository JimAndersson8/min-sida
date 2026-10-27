import './Knapp.css';
import { Link } from 'react-router-dom';

// Adresser som börjar med "/" är interna sidor i appen och går via Link (utan omladdning).
// Övriga adresser, t.ex. "#kontakt" eller "https://...", går via en vanlig <a>.
function Knapp({ text, lank }) {
  if (lank.startsWith('/')) {
    return (
      <Link className="knapp" to={lank}>
        {text}
      </Link>
    );
  }

  return (
    <a className="knapp" href={lank}>
      {text}
    </a>
  );
}

export default Knapp;
