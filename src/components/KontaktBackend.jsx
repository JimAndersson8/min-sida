import { useState } from 'react';
import './KontaktForm.css';

const SERVER_URL = "http://localhost:3001/kontakt";

function KontaktBackend() {
  // Ett state per fält. Startvärdet är en tom sträng.
  const [namn, setNamn] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");

  // svar: texten från servern. fel: texten i felrutan (tom = inget fel).
  const [svar, setSvar] = useState("");
  const [fel, setFel] = useState("");
  const [skickar, setSkickar] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault(); // stoppa sidomladdning

    setFel("");
    setSvar("");
    setSkickar(true);

    try {
      const response = await fetch(SERVER_URL, {
        method: "POST",
        // Content-Type talar om för servern att kroppen är JSON.
        headers: { "Content-Type": "application/json" },
        // Fältet "meddelande" i formuläret skickas som "text", som servern väntar sig.
        body: JSON.stringify({ namn, email, text: meddelande }),
      });

      // fetch kastar inte fel för 400, så vi läser svaret och kollar ok själva.
      const data = await response.json();

      if (!response.ok) {
        // Serverns egen feltext visas, t.ex. när namn eller text saknas.
        setFel(data.fel ?? "Servern svarade med " + response.status);
        return;
      }

      setSvar(data.meddelande);
      setNamn("");
      setEmail("");
      setMeddelande("");
    } catch {
      setFel("Får inget svar från servern. Är den igång?");
    } finally {
      setSkickar(false);
    }
  }

  return (
    <section className="kontakt">

      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p>Har du en fråga? Skriv ett meddelande!</p>
      </div>

      {/* Höger kolumn: formuläret */}
      {/* noValidate: stänger av webbläsarens egen kontroll så att serverns fel visas */}
      <form className="kontakt-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="api-namn">Namn</label>
        <input
          type="text"
          id="api-namn"
          name="namn"
          value={namn}
          onChange={(e) => setNamn(e.target.value)}
        />

        <label htmlFor="api-epost">E-post</label>
        <input
          type="email"
          id="api-epost"
          name="epost"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="api-meddelande">Meddelande</label>
        <textarea
          id="api-meddelande"
          name="meddelande"
          rows="5"
          value={meddelande}
          onChange={(e) => setMeddelande(e.target.value)}
        ></textarea>

        {/* Knappen är alltid aktiv, så att serverns validering kan demonstreras. */}
        <button type="submit" disabled={skickar}>
          {skickar ? "Skickar..." : "Skicka"}
        </button>

        {fel && <p className="meddelande fel">{fel}</p>}
        {svar && <p className="meddelande tack">{svar}</p>}
      </form>

    </section>
  );
}

export default KontaktBackend;
