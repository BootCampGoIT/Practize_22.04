import React from 'react';
import { connect } from 'react-redux';

import CartListItem from './CartListItem';

const CartList = ({ products }) => {
  return (
    <ul>
      {products.map(({ id }) => (
        <CartListItem id={id} key={id} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  products: state.cart,
});

export default connect(mapStateToProps)(CartList);
