import React from "react";
import { setFilter } from "../../redux/products/productsActions";
import { connect } from "react-redux";
import { filterSelector } from "../../redux/products/productsSelectors";

const ProductsFilter = ({ filter, setFilter }) => {
  const onHandleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <label>
      Filter:
      <input type='text' onChange={onHandleChange} value={filter} />
    </label>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: filterSelector(state),
  };
};

export default connect(mapStateToProps, { setFilter })(ProductsFilter);
