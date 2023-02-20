import React from "react";
import { Fragment } from "react";
import "./Profil.css";

export default function Profil() {
  return (
    <Fragment>
      <div className="profil">
        <h3>Mon Profil</h3>
        <div class="circular--portrait">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              width={"100%"}
              height={"100%"}
              alt="sdv"
            />
          </div>
      </div>
    </Fragment>
  );
}
