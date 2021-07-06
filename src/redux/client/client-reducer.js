import clientActionTypes from './client-action-types';

const initialState = {
  user: null,
  isLoading: true,
  successMessage: null,
  errorMessage: null,
};

function clientReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case clientActionTypes.RESET_CLIENT_MESSAGE :
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        errorMessage: null,
      };
    case clientActionTypes.RESET_CLIENT_MESSAGE_ONLY :
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      };
    case clientActionTypes.RESET_CLIENT :
      return {
        ...state,
        isLoading: true,
        user: null,
      };
    case clientActionTypes.GET_CLIENT :
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case clientActionTypes.POST_CHANGE_PASSWORD :
      return {
        ...state,
        isLoading: false,
        successMessage: payload,
      };
    case clientActionTypes.PUT_CLIENT :
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        successMessage: payload.message,
      };
    case clientActionTypes.GET_CLIENT_ERROR :
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default :
      return state;
  }
}

export default clientReducer;
