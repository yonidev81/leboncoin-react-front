import React from "react";
import Logo from "./img/logoleboncoin.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={Logo} alt="Logo Leboncoin" />
          <span>Déposer une annonce </span>
          <div>Rechercher </div>
          <div>Se connecter </div>
        </div>
      </div>

      <br />

      <div className="subheader">
        {" "}
        <input placeholder="Que recherchez-vous ?" type="text" />
        <button> Rechercher </button>
      </div>
    </>
  );
};

export default Header;
