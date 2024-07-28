import "./navbar.css";
import CartBadge from "../Cart/CartBadge/CartBadge";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { createEnumDeclaration } from "typescript";

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
    500
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Link
          to="/favorites"
          style={{
            width: 50,
            // height: 50,
            backgroundColor: "rgb(249, 0, 104)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            borderRadius: 5,
          }}
          title="Favorites"
        >
          <Heart size={30} stroke="white" />
        </Link>
        <CartBadge />
      </div>
    </nav>
  );
};

export default Navbar;
