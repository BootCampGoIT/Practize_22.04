import axios from "axios";
import { addProduct, getProducts, loading } from "./productsActions";

export const getProductsOperation = () => async (dispatch, getState) => {
  dispatch(loading());
  try {
    const response = await axios.get(
      `https://bootcamp5-default-rtdb.firebaseio.com/products.json`
    ); //null
    console.log(response);

    if (response.data) {
      const products = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getProducts(products));
    }
    //()=>({type: "addProduct", payload: response}) => reducer
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
    const response = await axios.post(
      `https://bootcamp5-default-rtdb.firebaseio.com/products.json`,
      product,
      {
        params: {
          auth: token,
        },
      }
    );

    // axios.post(
    //   `dxgfhjk`,
    //   {},
    //   {
    //     headers: {
    //       Authorization: "Bearer ghk.cdzhckd,cjdkfkjdskfjdsdfdshfhdsf",
    //     },
    //   }
    // );

    console.log("post", response);
    response.data &&
      dispatch(addProduct({ id: response.data.name, ...product }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loading());
  }
};
