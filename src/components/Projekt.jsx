import './Projekt.css';
import ProjektKort from './ProjektKort';
import bild1 from '../assets/nature1.jpg';
import bild2 from '../assets/natur2.jpg';
import bild3 from '../assets/natur3.jpg';

function Projekt() {
  return (
    <section id="projekt" className="projekt">
      <h2>Mina projekt</h2>
      <ProjektKort bild={bild1} titel="Min sida" beskrivning="Sidan du tittar på just nu." teknik="React" />
      <ProjektKort bild={bild2} titel="Statisk sida" beskrivning="Min första sida i HTML och CSS." teknik="HTML/CSS" />
      <ProjektKort bild={bild3} titel="Kommer snart" beskrivning="Mitt nästa projekt." teknik="React" />
    </section>
  );
}

export default Projekt;
