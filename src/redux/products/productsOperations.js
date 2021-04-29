import axios from "axios";
import { addProduct, getProducts, loading } from "./productsActions";

export const getProductsOperation = () => async (dispatch, getState) => {
  if (getState().products.items.length) return;
  dispatch(loading());
  try {
    const response = await axios.get(
      `https://bootcamp5-default-rtdb.firebaseio.com/products.json`
    ); //null

    if (response.data) {
      const products = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getProducts(products));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loading());
  }
};

export const addProductsOperation = (product) => async (dispatch, getState) => {
  const token = getState().auth.idToken;
  dispatch(loading());
  try {
    if (!getState().products.items.length) {
      dispatch(getProductsOperation());
    }
    const response = await axios.post(
      `https://bootcamp5-default-rtdb.firebaseio.com/products.json`,
      product,
      {
        params: {
          auth: token,
        },
      }
    );
    response.data &&
      dispatch(addProduct({ id: response.data.name, ...product }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loading());
  }
};
