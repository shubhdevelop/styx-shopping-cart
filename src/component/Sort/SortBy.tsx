import { CartState } from "../../context/Context";
import "./sort.css";

function SortBy() {
  const { productDispatch } = CartState();
  return (
    <>
      <h3>Sort by</h3>
      <div className="sort-container">
        <select
          className="sort-select"
          name="sort"
          id="sort"
          onChange={(e) => {
            const type =
              e.target.value === "price" ? "ORDER_BY_PRICE" : "ORDER_BY_RATING";
            productDispatch({ type });
          }}
        >
          <option className="sort-option" value="price">
            Price
          </option>
          <option className="sort-option" value="rating">
            Rating
          </option>
        </select>
        <select
          className="sort-select"
          name="order"
          id="sort"
          onChange={(e) => {
            const type =
              e.target.value === "asc"
                ? "SORT_LOW_TO_HIGH"
                : "SORT_HIGH_TO_LOW";
            productDispatch({ type });
          }}
        >
          <option className="sort-option" value="default">
            Default
          </option>
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
