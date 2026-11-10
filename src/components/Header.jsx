import './Header.css';
import Knapp from './Knapp';
import { halsning } from "../utils/text";

function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <h1>{halsning()}, välkommen till min sida</h1>
      </div>
      <div className="header-knappar">
        <Knapp text="Se mina projekt" lank="/projekt" />
        <Knapp text="Kontakta mig" lank="#kontakt" />
      </div>
    </header>
  );
}

export default Header;