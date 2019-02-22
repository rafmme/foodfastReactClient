/* eslint-disable max-len */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { axiosInstance } from '../../src/helpers/axios.config';
import types from '../../src/constant/actionTypes';
import {
  AuthAction,
  startLogin,
  loginFailure,
  loginSuccessful,
  startSignUp,
  signUpSuccessful,
  signUpFailure,
} from '../../src/actions/auth.action';

const mock = new MockAdapter(axiosInstance);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const adminToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYTYwNjA4NS01YTlkLTQ0ODEtYTdlMS1lN2U5OGJlYTIxNjAiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTA0MDY1OTUsImV4cCI6MTU1MDQ0OTc5NX0.MKl-UgCorTW_sSCcZ8ahgW78e-GX2lLXZKqHW5kX9uI';

const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkOTZmZDg4MS0yMDk2LTQ2ZjItODhkOC0xM2M5MjVlYmJjODciLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTUwNDE3OTUwLCJleHAiOjE1NTA0NjExNTB9.zIqCfV4Ht-tRGM14aMGVn-aXObcYy0W-ehoGx3YLJKM';

describe('Sign Up async actions', () => {
  it('creates SIGN_UP_USER_ERROR when user sign up fails due to bad input', done => {
    mock.onPost('/auth/signup', { email: '', password: '', fullname: '' }).reply(400, {
      success: false,
      status: 400,
      error: {
        message: 'Sign Up failed! credentials not correct',
      },
    });

    const expectedActions = [
      {
        type: 'SIGN_UP_USER',
        payload: { isLoading: true, hasSignUpError: false, signUpError: null, currentUser: null },
      },
      {
        type: 'SIGN_UP_USER_ERROR',
        payload: {
          isLoading: false,
          hasSignUpError: true,
          signUpError: 'Sign Up failed! credentials not correct',
          currentUser: null,
        },
      },
    ];

    const store = mockStore({ auth: [] });

    return store
      .dispatch(
        AuthAction.signUpUser({ email: '', password: '', fullname: '' }, { push: jest.fn() }),
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('creates SIGN_UP_USER_ERROR when user sign up fails due to network error', done => {
    mock.onPost('/auth/signup', {}).networkError();

    const expectedActions = [
      {
        type: 'SIGN_UP_USER',
        payload: { isLoading: true, hasSignUpError: false, signUpError: null, currentUser: null },
      },
      {
        type: 'SIGN_UP_USER_ERROR',
        payload: {
          isLoading: false,
          hasSignUpError: true,
          signUpError: 'Network Error',
          currentUser: null,
        },
      },
    ];

    const store = mockStore({ auth: [] });

    return store.dispatch(AuthAction.signUpUser({}, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates SIGN_UP_USER_SUCCESS when user sign up is successful', done => {
    const history = {
      push(str) {
        expect(str).toEqual('/');
      },
    };

    mock
      .onPost('/auth/signup', {
        email: 'timmy@gmail.com',
        password: 'helloworld',
      })
      .reply(201, {
        success: true,
        status: 201,
        message: 'User sign-up was successful',
        token: userToken,
      });

    const expectedActions = [
      {
        type: types.SIGN_UP_USER,
        payload: {
          isLoading: true,
          hasSignUpError: false,
          signUpError: null,
          currentUser: null,
        },
      },
      {
        type: types.SIGN_UP_USER_SUCCESS,
        payload: {
          isLoading: false,
          hasSignUpError: false,
          signUpError: null,
          currentUser: 'timmy@gmail.com',
        },
      },
    ];

    const store = mockStore({ auth: [] });

    return store
      .dispatch(
        AuthAction.signUpUser(
          {
            email: 'timmy@gmail.com',
            password: 'helloworld',
          },
          history,
        ),
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});

describe('Auth async actions', () => {
  it('creates LOGIN_USER_ERROR when user login fails due bad input', done => {
    mock.onPost('/auth/login', { email: '', password: '' }).reply(400, {
      success: false,
      status: 400,
      error: {
        message: 'Login failed! credentials not correct',
      },
    });

    const expectedActions = [
      {
        type: 'LOGIN_USER',
        payload: { isLoading: true, hasLoginError: false, loginError: null, currentUser: null },
      },
      {
        type: 'LOGIN_USER_ERROR',
        payload: {
          isLoading: false,
          hasLoginError: true,
          loginError: 'Login failed! credentials not correct',
          currentUser: null,
        },
      },
    ];

    const store = mockStore({ login: [] });

    return store
      .dispatch(AuthAction.loginUser({ email: '', password: '' }, { push: jest.fn() }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('creates LOGIN_USER_ERROR when user login fails due to network error', done => {
    mock.onPost('/auth/login', {}).networkError();

    const expectedActions = [
      {
        type: 'LOGIN_USER',
        payload: { isLoading: true, hasLoginError: false, loginError: null, currentUser: null },
      },
      {
        type: 'LOGIN_USER_ERROR',
        payload: {
          isLoading: false,
          hasLoginError: true,
          loginError: 'Network Error',
          currentUser: null,
        },
      },
    ];

    const store = mockStore({ login: [] });

    return store.dispatch(AuthAction.loginUser({}, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates LOGIN_USER_SUCCESS when user(admin) login is successful', done => {
    const history = {
      push(str) {
        expect(str).toEqual('/admin');
      },
    };

    mock
      .onPost('/auth/login', {
        email: 'admin@foodfast.com',
        password: 'helloworld',
      })
      .reply(200, {
        success: true,
        status: 200,
        message: 'User sign-in was successful',
        token: adminToken,
      });

    const expectedActions = [
      {
        type: types.LOGIN_USER,
        payload: {
          isLoading: true,
          hasLoginError: false,
          loginError: null,
          currentUser: null,
        },
      },
      {
        type: types.LOGIN_USER_SUCCESS,
        payload: {
          isLoading: false,
          hasLoginError: false,
          loginError: null,
          currentUser: 'admin@foodfast.com',
        },
      },
    ];

    const store = mockStore({ login: [] });

    return store
      .dispatch(
        AuthAction.loginUser(
          {
            email: 'admin@foodfast.com',
            password: 'helloworld',
          },
          history,
        ),
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch log out action', done => {
    const history = {
      push(str) {
        expect(str).toEqual('/about');
      },
    };

    const expectedActions = [
      {
        type: types.LOG_OUT_USER,
        payload: {
          currentUser: null,
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(AuthAction.logoutUser(history)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates LOGIN_USER_SUCCESS when ordinary user login is successful', done => {
    const history = {
      push(str) {
        expect(str).toEqual('/');
      },
    };

    mock
      .onPost('/auth/login', {
        email: 'rafmme@yah.com',
        password: 'helloworld',
      })
      .reply(200, {
        success: true,
        status: 200,
        message: 'User sign-in was successful',
        token: userToken,
      });

    const expectedActions = [
      {
        type: types.LOGIN_USER,
        payload: {
          isLoading: true,
          hasLoginError: false,
          loginError: null,
          currentUser: null,
        },
      },
      {
        type: types.LOGIN_USER_SUCCESS,
        payload: {
          isLoading: false,
          hasLoginError: false,
          loginError: null,
          currentUser: 'rafmme@yah.com',
        },
      },
    ];

    const store = mockStore({ login: [] });

    return store
      .dispatch(
        AuthAction.loginUser(
          {
            email: 'rafmme@yah.com',
            password: 'helloworld',
          },
          history,
        ),
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});

describe('Login Action test', () => {
  it('has an action that dispatches when login has started', () => {
    const expectedAction = {
      type: types.LOGIN_USER,
      payload: {
        isLoading: true,
        hasLoginError: false,
        loginError: null,
        currentUser: null,
      },
    };
    expect(expectedAction).toEqual(startLogin());
  });

  it('has an action that dispatches when login is successful', () => {
    const expectedAction = {
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        isLoading: false,
        hasLoginError: false,
        loginError: null,
        currentUser: 'rafmme@world.com',
      },
    };
    expect(expectedAction).toEqual(loginSuccessful('rafmme@world.com'));
  });

  it('has an action that dispatches when login fails', () => {
    const expectedAction = {
      type: types.LOGIN_USER_ERROR,
      payload: {
        isLoading: false,
        hasLoginError: true,
        loginError: 'Network error',
        currentUser: null,
      },
    };
    expect(expectedAction).toEqual(loginFailure({ message: 'Network error' }));
  });
});

describe('Sign Up Action test', () => {
  it('has an action that dispatches when sign up has started', () => {
    const expectedAction = {
      type: types.SIGN_UP_USER,
      payload: {
        isLoading: true,
        signUpError: null,
        hasSignUpError: false,
        currentUser: null,
      },
    };
    expect(expectedAction).toEqual(startSignUp());
  });

  it('has an action that dispatches when sign up is successful', () => {
    const expectedAction = {
      type: types.SIGN_UP_USER_SUCCESS,
      payload: {
        isLoading: false,
        hasSignUpError: false,
        signUpError: null,
        currentUser: 'rafmme@world.com',
      },
    };
    expect(expectedAction).toEqual(signUpSuccessful('rafmme@world.com'));
  });

  it('has an action that dispatches when sign up fails', () => {
    const expectedAction = {
      type: types.SIGN_UP_USER_ERROR,
      payload: {
        isLoading: false,
        hasSignUpError: true,
        signUpError: 'Network error',
        currentUser: null,
      },
    };
    expect(expectedAction).toEqual(signUpFailure({ message: 'Network error' }));
  });
});
