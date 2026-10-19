import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KontaktForm from "./components/KontaktForm.jsx";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/kontakt" element={<KontaktForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
