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
    <button className="dark-mode-knapp" onClick={() => setMorkt(!morkt)} aria-label={morkt ? 'Ljust läge' : 'Mörkt läge'} title={morkt ? 'Ljust läge' : 'Mörkt läge'}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill={morkt ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

export default DarkModeKnapp;
