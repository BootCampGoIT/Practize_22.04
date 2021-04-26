import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const middleWares = [thunk];

const enhancer = applyMiddleware(...middleWares);

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};
const store = createStore(
  persistReducer(cartPersistConfig, rootReducer),
  composeWithDevTools(enhancer)
);
persistStore(store);

export default store;
