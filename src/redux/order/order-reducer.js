import orderActionTypes from './order-action-types';

const initialState = {
  isLoading: true,
  orders: [],
  successMessage: null,
  errorMessage: null,
};

function orderReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case orderActionTypes.RESET_ORDER_MESSAGE :
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        errorMessage: null,
      };
    case orderActionTypes.RESET_ORDER_MESSAGE_ONLY :
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      };
    case orderActionTypes.RESET_ORDERS :
      return {
        ...state,
        isLoading: true,
        orders: [],
      };
    case orderActionTypes.GET_ORDERS :
      return {
        ...state,
        isLoading: false,
        orders: payload,
      };
    case orderActionTypes.GET_ORDER_ERROR :
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default :
      return state;
  }
}

export default orderReducer;
