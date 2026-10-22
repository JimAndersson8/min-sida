import { useState, useEffect } from 'react';
import './DarkModeKnapp.css';

function DarkModeKnapp() {
  // Startvärdet läses från localStorage. Funktionen körs bara vid första renderingen.
  const [morkt, setMorkt] = useState(() => localStorage.getItem('morkt') === 'true');

  // Sparar valet varje gång morkt ändras, så att det finns kvar efter omladdning.
  useEffect(() => {
    localStorage.setItem('morkt', morkt);
  }, [morkt]);

  // Körs efter varje render där morkt ändras. Sätter/tar bort klassen "dark" på <html>.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', morkt);
  }, [morkt]);

  return (
    <button className="dark-mode-knapp" onClick={() => setMorkt(!morkt)}>
      {morkt ? 'Ljust läge' : 'Mörkt läge'}
    </button>
  );
}

export default DarkModeKnapp;
