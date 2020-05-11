import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckBox] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (checkbox) {
      // requête vers le serveur pour créer un user
      if (password === confirmPassword) {
        const response = await axios.post(
          "https://leboncoin-api.herokuapp.com/user/sign_up",
          {
            email: email,
            username: username,
            password: password,
          }
        );

        console.log(response.data);
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
        <p> Pseudo</p>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          type="text"
          placeholder="pseudo"
        />
        <p> Adresse email</p>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="text"
          placeholder="email"
        />
        <p> Mot de passe</p>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="password"
        />
        <p> Confirmer le mot de passe</p>
        <input
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          type="password"
          placeholder="confirm password"
        />
        <input
          type="checkbox"
          onChange={() => {
            setCheckBox(!checkbox);
          }}
        />
        <span> Accepter les CGC et CGU </span>

        <button type="submit"> Créer un compte </button>
      </form>
    </div>
  );
};

export default Signup;
