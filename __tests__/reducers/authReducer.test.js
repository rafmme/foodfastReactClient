import authReducer from '../../src/reducers/auth.reducer';
import types from '../../src/constant/actionTypes';

const initialState = {
  isLoading: false,
  hasLoginError: false,
  hasSignUpError: false,
  signUpError: null,
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

describe('Sign Up Auth Reducer', () => {
  it('returns the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('handles start sign up request', () => {
    expect(
      authReducer(initialState, {
        type: types.SIGN_UP_USER,
        payload: {
          isLoading: true,
        },
      }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('handles sign up failure', () => {
    const payload = {
      isLoading: false,
      hasSignUpError: true,
      signUpError: 'Network error',
    };

    expect(authReducer(initialState, { type: types.SIGN_UP_USER_ERROR, payload })).toEqual({
      ...initialState,
      ...payload,
    });
  });

  it('handles sign up successful', () => {
    const payload = {
      isLoading: false,
      hasSignUpError: false,
    };

    expect(
      authReducer(initialState, {
        type: types.SIGN_UP_USER_SUCCESS,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });
});

describe('Log Out Auth Reducer', () => {
  it('updates the state when user log out', () => {
    const payload = {
      currentUser: null,
    };

    expect(
      authReducer(initialState, {
        type: types.LOG_OUT_USER,
        payload,
      }),
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });
});
