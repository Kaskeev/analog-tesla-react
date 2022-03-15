import React, { useState } from "react";
import Filters from "../Filters/Filters";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

const ProductsList = (props) => {
  // const [state, getState] = useState(1000);
  const [filtersVisibility, setFiltersVisibility] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  let { selectedCardId, setSelectedCardId } = props;
  let { cars } = props;
  // console.log(selectedCarId);
  // console.log(searchValue);
  cars = cars.filter((item) =>
    item.model.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      {filtersVisibility ? (
        <Filters setFiltersVisibility={setFiltersVisibility} />
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 10px 30px",
        }}
      >
        <strong
          style={{ cursor: "pointer" }}
          onClick={() => setFiltersVisibility(!filtersVisibility)}
        >
          Filters
        </strong>
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          style={{ width: "290px" }}
          type="text"
          placeholder="Search.."
        />
      </div>
      <div className="cars-list">
        {cars.map((item) => {
          return (
            <ProductCard
              car={item}
              key={item.id}
              selectedCardId={selectedCardId}
              setSelectedCardId={setSelectedCardId}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
