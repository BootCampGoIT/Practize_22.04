import { createStore, applyMiddleware, bindActionCreators } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import axios from "axios";
// import axios from "axios";

const loggerMiddleware = (store) => (next) => (action) => {
  console.group();
  console.log(action);
  console.groupEnd();

  return next(action);
};

const spyMiddleware = (store) => (next) => async (action) => {
  // if (action.type === "@products/addProducts") {
  //   await axios.post(`https://bootcamp5-default-rtdb.firebaseio.com/spy.json`, {
  //     data: action.payload,
  //     date: Date.now(),
  //     local: window.parent.localStorage["persist:courses"],
  //   });
  // }

  return next(action);
};

const middleWares = [thunk, spyMiddleware, loggerMiddleware];

const enhancer = applyMiddleware(...middleWares);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;

// console.log(store.getState().products.items);
