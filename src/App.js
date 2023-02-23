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
import UpdateData from "./Pages/Profil/UpdateData/UpdateData";
import Accueil from "./Pages/Accueil/Accueil";
import SettingProfil from "./Pages/Profil/SettingProfil/SettingProfil";
import AuthForm from "./Pages/Auth/Connexion/AuthForm";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/logements" element={<ListeLogement />} />
        <Route path="/logements/logements-d" element={<DetailLogement />} />
        <Route path="/emplois-secteurs" element={<SecteurActivite />} />
        <Route path="/emplois-secteurs/emplois" element={<ListeEmploi />} />
        <Route
          path="/emplois-secteurs/emplois/emplois-d"
          element={<DetailEmploi />}
        />
        <Route path="/aides" element={<ListeAide />} />
        <Route path="/aides/aides-d" element={<DetailAide />} />
        <Route path="/profil" element={<Profil />}>
          <Route path="/profil-logements" element={<ListeLogement />} />
          <Route path="/profil-emplois" element={<ListeEmploi />} />
          <Route path="/profil-aides" element={<ListeAide />} />
        </Route>
        <Route path="/profil/update" element={<UpdateData />} />
        <Route path="/profil/settings" element={<SettingProfil />} />
        <Route path="/" element={<AuthForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Fragment>
  );
}

export default App;
