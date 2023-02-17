import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardsDetailAide from "../../../Pages/Aide/components/CardsDetailAide/CardsDetailAide";
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
        <CardsDetailAide/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
