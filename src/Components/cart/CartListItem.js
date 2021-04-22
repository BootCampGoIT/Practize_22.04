import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../redux/cart/cartActions';

const CartListItem = ({ product, deleteFromCart }) => {
  const onDeleteFromCart = () => {
    deleteFromCart(product.id);
  };

  return (
    <li>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <button type="button" onClick={onDeleteFromCart}>
        delete
      </button>
    </li>
  );
};

const mapStateToProps = (state, { id }) => ({
  product: state.cart.find(product => product.id === id),
});

export default connect(mapStateToProps, { deleteFromCart })(CartListItem);
