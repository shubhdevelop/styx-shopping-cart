import { CartState } from "../../context/Context";
import CartItem from "./CartBadge/CartItem";
import "./cart.css"; // Import the CSS file for styling
import { IndividualProduct } from "../../types/Cart.types";
import { Link } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";
import { formatPrice } from "../../utils";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  let totalPrice = 0;
  let totalQuantity = 0;

  for (const item of cart) {
    totalPrice += item.price * item.qty;
    totalQuantity += item.qty;
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        <Link to="/">
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ArrowBigLeft /> <p>Continue Shopping</p>
          </div>
        </Link>
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <h2 className="cart-title">Cart</h2>
            <ul className="cart-items">
              {cart.map((item: IndividualProduct) => (
                <CartItem
                  discount={item.discount!}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  images={item.images}
                />
              ))}
            </ul>
            <button
              className="clear-cart-button"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              Clear Cart
            </button>
            <Link to="/checkout">
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="checkout-btn"
              >
                Checkout
              </button>
            </Link>
            <div className="cart-total">Total:{formatPrice(totalPrice)}</div>
          </>
        )}
      </div>
      <div className="cart-summary">
        <h2>Price Details</h2>
        <div className="list-item">
          <h5>Total Items:</h5>
          <p> {totalQuantity}</p>
        </div>
        <div className="list-item">
          <h5>Price</h5>
          <p>{formatPrice(totalPrice)}</p>
        </div>
        <div className="list-item">
          <h5>Delivery Charges</h5>
          <p>Free</p>
        </div>

        <div className="list-item">
          <h3>Total Amount</h3>
          <h3>{formatPrice(totalPrice)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
