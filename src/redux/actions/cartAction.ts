/* eslint-disable import/prefer-default-export */

export function getItemQuantity(payload: any) {
    return {
        type: "GET_ITEM",
        payload,
    };
}
export function increaseQuantity(payload: any) {
    return {
        type: "INCREASE_QUANTITY",
        payload,
    };
}
export function decreaseQuantity(payload: any) {
    return {
        type: "DECREASE_QUANTITY",
        payload,
    };
}
export function removeCart(payload: any) {
    return {
        type: "REMOVE_CART",
        payload,
    };
}
