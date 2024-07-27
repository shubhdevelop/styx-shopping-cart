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
    default:
      return state;
  }
};
