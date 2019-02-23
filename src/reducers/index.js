import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import menuReducer from './menu.reducer';
import modalReducer from './modal.reducer';
import orderReducer from './order.reducer';

export default combineReducers({
  auth: authReducer,
  menu: menuReducer,
  modal: modalReducer,
  order: orderReducer,
});
