import React from "react";
import ProductsListItem from "./ProductsListItem";
import { useSelector } from "react-redux";
import {
  filteredProductsSelector,
} from "../../redux/products/productsSelectors";

const ProductsList = () => {
  const products = useSelector(filteredProductsSelector)
  return (
    <ul>
      {products.map(({ id }) => (
        <ProductsListItem id={id} key={id} />
      ))}
    </ul>
  );
};

export default ProductsList;


