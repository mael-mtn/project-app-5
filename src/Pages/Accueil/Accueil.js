import "./Accueil.css";
import { Fragment } from "react";
import SliderLogement from "../../Components/Sliders/SliderLogement/SliderLogement";
import SliderEmploi from "../../Components/Sliders/SliderEmploi/SliderEmploi";
import SliderAide from "../../Components/Sliders/SliderAide/SliderAide";
import SearchBar from "../../Components/searchBar/SearchBar";

function Accueil() {
 

  return (
    <Fragment>
      <section className="profil-accueil">
        <div className="presentation">
          <div class="circular--portrait">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              width={"100%"}
              height={"100%"}
              alt="photos de profil"
            />
          </div>
          <span className="name">Bonjour John !</span>
        </div>
        <div className="searchBar">
          <p>Voici les dernières nouveautés !</p>
          <SearchBar />
        </div>
      </section>

      <SliderLogement/>

      <SliderEmploi/>

      <SliderAide/>
    </Fragment>
  );
}

export default Accueil;
