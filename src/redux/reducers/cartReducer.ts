/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable no-unused-vars */

const initialState: { cartItem: any[] } = {
    cartItem: [],
};

const cartReducer = (state = initialState, action: { type: string; payload: any }) => {
    switch (action.type) {
        case "GET_ITEM":
            return state.cartItem.find((item: any) => item.id === action.payload.id)?.quantity || 0;

        case "INCREASE_QUANTITY":
            const isAlreadyInCart = state.cartItem.find((item) => item.id === action.payload.id);
            if (isAlreadyInCart) {
                state.cartItem.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            } else {
                return [...isAlreadyInCart, { id: action.payload.id, quantity: 1 }];
            }
            break;

        case "DECREASE_QUANTITY":
            if (isAlreadyInCart?.quantity === 1) {
                return state.cartItem.filter((item) => item.id !== action.payload.id);
            }
            state.cartItem.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

            break;

        case "REMOVE_CART":
            if (isAlreadyInCart) {
                return state.cartItem.filter((item) => item.id !== action.payload.id);
            }
            break;
        default:
            return state;
    }
};

export default cartReducer;
