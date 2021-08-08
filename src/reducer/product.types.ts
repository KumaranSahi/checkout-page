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
      payload: number;
    }
  | {
      type: "INCREASE_QUANTITY";
      payload: number;
    }
  | {
      type: "DECREASE_QUANTITY";
      payload: number;
    }
  | {
      type: "ADD_TO_SAVE_FOR_LATER";
      payload: number;
    }
  | {
      type: "REMOVE_SAVE_FOR_LATER";
      payload: number;
    };

export interface ProductContextType extends ProductStateType {
  products: ProductItemType[];
  dispatch: Dispatch<ProductActionType>;
}
