import cartActionTypes from './cart-action-types';
import { addItemToCart, removeItemFromCart } from './cart-utils';

const initialState = {
  cartItems: [],
};

function cartReducer(state = initialState, action) {
  const { cartItems } = state;
  const { payload } = action;

  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(cartItems, payload),
      };
    case cartActionTypes.REMOVE_ITEM :
      return {
        ...state,
        cartItems: removeItemFromCart(cartItems, payload),
      };
    case cartActionTypes.CLEAR_ITEM :
      return {
        ...state,
        cartItems: cartItems.filter(item => item.product._id !== payload.product._id),
      };
    case cartActionTypes.RESET_CART :
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
}

export default cartReducer;
