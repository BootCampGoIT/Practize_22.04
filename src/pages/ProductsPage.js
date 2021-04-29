import React, { useEffect } from "react";
import ProductsList from "../Components/products/ProductsList";
import { getProductsOperation } from "../redux/products/productsOperations";
import { useDispatch, useSelector } from "react-redux";
import ProductsFilter from "../Components/products/ProductsFilter";
import { setCounter } from "../redux/products/productsActions";


const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsOperation());
  }, [dispatch]);

  return (
    <>
      <h2>Products page</h2>
      <button onClick={() => dispatch(setCounter())}>Add value</button>
      <ProductsFilter />
      <ProductsList />
    </>
  );
};

export default ProductsPage;
