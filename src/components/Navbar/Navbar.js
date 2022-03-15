import React from "react";

const Navbar = ({ cars, selectedCardId, setSelectedCardId }) => {
  // console.log(cars);
  return (
    <div>
      {cars.map((item) => {
        return (
          <strong
            onClick={() => {
              setSelectedCardId(item.id);
            }}
            style={
              selectedCardId === item.id
                ? { margin: "10px", cursor: "pointer", color: "black" }
                : { margin: "10px", cursor: "pointer", color: "grey" }
            }
            key={item.id}
          >
            {item.model}
          </strong>
        );
      })}
    </div>
  );
};

export default Navbar;
