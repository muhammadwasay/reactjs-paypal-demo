import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './reducer'
import {PorductCatalog} from './ProductCatalogData'

export default configureStore({
  reducer: {
    store: shoppingCartReducer
  },
  preloadedState : {store : PorductCatalog}
});
