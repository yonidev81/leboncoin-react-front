import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Offer = () => {
  // récuperer le params envoyé depuis le Link de Offers
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/${id}`
      );

      /*   console.log(response.data); */
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <span> Downloading ...</span>
  ) : (
    <div className="container">
      <div className="offer">
        <div className="pictureoffer">
          {" "}
          <img
            style={{ "object-fit": "cover" }}
            src={data.picture.url}
            alt="pictures"
          />{" "}
        </div>

        <p className="title">{data.title}</p>
        <p className="price">{data.price} €</p>
        <div className="date">{data.picture.created_at}</div>
      </div>

      <div className="description">
        <p>Description</p>
        {data.description}
      </div>
    </div>
  );
};

export default Offer;
