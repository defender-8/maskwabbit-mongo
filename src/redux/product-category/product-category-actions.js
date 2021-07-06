import axios from 'axios';

import prodCatActionTypes from './product-category-action-types';

// GET
export const getArr = (endpoint) => {

  return async dispatch => {
    dispatch({
      type: prodCatActionTypes.RESET_PROD_CAT_MESSAGE,
    });
    dispatch({
      type: prodCatActionTypes.RESET_PROD_CATS,
    });
    try {
      const res = await axios.get(endpoint);
      const data = res.data;
      dispatch({
        type: prodCatActionTypes.GET_PROD_CATS,
        payload: data.prodCats,
      });
    } catch (err) {
      let payload;

      if (err.response.data.message) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }

      dispatch({
        type: prodCatActionTypes.GET_PROD_CAT_ERROR,
        payload,
      });
    }
  };
};

export const getOne = (id) => {
  const endpoint = `/product-categories/${id}`;

  return async dispatch => {
    dispatch({
      type: prodCatActionTypes.RESET_PROD_CAT_MESSAGE,
    });
    dispatch({
      type: prodCatActionTypes.RESET_PROD_CAT,
    });
    try {
      const res = await axios.get(endpoint);
      const data = res.data;
      dispatch({
        type: prodCatActionTypes.GET_PROD_CAT,
        payload: data.prodCat,
      });
    } catch (err) {
      let payload;

      if (err.response.data.message) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }

      dispatch({
        type: prodCatActionTypes.GET_PROD_CAT_ERROR,
        payload,
      });
    }
  };
};
