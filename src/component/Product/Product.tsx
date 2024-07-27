import { log } from "console";
import { CartState } from "../../context/Context";
import { CartItem } from "../../types/Cart.types";
import "./product.css";

type Props = {
  name: string;
  price: number;
  description: string;
  src: string;
  discount: number;
  id: number;
  stock: number;
};
function Product({
  id,
  name,
  price,
  description,
  src,
  discount,
  stock,
}: Props) {
  const { state, dispatch } = CartState();

  const isInCart = state.cart.some((c: CartItem) => c.id === id);

  return (
    <div className="product">
      <div className="image-container">
        <img className="product-image" src={src} alt={name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="price-info product-price">
          <span>&#8377;</span> {price.toFixed()}{" "}
          <span className="price-discount">{discount.toFixed()}% off</span>
          <span className="actual-price">
            {((1 + discount / 100) * price).toFixed()}
          </span>
        </p>
        <p className="product-description">{description}</p>
      </div>
      {stock == 0 ? (
        <button className="product-button out-of-stock">Out of Stock</button>
      ) : !isInCart ? (
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: { id, name, price, discount, qty: 1 },
            });
          }}
          className="product-button"
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: { id, qty: 1 },
            });
          }}
          className="product-button remove"
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
}

export default Product;
