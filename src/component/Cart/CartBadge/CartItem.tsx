import { Trash2 } from "lucide-react";
import "./cartBadge.css";
import { CartState } from "../../../context/Context";
import { IndividualProduct } from "../../../types/Cart.types";
import { formatPrice } from "../../../utils";

type Props = {
  id: number;
  title: string;
  images: string[];
  price: number;
  discount: number;
};

const CartItem = ({ id, title, images, price, discount }: Props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const cartItem = cart.find((item: IndividualProduct) => item.id === id);
  const quantity = cartItem ? cartItem.qty : 0;

  return (
    <div key={id} className="cart-item">
      <img src={images[0]} alt={title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{title}</h4>
        <span className="oneliner">
          <h4 className="cart-item-price">{formatPrice(price * quantity)}</h4>
          <h5 className="price-discount">{discount}% off</h5>
          <h5 className="actual-price">
            {formatPrice((1 + discount / 100) * price * quantity)}
          </h5>
        </span>

        <div className="cart-item-quantity">
          <button
            className="cart-item-quantity-btn box"
            onClick={() => {
              dispatch({
                type: "REDUCE_QTY",
                payload: {
                  id,
                },
              });
            }}
          >
            -
          </button>
          <span className="cart-item-quantity-value box">{quantity}</span>
          <button
            className="cart-item-quantity-btn box"
            onClick={() => {
              dispatch({
                type: "ADD_QTY",
                payload: {
                  id,
                },
              });
            }}
          >
            +
          </button>
        </div>
      </div>
      <Trash2
        cursor={"pointer"}
        stroke={"red"}
        strokeWidth={1}
        onClick={() => {
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
              id,
            },
          });
        }}
      />
    </div>
  );
};

export default CartItem;
