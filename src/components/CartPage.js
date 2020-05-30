import React from "react";
import {connect} from "react-redux";
import Cart from "./Cart";
import CheckoutButton from "./Checkout";
import {withRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const CartPage = ({cartData}) => (
    <Container>
        <Row>
            <div>
                <h3>Cart</h3>
                {cartData.length ? <CheckoutButton/> : <div>Your CART is empty!</div>}
                <br/>
                <Cart cartData={cartData}/>
            </div>
        </Row>
    </Container>
);

const mapStateToProps = state => {
    const cartData = state.store.cart;
    return {cartData};
};
export default withRouter(connect(mapStateToProps)(CartPage));
