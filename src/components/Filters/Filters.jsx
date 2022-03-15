import React from "react";
import "./Filters.css";

const Filters = ({ setFiltersVisibility }) => {
  return (
    <div className="filters">
      <div>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setFiltersVisibility(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Filters;
