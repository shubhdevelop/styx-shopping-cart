import { CartState } from "../../context/Context";
import { IndividualProduct } from "../../types/Cart.types";
import Product from "../Product/Product";
import "./productList.css";

function ProductList() {
  const { productState, state } = CartState();

  const transformProducts = () => {
    let transformendProducts = state.products;

    if (productState.sortBy === "price" && productState.order !== "default") {
      transformendProducts.sort(
        (a: IndividualProduct, b: IndividualProduct) => {
          if (productState.order === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        }
      );
    }

    if (productState.sortBy === "rating" && productState.order !== "default") {
      transformendProducts.sort(
        (a: IndividualProduct, b: IndividualProduct) => {
          if (productState.order === "asc") {
            return a.rating - b.rating;
          } else {
            return b.rating - a.rating;
          }
        }
      );
    }

    if (productState.byStock) {
      transformendProducts = transformendProducts.filter(
        (product: IndividualProduct) => product.stock > 0
      );
    }

    if (productState.rating) {
      transformendProducts = transformendProducts.filter(
        (product: IndividualProduct) => product.rating >= productState.rating
      );
    }

    if (productState.searchQuery) {
      transformendProducts = transformendProducts.filter(
        (product: IndividualProduct) =>
          product.title
            .toLowerCase()
            .includes(productState.searchQuery.toLowerCase())
      );
    }

    return transformendProducts;
  };

  const AllProducts = transformProducts().map((product: IndividualProduct) => {
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
  return <div className="product-list .hide-scrollbar">{AllProducts}</div>;
}

export default ProductList;
