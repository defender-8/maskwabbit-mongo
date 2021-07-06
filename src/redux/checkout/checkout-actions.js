import axios from 'axios';

import checkoutActionTypes from './checkout-action-types';

export const postCheckout = (formData, token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return async dispatch => {
    dispatch({
      type: checkoutActionTypes.RESET_CHECKOUT_MESSAGE,
    });
    try {
      const res = await axios.post('/checkout', formData, config);
      const data = res.data;
      dispatch({
        type: checkoutActionTypes.POST_CHECKOUT,
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
        type: checkoutActionTypes.GET_CHECKOUT_ERROR,
        payload,
      });
    }
  };
};


