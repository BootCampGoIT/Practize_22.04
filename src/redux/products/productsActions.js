export const GETPRODUCTS = "@products/getProducts";
export const ADDPRODUCT = "@products/addProducts";
export const SETFILTER = "@products/setFilter";
export const SETLOADING = "@products/setLoading";
export const SETCOUNTER = "@products/setCounter";

// const products = [{name: "Milk", price: 20}, {name: "Bread", price: 10}]
const getProducts = (products) => ({
  type: GETPRODUCTS,
  payload: products,
});

// const product = {name: "Milk", price: 20}
const addProduct = (product) => ({
  type: ADDPRODUCT,
  payload: product,
});

// const value = "mil"
const setFilter = (value) => ({
  type: SETFILTER,
  payload: value,
});

const loading = () => ({
  type: SETLOADING,
});
const setCounter = () => ({
  type: SETCOUNTER,
});

export { getProducts, addProduct, setFilter, loading, setCounter };
