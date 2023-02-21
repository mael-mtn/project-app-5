import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Propert from "../../Cards/CardsLogement/Propert";

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
      <div className="left">
        <h3>Logements</h3>
        <Link to="/logements">
          <span>Voir plus (nb)</span>
        </Link>
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
  );
}
