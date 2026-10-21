import Toggle from '../components/Toggle';
import './OmMig.css';

export default function OmMig() {
  return (
    <section id="om-mig" className="omMig">
      <div className="omMig-text">
        <h2 className="rubrik">Om mig</h2>
        <p className="text">
          Hej! Jag heter Jim och studerar webbutveckling. Jag älskar att skapa
          snygga och användarvänliga webbsidor. Just nu lär jag mig React och
          bygger min första portfoliosida.
        </p>
        <Toggle>
          <p className="text">
            Jag gillar att kombinera teknik med kreativitet. Jag är nyfiken på
            AI som körs lokalt på egen dator, och jag tycker om att designa
            enkla och tydliga gränssnitt. När jag inte kodar lyssnar jag på
            musik eller testar nya idéer.
          </p>
        </Toggle>
      </div>
      <div className="omMig-intressen">
        <h3 className="underrubrik">Mina intressen</h3>
        <ul className="lista">
          <li>Local AI</li>
          <li>Design</li>
          <li>Musik</li>
        </ul>
      </div>
    </section>
  );
}
