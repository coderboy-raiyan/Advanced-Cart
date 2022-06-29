/* eslint-disable import/prefer-default-export */

export function getItemQuantity(payload: any) {
    return {
        type: "GET_ITEM",
        payload,
    };
}

export function getCurrentItem(payload: any) {
    return {
        type: "GET_CURRENT_ITEM",
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

export function openCart(payload: any) {
    return {
        type: "OPEN_CART",
        payload,
    };
}
export function closeCart(payload: any) {
    return {
        type: "CLOSE_CART",
        payload,
    };
}
