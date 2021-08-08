import { Dispatch } from "react";

export type ProductItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  size: string[];
  brand: string;
  fastDelivery: boolean;
  gender: string;
  inCart: boolean;
  inSaveForLater: boolean;
  quantity: number;
  hasDiscount?: boolean;
  discount?: number;
};

export type ProductStateType = {
  products: ProductItemType[];
  cart: ProductItemType[];
  saveForLater: ProductItemType[];
};

export type ProductActionType =
  | {
      type: "ADD_TO_CART";
      payload: ProductItemType;
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: string;
    }
  | {
      type: "INCREASE_QUANTITY";
      payload: string;
    }
  | {
      type: "DECREASE_QUANTITY";
      payload: string;
    };

export interface ProductContextType extends ProductStateType {
  products: ProductItemType[];
  dispatch: Dispatch<ProductActionType>;
}
