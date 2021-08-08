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
    case "ADD_TO_SAVE_FOR_LATER":
      return {
        ...state,
        saveForLater: [
          ...state.saveForLater,
          {
            ...state.cart.find(({ id }) => id === +action.payload)!,
            inSaveForLater: true,
          },
        ],
        cart: state.cart.filter(({ id }) => id !== +action.payload),
      };
    case "REMOVE_SAVE_FOR_LATER":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...state.saveForLater.find(({ id }) => id === +action.payload)!,
            inSaveForLater: false,
          },
        ],
        saveForLater: state.saveForLater.filter(
          ({ id }) => id !== action.payload
        ),
      };
    default:
      return state;
  }
};
