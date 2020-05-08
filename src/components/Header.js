import React from "react";
import Logo from "./img/logoleboncoin.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="Logo Leboncoin" />
        <span>Déposer une annonce </span>
        <div>Rechercher </div>
        <div>Se connecter </div>
      </div>
    </>
  );
};

export default Header;
