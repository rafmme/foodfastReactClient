import authReducer from '../../src/reducers/auth.reducer';
import types from '../../src/constant/actionTypes';

const initialState = {
  isLoading: false,
  hasLoginError: false,
  loginError: null,
  currentUser: null,
};

describe('Login Auth Reducer', () => {
  it('returns the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('handles start login request', () => {
    expect(
      authReducer(initialState, {
        type: types.LOGIN_USER,
        payload: {
          isLoading: true,
        },
      }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('handles login failure', () => {
    const payload = {
      isLoading: false,
      hasLoginError: true,
      loginError: 'Network error',
    };

    expect(authReducer(initialState, { type: types.LOGIN_USER_ERROR, payload })).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('handles login successful', () => {
    const payload = {
      isLoading: false,
      hasLoginError: false,
    };

    expect(
      authReducer(initialState, {
        type: types.LOGIN_USER_SUCCESS,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });
});
