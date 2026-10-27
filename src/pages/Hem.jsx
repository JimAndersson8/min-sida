import Header from "../components/Header";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Hem() {
  return (
    <>
      <Header namn="Jim" />
      <Hero />
      <p><Link to="/projekt">Se alla projekt</Link></p>
    </>
  );
}

export default Hem;
