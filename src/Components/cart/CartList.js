import axios from "axios";
import React from "react";
import { connect } from "react-redux";

import CartListItem from "./CartListItem";

const CartList = ({ products }) => {
  const createOrder = () => {
    const order = products.map((item) => item.id);
    axios.post(
      `https://bootcamp5-default-rtdb.firebaseio.com/orders.json`,
      order
    );
  };
  return (
    <>
      <ul>
        {products.map(({ id }) => (
          <CartListItem id={id} key={id} />
        ))}
      </ul>
      <button type='button' onClick={createOrder}>
        Create order
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.cart,
});

export default connect(mapStateToProps)(CartList);
