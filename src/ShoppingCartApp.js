import React from 'react';
import './ShoppingCartApp.css';
//import {MainNavbar} from "./app/navigation";
import CartPage from "./components/CartPage";
import ProductCatalogPage from "./components/ProductCatalogPage";
import CheckoutPage from "./components/CheckoutPage";
import PaymentStatusPage from "./components/PaymentStatusPage";

/*const ShoppingCartApp = () => (
    <MainNavbar/>
);

export default ShoppingCartApp;*/


export default function ShoppingCartApp() {
    return (
        <div>
            <ProductCatalogPage />
            <CartPage />
            <CheckoutPage />
            <PaymentStatusPage />
        </div>
    );
}
