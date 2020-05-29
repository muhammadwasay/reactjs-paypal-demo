import React from "react";
import {connect} from "react-redux";
import {paymentStatusUpdate} from "../app/actions";
import Button from "react-bootstrap/Button";
import {useScript} from "../app/LoadScript";

class PayPalButton extends React.Component {
    constructor(props) {
        super(props);
        this.loadScriptResponse = {};
    };

    //this.loadScriptResponse = useScript('https://www.paypal.com/sdk/js?client-id=AQZ6f1ZuaeA4wB7iXh7texfqM269P7wRKXxOv8VcBEYTuIQfqd9Rl8HvVWAK-AbH2p3v03ilScvr90PM');

    handlePayment = () => {
        this.props.paymentStatusUpdate({
            status: "SUCCESS",
            orderNo: "5M02405993755232L",
            emailAddress: "sb-atlav1870725@personal.example.com"
        });
    };

    render() {
        return (
            <div>
                {/*<div>
                    Script loaded: <b>{this.loadScriptResponse.loaded.toString()}</b>
                    Script error: <b>{this.loadScriptResponse.error.toString()}</b>
                </div>*/}
                <Button variant="primary"
                        onClick={this.handlePayment}>
                    PayPal
                </Button>
            </div>
        );
    }
}

export default connect(null, {paymentStatusUpdate})(PayPalButton);