import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjektUtdrag from "../components/ProjektUtdrag";
import GitHubRepon from "../components/GitHubRepon";
import Vader from "../components/Vader";
import Todo from "../components/Todo";
import { fornamn } from "../data/installningar";
import "./Hem.css";

function Hem() {
  return (
    <>
      <Header namn={fornamn} />
      <Hero />
      <ProjektUtdrag />
      <div className="github-vader">
        <GitHubRepon />
        <Vader />
      </div>
      <Todo />
    </>
  );
}

export default Hem;
