import React from "react";
import ProductsListItem from "./ProductsListItem";
import { connect } from "react-redux";
import {
  filteredProductsSelector,
} from "../../redux/products/productsSelectors";

const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.map(({ id }) => (
        <ProductsListItem id={id} key={id} />
      ))}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    products: filteredProductsSelector(state),
  };
};

export default connect(mapStateToProps)(ProductsList);

// [{}, {}] === "100100101001010010101"

