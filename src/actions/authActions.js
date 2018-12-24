import axiosInstance from '../utils/axios.config';
import actionTypes from '../constant/actionType';
import AuthService from '../utils/Auth';

const { USER_LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_USER } = actionTypes;

export default class AuthAction {
  static loginUser(userLoginData) {
    return async dispatch => {
      dispatch({
        type: USER_LOGIN,
        payload: {
          isLoading: true,
        },
      });
      try {
        const res = await axiosInstance({
          method: 'POST',
          url: '/auth/login',
          data: userLoginData,
        });
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            isLoading: false,
            hasLoginError: false,
            token: res.data.token,
            currentUser: userLoginData.email,
          },
        });
      } catch (error) {
        dispatch({
          type: LOGIN_ERROR,
          payload: {
            isLoading: false,
            hasLoginError: true,
            loginErrors: error,
          },
        });
      }
    };
  }

  static logoutUser() {
    AuthService.logOutUser();
    return async dispatch => {
      dispatch({
        type: LOGOUT_USER,
        payload: {
          token: null,
          currentUser: null,
        },
      });
    };
  }
}
