import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardsEmploi from "../../Cards/CardsEmploi/CardsEmploi";

export default function SliderDetailLogement() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="left-emploi">
        <h3>Emplois</h3>
        <Link to="/emplois-secteurs">
          <span>Voir plus (7)</span>
        </Link>
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
  );
}
