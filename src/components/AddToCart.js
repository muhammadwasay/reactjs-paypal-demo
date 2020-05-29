import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../app/actions";
import Button from "react-bootstrap/Button";

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.catalogItem = props.catalogItem;
  }

  handleAddCart = () => {
    this.props.addToCart(this.catalogItem);
  };

  render() {
    return (
        <div>
          <Button variant="primary"
                  onClick={this.handleAddCart}>
            Add to cart
          </Button>
        </div>
    );
  }
}

export default connect(null,{ addToCart })(AddToCartButton);