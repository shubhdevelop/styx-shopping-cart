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
    console.log(product);
    return (
      <Product
        rating={product.rating}
        title={product.title}
        price={product.price * 100}
        description={product.description.split(/\s+/).slice(0, 6).join(" ")}
        src={product.images[0]}
        key={product.id}
        discount={product.discountPercentage}
        id={product.id}
        stock={product.stock}
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
      </div>
    </div>
  );
};

export default Favorites;
