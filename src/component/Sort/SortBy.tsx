import React from "react";
import "./sort.css";

type Props = {};

function SortBy({}: Props) {
  return (
    <>
      <h3>Sort by</h3>
      <div className="sort-container">
        <select className="sort-select" name="sort" id="sort">
          <option className="sort-option" value="popularity">
            Popularity
          </option>
          <option className="sort-option" value="price">
            Price
          </option>
          <option className="sort-option" value="rating">
            Rating
          </option>
        </select>
        <select className="sort-select" name="sort" id="sort">
          <option className="sort-option" value="asc">
            Low to High
          </option>
          <option className="sort-option" value="desc">
            High to Low
          </option>
        </select>
      </div>
    </>
  );
}

export default SortBy;
