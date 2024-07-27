import { ShoppingCart } from "lucide-react";
import { CartState } from "../../../context/Context";
import { IndividualProduct } from "../../../types/Cart.types";
import "./cartBadge.css";
import { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function CartBadge() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { state, dispatch } = CartState();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const cartItems = state.cart.map((item: IndividualProduct) => (
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      images={item.images}
      discount={item.discount!}
    />
  ));

  const dropdownContent = (
    <div className="dropdown-content">
      <div className="item-container hide-scrollbar">
        {cartItems ? [...cartItems] : <p>No item in Cart !</p>}
      </div>
      {cartItems.length > 0 ? (
        <div>
          <Link to="/cart">
            <button className="product-button ">Go To Cart</button>
          </Link>{" "}
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              dispatch({
                type: "CLEAR_CART",
              });
            }}
            className="product-button "
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <p>Your Cart is Empty!</p>
      )}
    </div>
  );

  return (
    <div>
      <div className="shopping-cart" onClick={toggleDropdown}>
        <ShoppingCart />
        <span>{state.cart.length}</span>
      </div>
      {isDropdownOpen && dropdownContent}
    </div>
  );
}

export default CartBadge;
