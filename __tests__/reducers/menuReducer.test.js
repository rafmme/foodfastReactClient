import menuReducer from '../../src/reducers/menu.reducer';
import types from '../../src/constant/actionTypes';
import mockMenu from '../../__mocks__/mockMenu';

const initialState = {
  isLoading: false,
  hasError: false,
  fetchMenuError: null,
  menu: [],
  meal: {},
};

describe('Menu Reducer', () => {
  it('returns the initial state', () => {
    expect(menuReducer(undefined, {})).toEqual(initialState);
  });

  it('handles start fetch menu request', () => {
    expect(
      menuReducer(initialState, {
        type: types.FETCH_MENU,
        payload: {
          isLoading: true,
        },
      }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('handles fetch menu failure', () => {
    const payload = {
      isLoading: false,
      hasError: true,
      fetchMenuError: { message: "Error!!! Couldn't fetch the menu" },
    };

    expect(menuReducer(initialState, { type: types.FETCH_MENU_ERROR, payload })).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('handles fetch menu successful', () => {
    const payload = {
      isLoading: false,
      hasError: false,
      fetchMenuError: null,
      menu: [],
    };

    expect(
      menuReducer(initialState, {
        type: types.FETCH_MENU_SUCCESS,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('handles fetch a meal', () => {
    const payload = {
      meal: mockMenu[0],
    };

    expect(
      menuReducer(initialState, {
        type: types.FETCH_MEAL,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('update the state for REMOVE_MEAL action', () => {
    const payload = {};

    expect(
      menuReducer(initialState, {
        type: types.REMOVE_MEAL,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });
});
