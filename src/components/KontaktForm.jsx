import { useState } from 'react';
import './KontaktForm.css';

function KontaktForm() {
  // Ett state per fält. Startvärdet är en tom sträng.
  const [namn, setNamn] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");

  // skickat: visa tackmeddelandet. fel: texten i felrutan (tom = inget fel).
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stoppa sidomladdning

    // Validering: tomma fält först, sedan @ i e-posten.
    if (!namn.trim() || !email.trim() || !meddelande.trim()) {
      setFel("Fyll i alla fält.");
      setSkickat(false);
      return; // avbryt, resten av funktionen körs inte
    }
    if (!email.includes("@")) {
      setFel("E-postadressen måste innehålla @.");
      setSkickat(false);
      return;
    }

    setFel("");
    console.log(namn, email, meddelande);
    setSkickat(true);
    setEmail("");
    setMeddelande("");
  }

  return (
    <section className="kontakt">

      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p>Har du en fråga? Skriv ett meddelande!</p>
      </div>

      {/* Höger kolumn: formuläret */}
      {/* noValidate: stänger av webbläsarens egen e-postkontroll så att vår felruta visas */}
      <form className="kontakt-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="namn">Namn</label>
        <input
          type="text"
          id="namn"
          name="namn"
          value={namn}
          onChange={(e) => setNamn(e.target.value)}
        />

        <label htmlFor="epost">E-post</label>
        <input
          type="email"
          id="epost"
          name="epost"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="meddelande">Meddelande</label>
        <textarea
          id="meddelande"
          name="meddelande"
          rows="5"
          value={meddelande}
          onChange={(e) => setMeddelande(e.target.value)}
        ></textarea>

        <button type="submit">Skicka</button>

        {fel && <p className="meddelande fel">{fel}</p>}
        {skickat && <p className="meddelande tack">Tack för ditt meddelande {namn}, jag hör av mig!</p>}
      </form>

    </section>
  );
}

export default KontaktForm;
