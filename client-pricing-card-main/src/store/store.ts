import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pricingCardReducer from "./PricingCardSlice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  pricingCard: pricingCardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
