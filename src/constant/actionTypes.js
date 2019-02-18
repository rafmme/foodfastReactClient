import keyMirror from 'keymirror';

const actionTypes = keyMirror({
  LOGIN_USER: null,
  LOGIN_USER_SUCCESS: null,
  LOGIN_USER_ERROR: null,
  SIGN_UP_USER: null,
  SIGN_UP_USER_SUCCESS: null,
  SIGN_UP_USER_ERROR: null,
});

export default actionTypes;
