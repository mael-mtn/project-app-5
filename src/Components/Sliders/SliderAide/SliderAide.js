import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardsAide from "../../Cards/CardsAide/CardsAide";

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
      <div className="left-aide">
        <h3>Aides</h3>
        <Link to="/aides">
          <span>Voir plus (nb)</span>
        </Link>
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
  );
}
