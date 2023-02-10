import React from "react";
import { useState } from "react";
import "./Favoris.css";

export default function Favoris() {
  const [addYellow, setAddYellow] = useState("#FFBD1D");

  const handleAddYellow = () => {
    setAddYellow(!addYellow);
  };

  return (
    <button onClick={handleAddYellow} className="property-tag">
      <svg
        width="18"
        height="23"
        viewBox="0 0 18 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 21.259V2.15625C1 1.51766 1.51766 1 2.15625 1H15.0938C15.7323 1 16.25 1.51766 16.25 2.15625V21.259L9.12887 17.105L8.625 16.811L8.12113 17.105L1 21.259Z"
          fill={`${addYellow ? "none" : "#FFBD1D"}`}
          stroke={`${addYellow ? "white" : "#FFBD1D"}`}
          stroke-width="2"
        />
      </svg>
    </button>
  );
}
