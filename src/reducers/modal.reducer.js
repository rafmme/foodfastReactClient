import types from '../constant/actionTypes';

const initialState = {
  isOpened: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    case types.HIDE_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
