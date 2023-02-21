import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ListeLogement from "./Pages/Logement/ListeLogement/ListeLogement";
import DetailLogement from "./Pages/Logement/DetailLogement/DetailLogement";
import SecteurActivite from "./Pages/Emploi/SecteurActivite/SecteurActivite";
import DetailEmploi from "./Pages/Emploi//DetailEmploi/DetailEmploi";
import ListeEmploi from "./Pages/Emploi/ListeEmploi/ListeEmploi";
import ListeAide from "./Pages/Aide/ListeAide/ListeAide";
import DetailAide from "./Pages/Aide/DetailAide/DetailAide";
import Profil from "./Pages/Profil/Profil";
import UpdateData from "./Pages/Profil/UpdateData/UpdateData"
import Accueil from "./Pages/Accueil/Accueil";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/logements" element={<ListeLogement />} />
        <Route path="/logements/logements-d" element={<DetailLogement />} />
        <Route path="/emplois-secteurs" element={<SecteurActivite />} />
        <Route path="/emplois-secteurs/emplois" element={<ListeEmploi />} />
        <Route path="/emplois-secteurs/emplois/emplois-d" element={<DetailEmploi />} />
        <Route path="/aides" element={<ListeAide />} />
        <Route path="/aides/aides-d" element={<DetailAide />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/update" element={<UpdateData />} />
      </Routes>
    </Fragment>
  );
}

export default App;
