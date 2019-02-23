import types from '../constant/actionTypes';

const initialState = {
  isLoading: false,
  hasError: false,
  orderError: null,
  orderComplete: false,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PLACE_ORDER:
      return {
        ...state,
        ...action.payload,
      };
    case types.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.PLACE_ORDER_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case types.HIDE_ORDER_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
