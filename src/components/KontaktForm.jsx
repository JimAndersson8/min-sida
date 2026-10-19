import './KontaktForm.css';

function KontaktForm() {
  return (
    <section className="kontakt">

      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p>Har du en fråga? Skriv ett meddelande!</p>
      </div>

      {/* Höger kolumn: formuläret */}
      <form className="kontakt-form">
        <label htmlFor="namn">Namn</label>
        <input type="text" id="namn" name="namn" />

        <label htmlFor="epost">E-post</label>
        <input type="email" id="epost" name="epost" />

        <label htmlFor="meddelande">Meddelande</label>
        <textarea id="meddelande" name="meddelande" rows="5"></textarea>

        <button type="submit">Skicka</button>
      </form>

    </section>
  );
}

export default KontaktForm;