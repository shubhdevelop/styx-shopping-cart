import "./navbar.css";
import CartBadge from "../Cart/CartBadge/CartBadge";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const { productDispatch } = CartState();

  const debounce = (cb: any, wait: number) => {
    let timer: any;
    return function (...args: any) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, wait);
    };
  };

  const debouncedSearch = debounce(
    () => productDispatch({ type: "FILTER_BY_SEARCH", payload: search }),
    500,
  );

  useEffect(() => {
    debouncedSearch();
  }, [search, debouncedSearch]);

  return (
    <nav>
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <CartBadge />
    </nav>
  );
};

export default Navbar;
