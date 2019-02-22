import types from '../constant/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  hasLoginError: false,
  loginError: null,
  hasSignUpError: false,
  signUpError: null,
  currentUser: null,
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOG_OUT_USER:
      return {
        ...state,
        ...action.payload,
      };
    case types.SIGN_UP_USER:
      return {
        ...state,
        ...action.payload,
      };
    case types.SIGN_UP_USER_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case types.SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
