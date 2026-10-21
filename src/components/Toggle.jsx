import { useState } from 'react';

function Toggle({ children }) {
  const [visas, setVisas] = useState(false);

  return (
    <div>
      <button onClick={() => setVisas(!visas)}>
        {visas ? 'Visa mindre' : 'Visa mer'}
      </button>
      {visas && children}
    </div>
  );
}

export default Toggle;
