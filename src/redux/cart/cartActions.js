export const ADDTOCART = '@cart/addToCart';
export const DELETEFROMCART = '@cart/deleteFromCart';
// const ADDTOCART = '@cart/addToCart'

export const addToCart = product => ({
  type: ADDTOCART,
  payload: product,
});

export const deleteFromCart = id => ({
  type: DELETEFROMCART,
  payload: id,
});
