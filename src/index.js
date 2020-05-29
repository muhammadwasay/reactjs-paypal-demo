import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ShoppingCartApp from './ShoppingCartApp'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './app/store';

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <ShoppingCartApp />
    </Provider>,
    rootElement
);
