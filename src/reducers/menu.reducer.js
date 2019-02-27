import actionTypes from '../constant/actionTypes';

const { FETCH_MENU, FETCH_MENU_SUCCESS, FETCH_MENU_ERROR, FETCH_MEAL, REMOVE_MEAL } = actionTypes;

const initialState = {
  isLoading: false,
  hasError: false,
  fetchMenuError: null,
  menu: [],
  meal: {},
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_MENU_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_MEAL:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_MEAL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
