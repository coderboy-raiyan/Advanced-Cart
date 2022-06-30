/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import cartReducer from "redux/reducers/cartReducer";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
