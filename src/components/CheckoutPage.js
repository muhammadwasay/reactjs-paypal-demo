import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PayPalButton from "./PayPal";

const CheckoutPage = ({ checkoutData }) => {

    return (
        <Container>
            <Row>
                <h3>Checkout Page</h3>
            </Row>
            {/*<Row>
                <div>
                    Script loaded: <b>{loaded.toString()}</b>
                    Script error: <b>{error.toString()}</b>
                </div>
            </Row>*/}
            <Row>
                <div>
                    <h4>No of Items: {checkoutData.noOfItems}</h4>
                    <h4>Total payment amount: $ {checkoutData.paymentAmount}</h4>
                </div>
            </Row>
            <PayPalButton/>
        </Container>
    );
}

const mapStateToProps = state => {
    const checkoutData = state.store.checkout;
    return { checkoutData };
};
export default connect(mapStateToProps)(CheckoutPage);
