import { CartState } from "../../context/Context";
import { IndividualProduct } from "../../types/Cart.types";
import Product from "../Product/Product";
import "./productList.css";

type Props = {};

function ProductList({}: Props) {
  const { state } = CartState();
  const AllProducts = state.products.map((product: IndividualProduct) => {
    return (
      <Product
        name={product.title}
        price={product.price * 100}
        description={product.description.split(/\s+/).slice(0, 10).join(" ")}
        src={product.images[0]}
        key={product.id}
        discount={product.discountPercentage}
        id={product.id}
        stock={product.stock}
      ></Product>
    );
  });
  return <div className="product-list">{AllProducts}</div>;
}

export default ProductList;
