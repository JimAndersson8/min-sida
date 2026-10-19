import './Header.css';
import Knapp from './Knapp';

function Header({ namn, titel }) {
  return (
    <header className="header">
      <div className="header-text">
        <h1>{namn}</h1>
        <p>{titel}</p>
      </div>
      <div className="header-knappar">
        <Knapp text="Se mina projekt" lank="#projekt" />
        <Knapp text="Kontakta mig" lank="#kontakt" />
      </div>
    </header>
  );
}

export default Header;