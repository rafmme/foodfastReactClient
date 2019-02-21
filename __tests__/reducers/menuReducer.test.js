import menuReducer from '../../src/reducers/menu.reducer';
import types from '../../src/constant/actionTypes';

const initialState = {
  isLoading: false,
  hasError: false,
  fetchMenuError: null,
  menu: [],
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
});
