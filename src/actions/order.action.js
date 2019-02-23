import types from '../constant/actionTypes';
import { makeAPIRequest } from '../helpers/axios.config';

const { PLACE_ORDER, PLACE_ORDER_SUCCESS, PLACE_ORDER_ERROR } = types;

const OrderAction = {
  placeOrder: (orderData, history, hideModal) => async dispatch => {
    dispatch({
      type: PLACE_ORDER,
      payload: {
        isLoading: true,
        orderComplete: false,
        message: null,
        hasError: false,
        orderError: null,
      },
    });
    try {
      const res = await makeAPIRequest('/orders', { method: 'POST', body: orderData });
      localStorage.setItem('userPhoneNumber', orderData.phoneNumber);
      localStorage.setItem('userAddress', orderData.deliveryAddress);
      dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: {
          isLoading: false,
          hasError: false,
          orderComplete: true,
          orderError: null,
          message: res.message,
        },
      });
      setTimeout(() => {
        hideModal();
        dispatch({
          type: types.HIDE_ORDER_MESSAGE,
          payload: {
            hasError: false,
            orderComplete: false,
            orderError: null,
          },
        });
        history.push('/orders');
      }, 1300);
    } catch (error) {
      const errorObject = JSON.parse(JSON.stringify(error));
      const { response } = errorObject;
      if (response) {
        dispatch({
          type: PLACE_ORDER_ERROR,
          payload: {
            isLoading: false,
            hasError: true,
            orderError: Object.values(response.data.error),
          },
        });
        setTimeout(() => {
          dispatch({
            type: types.HIDE_ORDER_MESSAGE,
            payload: {
              hasError: false,
              orderComplete: false,
              orderError: null,
            },
          });
        }, 1000);
        return;
      }
      dispatch({
        type: PLACE_ORDER_ERROR,
        payload: {
          isLoading: false,
          hasError: true,
          orderError: [error.message],
        },
      });
      setTimeout(() => {
        dispatch({
          type: types.HIDE_ORDER_MESSAGE,
          payload: {
            hasError: false,
            orderComplete: false,
            orderError: null,
          },
        });
      }, 1000);
    }
  },
};

export default OrderAction;
