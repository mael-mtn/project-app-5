import React, { Fragment } from "react";
import Previous from "../../../Components/Boutons/Previous/Previous";
import "./UpdateData.css";

export default function UpdateData() {
  return (
    <Fragment>
      <div className="profil">
        <Previous />
        <h3>Données personnelles </h3>
        <div class="circular--portrait">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            width={"100%"}
            height={"100%"}
            alt="Photos de profil"
          />
        </div>
      </div>

      <form>
        <div className="input-update">
          <svg
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 11.7141C12.4984 11.7141 14.9286 9.28394 14.9286 6.2855C14.9286 3.28707 12.4984 0.856934 9.5 0.856934C6.50156 0.856934 4.07143 3.28707 4.07143 6.2855C4.07143 9.28394 6.50156 11.7141 9.5 11.7141ZM13.3 13.0712H12.5917C11.6502 13.5038 10.6027 13.7498 9.5 13.7498C8.39732 13.7498 7.35402 13.5038 6.40826 13.0712H5.7C2.55312 13.0712 0 15.6243 0 18.7712V20.5355C0 21.6594 0.91183 22.5712 2.03571 22.5712H16.9643C18.0882 22.5712 19 21.6594 19 20.5355V18.7712C19 15.6243 16.4469 13.0712 13.3 13.0712Z"
              fill="black"
            />
          </svg>
          <input
            id="updateQueryInput"
            type="text"
            name="updateQueryInput"
            placeholder="Nom"
          />
        </div>

        <div className="input-update">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 0C1.00781 0 0 1.00781 0 2.25C0 2.95781 0.332813 3.62344 0.9 4.05L11.1 11.7C11.6344 12.0984 12.3656 12.0984 12.9 11.7L23.1 4.05C23.6672 3.62344 24 2.95781 24 2.25C24 1.00781 22.9922 0 21.75 0H2.25ZM0 5.25V15C0 16.6547 1.34531 18 3 18H21C22.6547 18 24 16.6547 24 15V5.25L13.8 12.9C12.7312 13.7016 11.2688 13.7016 10.2 12.9L0 5.25Z"
              fill="black"
            />
          </svg>

          <input
            id="updateQueryInput"
            type="text"
            name="updateQueryInput"
            placeholder="Email"
          />
        </div>

        <div className="input-update">
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.42857 6.75V9H13.5714V6.75C13.5714 4.67812 11.9732 3 10 3C8.02679 3 6.42857 4.67812 6.42857 6.75ZM3.57143 9V6.75C3.57143 3.02344 6.45089 0 10 0C13.5491 0 16.4286 3.02344 16.4286 6.75V9H17.1429C18.7188 9 20 10.3453 20 12V21C20 22.6547 18.7188 24 17.1429 24H2.85714C1.28125 24 0 22.6547 0 21V12C0 10.3453 1.28125 9 2.85714 9H3.57143Z"
              fill="black"
            />
          </svg>

          <input
            id="updateQueryInput"
            type="text"
            name="updateQueryInput"
            placeholder="Mot de passe"
          />
        </div>

        <div className="input-update">
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.42857 6.75V9H13.5714V6.75C13.5714 4.67812 11.9732 3 10 3C8.02679 3 6.42857 4.67812 6.42857 6.75ZM3.57143 9V6.75C3.57143 3.02344 6.45089 0 10 0C13.5491 0 16.4286 3.02344 16.4286 6.75V9H17.1429C18.7188 9 20 10.3453 20 12V21C20 22.6547 18.7188 24 17.1429 24H2.85714C1.28125 24 0 22.6547 0 21V12C0 10.3453 1.28125 9 2.85714 9H3.57143Z"
              fill="black"
            />
          </svg>

          <input
            id="updateQueryInput"
            type="text"
            name="updateQueryInput"
            placeholder="Nouveau mot de passe"
          />
        </div>

        <div className="submit-update">
          <button className="btn-primaire">Sauvegarder</button>
          <button className="btn-tertiare">Annuler</button>
        </div>
      </form>
    </Fragment>
  );
}
