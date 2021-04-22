import { ADDTOCART, DELETEFROMCART } from './cartActions';

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADDTOCART:
      return [...state, payload];

    case DELETEFROMCART:
      return state.filter(product => product.id !== payload);

    default:
      return state;
  }
};

export default cartReducer;
