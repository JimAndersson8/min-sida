import { Link, useParams } from "react-router-dom";
import projektLista from "../data/projekt.json";
import "./ProjektDetalj.css";

function ProjektDetalj() {
  // Läs id:t från adressen. Parametrar från URL:en är text.
  const { id } = useParams();

  // Hitta projektet med samma id. Number gör om URL-texten till ett tal.
  const projekt = projektLista.find((p) => p.id === Number(id));

  // Om id:t inte finns i projektlistan visas ett meddelande och en länk tillbaka.
  if (!projekt) {
    return (
      <section className="projekt-detalj">
        <p>
          Projektet finns inte. <Link to="/">Till startsidan</Link>
        </p>
      </section>
    );
  }

  // Plocka ut de värden sidan ska visa ur projektobjektet.
  const { titel, text, teknik } = projekt;

  return (
    <section className="projekt-detalj">
      <h2>{titel}</h2>
      <p>{text}</p>
      <h3>Teknik</h3>
      <ul>
        {teknik.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <Link to="/projekt">Till alla projekt</Link>
    </section>
  );
}

export default ProjektDetalj;
