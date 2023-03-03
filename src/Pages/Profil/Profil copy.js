import React from "react";
import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Profil.css";

export default function Profil() {
  const [showLinks, setShowLinks] = useState(null);

  const handleAddBlue = () => {
    setShowLinks(!showLinks);
  };

  const [selected, setselected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setselected(null);
    }

    setselected(i);
  };

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
        <h3>John Williams</h3>
        <p>john.williams@gmail.com</p>
      </div>
      <div className="button">
        <Link to="/Profil/update">
          <button className="btn-primaire">Modifier</button>
        </Link>
        <Link to="/Profil/Settings">
          <button className="btn-secondaire">Réglage</button>
        </Link>
      </div>
      <div className="wishlist">
        <div className="titre-wishlist">
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 21.259V2.15625C1 1.51766 1.51766 1 2.15625 1H15.0938C15.7323 1 16.25 1.51766 16.25 2.15625V21.259L9.12887 17.105L8.625 16.811L8.12113 17.105L1 21.259Z"
              fill="#FFBD1D"
              stroke="#FFBD1D"
              stroke-width="2"
            />
          </svg>
          <h3>Favoris</h3>
        </div>

        {data.map((wishlist, i) => (
          <div className="wishlist-content">
            <div onClick={() => toggle(i)}>
              <Link to={`/profil/profil-${wishlist.btnTitle}`}>
                <button
                  onClick={handleAddBlue}
                  className={`btn-portfolio${
                    selected === i ? "-active" : "-inactive"
                  }`}
                >
                  {wishlist.btnTitle}
                </button>
              </Link>
              <div
                className={`content-setting ${selected === i ? "show" : ""}`}
              >
                <Outlet />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

const data = [
  {
    btnTitle: "logements",
  },
  {
    btnTitle: "aides",
  },
  {
    btnTitle: "emplois",
  },
];
