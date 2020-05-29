import React, { useState, useRef, useEffect } from "react";
import {connect} from "react-redux";
import {useScript} from "../app/LoadScript";
import {withRouter} from "react-router-dom";

const PayPalButton = ({checkoutData}) => {
    const payPalButtonRef = useRef();
    const clientId='AQZ6f1ZuaeA4wB7iXh7texfqM269P7wRKXxOv8VcBEYTuIQfqd9Rl8HvVWAK-AbH2p3v03ilScvr90PM';
    const currency='USD'
    const [scriptLoaded, scriptError] = useScript('https://www.paypal.com/sdk/js?client-id='+clientId+'&currency='+currency);
    const [containerRendered, setContainerRendered] = useState(false);
    const [buttonRendered, setButtonRendered] = useState(false);

    useEffect(() => {
        if(scriptError){
            console.log("script loading error"+scriptError);
        }

        if(scriptLoaded){
            setContainerRendered(true);
        }

        if(containerRendered && !buttonRendered){
            setButtonRendered(true);
            window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: checkoutData.paymentAmount,
                                    },
                                },
                            ],
                        });
                    },

                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        //setPaidFor(true);
                        console.log(order);
                        console.log(order.id);
                        console.log(order.update_time);
                        console.log(order.payer.email_address);
                        console.log(order.payer.name.given_name);
                        console.log(order.status);
                        console.log(order.purchase_units[0].amount.value);
                    },

                    onError: err => {
                        //setError(err);
                        console.error(err);
                    },

                }).render(payPalButtonRef.current);
        }
    },[scriptLoaded, scriptError, containerRendered, buttonRendered, checkoutData.paymentAmount]);

    return (
        <>
            <div>{checkoutData.paymentAmount}</div>
            <div>
                {/*{containerRendered ? <div id="paypal-button-container"></div> : 'Loading...'}*/}
                {containerRendered ? <div ref={payPalButtonRef} /> : 'Loading...'}
            </div>
        </>
    );
}

const mapStateToProps = state => {
    const checkoutData = state.store.checkout;
    return {checkoutData};
};

export default withRouter(connect(mapStateToProps)(PayPalButton));
