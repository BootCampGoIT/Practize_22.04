import {
  ADDPRODUCT,
  GETPRODUCTS,
  SETFILTER,
  SETLOADING,
  SETCOUNTER,
} from "./productsActions";
import { combineReducers } from "redux";
import { LOGOUT } from "../auth/authActions";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GETPRODUCTS:
      return [...payload];
    case ADDPRODUCT:
      return [...state, payload];
    case LOGOUT:
      return [];
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case SETFILTER:
      return payload;
    case LOGOUT:
      return "";
    default:
      return state;
  }
};
const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case SETLOADING:
      return !state;
    case LOGOUT:
      return false;

    default:
      return state;
  }
};

const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case SETCOUNTER:
      return state + 1;
    default:
      return state;
  }
};

const productsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: loadingReducer,
  counter: counterReducer,
});

export default productsReducer;
