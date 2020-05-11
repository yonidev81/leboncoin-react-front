import React, { useState, useEffect } from "react";
/*  */
import axios from "axios";

import { Link } from "react-router-dom";

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/with-count"
    );

    /* console.log(response.data);  */
    setData(response.data);
    setIsLoading(false);
  };

  // useEffect permet d'effectuer une requête au 1er chargement
  useEffect(() => {
    fetchData();

    // Fetchdata permet de récupérer les données
  }, []);

  return isLoading ? (
    <span>Downloading ...</span>
  ) : (
    <>
      <div className="containersearch">
        <div>
          <section className="subheader">
            <input placeholder="Que recherchez-vous ?" type="text" />
            <button> Rechercher </button>
          </section>
        </div>

        <div className="filter">
          <p>Prix entre</p> &nbsp;{" "}
          <div>
            <input placeholder="prix min" type="text" />
          </div>{" "}
          &nbsp;
          <p>et</p>
          &nbsp;
          <div>
            {" "}
            <input placeholder="prix max" type="text" />
          </div>{" "}
          &nbsp;
          <div className="tri">
            {" "}
            <input placeholder="Tri: plus récentes" type="text" />
          </div>
        </div>
      </div>
      {/* .map permet de parcourir un tableau et d'afficher ses propriétés/Clés *{/*  */}
      {data.offers.map((offer, index) => {
        return (
          <div className="containeroffers">
            <Link className="card" key={offer._id} to={"/offer/" + offer._id}>
              <div className="pictures">
                <img
                  style={{ "object-fit": "cover" }}
                  src={offer.picture.secure_url}
                  alt="pictures"
                />
              </div>
              <div className="offerdescription">
                <p className="titleoffers">{offer.title}</p>
                <p className="priceoffers">{offer.price} €</p>
                <p className="dateoffers">{offer.picture.created_at}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Offers;
