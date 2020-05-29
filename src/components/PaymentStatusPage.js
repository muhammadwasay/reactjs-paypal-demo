import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";

const PaymentStatusPage = ({ paymentStatusData }) => (
    <Container>
        <div>
            <h3>Payment Status</h3>
            Payment Status : {paymentStatusData.status} <br/>
            Order No : {paymentStatusData.orderNo} <br/>
            Email : {paymentStatusData.emailAddress} <br/>
        </div>
    </Container>
);

const mapStateToProps = state => {
    const paymentStatusData = state.store.paymentStatus;
    return { paymentStatusData };
};
export default connect(mapStateToProps)(PaymentStatusPage);
