import React from 'react';
import './ShoppingCartApp.css';
import {Route, Switch} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import ProductCatalogPage from "./components/ProductCatalogPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import PaymentStatusPage from "./components/PaymentStatusPage";

export default function ShoppingCartApp() {
    return (
        <div>
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={AboutPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/store" component={ProductCatalogPage}/>
                <Route path="/cart" component={CartPage}/>
                <Route path="/checkout" component={CheckoutPage}/>
                <Route path="/payment-status" component={PaymentStatusPage}/>
                {/*<Route exact path="/">
                    <AboutPage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route path="/store">
                    <ProductCatalogPage/>
                </Route>
                <Route path="/cart">
                    <CartPage/>
                </Route>
                <Route path="/checkout">
                    <CheckoutPage/>
                </Route>
                <Route path="/payment-status">
                    <PaymentStatusPage/>
                </Route>*/}
            </Switch>
        </div>
    );
}
