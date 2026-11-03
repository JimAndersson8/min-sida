import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjektUtdrag from "../components/ProjektUtdrag";
import GitHubRepon from "../components/GitHubRepon";
import Vader from "../components/Vader";

function Hem() {
  return (
    <>
      <Header namn="Jim" />
      <Hero />
      <ProjektUtdrag />
      <GitHubRepon />
      <Vader />
    </>
  );
}

export default Hem;
