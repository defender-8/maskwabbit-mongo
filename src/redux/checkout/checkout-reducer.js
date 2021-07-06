import checkoutActionTypes from './checkout-action-types';

const initialState = {
  session: null,
  successMessage: null,
  errorMessage: null,
};

function checkoutReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case checkoutActionTypes.RESET_CHECKOUT_MESSAGE :
      return {
        ...state,
        successMessage: null,
        errorMessage: null,
      };
    case checkoutActionTypes.POST_CHECKOUT:
      return {
        ...state,
        session: payload,
      };
    case checkoutActionTypes.GET_CHECKOUT_ERROR :
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
}

export default checkoutReducer;
