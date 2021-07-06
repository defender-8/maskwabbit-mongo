import axios from 'axios';

import orderActionTypes from './order-action-types';

// GET
export const getArr = (endpoint, token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return async dispatch => {
    dispatch({
      type: orderActionTypes.RESET_ORDER_MESSAGE,
    });
    dispatch({
      type: orderActionTypes.RESET_ORDERS,
    });
    try {
      const res = await axios.get(endpoint, config);
      const data = res.data;
      dispatch({
        type: orderActionTypes.GET_ORDERS,
        payload: data.orders,
      });
    } catch (err) {
      let payload;

      if (err.response.data.message) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }

      dispatch({
        type: orderActionTypes.GET_ORDER_ERROR,
        payload,
      });
    }
  };
};
