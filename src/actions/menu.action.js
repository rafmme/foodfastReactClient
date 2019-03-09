/* eslint-disable camelcase */
import axios from 'axios';
import types from '../constant/actionTypes';
import { makeAPIRequest } from '../helpers/axios.config';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/faray/upload';
const CLOUDINARY_PRESET = 'ourphxep';

const {
  FETCH_MENU,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_ERROR,
  FETCH_MEAL,
  ADD_MEAL,
  ADD_MEAL_ERROR,
  ADD_MEAL_SUCCESS,
  HIDE_MEAL_MESSAGE,
} = types;

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
  fetchMeal: meal => async dispatch => {
    dispatch({
      type: FETCH_MEAL,
      payload: {
        meal,
      },
    });
  },
  removeMeal: () => async dispatch => {
    dispatch({
      type: types.REMOVE_MEAL,
      payload: {
        meal: {},
      },
    });
  },
  addMeal: /* istanbul ignore next */ (mealData, hideModal) => async dispatch => {
    dispatch({
      type: ADD_MEAL,
      payload: {
        addMealLoader: true,
        mealAdded: false,
        message: null,
        hasError: false,
        mealError: null,
      },
    });
    try {
      const { image } = mealData;
      const formData = new FormData();
      formData.append('file', image.files[0]);
      formData.append('upload_preset', CLOUDINARY_PRESET);

      const imageUploadResponse = await axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        data: formData,
      });
      const { data: secure_url } = imageUploadResponse;

      const mealDataCopy = {
        title: mealData.title,
        description: mealData.description,
        price: mealData.price,
        imageUrl: secure_url.url,
      };

      const res = await makeAPIRequest('/menu', { method: 'POST', body: mealDataCopy });
      dispatch({
        type: ADD_MEAL_SUCCESS,
        payload: {
          addMealLoader: false,
          hasError: false,
          mealAdded: true,
          mealError: null,
          message: res.message,
        },
      });
      setTimeout(async () => {
        hideModal();
        dispatch({
          type: types.HIDE_MEAL_MESSAGE,
          payload: {
            hasError: false,
            mealAdded: false,
            mealError: null,
          },
        });
        dispatch({
          type: FETCH_MENU,
          payload: {
            isLoading: true,
          },
        });
        const resp = await makeAPIRequest('/menu');
        dispatch({
          type: FETCH_MENU_SUCCESS,
          payload: {
            isLoading: false,
            hasError: false,
            menu: resp.menu,
            fetchMenuError: null,
          },
        });
      }, 1300);
    } catch (error) {
      const errorObject = JSON.parse(JSON.stringify(error));
      const { response } = errorObject;
      if (response) {
        dispatch({
          type: ADD_MEAL_ERROR,
          payload: {
            addMealLoader: false,
            hasError: true,
            mealError: Object.values(response.data.error),
            mealAdded: false,
          },
        });
        setTimeout(() => {
          dispatch({
            type: HIDE_MEAL_MESSAGE,
            payload: {
              hasError: false,
              mealAdded: false,
              mealError: null,
            },
          });
        }, 1000);
        return;
      }
      dispatch({
        type: ADD_MEAL_ERROR,
        payload: {
          addMealLoader: false,
          hasError: true,
          mealError: [error.message],
        },
      });
      setTimeout(() => {
        dispatch({
          type: HIDE_MEAL_MESSAGE,
          payload: {
            hasError: false,
            mealAdded: false,
            mealError: null,
          },
        });
      }, 1000);
    }
  },
};

export default MenuAction;
