import SortBy from "../Sort/SortBy";
import "./filter.css";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <h2>Filter Section</h2>
      <div>
        <h3>Availability</h3>
        <div>
          <input type="checkbox" name="brand" id="brand1" />
          <label htmlFor="brand1">Exlude Out of Stock Item</label>
        </div>
        <div>
          <h3>Rating</h3>
          <div>
            <input type="checkbox" name="rating" id="rating1" />
            <label htmlFor="rating1">4 Stars and above</label>
          </div>
          <div>
            <input type="checkbox" name="rating" id="rating2" />
            <label htmlFor="rating2">3 Stars and above</label>
          </div>
          <div>
            <input type="checkbox" name="rating" id="rating3" />
            <label htmlFor="rating3">2 Stars and above</label>
          </div>
          <div>
            <input type="checkbox" name="rating" id="rating4" />
            <label htmlFor="rating4">1 Star and above</label>
          </div>
        </div>
        <SortBy />
      </div>
    </div>
  );
};

export default FilterSection;
