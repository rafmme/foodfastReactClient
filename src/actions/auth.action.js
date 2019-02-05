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
};

export { AuthAction, startLogin, loginFailure, loginSuccessful };
