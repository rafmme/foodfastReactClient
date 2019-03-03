import adminOrderReducer from '../../src/reducers/adminOrder.reducer';
import types from '../../src/constant/actionTypes';
import mockOrders from '../../__mocks__/mockOrders';

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

describe('Admin Order Reducer', () => {
  it('returns the initial state', () => {
    expect(adminOrderReducer(undefined, {})).toEqual(initialState);
  });

  it('update the state for GET_ALL_ORDERS action', () => {
    const payload = {
      isLoading: true,
      hasError: false,
      fetchOrdersError: null,
      orders: [],
      processedOrders: [],
      completedOrders: [],
      newOrders: [],
    };

    expect(
      adminOrderReducer(initialState, {
        type: types.GET_ALL_ORDERS,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for GET_ALL_ORDERS_SUCCESS action', () => {
    const payload = {
      isLoading: false,
      hasError: false,
      orders: mockOrders,
      newOrders: mockOrders.filter(order => order.status === 'New'),
      completedOrders: mockOrders.filter(order => order.status === 'Complete'),
      processedOrders: mockOrders.filter(order => order.status === 'Processing'),
    };

    expect(
      adminOrderReducer(initialState, { type: types.GET_ALL_ORDERS_SUCCESS, payload }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for GET_ALL_ORDERS_ERROR action', () => {
    const payload = {
      isLoading: false,
      hasError: true,
      fetchOrdersError: { message: "Couldn't fetch all orders" },
    };
    expect(
      adminOrderReducer(initialState, {
        type: types.GET_ALL_ORDERS_ERROR,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });
});
