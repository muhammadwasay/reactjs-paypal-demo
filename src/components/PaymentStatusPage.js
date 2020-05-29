import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";

const PaymentStatusPage = ({ paymentStatusData }) => (
    <Container>
        <div>
            <h3>Payment Status</h3>
            Order No : {paymentStatusData.orderId} <br/>
            Payment Status : {paymentStatusData.status} <br/>
            Name : {paymentStatusData.name} <br/>
            Email : {paymentStatusData.emailAddress} <br/>
            Time : {paymentStatusData.updateTime} <br/>
            Amount : {paymentStatusData.amount} <br/>
        </div>
    </Container>
);

const mapStateToProps = state => {
    const paymentStatusData = state.store.paymentStatus;
    return { paymentStatusData };
};
export default connect(mapStateToProps)(PaymentStatusPage);
