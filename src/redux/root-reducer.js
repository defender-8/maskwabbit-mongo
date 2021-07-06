import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-reducer';
import clientReducer from './client/client-reducer';
import productReducer from './product/product-reducer';
import prodCatReducer from './product-category/product-category-reducer';
import cartReducer from './cart/cart-reducer';
import checkoutReducer from './checkout/checkout-reducer';
import orderReducer from './order/order-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  product: productReducer,
  prodCat: prodCatReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
