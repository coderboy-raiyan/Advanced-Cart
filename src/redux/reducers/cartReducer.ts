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
            return state.cartItem.find((item: any) => item.id === action.payload)?.quantity || 0;

        case "INCREASE_QUANTITY":
            const isAlreadyInCart = state.cartItem.find((item) => item.id === action.payload);
            if (isAlreadyInCart) {
                return {
                    ...state,
                    cartItem: state.cartItem.map((item) => {
                        if (item.id === action.payload) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    }),
                };
            }
            return {
                ...state,
                cartItem: [...state.cartItem, { id: action.payload, quantity: 1 }],
            };

        case "DECREASE_QUANTITY":
            if (isAlreadyInCart?.quantity === 1) {
                return {
                    ...state,
                    cartItem: state.cartItem.filter((item) => item.id !== action.payload),
                };
            }
            return {
                ...state,
                cartItem: state.cartItem.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                }),
            };

        case "REMOVE_CART":
            if (isAlreadyInCart) {
                return {
                    ...state,
                    cartItem: state.cartItem.filter((item) => item.id !== action.payload),
                };
            }
            break;
        default:
            return state;
    }
};

export default cartReducer;
