import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ListeLogement from "./Pages/Logement/ListeLogement/ListeLogement";
import DetailLogement from "./Pages/Logement/DetailLogement/DetailLogement";
import ListeEmploi from "./Pages/Emploi/ListeEmploi/ListeEmploi";
import ListeAide from "./Pages/Aide/ListeAide/ListeAide";
import DetailAide from "./Pages/Aide/DetailAide/DetailAide";
import Profil from "./Pages/Profil/Profil";
import Accueil from "./Pages/Accueil/Accueil";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/logements" element={<ListeLogement />} />
        <Route path="/logements/logements-d" element={<DetailLogement />} />
        <Route path="/emplois" element={<ListeEmploi />} />
        <Route path="/emplois/emplois-d" element={<DetailAide />} />
        <Route path="/aides" element={<ListeAide />} />
        <Route path="/aides/aides-d" element={<DetailAide />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Fragment>
  );
}

export default App;
