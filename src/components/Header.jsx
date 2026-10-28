import './Header.css';
import Knapp from './Knapp';

function Header({ namn }) {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Hej, jag heter {namn}!</h1>
      </div>
      <div className="header-knappar">
        <Knapp text="Se mina projekt" lank="/projekt" />
        <Knapp text="Kontakta mig" lank="#kontakt" />
      </div>
    </header>
  );
}

export default Header;