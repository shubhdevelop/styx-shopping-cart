import { CartItem } from "../types/Cart.types";

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c: CartItem) => c.id !== action.payload.id),
      };
    case "ADD_QTY":
      return {
        ...state,
        cart: state.cart.map((c: CartItem) => {
          if (c.id === action.payload.id) {
            return { ...c, qty: c.qty + 1 };
          }
          return c;
        }),
      };
    case "REDUCE_QTY":
      return {
        ...state,
        cart: state.cart.map((c: CartItem) => {
          if (c.id === action.payload.id) {
            return { ...c, qty: c.qty - 1 };
          }
          return c;
        }),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ORDER_BY_PRICE":
      return {
        ...state,
        sortBy: "price",
      };

    case "ORDER_BY_RATING":
      return {
        ...state,
        sortBy: "rating",
      };
    case "BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "SORT_LOW_TO_HIGH":
      return {
        ...state,
        order: "asc",
      };
    case "SORT_HIGH_TO_LOW":
      return {
        ...state,
        order: "dsc",
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "REMOVE_FILTER":
      return {
        sortBy: "price",
        byStock: false,
        rating: 0,
        order: "asc",
        searchQuery: "",
      };

    default:
      return state;
  }
};
