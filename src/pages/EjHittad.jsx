import { Link } from "react-router-dom";
import bild from "../assets/404image1.png";
import "./EjHittad.css";

function EjHittad() {
  return (
    <main className="ej-hittad">
      <img
        className="ej-hittad-bild"
        src={bild}
        alt="Illustration av en robot som letar efter en sida som inte hittas, med felkod 404"
      />
      <Link className="ej-hittad-lank" to="/">Till startsidan</Link>
    </main>
  );
}

export default EjHittad;
