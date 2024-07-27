import { ShoppingCart } from "lucide-react";
import "./navbar.css";
import { CartState } from "../../context/Context";

type Props = {};

const Navbar = ({}: Props) => {
  const { state } = CartState();

  return (
    <nav>
      <h1>Shopping Cart</h1>
      <div className="search-bar">
        <input type="text" name="search" placeholder="search" />
      </div>
      <div className="shopping-cart">
        <ShoppingCart />
        <span>{state.cart.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
