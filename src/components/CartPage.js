import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import CheckoutButton from "./Checkout";

const CartPage = ({ cartData }) => (
    <div>
        <h3>Cart Page</h3>
        <Cart cartData={cartData}/>
        <CheckoutButton />
    </div>
);

const mapStateToProps = state => {
    const cartData = state.store.cart;
    return { cartData };
};
export default connect(mapStateToProps)(CartPage);
