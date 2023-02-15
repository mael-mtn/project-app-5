import "./Accueil.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, Fragment } from "react";
import Propert from "../../Components/Cards/CardsLogement/Propert";
import CardsEmploi from "../../Components/Cards/CardsEmploi/CardsEmploi";
import CardsAide from "../../Components/Cards/CardsAide/CardsAide";
import SearchBar from "../../Components/searchBar/SearchBar";

function Accueil() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Fragment>
      <section className="profil">
        <div className="presentation">
          <div class="circular--portrait">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              width={"100%"}
              height={"100%"}
              alt="sdv"
            />
          </div>
          <span className="name">Hello John !</span>
        </div>
        <div className="searchBar">
          <p>Voici les dernières nouveautés !</p>
          <SearchBar />
        </div>
      </section>

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="left">
          <h3>Logements</h3>
          <span>Voir plus (nb)</span>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-Carousel"
        >
          <motion.div className="item">
            <Propert className="propert" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="left-emploi">
          <h3>Emplois</h3>
          <span>Voir plus (nb)</span>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-Carousel"
        >
          <motion.div className="item">
            <CardsEmploi className="emploi" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="left-aide">
          <h3>Aides</h3>
          <span>Voir plus (nb)</span>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-Carousel"
        >
          <motion.div className="item">
            <CardsAide className="aide" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
}

export default Accueil;
