import React from 'react'
import CartItem from './CartItem'

let key = 1;
const Cart = ({ cartData }) => (
    <ul>
        {cartData.map((cartItem, index) => (
            <CartItem key={key++} cartItem={cartItem}/>
        ))}
    </ul>
)

export default Cart