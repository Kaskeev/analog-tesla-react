import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  console.log(props);
  let { logo, selectedCardId, setSelectedCardId } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={logo} width="200px" alt="logo" />
      <Navbar
        selectedCardId={selectedCardId}
        setSelectedCardId={setSelectedCardId}
        cars={props.cars}
      />
    </div>
  );
};

export default Header;
