import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjektUtdrag from "../components/ProjektUtdrag";
import GitHubRepon from "../components/GitHubRepon";
import Vader from "../components/Vader";
import "./Hem.css";

function Hem() {
  return (
    <>
      <Header namn="Jim" />
      <Hero />
      <ProjektUtdrag />
      <div className="github-vader">
        <GitHubRepon />
        <Vader />
      </div>
    </>
  );
}

export default Hem;
