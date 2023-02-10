import "./App.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Header from "./Components/Header/Header";
import Propert from "./Components/Cards/CardsLogement/Propert";
import CardsEmploi from "./Components/Cards/CardsEmploi/CardsEmploi";
import CardsAide from "./Components/Cards/CardsAide/CardsAide";

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <main>
      <Header />

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
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
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-Carousel"
        >
          <motion.div className="item">
            <CardsEmploi className="emploi"/>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-Carousel"
        >
          <motion.div className="item">
            <CardsAide className="aide"/>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default App;
