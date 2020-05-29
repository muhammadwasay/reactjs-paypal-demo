import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCartApp from './ShoppingCartApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShoppingCartApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
