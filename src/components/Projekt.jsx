import './Projekt.css';
import ProjektKort from './ProjektKort';


function Projekt() {
  return (
    <section id="projekt" className="projekt">
      <h2>Mina projekt</h2>
      <ProjektKort titel="Min sida" beskrivning="Sidan du tittar på just nu." teknik="React" />
      <ProjektKort titel="Statisk sida" beskrivning="Min första sida i HTML och CSS." teknik="HTML/CSS" />
      <ProjektKort titel="Kommer snart" beskrivning="Mitt nästa projekt." teknik="React" />
    </section>
  );
}

export default Projekt;