import keyMirror from 'keymirror';

const actionTypes = keyMirror({
  LOGIN_USER: null,
  LOGIN_USER_SUCCESS: null,
  LOGIN_USER_ERROR: null,
  LOG_OUT_USER: null,
  SIGN_UP_USER: null,
  SIGN_UP_USER_SUCCESS: null,
  SIGN_UP_USER_ERROR: null,
  FETCH_MENU: null,
  FETCH_MENU_SUCCESS: null,
  FETCH_MENU_ERROR: null,
  SHOW_MODAL: null,
  HIDE_MODAL: null,
  PLACE_ORDER: null,
  PLACE_ORDER_SUCCESS: null,
  PLACE_ORDER_ERROR: null,
  FETCH_MEAL: null,
  HIDE_ORDER_MESSAGE: null,
  FETCH_ORDER: null,
  GET_USER_ORDERS: null,
  GET_USER_ORDERS_SUCCESS: null,
  GET_USER_ORDERS_ERROR: null,
  REMOVE_ORDER: null,
});

export default actionTypes;
