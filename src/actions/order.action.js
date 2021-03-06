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
  getUserOrders: userId => async dispatch => {
    dispatch({
      type: types.GET_USER_ORDERS,
      payload: {
        isLoading: true,
        hasError: false,
        fetchOrdersError: null,
        orders: [],
        processedOrders: [],
        completedOrders: [],
        newOrders: [],
      },
    });
    try {
      const res = await makeAPIRequest(`/users/${userId}/orders/`);
      dispatch({
        type: types.GET_USER_ORDERS_SUCCESS,
        payload: {
          isLoading: false,
          hasError: false,
          orders: res.orders,
          newOrders: res.orders.filter(order => order.status === 'New'),
          completedOrders: res.orders.filter(order => order.status === 'Complete'),
          processedOrders: res.orders.filter(order => order.status === 'Processing'),
        },
      });
    } catch (error) {
      dispatch({
        type: types.GET_USER_ORDERS_ERROR,
        payload: {
          isLoading: false,
          hasError: true,
          fetchOrdersError: { message: "Couldn't fetch your order history" },
        },
      });
    }
  },
  fetchOrder: order => async dispatch => {
    dispatch({
      type: types.FETCH_ORDER,
      payload: {
        order,
      },
    });
  },
  removeOrder: () => async dispatch => {
    dispatch({
      type: types.REMOVE_ORDER,
      payload: {
        order: null,
      },
    });
  },
  getAllOrders: () => async dispatch => {
    dispatch({
      type: types.GET_ALL_ORDERS,
      payload: {
        isLoading: true,
        hasError: false,
        fetchOrdersError: null,
        orders: [],
        processedOrders: [],
        completedOrders: [],
        newOrders: [],
      },
    });
    try {
      const res = await makeAPIRequest(`/orders/`);
      dispatch({
        type: types.GET_ALL_ORDERS_SUCCESS,
        payload: {
          isLoading: false,
          hasError: false,
          orders: res.orders,
          newOrders: res.orders.filter(order => order.status === 'New'),
          completedOrders: res.orders.filter(order => order.status === 'Complete'),
          processedOrders: res.orders.filter(order => order.status === 'Processing'),
        },
      });
    } catch (error) {
      dispatch({
        type: types.GET_ALL_ORDERS_ERROR,
        payload: {
          isLoading: false,
          hasError: true,
          fetchOrdersError: { message: "Couldn't fetch all orders" },
        },
      });
    }
  },
  updateOrder: (newOrderStatus, orderId) => async dispatch => {
    dispatch({
      type: types.UPDATE_OPDER,
      payload: {
        orderUpdateMessage: null,
        updateOrder: true,
        orderUpdated: false,
      },
    });
    /* istanbul ignore next */
    try {
      await makeAPIRequest(`/orders/${orderId}/`, {
        method: 'PUT',
        body: { status: newOrderStatus },
      });
      dispatch({
        type: types.UPDATE_ORDER_SUCCESS,
        payload: {
          orderUpdateMessage: `Order #${orderId.slice(0, 8)} status is now ${newOrderStatus}`,
          updateOrder: false,
          orderUpdated: true,
        },
      });

      setTimeout(async () => {
        dispatch({
          type: types.HIDE_ORDER_MESSAGE,
          payload: {
            orderUpdateMessage: null,
            updateOrder: false,
            orderUpdated: false,
          },
        });

        dispatch({
          type: types.GET_ALL_ORDERS,
          payload: {
            isLoading: true,
            hasError: false,
            fetchOrdersError: null,
            orders: [],
            processedOrders: [],
            completedOrders: [],
            newOrders: [],
          },
        });

        const res = await makeAPIRequest(`/orders/`);
        dispatch({
          type: types.GET_ALL_ORDERS_SUCCESS,
          payload: {
            isLoading: false,
            hasError: false,
            orders: res.orders.reverse(),
            newOrders: res.orders.filter(order => order.status === 'New'),
            completedOrders: res.orders.filter(order => order.status === 'Complete'),
            processedOrders: res.orders.filter(order => order.status === 'Processing'),
          },
        });
      }, 1350);
    } catch (error) {
      dispatch({
        type: types.UPDATE_ORDER_ERROR,
        payload: {
          updateOrder: false,
          orderUpdated: false,
        },
      });
    }
  },
};

export default OrderAction;
