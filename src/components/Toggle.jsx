import { useState } from 'react';
import './Toggle.css';

function Toggle({ children }) {
  const [visas, setVisas] = useState(false);

  return (
    <div>
      <button
        className="toggle-knapp knapp"
        aria-expanded={visas}
        onClick={() => setVisas(!visas)}
      >
        {visas ? 'Visa mindre' : 'Visa mer'}
      </button>
      {visas && children}
    </div>
  );
}

export default Toggle;
