import { StarIcon } from "lucide-react";
import { CartState } from "../../context/Context";
import { CartItem } from "../../types/Cart.types";
import "./product.css";
import { formatPrice } from "../../utils";

type Props = {
  title: string;
  price: number;
  description: string;
  src: string;
  discount: number;
  id: number;
  stock: number;
  rating: number;
};
function Product({
  id,
  title,
  price,
  description,
  src,
  discount,
  stock,
  rating,
}: Props) {
  const { state, dispatch } = CartState();

  const isInCart = state.cart.some((c: CartItem) => c.id === id);
  const Rating: React.ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      Rating.push(<StarIcon key={i} size={10} fill="black" />);
    } else {
      Rating.push(<StarIcon key={i} size={10} />);
    }
  }

  return (
    <div className="product">
      <div className="image-container">
        <img className="product-image" src={src} alt={title} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{title}</h2>
        <p className="price-info product-price">
          {formatPrice(price)}
          <span className="price-discount">{discount}% off</span>
          <span className="actual-price">
            {formatPrice((1 + discount / 100) * price)}
          </span>
        </p>
        <p className="product-description">{description}</p>

        <div className="rating">{Rating}</div>
      </div>
      {stock === 0 ? (
        <button className="product-button out-of-stock">Out of Stock</button>
      ) : !isInCart ? (
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: { id, title, price, discount, qty: 1, images: [src] },
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
              payload: {
                id,
                qty: 1,
              },
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
