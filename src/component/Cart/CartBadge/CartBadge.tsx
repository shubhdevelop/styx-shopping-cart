import { ShoppingCart } from "lucide-react";
import { CartState } from "../../../context/Context";
import { IndividualProduct } from "../../../types/Cart.types";
import "./cartBadge.css";
import { useEffect, useRef, useState } from "react";
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

  const dropDown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDown.current && !dropDown.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownContent = (
    <div className="dropdown-content" ref={dropDown}>
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
