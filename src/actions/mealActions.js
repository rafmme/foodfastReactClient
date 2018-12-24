import axiosInstance from '../utils/axios.config';
import actionTypes from '../constant/actionType';

const { FETCH_MEAL, FETCH_MEAL_SUCCESS, FETCH_MEAL_ERROR } = actionTypes;

export default class MealAction {
  static fetch() {
    return async dispatch => {
      dispatch({
        type: FETCH_MEAL,
        payload: {
          isLoading: true,
        },
      });
      try {
        const res = await axiosInstance({
          method: 'GET',
          url: '/menu',
        });
        dispatch({
          type: FETCH_MEAL_SUCCESS,
          payload: {
            isLoading: false,
            hasError: false,
            meals: res.data.menu,
          },
        });
      } catch (error) {
        dispatch({
          type: FETCH_MEAL_ERROR,
          payload: {
            isLoading: false,
            hasError: true,
            fetchMealErrors: { message: "Error!!! Couldn't fetch the menu" },
          },
        });
      }
    };
  }
}
