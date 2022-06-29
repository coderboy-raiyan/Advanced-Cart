/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

interface IGetCurrentItem {
    type: cartActionTypes.GET_CURRENT_ITEM;
    payload: IProduct;
}

interface IIncreaseQuantity {
    type: cartActionTypes.INCREASE_QUANTITY;
    payload: IProduct;
}

interface IDecreaseQuantity {
    type: cartActionTypes.DECREASE_QUANTITY;
    payload: IProduct;
}

interface IRemoveCart {
    type: cartActionTypes.REMOVE_CART;
    payload: IProduct;
}

interface IOpenCart {
    type: cartActionTypes.OPEN_CART;
    payload: boolean;
}

interface ICloseCart {
    type: cartActionTypes.CLOSE_CART;
    payload: boolean;
}

type AllCartActionTypes =
    | IGetCurrentItem
    | IIncreaseQuantity
    | IDecreaseQuantity
    | IRemoveCart
    | IOpenCart
    | ICloseCart;
