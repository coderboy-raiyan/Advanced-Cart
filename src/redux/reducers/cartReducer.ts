/* eslint-disable default-param-last */

/* eslint-disable no-unused-vars */

const initialState: { cartItem: any[] } = {
    cartItem: [],
};

const cartReducer = (state = initialState, action: { type: string; payload: any }) => {
    switch (action.type) {
        case "GET_ITEM":
            return state.cartItem.find((item: any) => item.id === action.payload.id);

        case "ADD_TO_CART":
            return [...state.cartItem, action.payload];

        default:
            return state;
    }
};

export default cartReducer;
