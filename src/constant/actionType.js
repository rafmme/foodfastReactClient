import keyMirror from 'keymirror';

const actionTypes = keyMirror({
  USER_SIGNUP: null,
  SIGNUP_SUCCESS: null,
  SIGNUP_ERROR: null,
  LOGOUT_USER: null,
  USER_LOGIN: null,
  LOGIN_SUCCESS: null,
  LOGIN_ERROR: null,
  FETCH_MEAL: null,
  FETCH_MEAL_SUCCESS: null,
  FETCH_MEAL_ERROR: null,
  FETCH_USER_ORDERS: null,
  FETCH_USER_ORDERS_ERROR: null,
  FETCH_USER_ORDERS_SUCCESS: null,
  FETCH_ALL_ORDERS: null,
  FETCH_ALL_ORDERS_SUCCESS: null,
  FETCH_ALL_ORDERS_ERROR: null,
  ADD_NEW_MEAL: null,
  ADD_NEW_MEAL_SUCCESS: null,
  ADD_NEW_MEAL_ERROR: null,
  PLACE_ORDER: null,
  PLACE_ORDER_SUCCESS: null,
  PLACE_ORDER_ERROR: null,
  UPDATE_ORDER: null,
  UPDATE_ORDER_SUCCESS: null,
  UPDATE_ORDER_ERROR: null,
  DELETE_ORDER: null,
  DELETE_ORDER_SUCCESS: null,
  DELETE_ORDER_ERROR: null,
});

export default actionTypes;
