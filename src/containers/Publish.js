import React, { useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Publish = () => {
  const token = Cookies.get("userToken");
  console.log(token);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [file, setFile] = useState();
  // Est-ce que le token est présent dans le Cookie ? / est-ce que l'utilisateur existe ?
  // Sinon redirection vers la page Log_in

  const handleSubmit = async (event) => {
    event.preventDefault();

    // requête pour créer une annonce
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("file", file);

    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/offer/publish",
      formData,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response.data);
  };
  return token ? (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="titre de l'annonce"
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <textarea
          value={description}
          placeholder="texte de l'annonce"
          onChange={(event) => setDescription(event.target.value)}
        />{" "}
        <br />
        <input
          value={price}
          type="number"
          placeholder="prix"
          onChange={(event) => setPrice(event.target.value)}
        />
        <br />
        <input
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <br />
        <button type="submit"> Valider </button>
      </form>
    </div>
  ) : (
    <Redirect to="/log_in" />
  );
};

export default Publish;
