import actionTypes from '../constant/actionType';

const { FETCH_MEAL, FETCH_MEAL_SUCCESS, FETCH_MEAL_ERROR } = actionTypes;

const initialState = {
  isLoading: false,
  hasError: false,
  fetchMealErrors: {},
  meals: [],
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEAL:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_MEAL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_MEAL_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
