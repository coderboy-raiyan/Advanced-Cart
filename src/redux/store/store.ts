/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable default-param-last */
import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState: any = {
    count: 0,
};

const countReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD":
            return { ...state, count: action.payload };

        default:
            return state;
    }
};

const store = createStore(combineReducers(countReducer), composeWithDevTools());

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
