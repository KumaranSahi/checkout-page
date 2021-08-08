import { ProductStateType, ProductActionType } from "./product.types";

export const productReducer = (
  state: ProductStateType,
  action: ProductActionType
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, inCart: true, quantity: 1 }],
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                inCart: true,
              }
            : product
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== +action.payload),
        products: state.products.map((product) =>
          product.id === +action.payload
            ? {
                ...product,
                inCart: false,
              }
            : product
        ),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};
