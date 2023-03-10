import React from "react";
import CardsListeEmploi from "../components/CardsListeEmploi/CardsListeEmploi";
import "./ListeEmploi.css";

export default function ListeEmploi() {
  return (
    <div className="liste-emplois">
      <div className="recherche">
        <div className="reglage">
          <button className="btn-reglage">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18.75C0 17.9203 0.670312 17.25 1.5 17.25H4.06406C4.64062 15.9234 5.9625 15 7.5 15C9.0375 15 10.3594 15.9234 10.9359 17.25H22.5C23.3297 17.25 24 17.9203 24 18.75C24 19.5797 23.3297 20.25 22.5 20.25H10.9359C10.3594 21.5766 9.0375 22.5 7.5 22.5C5.9625 22.5 4.64062 21.5766 4.06406 20.25H1.5C0.670312 20.25 0 19.5797 0 18.75ZM9 18.75C9 17.9203 8.32969 17.25 7.5 17.25C6.67031 17.25 6 17.9203 6 18.75C6 19.5797 6.67031 20.25 7.5 20.25C8.32969 20.25 9 19.5797 9 18.75ZM18 11.25C18 10.4203 17.3297 9.75 16.5 9.75C15.6703 9.75 15 10.4203 15 11.25C15 12.0797 15.6703 12.75 16.5 12.75C17.3297 12.75 18 12.0797 18 11.25ZM16.5 7.5C18.0375 7.5 19.3594 8.42344 19.9359 9.75H22.5C23.3297 9.75 24 10.4203 24 11.25C24 12.0797 23.3297 12.75 22.5 12.75H19.9359C19.3594 14.0766 18.0375 15 16.5 15C14.9625 15 13.6406 14.0766 13.0641 12.75H1.5C0.670312 12.75 0 12.0797 0 11.25C0 10.4203 0.670312 9.75 1.5 9.75H13.0641C13.6406 8.42344 14.9625 7.5 16.5 7.5ZM9 2.25C8.17031 2.25 7.5 2.92031 7.5 3.75C7.5 4.57969 8.17031 5.25 9 5.25C9.82969 5.25 10.5 4.57969 10.5 3.75C10.5 2.92031 9.82969 2.25 9 2.25ZM12.4359 2.25H22.5C23.3297 2.25 24 2.92031 24 3.75C24 4.57969 23.3297 5.25 22.5 5.25H12.4359C11.8594 6.57656 10.5375 7.5 9 7.5C7.4625 7.5 6.14062 6.57656 5.56406 5.25H1.5C0.670312 5.25 0 4.57969 0 3.75C0 2.92031 0.670312 2.25 1.5 2.25H5.56406C6.14062 0.923438 7.4625 0 9 0C10.5375 0 11.8594 0.923438 12.4359 2.25Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="search">
          <input
            id="searchQueryInput"
            type="text"
            name="searchQueryInput"
            placeholder="Rechercher"
          />
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
            <svg width={"25px"} height={"23px"} viewBox="0 0 24 24">
              <path
                fill="#666666"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <h3 className="titre-liste">Emplois</h3>

      <CardsListeEmploi />
      <CardsListeEmploi />
      <CardsListeEmploi />
      <CardsListeEmploi />
      <CardsListeEmploi />
      <CardsListeEmploi />
      <CardsListeEmploi />
      <CardsListeEmploi />

    </div>
  );
}
