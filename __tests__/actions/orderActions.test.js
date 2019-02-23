import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { axiosInstance } from '../../src/helpers/axios.config';
import types from '../../src/constant/actionTypes';
import OrderAction from '../../src/actions/order.action';
import mockOrders from '../../__mocks__/mockOrders';

const mock = new MockAdapter(axiosInstance);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.useFakeTimers();

describe('OrderAction Test', () => {
  it('dispatches the PLACE_ORDER_SUCCESS action when the order has been made', done => {
    const history = {
      push(str) {
        expect(str).toEqual('/orders');
      },
    };
    const hideModal = jest.fn();
    mock.onPost('/orders', {}).reply(201, {
      success: true,
      status: 201,
      message: 'Order was placed successfully',
    });

    const expectedActions = [
      {
        type: types.PLACE_ORDER,
        payload: {
          isLoading: true,
          orderComplete: false,
          message: null,
          hasError: false,
          orderError: null,
        },
      },
      {
        type: types.PLACE_ORDER_SUCCESS,
        payload: {
          isLoading: false,
          hasError: false,
          orderComplete: true,
          orderError: null,
          message: 'Order was placed successfully',
        },
      },
      {
        type: types.HIDE_ORDER_MESSAGE,
        payload: {
          hasError: false,
          orderComplete: false,
          orderError: null,
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(OrderAction.placeOrder({}, history, hideModal)).then(() => {
      jest.runAllTimers();
      expect(store.getActions()).toEqual(expectedActions);
      expect(hideModal.mock.calls.length).toEqual(1);
      done();
    });
  });

  it('dispatches the PLACE_ORDER_ERROR action when the order fails due to network error', done => {
    const hideModal = jest.fn();
    const history = jest.fn();
    mock.onPost('/orders', {}).networkError();

    const expectedActions = [
      {
        type: types.PLACE_ORDER,
        payload: {
          isLoading: true,
          orderComplete: false,
          message: null,
          hasError: false,
          orderError: null,
        },
      },
      {
        type: types.PLACE_ORDER_ERROR,
        payload: {
          isLoading: false,
          hasError: true,
          orderError: ['Network Error'],
        },
      },
      {
        type: types.HIDE_ORDER_MESSAGE,
        payload: {
          hasError: false,
          orderComplete: false,
          orderError: null,
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(OrderAction.placeOrder({}, history, hideModal)).then(() => {
      jest.runAllTimers();
      expect(store.getActions()).toEqual(expectedActions);
      expect(history.mock.calls.length).toEqual(0);
      expect(hideModal.mock.calls.length).toEqual(0);
      done();
    });
  });

  it('dispatches the PLACE_ORDER_ERROR when the order fails with bad request error', done => {
    const hideModal = jest.fn();
    const history = jest.fn();
    mock.onPost('/orders', {}).reply(400, {
      success: false,
      status: 400,
      error: { data: 'Order failed' },
    });

    const expectedActions = [
      {
        type: types.PLACE_ORDER,
        payload: {
          isLoading: true,
          orderComplete: false,
          message: null,
          hasError: false,
          orderError: null,
        },
      },
      {
        type: types.PLACE_ORDER_ERROR,
        payload: {
          isLoading: false,
          hasError: true,
          orderError: ['Order failed'],
        },
      },
      {
        type: types.HIDE_ORDER_MESSAGE,
        payload: {
          hasError: false,
          orderComplete: false,
          orderError: null,
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(OrderAction.placeOrder({}, history, hideModal)).then(() => {
      jest.runAllTimers();
      expect(store.getActions()).toEqual(expectedActions);
      expect(history.mock.calls.length).toEqual(0);
      expect(hideModal.mock.calls.length).toEqual(0);
      done();
    });
  });

  it('dispatches the GET_USER_ORDERS_SUCCESS action when the user orders was fetched', done => {
    mock.onGet('/users/rafmme/orders/', {}).reply(200, {
      success: true,
      status: 200,
      message: 'All User Orders fetched successfully',
      orders: mockOrders,
    });

    const expectedActions = [
      {
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
      },
      {
        type: types.GET_USER_ORDERS_SUCCESS,
        payload: {
          isLoading: false,
          hasError: false,
          orders: mockOrders,
          newOrders: mockOrders.filter(order => order.status === 'New'),
          completedOrders: mockOrders.filter(order => order.status === 'Complete'),
          processedOrders: mockOrders.filter(order => order.status === 'Processing'),
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(OrderAction.getUserOrders('rafmme')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('dispatches the GET_USER_ORDERS_ERROR action when the fetching user orders failed', done => {
    mock.onGet('/users/rafmme/orders/', {}).networkError();

    const expectedActions = [
      {
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
      },
      {
        type: types.GET_USER_ORDERS_ERROR,
        payload: {
          isLoading: false,
          hasError: true,
          fetchOrdersError: { message: "Couldn't fetch your order history" },
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(OrderAction.getUserOrders('rafmme')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('dispatches the REMOVE_ORDER action when removing the order object from store', done => {
    const expectedActions = [
      {
        type: types.REMOVE_ORDER,
        payload: {
          order: null,
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(OrderAction.removeOrder()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('dispatches the FETCH_ORDER action when adding the order object to the store', done => {
    const expectedActions = [
      {
        type: types.FETCH_ORDER,
        payload: {
          order: mockOrders[1],
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(OrderAction.fetchOrder(mockOrders[1])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
