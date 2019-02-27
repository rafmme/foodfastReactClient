import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { axiosInstance } from '../../src/helpers/axios.config';
import types from '../../src/constant/actionTypes';
import MenuAction from '../../src/actions/menu.action';
import mockMenu from '../../__mocks__/mockMenu';

const mock = new MockAdapter(axiosInstance);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetch Menu async actions', () => {
  it('creates FETCH_MENU_ERROR when fetching of menu fails due to network error', done => {
    mock.onGet('/menu').networkError();

    const expectedActions = [
      {
        type: types.FETCH_MENU,
        payload: { isLoading: true },
      },
      {
        type: types.FETCH_MENU_ERROR,
        payload: {
          isLoading: false,
          hasError: true,
          fetchMenuError: { message: "Error!!! Couldn't fetch the menu" },
        },
      },
    ];

    const store = mockStore({ menu: [] });

    return store.dispatch(MenuAction.fetchMenu()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates FETCH_MENU_SUCCESS when fetching of menu is successful', done => {
    mock.onGet('/menu').reply(200, {
      success: true,
      status: 200,
      message: 'Menu was fetched successful',
      menu: mockMenu,
    });

    const expectedActions = [
      {
        type: types.FETCH_MENU,
        payload: {
          isLoading: true,
        },
      },
      {
        type: types.FETCH_MENU_SUCCESS,
        payload: {
          isLoading: false,
          hasError: false,
          menu: mockMenu,
          fetchMenuError: null,
        },
      },
    ];

    const store = mockStore({ menu: [] });

    return store.dispatch(MenuAction.fetchMenu()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('dispatch FETCH_MEAL action when fetching a particular meal', done => {
    const expectedActions = [
      {
        type: types.FETCH_MEAL,
        payload: {
          meal: mockMenu[0],
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(MenuAction.fetchMeal(mockMenu[0])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('dispatches the REMOVE_MEAL action when removing the meal object from store', done => {
    const expectedActions = [
      {
        type: types.REMOVE_MEAL,
        payload: {
          meal: {},
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(MenuAction.removeMeal()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
