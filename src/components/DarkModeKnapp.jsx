import { useState, useEffect } from 'react';
import './DarkModeKnapp.css';

function DarkModeKnapp() {
  const [morkt, setMorkt] = useState(false);

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
