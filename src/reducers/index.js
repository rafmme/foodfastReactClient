import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import menuReducer from './menu.reducer';

export default combineReducers({
  auth: authReducer,
  menu: menuReducer,
});
