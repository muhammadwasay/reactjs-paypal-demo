import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PayPalButton from "./PayPal";
import {withRouter} from "react-router-dom";

const CheckoutPage = ({checkoutData}) => {

    return (
        <Container>
            <Row>
                <h3>Checkout</h3>
            </Row>
            {checkoutData.noOfItems ? <><Row>
                <div>
                    <Row><p>No of Items: </p><strong>{checkoutData.noOfItems}</strong></Row>
                    <Row><p>Total payment amount: </p><strong>$ {checkoutData.paymentAmount}</strong></Row>
                    <br/>
                </div>
            </Row>
                <PayPalButton/></> : <div>Your CART is empty!</div>}
        </Container>
    );
}

const mapStateToProps = state => {
    const checkoutData = state.store.checkout;
    return {checkoutData};
};
export default withRouter(connect(mapStateToProps)(CheckoutPage));
