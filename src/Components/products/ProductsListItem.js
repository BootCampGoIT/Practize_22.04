import React from 'react';
import { productListItemById } from '../../redux/products/productsSelectors';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';

const ProductsListItem = ({ product, addToCart }) => {
  const onAddToCart = () => {
    addToCart(product);
  };

  return (
    <li
      style={{
        border: '1px solid cornflowerblue',
        borderRadius: '14px',
        padding: '10px',
        margin: '10px 0',
        textAlign: 'center',
        width: '200px',
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <button type="button" onClick={onAddToCart}>
        Add to cart
      </button>
    </li>
  );
};
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.id);
  return {
    product: productListItemById(state, ownProps.id),
  };
};

export default connect(mapStateToProps, { addToCart })(ProductsListItem);
