import React, {useState} from "react";
import Previous from "../../../Components/Boutons/Previous/Previous";
import "./SettingProfil.css";

export default function SettingProfil() {


  const [selected, setselected] =useState(null)

  const toggle = (i) => {
    if(selected === i){
        return setselected(null)
    }

    setselected(i)
  }


  return (
    <div className="wrapper">
      <div className="accordion">

      <Previous />
      <h3 className="titre">Réglage</h3>
        
      {data.map((itemSetting, i) => (
          <div className="item-setting">
            <div className="titre-setting" onClick={() => toggle(i)} >
              <h3>{itemSetting.title}</h3>
              <span className={`show${selected === i ? "-low" : "-more"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="45"
                  viewBox="0 0 45.105 57.242"
                >
                  <defs>
                    <filter
                      id="Tracé_483"
                      x="0"
                      y="0"
                      width="45.105"
                      height="57.242"
                      filterUnits="userSpaceOnUse"
                    >
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feFlood flood-opacity="0.161" />
                      <feComposite operator="in" in2="blur" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <g
                    transform="matrix(1, 0, 0, 1, 0, 0)"
                    filter="url(#Tracé_483)"
                  >
                    <path
                      id="Tracé_483-2"
                      data-name="Tracé 483"
                      d="M.2,0,11.484,11.4,0,23"
                      transform="translate(17.12 14.12)"
                      fill="none"
                      stroke="#333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <div className={`content-setting ${selected === i ? "show" : ""}`}>
              <p>{itemSetting.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


const data = [
    {
      title: "Compte",
      subTitle: "Change Password",
    },
    {
      title: "Poilitique de Confidentialités",
      subTitle: "En savoir plus",
    },
    {
      title: "Termes et Conditions",
      subTitle: "En savoir plus",
    },
    {
      title: "Déconnection",
      subTitle: "Se déconnecter",
    },
  ];
