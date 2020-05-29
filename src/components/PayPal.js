import React from "react";
import { connect } from "react-redux";
import { paymentStatusUpdate } from "../app/actions";
import Button from "react-bootstrap/Button";
import {useScript} from "../app/LoadScript";

class PayPalButton extends React.Component {
  constructor(props) {
    super(props);
  };

  handlePayment = () => {
    this.props.paymentStatusUpdate({
        status : "SUCCESS",
          orderNo : "5M02405993755232L",
          emailAddress : "sb-atlav1870725@personal.example.com"
  });
  };

  render() {
    return (
        <div>
          <Button variant="primary"
                  onClick={this.handlePayment}>
            Dummy Payment
          </Button>
        </div>
    );
  }
}

export default connect(null,{ paymentStatusUpdate })(PayPalButton);