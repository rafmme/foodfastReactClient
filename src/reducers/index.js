import { combineReducers } from 'redux';
import authReducer from './authReducer';
import orderReducer from './orderReducer';
import mealReducer from './mealReducer';

export default combineReducers({
  authReducer,
  orderReducer,
  mealReducer,
});
