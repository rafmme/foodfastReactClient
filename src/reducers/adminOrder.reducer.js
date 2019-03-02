import types from '../constant/actionTypes';

const initialState = {
  isLoading: false,
  hasError: false,
  fetchOrdersError: null,
  orders: [],
  processedOrders: [],
  completedOrders: [],
  newOrders: [],
  orderError: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ORDERS:
      return {
        ...state,
        ...action.payload,
      };
    case types.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.GET_ALL_ORDERS_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
