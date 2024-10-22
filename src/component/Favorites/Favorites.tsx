import { CartState } from "../../context/Context";

import "./favorites.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";
import { IndividualProduct } from "../../types/Cart.types";
import Product from "../Product/Product";

const Favorites = () => {
  const {
    state: { favorites },
    dispatch,
  } = CartState();

  const AllFavoriteProducts = favorites.map((product: IndividualProduct) => {
    return (
      <Product
        rating={product.rating}
        title={product.title}
        price={product.price}
        description={product.description.split(/\s+/).slice(0, 6).join(" ")}
        src={product.images[0]}
        key={product.id}
        discount={product.discount || 0}
        id={product.id}
        stock={product.stock || 0}
      ></Product>
    );
  });

  return (
    <div className="cart-container">
      <div className="cart-content">
        <Link to="/">
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ArrowBigLeft /> <p>Continue Shopping</p>
          </div>
        </Link>

        <div className="product-list">{AllFavoriteProducts}</div>
        {favorites.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2 style={{ color: "#0051ff" }}>No Favorites added yet!</h2>
          </div>
        ) : (
          <button
            style={{
              marginTop: "50px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}
            className="clear-filter-btn"
          >
            Clear Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default Favorites;
