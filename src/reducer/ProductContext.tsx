import { useContext, createContext, ReactNode, useReducer } from "react";
import { ProductStateType, ProductContextType } from "./product.types";
import products from "../data/products.json";
import { productReducer } from "./productReducer";

export const ProductContext = createContext({});

export const useProductContext = () =>
  useContext(ProductContext) as ProductContextType;

export const initialState: ProductStateType = {
  products: products.map((product) => ({
    ...product,
    inCart: false,
    inSaveForLater: false,
    quantity: 0,
  })),
  saveForLater: [],
  cart: [],
};

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
