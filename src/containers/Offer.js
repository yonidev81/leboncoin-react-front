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
    <div>
      {data.title}
      {data.description}
      {data.price}
    </div>
  );
};

export default Offer;
