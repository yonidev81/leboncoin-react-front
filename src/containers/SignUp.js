import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (checkbox) {
      // requête vers le serveur pour créer un user
      console.log(password, confirmPassword);
      if (password === confirmPassword) {
        const response = await axios.post(
          "https://leboncoin-api.herokuapp.com/user/sign_up",
          {
            email: email,
            username: username,
            password: password,
          }
        );

        console.log("2 ====>", response.data);
        Cookies.set("userToken", response.data.token, { expires: 2000 });
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("Vos mots de passe ne sont pas identiques");
      }

      // réception d'un token
      // le stocker dans un cookie
      // rediriger le user vers la homepage
    } else {
      alert("Veuillez accepter les CGU et les CGV");
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <div className="signup">
          <p> Créez un compte </p>

          <p> Pseudo *</p>
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type="text"
            placeholder="pseudo"
          />

          <p> Adresse email *</p>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            placeholder="email"
          />
          <p> Mot de passe *</p>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <p> Confirmer le mot de passe *</p>
          <input
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            type="password"
            placeholder="confirm password"
          />
        </div>

        <div>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setCheckBox(!checkbox);
            }}
          />{" "}
          <p> Accepter les CGC et CGU</p>
        </div>

        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Signup;
