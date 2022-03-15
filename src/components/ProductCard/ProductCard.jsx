import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  let { car, selectedCardId, setSelectedCardId } = props;

  return (
    <div
      className={selectedCardId === car.id ? "card-active" : "card"}
      onClick={() => {
        setSelectedCardId(car.id);
      }}
    >
      <h2>{car.model}</h2>
      <img className="car-image" src={car.image} alt="car image" />
    </div>
  );
};

export default ProductCard;
