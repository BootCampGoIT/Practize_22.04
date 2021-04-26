import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { createOrderOperation } from "../../redux/cart/cartOperations";

import CartListItem from "./CartListItem";

const CartList = ({ products, createOrderOperation }) => {
  const createOrder = () => {
    const productsId = products.map((item) => item.id);
    createOrderOperation(productsId);
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

export default connect(mapStateToProps, { createOrderOperation })(CartList);
