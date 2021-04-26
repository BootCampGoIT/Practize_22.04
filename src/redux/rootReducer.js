import { combineReducers } from "redux";
import authReducer from "./auth/authReducers";
import cartReducer from "./cart/cartReducers";
import productsReducer from "./products/productsReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["localId", "email", "idToken", "refreshToken"],
};
// const cartPersistConfig = {
//   key: "cart",
//   storage,
//   whitelist: ["cart"],
//   blacklist: [""],
// };

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
