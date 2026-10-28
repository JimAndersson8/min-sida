import "./ProjektUtdrag.css";
import Knapp from "./Knapp";
import bild from "../assets/minaprojekt.jpg";

function ProjektUtdrag() {
  return (
    <section className="projekt-utdrag" aria-labelledby="utdrag-titel">
      <img className="projekt-utdrag-bild" src={bild} alt="Projektbild" />
      <div className="projekt-utdrag-text">
        <h2 id="utdrag-titel">Mina projekt</h2>
        <p>
          Här är ett urval av det jag har byggt. Min första sida var skriven i
          HTML och CSS, och den här sidan är byggd i React.
        </p>
        <Knapp text="Se alla projekt" lank="/projekt" />
      </div>
    </section>
  );
}

export default ProjektUtdrag;
