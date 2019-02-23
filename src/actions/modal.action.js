import types from '../constant/actionTypes';

const { HIDE_MODAL, SHOW_MODAL } = types;

const ModalAction = {
  showModal: () => async dispatch => {
    dispatch({
      type: SHOW_MODAL,
      payload: {
        isOpened: true,
      },
    });
  },
  hideModal: () => async dispatch => {
    dispatch({
      type: HIDE_MODAL,
      payload: {
        isOpened: false,
      },
    });
  },
};

export default ModalAction;
