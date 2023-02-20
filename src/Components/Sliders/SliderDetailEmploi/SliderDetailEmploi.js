import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardsDetailEmploi from "../../../Pages/Emploi/components/CardsDetailEmploi/CardsDetailEmploi";
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
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-Carousel"
      >
        <motion.div className="item">
        <CardsDetailEmploi/>
        <CardsDetailEmploi/>
        <CardsDetailEmploi/>
        <CardsDetailEmploi/>
        <CardsDetailEmploi/>
        <CardsDetailEmploi/>
        <CardsDetailEmploi/>
        <CardsDetailEmploi/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
