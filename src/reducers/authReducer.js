import actionTypes from '../constant/actionType';

const { USER_LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_USER } = actionTypes;
const initialState = {
  isLoading: false,
  hasLoginError: false,
  loginErrors: {},
  token: null,
  currentUser: null,
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
