import types from '../constant/actionTypes';
import { makeAPIRequest } from '../helpers/axios.config';
import AuthHelper from '../helpers/AuthHelper';

const startLogin = () => ({
  type: types.LOGIN_USER,
  payload: {
    isLoading: true,
    hasLoginError: false,
    loginError: null,
    currentUser: null,
  },
});

const loginFailure = error => ({
  type: types.LOGIN_USER_ERROR,
  payload: {
    isLoading: false,
    hasLoginError: true,
    loginError: error.message,
    currentUser: null,
  },
});

const loginSuccessful = userEmail => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: {
    isLoading: false,
    hasLoginError: false,
    loginError: null,
    currentUser: userEmail,
  },
});

const startSignUp = () => ({
  type: types.SIGN_UP_USER,
  payload: {
    isLoading: true,
    hasSignUpError: false,
    signUpError: null,
    currentUser: null,
  },
});

const signUpFailure = error => ({
  type: types.SIGN_UP_USER_ERROR,
  payload: {
    isLoading: false,
    hasSignUpError: true,
    signUpError: error.message,
    currentUser: null,
  },
});

const signUpSuccessful = userEmail => ({
  type: types.SIGN_UP_USER_SUCCESS,
  payload: {
    isLoading: false,
    hasSignUpError: false,
    signUpError: null,
    currentUser: userEmail,
  },
});

const AuthAction = {
  loginUser: (userLoginData, history) => async dispatch => {
    dispatch(startLogin());
    try {
      const res = await makeAPIRequest('/auth/login', { method: 'POST', body: userLoginData });
      localStorage.setItem('userAuthToken', res.token);
      dispatch(loginSuccessful(userLoginData.email));

      if (AuthHelper.checkUserIsAdmin(res.token)) {
        history.push('/admin');
        return;
      }
      history.push('/');
    } catch (error) {
      const errorObject = JSON.parse(JSON.stringify(error));
      const { response } = errorObject;

      if (response) {
        dispatch(loginFailure(response.data.error));
        return;
      }
      dispatch(loginFailure(error));
    }
  },
  signUpUser: (userSignUpData, history) => async dispatch => {
    dispatch(startSignUp());
    try {
      const res = await makeAPIRequest('/auth/signup', { method: 'POST', body: userSignUpData });
      localStorage.setItem('userAuthToken', res.token);
      dispatch(signUpSuccessful(userSignUpData.email));
      history.push('/');
    } catch (error) {
      const errorObject = JSON.parse(JSON.stringify(error));
      const { response } = errorObject;

      if (response) {
        dispatch(signUpFailure(response.data.error));
        return;
      }
      dispatch(signUpFailure(error));
    }
  },
  logoutUser: history => async dispatch => {
    localStorage.removeItem('userAuthToken');
    dispatch({
      type: types.LOG_OUT_USER,
      payload: {
        currentUser: null,
      },
    });
    history.push('/about');
  },
};

export {
  AuthAction,
  startLogin,
  loginFailure,
  loginSuccessful,
  startSignUp,
  signUpFailure,
  signUpSuccessful,
};
