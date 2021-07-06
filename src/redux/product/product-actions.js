import axios from 'axios';

import productActionTypes from './product-action-types';

// GET
export const getArr = (endpoint) => {

  return async dispatch => {
    dispatch({
      type: productActionTypes.RESET_PRODUCT_MESSAGE,
    });
    dispatch({
      type: productActionTypes.RESET_PRODUCTS,
    });
    try {
      const res = await axios.get(endpoint);
      const data = res.data;
      dispatch({
        type: productActionTypes.GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      let payload;

      if (err.response.data.message) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }

      dispatch({
        type: productActionTypes.GET_PRODUCT_ERROR,
        payload,
      });
    }
  };
};
