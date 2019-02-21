import types from '../constant/actionTypes';
import { makeAPIRequest } from '../helpers/axios.config';

const { FETCH_MENU, FETCH_MENU_SUCCESS, FETCH_MENU_ERROR } = types;

const MenuAction = {
  fetchMenu: () => async dispatch => {
    dispatch({
      type: FETCH_MENU,
      payload: {
        isLoading: true,
      },
    });
    try {
      const res = await makeAPIRequest('/menu');
      dispatch({
        type: FETCH_MENU_SUCCESS,
        payload: {
          isLoading: false,
          hasError: false,
          menu: res.menu,
          fetchMenuError: null,
        },
      });
    } catch (error) {
      dispatch({
        type: FETCH_MENU_ERROR,
        payload: {
          isLoading: false,
          hasError: true,
          fetchMenuError: { message: "Error!!! Couldn't fetch the menu" },
        },
      });
    }
  },
};

export default MenuAction;
