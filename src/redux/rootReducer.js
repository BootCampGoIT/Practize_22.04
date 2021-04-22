import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: () => [],
});

export default rootReducer;
