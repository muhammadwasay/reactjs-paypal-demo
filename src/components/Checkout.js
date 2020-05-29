import React from "react";
import { connect } from "react-redux";
import { proceedToCheckout } from "../app/actions";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";

class CheckoutButton extends React.Component {

  handleCheckout = () => {
    let noOfItems = 0;
    let paymentAmount = 0.0;
    this.props.cartData.map((cartItem, index) => (
        paymentAmount = paymentAmount + cartItem.price
    ))
    this.props.cartData.map((cartItem, index) => (
        noOfItems++
    ))
    this.props.proceedToCheckout({
      noOfItems : noOfItems,
      paymentAmount : paymentAmount
    });
  };

  render() {
    return (
        <div>
          <Button variant="primary"
                  onClick={this.handleCheckout} href={"#checkout"}>
            Checkout
          </Button>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const cartData = state.store.cart;
  return { cartData };
};

export default withRouter(connect(mapStateToProps,{ proceedToCheckout })(CheckoutButton));