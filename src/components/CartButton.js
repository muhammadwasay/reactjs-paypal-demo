import React from "react";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";
import Badge from "react-bootstrap/Badge";

class CartButton extends React.Component {

    render() {
        return (
            <Button variant="primary" href="#cart" >
                Cart <Badge variant="light" >{this.props.cartData.length}</Badge>
                <span className="sr-only">items in cart</span>
            </Button>
        );
    }
}

const mapStateToProps = state => {
    const cartData = state.store.cart;
    return { cartData };
};

export default withRouter(connect(mapStateToProps)(CartButton));