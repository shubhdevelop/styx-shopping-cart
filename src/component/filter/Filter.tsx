import { StarIcon } from "lucide-react";
import SortBy from "../Sort/SortBy";
import "./filter.css";
import { CartState } from "../../context/Context";

const FilterSection = () => {
  const { productState, productDispatch } = CartState();

  const Rating: React.ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= productState.rating) {
      Rating.push(
        <StarIcon
          key={i}
          size={24}
          fill="black"
          onClick={() =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i,
            })
          }
        />
      );
    } else {
      Rating.push(
        <StarIcon
          key={i}
          size={24}
          onClick={() =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i,
            })
          }
        />
      );
    }
  }

  return (
    <div className="filter-section">
      <h2>Filter Section</h2>
      <div>
        <h3>Availability</h3>
        <div>
          <input
            type="checkbox"
            id="stock"
            onChange={() => {
              productDispatch({ type: "BY_STOCK" });
            }}
            checked={productState.byStock}
          />
          <label htmlFor="stock">Exclude Out of Stock Item</label>
        </div>
        <div>
          <h3>Rating</h3>
          {Rating}
        </div>
        <SortBy />
      </div>
      <button
        onClick={() => productDispatch({ type: "REMOVE_FILTER" })}
        className="clear-filter-btn"
      >
        {" "}
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSection;
