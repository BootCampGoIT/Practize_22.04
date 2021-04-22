import React, { Component } from "react";
import { addProductsOperation } from "../../redux/products/productsOperations";
import { connect } from "react-redux";
import { productsListSelector } from "../../redux/products/productsSelectors";

class ProductsForm extends Component {
  state = {
    name: "",
    price: "",
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.props.products.some((item) => item.name === this.state.name)) {
      const product = this.props.products.find(
        (item) => item.name === this.state.name
      );
      alert(`продукт с именем "${product.name}"  существует!`);
      return;
    }
    this.props.addProductsOperation(this.state);
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, price } = this.state;
    return (
      <>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={name}
              name='name'
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Price:
            <input
              type='text'
              value={price}
              name='price'
              onChange={this.onHandleChange}
            />
          </label>
          <button type='submit'>Add product</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: productsListSelector(state),
  };
};

export default connect(mapStateToProps, { addProductsOperation })(ProductsForm);




