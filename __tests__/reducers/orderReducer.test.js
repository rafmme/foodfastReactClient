import orderReducer from '../../src/reducers/order.reducer';
import types from '../../src/constant/actionTypes';

const initialState = {
  isLoading: false,
  hasError: false,
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

  it('update the state for HIDE_ORDER_MESSAGE action', () => {
    const payload = {
      hasError: false,
      orderComplete: false,
      orderError: null,
    };

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
