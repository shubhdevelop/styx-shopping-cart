import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducer";
import { data as productData } from "../data";

type Props = {
  children: React.ReactNode;
};

const Cart = createContext({} as any);

const Context = ({ children }: Props) => {
  const data = productData;
  const [state, dispatch] = useReducer(cartReducer, {
    products: data.products,
    cart: [],
    favorites: [],
  });

  type FilterType = {
    rating: number;
    byStock: boolean;
    sortBy: "price" | "rating";
    order: "asc" | "desc" | "default";
    searchQuery: string;
  };

  const [productState, productDispatch] = useReducer(productReducer, {
    rating: 0,
    byStock: false,
    sortBy: "price",
    order: "default",
    searchQuery: "",
  } as FilterType);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

export const ProductState = () => {
  return useContext(Cart);
};
