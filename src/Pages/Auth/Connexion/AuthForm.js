import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import "./AuthForm.css";

export default function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [data, setData] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  if (error) {
    console.log("true");
  } else {
    console.log("false");
  }

  const toggleAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Contôle input pas vide
    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError({
        title: "Un ou plusieurs champs sont vides",
        message: "Entrer votre mail et ou votre mot de passe",
      });
      return;
    }

    // Contôle validité email
    const regExEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

    if (!regExEmail(enteredEmail)) {
      setError({
        title: "Merci d'entrer une email valide",
        message: "Le format de l'email n'est pas valide",
      });
      return;
    }

    console.log(emailInputRef, passwordInputRef);

    //Pour se connecter pour récupérer le userId et le token d'auth

    let url;
    if (isLogin) {
      // Lien qui me permettra de me connecter à l'api ou la bdd
      url = "http://localhost/3000/api/authentification/login";
    } else {
      // Lien qui me permettra d'enregistrer un compte sur l'api ou la bdd
      url = "http://localhost/3000/api/authentification/login";
    }

    // async await function fetchHandler
    const fetchHandler = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
          }),
          headers: {
            "content-Type": "application/json",
          },
        });

        const dataResponse = await response.json();
        if (response.ok) {
          setData(dataResponse);
        } else {
          setError({
            title: "Echec de la connexion",
            message: "email ou mot de passe invalide",
          });
        }

        // Gérer l'erreur du compte déjà existant pour l'afficher fans la modal ErreorModal
        if (dataResponse && dataResponse.error) {
          setError({
            title: "Compte déjà existant",
            message: "Cette email ou le mot de passe est déjà utilisé",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchHandler();

    console.log(data);

    //Pour vider les champs apres envoie

    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  // Pour reset le state error
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal message={error.message} onConfirm={errorHandler} />}

      <div className="authform">
        <svg
          width="300"
          height="250"
          viewBox="0 0 139 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.3469 22.6715C37.3469 20.4164 35.4241 18.5891 33.0541 18.5891C31.1179 18.5891 29.4813 19.8058 28.9447 21.4815C28.6004 21.4058 28.2471 21.3612 27.876 21.3612C25.2959 21.3612 23.2032 23.3489 23.2032 25.8046C23.2032 26.1344 23.2434 26.4553 23.315 26.7628C22.0987 27.2887 21.2535 28.4519 21.2535 29.8068C21.2535 30.3861 21.41 30.9343 21.6828 31.4112C19.9344 32.7973 18.821 34.8786 18.821 37.2139C18.821 39.5492 19.9121 41.586 21.6292 42.9676C21.3922 43.4177 21.2535 43.9258 21.2535 44.465C21.2535 45.8333 22.121 47.0099 23.3597 47.5268C23.2613 47.8923 23.2032 48.2756 23.2032 48.6678C23.2032 51.1814 25.3451 53.2181 27.9878 53.2181C28.3813 53.2181 28.7569 53.1691 29.1191 53.0844C29.7854 54.5195 31.2923 55.5223 33.0496 55.5223C35.4196 55.5223 37.3424 53.695 37.3424 51.4399V22.6715H37.3469Z"
            fill="#3E3D40"
          />
          <path
            d="M47.0906 41.2652V39.2864C47.0906 38.5154 46.7105 38.1276 45.9548 38.1276H45.5478C44.81 38.1276 44.4389 38.5154 44.4389 39.2864V42.4908C44.4389 42.8518 44.5104 43.0925 44.6535 43.2173C44.7966 43.342 45.0336 43.5069 45.3556 43.703L47.815 45.0222C48.356 45.3298 48.7361 45.566 48.9642 45.7353C49.1877 45.9047 49.3666 46.1141 49.4918 46.3548C49.617 46.5955 49.6796 47.059 49.6796 47.7409V51.8634C49.6796 54.0338 48.6333 55.1213 46.545 55.1213H44.9486C42.8783 55.1213 41.8409 53.9358 41.8409 51.5648V50.5932H44.4344V51.645C44.4344 52.3982 44.8234 52.777 45.597 52.777H46.0576C46.7418 52.777 47.0861 52.3982 47.0861 51.645V48.3604C47.0861 47.9994 47.0145 47.7587 46.8714 47.6339C46.7284 47.5091 46.4914 47.3487 46.1694 47.1481L43.71 45.7754C43.1689 45.4902 42.7754 45.2451 42.534 45.049C42.2925 44.8529 42.1137 44.5944 42.0063 44.2824C41.899 43.9704 41.8454 43.5604 41.8454 43.0568V39.0992C41.8454 36.8931 42.8828 35.7878 44.9531 35.7878H46.5763C48.6467 35.7878 49.6841 36.8931 49.6841 39.0992V41.2697H47.0906V41.2652Z"
            fill="#3E3D40"
          />
          <path
            d="M59.7855 50.5976V51.8366C59.7855 54.0293 58.748 55.1213 56.6777 55.1213H55.0008C52.9305 55.1213 51.8931 54.0249 51.8931 51.8366V39.0725C51.8931 36.8797 52.9305 35.7878 55.0008 35.7878H56.6777C58.748 35.7878 59.7855 36.8842 59.7855 39.0725V41.2518H57.1919V39.2597C57.1919 38.5065 56.8029 38.1276 56.0293 38.1276H55.5151C54.8309 38.1276 54.4866 38.5065 54.4866 39.2597V51.6494C54.4866 52.4026 54.8309 52.7815 55.5151 52.7815H56.1635C56.8476 52.7815 57.1919 52.4026 57.1919 51.6494V50.5976H59.7855Z"
            fill="#3E3D40"
          />
          <path
            d="M67.8298 55.1257V46.6534H64.6416V55.1257H62.048V35.7878H64.6416V44.3092H67.8298V35.7878H70.4234V55.1257H67.8298Z"
            fill="#3E3D40"
          />
          <path
            d="M76.5271 52.7814H77.8507C78.5349 52.7814 78.8792 52.4026 78.8792 51.6494V39.2596C78.8792 38.5064 78.4902 38.1276 77.7166 38.1276H76.5003C75.7446 38.1276 75.3645 38.5064 75.3645 39.2596V51.6494C75.3645 52.4026 75.7536 52.7814 76.5271 52.7814ZM75.9056 55.1257C73.8174 55.1257 72.771 54.0293 72.771 51.841V39.1036C72.771 36.8931 73.8084 35.7922 75.8788 35.7922H78.365C80.4353 35.7922 81.4727 36.8975 81.4727 39.1036V51.841C81.4727 54.0337 80.4264 55.1257 78.3382 55.1257H75.9056Z"
            fill="#3E3D40"
          />
          <path
            d="M87.6211 52.7814H88.9447C89.6289 52.7814 89.9732 52.4026 89.9732 51.6494V39.2596C89.9732 38.5064 89.5842 38.1276 88.8106 38.1276H87.5943C86.8386 38.1276 86.4585 38.5064 86.4585 39.2596V51.6494C86.4585 52.4026 86.8476 52.7814 87.6211 52.7814ZM86.9996 55.1257C84.9113 55.1257 83.865 54.0293 83.865 51.841V39.1036C83.865 36.8931 84.9024 35.7922 86.9728 35.7922H89.459C91.5293 35.7922 92.5667 36.8975 92.5667 39.1036V51.841C92.5667 54.0337 91.5204 55.1257 89.4321 55.1257H86.9996Z"
            fill="#3E3D40"
          />
          <path
            d="M100.048 55.1257H94.8518V35.7878H97.4453V52.7815H100.048V55.1257Z"
            fill="#3E3D40"
          />
          <path
            d="M45.7983 26.2146L47.815 18.9412H49.7646V33.4791H47.815V24.5611L46.6836 28.024H44.9218L43.7905 24.5611V33.4791H41.8409V18.9412H43.5669L45.7983 26.2146Z"
            fill="#3E3D40"
          />
          <path
            d="M55.4837 18.9412H57.2098L54.8532 28.5276V33.4791H52.9305V28.5276L50.5068 18.9412H52.2284L53.8918 26.2146L55.4837 18.9412Z"
            fill="#3E3D40"
          />
          <path
            d="M69.1982 18.9412H67.2441V20.7016H69.1982V18.9412Z"
            fill="#36B7C1"
          />
          <path
            d="M80.1044 18.9412H78.1503V20.7016H80.1044V18.9412Z"
            fill="#36B7C1"
          />
          <path
            d="M101.984 22.6715C101.984 20.4164 103.907 18.5891 106.277 18.5891C108.213 18.5891 109.85 19.8058 110.386 21.4815C110.73 21.4058 111.084 21.3612 111.455 21.3612C114.035 21.3612 116.128 23.3489 116.128 25.8046C116.128 26.1344 116.087 26.4553 116.016 26.7628C117.232 27.2887 118.077 28.4519 118.077 29.8068C118.077 30.3861 117.921 30.9343 117.648 31.4112C119.396 32.7973 120.51 34.8786 120.51 37.2139C120.51 39.5492 119.419 41.586 117.702 42.9676C117.939 43.4177 118.077 43.9258 118.077 44.465C118.077 45.8333 117.21 47.0099 115.971 47.5268C116.07 47.8923 116.128 48.2756 116.128 48.6678C116.128 51.1814 113.986 53.2181 111.343 53.2181C110.95 53.2181 110.574 53.1691 110.212 53.0844C109.545 54.5195 108.039 55.5223 106.281 55.5223C103.911 55.5223 101.988 53.695 101.988 51.4399V22.6715H101.984Z"
            fill="#36B7C1"
          />
          <path
            d="M61.6188 31.7187H63.081C63.5953 31.7187 63.8546 31.5048 63.8546 31.0725V21.7578C63.8546 21.0581 63.564 20.706 62.9827 20.706H61.6233V31.7231L61.6188 31.7187ZM59.6692 33.4791V18.9412H63.0631C64.892 18.9412 65.8087 19.8726 65.8087 21.7355V31.3755C65.8087 32.7794 65.0307 33.4836 63.4701 33.4836H59.6692V33.4791Z"
            fill="#36B7C1"
          />
          <path
            d="M84.8041 20.7016V33.4791H82.85V20.7016H80.9808V18.9412H86.6732V20.7016H84.8041Z"
            fill="#36B7C1"
          />
          <path
            d="M91.4221 25.4168V21.5528C91.4221 20.9868 91.1359 20.7016 90.568 20.7016H90.0404C89.4725 20.7016 89.1863 20.9868 89.1863 21.5528V25.4168H91.4221ZM89.1863 33.4791H87.2367V21.4325C87.2367 19.7701 88.0148 18.9412 89.5754 18.9412H91.0376C92.5937 18.9412 93.3762 19.7701 93.3762 21.4325V33.4791H91.4266V27.1772H89.1908V33.4791H89.1863Z"
            fill="#36B7C1"
          />
          <path
            d="M98.7331 33.4791H94.8473V18.9412H96.8014V31.7187H98.7331V33.4791Z"
            fill="#36B7C1"
          />
          <path
            d="M76.7373 23.0503V21.4726C76.7373 19.7835 75.9101 18.9412 74.26 18.9412H72.9186C71.4161 18.9412 70.6604 19.7701 70.6604 21.4325V31.0323C70.6604 32.668 71.4116 33.4836 72.9186 33.4836H76.7373V25.4213H73.7056V27.1594H74.7877V31.7231H73.4686C72.9007 31.7231 72.6145 31.3711 72.6145 30.6713V21.7623C72.6145 21.0626 72.9007 20.7105 73.4686 20.7105H73.956C74.5105 20.7105 74.7877 21.0626 74.7877 21.7623V23.0592H76.7373V23.0503Z"
            fill="#36B7C1"
          />
          <path
            d="M69.1937 23.0503H67.2441V33.4791H69.1937V23.0503Z"
            fill="#36B7C1"
          />
          <path
            d="M80.1 23.0503H78.1503V33.4791H80.1V23.0503Z"
            fill="#36B7C1"
          />
        </svg>

        <form onSubmit={submitHandler}>
          {isLogin ? (
            <div className="login">
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
                  className="loginQueryInput"
                  id="email"
                  type="email"
                  name="loginQueryInput"
                  ref={emailInputRef}
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
                  className="loginQueryInput"
                  id="password"
                  type="text"
                  name="loginQueryInput"
                  ref={passwordInputRef}
                  placeholder="Mot de passe"
                />
              </div>
              <Link to="/forgot-password">
                <span className="forgot">Mot de passe oublié ?</span>
              </Link>
            </div>
          ) : (
            <div className="signup">
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
                  className="loginQueryInput"
                  id="name"
                  type="name"
                  name="loginQueryInput"
                  ref={emailInputRef}
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
                  className="loginQueryInput"
                  id="email"
                  type="email"
                  name="loginQueryInput"
                  ref={emailInputRef}
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
                  className="loginQueryInput"
                  id="password"
                  type="text"
                  name="loginQueryInput"
                  ref={passwordInputRef}
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
                  className="loginQueryInput"
                  id="password"
                  type="text"
                  name="loginQueryInput"
                  ref={passwordInputRef}
                  placeholder="Mot de passe"
                />
              </div>

              <div className="input-update">
                <input
                  className="conditions-input"
                  id="password"
                  type="checkbox"
                  name="loginQueryInput"
                  ref={passwordInputRef}
                  placeholder="Mot de passe"
                  required
                />
                <span className="conditions">
                  J'ai lu(e) et accepté(e) les <u>conditions d'utilisation</u>{" "}
                </span>
              </div>
            </div>
          )}

          {isLogin ? (
            <Link to="/accueil">
              <button type="submit" onClick={() => {}} className="btn-primaire">
                Se connecter
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button type="submit" onClick={() => {}} className="btn-primaire">
                S'incrire
              </button>
            </Link>
          )}

          <span className="other-option" onClick={toggleAuthModeHandler}>
            {isLogin
              ? "Créer nouveau un compte"
              : "Vous avez déjà un compte ? Se connecter"}
          </span>
        </form>
      </div>
    </Fragment>
  );
}
