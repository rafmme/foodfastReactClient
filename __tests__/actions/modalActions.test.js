import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import types from '../../src/constant/actionTypes';
import ModalAction from '../../src/actions/modal.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ModalAction Test', () => {
  it('dispatch showModal action', done => {
    const expectedActions = [
      {
        type: types.SHOW_MODAL,
        payload: { isOpened: true },
      },
    ];

    const store = mockStore({});

    return store.dispatch(ModalAction.showModal()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('dispatch hideModal action', done => {
    const expectedActions = [
      {
        type: types.HIDE_MODAL,
        payload: { isOpened: false },
      },
    ];

    const store = mockStore({});

    return store.dispatch(ModalAction.hideModal()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
