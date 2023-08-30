import React from "react";
import data from "../../data/Data";
import SingleCard from "./SingleCard";
import { NavLink, useParams } from "react-router-dom";
const DetailsPage = () => {
  const { id } = useParams();
  const detailedProducts = data.find((item) => item.id.toString() === id);
  return (
    <>
      <section className="mores">
        <div className="more-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> DetailsPage
          </p>
        </div>
        <div className="container">
          <div className="row">{<SingleCard product={detailedProducts} />}</div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
