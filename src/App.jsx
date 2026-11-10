import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KontaktForm from "./components/KontaktForm.jsx";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Projektlista from "./pages/Projektlista";
import ProjektDetalj from "./pages/ProjektDetalj";
import EjHittad from "./pages/EjHittad";
import MinServer from "./components/MinServer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/projekt" element={<Projektlista />} />
        <Route path="/projekt/:id" element={<ProjektDetalj />} />
        <Route path="/kontakt" element={<KontaktForm />} />
        <Route path="/server" element={<MinServer />} />
        <Route path="*" element={<EjHittad />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
