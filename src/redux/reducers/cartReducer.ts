/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable no-unused-vars */

import { cartActionTypes } from "types/CartActiontypes";
import { IProduct } from "types/Product";

interface ICartStore {
    cartItem: IProduct[];
    currentItem: IProduct;
    isCartOpen: boolean;
}

const initialState: ICartStore = {
    cartItem: [],
    currentItem: {} as IProduct,
    isCartOpen: false,
};

const cartReducer = (state = initialState, action: AllCartActionTypes) => {
    const isAlreadyInCart = state.cartItem.find((item) => item.id === action.payload.id);
    switch (action.type) {
        case cartActionTypes.GET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: state.cartItem.find((item: IProduct) => item.id === action.payload.id),
            };

        case cartActionTypes.INCREASE_QUANTITY:
            if (isAlreadyInCart) {
                return {
                    ...state,
                    cartItem: state.cartItem.map((item: IProduct) => {
                        if (item.id === action.payload.id) {
                            return { ...item, quantity: item.quantity! + 1 };
                        }
                        return item;
                    }),
                };
            }
            return {
                ...state,
                cartItem: [...state.cartItem, { ...action.payload, quantity: 1 }],
            };

        case cartActionTypes.DECREASE_QUANTITY:
            if (isAlreadyInCart?.quantity === 1) {
                return {
                    ...state,
                    cartItem: state.cartItem.filter((item) => item.id !== action.payload.id),
                };
            }
            return {
                ...state,
                cartItem: state.cartItem.map((item: IProduct) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity! - 1 };
                    }
                    return item;
                }),
            };

        case cartActionTypes.REMOVE_CART:
            if (isAlreadyInCart) {
                return {
                    ...state,
                    cartItem: state.cartItem.filter((item) => item.id !== action.payload.id),
                };
            }
            break;

        case cartActionTypes.OPEN_CART:
            return {
                ...state,
                isCartOpen: action.payload,
            };
        case cartActionTypes.CLOSE_CART:
            return {
                ...state,
                isCartOpen: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
