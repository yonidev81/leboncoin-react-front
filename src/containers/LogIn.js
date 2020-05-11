import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          // requête vers le serveur (checker si email et mot de passe existent)
          // reception de response.data
          // qui va retourner un token

          const token = "1234";

          // Création d'un cookie avec pour valeur le token reçu dans la réponse du serveur suite à la requete Axios
          Cookies.set("userToken", token, { expires: 200 });

          //stocker le token dans un cookie

          // changer l'affichage "se connecter" en "se déconnecter"
          setUser(token);
          // rediriger l'utilisateur vers Offers
          history.push("/");
        }}
      >
        {" "}
        Se Connecter{" "}
      </button>

      <button
        onClick={() => {
          history.push("/sign_up");
        }}
      >
        {" "}
        Créer un compte{" "}
      </button>
    </div>
  );
};

export default Login;
