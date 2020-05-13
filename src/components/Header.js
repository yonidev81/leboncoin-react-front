import React from "react";
import Logo from "./assets/img/logoleboncoin.png";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ user, setUser }) => {
  const history = useHistory();
  return (
    <>
      <div className="main">
        <div className="header">
          <img src={Logo} alt="Logo Leboncoin" />
          <div className="depotannonce">
            <FontAwesomeIcon className="iconplus" icon="plus-square" /> &nbsp;
            <span> Déposer une annonce </span>
          </div>
          <div className="rechercher">
            {" "}
            <FontAwesomeIcon className="search" icon="search" /> &nbsp;
            Rechercher{" "}
          </div>{" "}
          <span className="connecter">
            {" "}
            <FontAwesomeIcon className="user" icon="user" /> &nbsp; Se connecter{" "}
          </span>
        </div>
      </div>

      <div>
        {user ? (
          <button
            onClick={() => {
              // suppression du cookie
              Cookies.remove("userToken");
              setUser(null);

              // rediriger vers la page d'accueil
              history.push("/");
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <button
            onClick={() => {
              history.push("/log_in");
            }}
          >
            Se connecter
          </button>
        )}
        <Link to="/publish"> Déposer une annonce </Link>
      </div>
    </>
  );
};

export default Header;
