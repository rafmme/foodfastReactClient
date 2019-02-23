import modalReducer from '../../src/reducers/modal.reducer';
import types from '../../src/constant/actionTypes';

const initialState = {
  isOpened: false,
};

describe('Modal Reducer', () => {
  it('returns the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual(initialState);
  });

  it('set isOpened to true', () => {
    expect(
      modalReducer(initialState, {
        type: types.SHOW_MODAL,
        payload: {
          isOpened: true,
        },
      }),
    ).toEqual({
      ...initialState,
      isOpened: true,
    });
  });

  it('set isOpened to false', () => {
    const payload = {
      isOpened: false,
    };

    expect(modalReducer(initialState, { type: types.HIDE_MODAL, payload })).toEqual({
      ...initialState,
      ...payload,
    });
  });
});
