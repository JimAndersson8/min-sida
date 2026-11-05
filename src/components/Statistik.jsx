import projektLista from "../data/projekt.json";
import "./Statistik.css";

function Statistik() {
  // Börja med en tom räknartavla och gå igenom projekten ett i taget.
  const antalPerTeknik = projektLista.reduce((summa, projekt) => {
    // Varje projekt kan ha flera tekniker, så räkna dem var för sig.
    for (const teknik of projekt.teknik) {
      summa[teknik] = (summa[teknik] || 0) + 1;
    }
    return summa;
  }, {});

  // Gör räknarobjektet till par i en array, sortera flest först och sedan A–Ö.
  const sorteradStatistik = Object.entries(antalPerTeknik).sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0], "sv");
  });

  return (
    <ul className="statistik-lista">
      {sorteradStatistik.map(([teknik, antal]) => (
        <li key={teknik}>
          <span>{teknik}</span>
          <span>{antal} projekt</span>
        </li>
      ))}
    </ul>
  );
}

export default Statistik;
