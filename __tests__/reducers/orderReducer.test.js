import orderReducer from '../../src/reducers/order.reducer';
import types from '../../src/constant/actionTypes';

const initialState = {
  isLoading: false,
  hasError: false,
  fetchOrdersError: null,
  orders: [],
  processedOrders: [],
  completedOrders: [],
  newOrders: [],
  order: null,
  orderError: null,
  orderComplete: false,
  message: null,
};

describe('Order Reducer', () => {
  it('returns the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it('update the state for PLACE_ORDER action', () => {
    const payload = {
      isLoading: true,
      orderComplete: false,
      message: null,
      hasError: false,
      orderError: null,
    };

    expect(
      orderReducer(initialState, {
        type: types.PLACE_ORDER,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for PLACE_ORDER_SUCCESS action', () => {
    const payload = {
      isLoading: false,
      hasError: false,
      orderComplete: true,
      orderError: null,
      message: 'Order was placed successfully',
    };

    expect(orderReducer(initialState, { type: types.PLACE_ORDER_SUCCESS, payload })).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for PLACE_ORDER_ERROR action', () => {
    const payload = {
      isLoading: false,
      hasError: true,
      orderError: ['Error'],
    };
    expect(
      orderReducer(initialState, {
        type: types.PLACE_ORDER_ERROR,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for FETCH_ORDER action', () => {
    const payload = {};

    expect(
      orderReducer(initialState, {
        type: types.FETCH_ORDER,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for REMOVE_ORDER action', () => {
    const payload = {};

    expect(
      orderReducer(initialState, {
        type: types.REMOVE_ORDER,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for GET_USER_ORDERS action', () => {
    const payload = {};

    expect(
      orderReducer(initialState, {
        type: types.GET_USER_ORDERS,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for GET_USER_ORDERS_SUCCESS action', () => {
    const payload = {};

    expect(
      orderReducer(initialState, {
        type: types.GET_USER_ORDERS_SUCCESS,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for GET_USER_ORDERS_ERROR action', () => {
    const payload = {};

    expect(
      orderReducer(initialState, {
        type: types.GET_USER_ORDERS_ERROR,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for HIDE_ORDER_MESSAGE action', () => {
    const payload = {};

    expect(
      orderReducer(initialState, {
        type: types.HIDE_ORDER_MESSAGE,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });
});
