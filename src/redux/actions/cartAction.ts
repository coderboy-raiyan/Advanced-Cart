/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */

import { cartActionTypes } from "types/CartActiontypes";
import { IProduct } from "types/Product";

export function getCurrentItem(payload: IProduct): IGetCurrentItem {
    return {
        type: cartActionTypes.GET_CURRENT_ITEM,
        payload,
    };
}

export function increaseQuantity(payload: IProduct): IIncreaseQuantity {
    return {
        type: cartActionTypes.INCREASE_QUANTITY,
        payload,
    };
}
export function decreaseQuantity(payload: IProduct): IDecreaseQuantity {
    return {
        type: cartActionTypes.DECREASE_QUANTITY,
        payload,
    };
}
export function removeCart(payload: IProduct): IRemoveCart {
    return {
        type: cartActionTypes.REMOVE_CART,
        payload,
    };
}

export function openCart(payload: boolean): IOpenCart {
    return {
        type: cartActionTypes.OPEN_CART,
        payload,
    };
}
export function closeCart(payload: boolean): ICloseCart {
    return {
        type: cartActionTypes.CLOSE_CART,
        payload,
    };
}
