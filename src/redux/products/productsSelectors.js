import { createSelector } from "reselect";

export const productsListSelector = (state) => state.products.items; //[{}, {}]

export const productListItemById = (state, id) =>
  state.products.items.find((item) => item.id === id);

export const filterSelector = (state) => state.products.filter; //"mil"

// export const filteredProductsSelector = (state) =>
//   state.products.items.filter((product) =>
//     product.name.toLowerCase().includes(state.products.filter.toLowerCase())
//   );

export const filteredProductsSelector = createSelector(
  [productsListSelector, filterSelector],
  (products, filter) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
