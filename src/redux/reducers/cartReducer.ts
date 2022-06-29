/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable no-unused-vars */

const initialState: { cartItem: any[]; currentItem: any; isCartOpen: boolean } = {
    cartItem: [],
    currentItem: {},
    isCartOpen: false,
};

const cartReducer = (state = initialState, action: { type: string; payload: any }) => {
    switch (action.type) {
        case "GET_CURRENT_ITEM":
            return {
                ...state,
                currentItem: state.cartItem.find((item) => item.id === action.payload),
            };

        case "INCREASE_QUANTITY":
            const isAlreadyInCart = state.cartItem.find((item) => item.id === action.payload.id);

            if (isAlreadyInCart) {
                return {
                    ...state,
                    cartItem: state.cartItem.map((item) => {
                        if (item.id === action.payload.id) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    }),
                };
            }
            return {
                ...state,
                cartItem: [...state.cartItem, { ...action.payload, quantity: 1 }],
            };

        case "DECREASE_QUANTITY":
            if (isAlreadyInCart?.quantity === 1) {
                return {
                    ...state,
                    cartItem: state.cartItem.filter((item) => item.id !== action.payload.id),
                };
            }
            return {
                ...state,
                cartItem: state.cartItem.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                }),
            };

        case "REMOVE_CART":
            if (isAlreadyInCart) {
                return {
                    ...state,
                    cartItem: state.cartItem.filter((item) => item.id !== action.payload.id),
                };
            }
            break;

        case "OPEN_CART":
            return {
                ...state,
                isCartOpen: action.payload,
            };
        case "CLOSE_CART":
            return {
                ...state,
                isCartOpen: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
