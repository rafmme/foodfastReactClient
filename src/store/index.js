/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const initialState = {};
const loggerMiddleware = createLogger();
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk, loggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export default store;
