import { Link } from "react-router-dom";
import "./EjHittad.css";

function EjHittad() {
  return (
    <main className="ej-hittad">
      <h1>404</h1>
      <p>Sidan du letar efter finns inte.</p>
      <img
        className="ej-hittad-bild"
        src="/404.svg"
        alt="Illustration för sidan som inte hittades"
      />
      <Link className="ej-hittad-lank" to="/">Tillbaka till startsidan</Link>
    </main>
  );
}

export default EjHittad;
