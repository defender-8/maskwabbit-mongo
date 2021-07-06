import axios from 'axios';

import clientActionTypes from './client-action-types';

export const getOne = (id, token) => {
  const endpoint = `/clients/${id}`;

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return async dispatch => {
    dispatch({
      type: clientActionTypes.RESET_CLIENT_MESSAGE,
    });
    dispatch({
      type: clientActionTypes.RESET_CLIENT,
    });

    try {
      const res = await axios.get(endpoint, config);
      const data = res.data;
      dispatch({
        type: clientActionTypes.GET_CLIENT,
        payload: data.user,
      });
    } catch (err) {
      let payload;

      if (err.response.data.message) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }

      dispatch({
        type: clientActionTypes.GET_CLIENT_ERROR,
        payload,
      });
    }
  };
};

export const postChangePassword = (formData, token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return async dispatch => {
    dispatch({
      type: clientActionTypes.RESET_CLIENT_MESSAGE_ONLY,
    });
    try {
      const res = await axios.post('/change-password', formData, config);
      const data = res.data;
      dispatch({
        type: clientActionTypes.POST_CHANGE_PASSWORD,
        payload: data.message,
      });
    } catch (err) {
      let payload;

      if (err.response.data.message) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }

      dispatch({
        type: clientActionTypes.GET_CLIENT_ERROR,
        payload,
      });
    }
  };
};

export const put = (id, formData, token) => {
  const endpoint = `/clients/${id}`;

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return async dispatch => {
    dispatch({
      type: clientActionTypes.RESET_CLIENT_MESSAGE,
    });
    try {
      const res = await axios.put(endpoint, formData, config);
      const data = res.data;
      dispatch({
        type: clientActionTypes.PUT_CLIENT,
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
        type: clientActionTypes.GET_CLIENT_ERROR,
        payload,
      });
    }
  };
};
