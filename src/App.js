import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ListeLogement from "./Pages/Logement/ListeLogement/ListeLogement";
import ListeEmploi from "./Pages/Emploi/ListeEmploi/ListeEmploi";
import ListeAide from "./Pages/Aide/ListeAide/ListeAide";
import Profil from "./Pages/Profil/Profil";
import Accueil from "./Pages/Accueil/Accueil";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/logements" element={<ListeLogement />} />
        <Route path="/emplois" element={<ListeEmploi />} />
        <Route path="/aides" element={<ListeAide />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Fragment>
  );
}

export default App;
