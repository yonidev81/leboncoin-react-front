import React, { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    //éviter le rafraichissement de la page
    event.preventDefault();

    // requête vers le serveur (checker si email et mot de passe existent)
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/user/log_in",
      {
        // objet contenant deux paramètres envoyés en requête post
        email: email,
        password: password,
      }
    );
    // reception de response.data
    console.log("1 ====>", response.data);

    //Création d'un cookie avec pour valeur le token reçu dans la réponse du serveur suite à la requete Axios/
    Cookies.set("userToken", response.data.token, { expires: 200 });

    setUser(response.data.token);
    /*     console.log(response.data.token); */
    // //stocker le token dans un cookie

    // changer l'affichage "se connecter" en "se déconnecter"

    // rediriger l'utilisateur vers Offers
    history.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p> Adresse email</p>
        <input
          value={email}
          type="text"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>Mot de passe</p>
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <div>
          <button type="submit">Se connecter </button>
        </div>
      </form>
      <p> Vous n'avez pas de compte </p>

      <button
        onClick={() => {
          history.push("/sign_up");
        }}
      >
        {" "}
        Créer un compte{" "}
      </button>
    </>
  );
};
export default Login;
