/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "redux/reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppState = ReturnType<typeof store.getState>;

export default store;
